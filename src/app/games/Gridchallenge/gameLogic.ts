// grid-challenge.ts
// Core logic for the "Grid Challenge" (no UI). TS strict-ready.

// ---------- Config ----------

export interface GameConfig {
  gridSize: number // e.g., 5 => 5x5 grid
  rounds: number // how many blink+symmetry rounds before recall (Capgemini: 3)
  circleDensity: number // 0..1 chance a cell has a circle when "scrambled"
  pointsCorrect: number // +3
  pointsWrong: number // -1
  blinkMs: number // 2000ms (for UI to show the blink)
  patternsMs: number // 6000ms (for UI to show the pair)
  symmetryModes?: SymmetryMode[] // which symmetries count as "symmetric"
}

export const defaultConfig: GameConfig = {
  gridSize: 5,
  rounds: 3,
  circleDensity: 0.45,
  pointsCorrect: 3,
  pointsWrong: -1,
  blinkMs: 2000,
  patternsMs: 6000,
  symmetryModes: ["vertical", "horizontal", "diagMain", "diagAnti", "rot90", "rot180", "rot270"],
}

// ---------- Types ----------

export type Grid = boolean[][] // true = circle present
export interface BlinkScreen {
  grid: Grid
  blinkCell: Cell // the single blinking position (r,c)
}

export interface PatternPair {
  A: Grid
  B: Grid
  isSymmetric: boolean // ground truth
  relation?: SymmetryMode // which symmetry made it true (if any)
}

export interface Cell {
  r: number
  c: number
}

export type Phase = "Idle" | "Blink" | "Patterns" | "Recall" | "Complete"

export interface GameSnapshot {
  phase: Phase
  roundIndex: number // 0-based, < rounds during rounds
  score: number
  blink?: BlinkScreen // present during Blink
  patterns?: PatternPair // present during Patterns
  recallTargetLength: number // equals config.rounds
  // For UI convenience
  timings: { blinkMs: number; patternsMs: number }
}

export interface AnswerSymmetry {
  saysSymmetric: boolean
}

export interface AnswerRecall {
  sequence: Cell[] // user-picked cells in order length = rounds
}

// ---------- RNG utilities (seedable optional) ----------

export class RNG {
  private s: number
  constructor(seed = Date.now() >>> 0) {
    this.s = seed || 1
  }
  // xorshift32
  next(): number {
    let x = this.s
    x ^= x << 13
    x ^= x >>> 17
    x ^= x << 5
    this.s = x >>> 0
    return this.s / 0xffffffff
  }
  int(maxExclusive: number): number {
    return Math.floor(this.next() * maxExclusive)
  }
  bool(p = 0.5): boolean {
    return this.next() < p
  }
  pick<T>(arr: T[]): T {
    return arr[this.int(arr.length)]
  }
  shuffle<T>(arr: T[]): T[] {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = this.int(i + 1)
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr
  }
}

// ---------- Grid helpers ----------

export function emptyGrid(n: number): Grid {
  return Array.from({ length: n }, () => Array<boolean>(n).fill(false))
}

export function randomScrambledGrid(n: number, density: number, rng: RNG): Grid {
  const g = emptyGrid(n)
  for (let r = 0; r < n; r++)
    for (let c = 0; c < n; c++) {
      g[r][c] = rng.bool(density)
    }
  // ensure at least one circle
  if (!g.some((row) => row.some((x) => x))) {
    const r = rng.int(n),
      c = rng.int(n)
    g[r][c] = true
  }
  return g
}

export function cloneGrid(g: Grid): Grid {
  return g.map((row) => row.slice())
}

export type SymmetryMode =
  | "vertical" // mirror across vertical axis
  | "horizontal"
  | "diagMain" // mirror across main diagonal
  | "diagAnti" // mirror across anti-diagonal
  | "rot90"
  | "rot180"
  | "rot270"

export function transform(g: Grid, mode: SymmetryMode): Grid {
  const n = g.length
  const out = emptyGrid(n)
  for (let r = 0; r < n; r++)
    for (let c = 0; c < n; c++) {
      const v = g[r][c]
      let rr = r,
        cc = c
      switch (mode) {
        case "vertical":
          rr = r
          cc = n - 1 - c
          break
        case "horizontal":
          rr = n - 1 - r
          cc = c
          break
        case "diagMain":
          rr = c
          cc = r
          break
        case "diagAnti":
          rr = n - 1 - c
          cc = n - 1 - r
          break
        case "rot90":
          rr = c
          cc = n - 1 - r
          break
        case "rot180":
          rr = n - 1 - r
          cc = n - 1 - c
          break
        case "rot270":
          rr = n - 1 - c
          cc = r
          break
      }
      out[rr][cc] = v
    }
  return out
}

export function gridsEqual(a: Grid, b: Grid): boolean {
  const n = a.length
  if (b.length !== n) return false
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      if (a[r][c] !== b[r][c]) return false
    }
  }
  return true
}

// ---------- Pattern pair generation ----------

export function makePatternPair(n: number, density: number, rng: RNG, modes: SymmetryMode[]): PatternPair {
  // 50/50 chance to be symmetric
  const base = randomScrambledGrid(n, density, rng)
  const makeSym = rng.bool(0.5)
  if (makeSym) {
    const m = rng.pick(modes)
    return { A: base, B: transform(base, m), isSymmetric: true, relation: m }
  } else {
    // ensure non-symmetric: mutate base until it doesn't match any allowed symmetry
    const B = randomScrambledGrid(n, density, rng)
    const isAllowedSym = () => modes.some((m) => gridsEqual(transform(base, m), B))
    while (isAllowedSym()) {
      // flip a random cell to break symmetry
      const r = rng.int(n),
        c = rng.int(n)
      B[r][c] = !B[r][c]
    }
    return { A: base, B, isSymmetric: false }
  }
}

// ---------- Blink screen generation ----------

export function makeBlinkScreen(n: number, density: number, rng: RNG): BlinkScreen {
  const grid = randomScrambledGrid(n, density, rng)
  // choose a blink cell from ANY cell (spec says "one of the circle blinks"; enforce true cell)
  const candidates: Cell[] = []
  for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) if (grid[r][c]) candidates.push({ r, c })
  if (candidates.length === 0) {
    // fallback (shouldn't happen due to ensure above)
    candidates.push({ r: rng.int(n), c: rng.int(n) })
  }
  const blinkCell = rng.pick(candidates)
  return { grid, blinkCell }
}

// ---------- Game engine (state machine) ----------

export class GridChallenge {
  private cfg: GameConfig
  private rng: RNG

  private phase: Phase = "Idle"
  private roundIndex = -1
  private score = 0

  private blinkSequence: Cell[] = []
  private lastBlink?: BlinkScreen
  private lastPatterns?: PatternPair

  private symmetryResults: boolean[] = [] // NEW: store correctness for each round

  constructor(config: Partial<GameConfig> = {}, seed?: number) {
    this.cfg = { ...defaultConfig, ...config }
    this.rng = new RNG(seed)
  }

  snapshot(): GameSnapshot {
    return {
      phase: this.phase,
      roundIndex: this.roundIndex,
      score: this.score,
      blink: this.lastBlink,
      patterns: this.lastPatterns,
      recallTargetLength: this.cfg.rounds,
      timings: { blinkMs: this.cfg.blinkMs, patternsMs: this.cfg.patternsMs },
    }
  }

  start(): GameSnapshot {
    this.phase = "Blink"
    this.roundIndex = 0
    this.score = 0
    this.blinkSequence = []
    this.lastPatterns = undefined
    this.symmetryResults = [] // reset results on new game

    this.lastBlink = makeBlinkScreen(this.cfg.gridSize, this.cfg.circleDensity, this.rng)
    this.blinkSequence.push(this.lastBlink.blinkCell)
    return this.snapshot()
  }

  proceedToPatterns(): GameSnapshot {
    this.assertPhase("Blink")
    this.phase = "Patterns"
    this.lastPatterns = makePatternPair(
      this.cfg.gridSize,
      this.cfg.circleDensity,
      this.rng,
      this.cfg.symmetryModes!
    )
    return this.snapshot()
  }

  // NEW: optional check method for UI
  checkSymmetry(ans: boolean): boolean {
    this.assertPhase("Patterns")
    return ans === this.lastPatterns!.isSymmetric
  }

  answerSymmetry(ans: AnswerSymmetry): GameSnapshot {
    this.assertPhase("Patterns")
    const correct = ans.saysSymmetric === this.lastPatterns!.isSymmetric
    this.score += correct ? this.cfg.pointsCorrect : this.cfg.pointsWrong
    this.symmetryResults.push(correct) // NEW: store correctness

    if (this.roundIndex + 1 < this.cfg.rounds) {
      this.roundIndex++
      this.phase = "Blink"
      this.lastBlink = makeBlinkScreen(this.cfg.gridSize, this.cfg.circleDensity, this.rng)
      this.blinkSequence.push(this.lastBlink.blinkCell)
      this.lastPatterns = undefined
    } else {
      this.phase = "Recall"
      this.lastBlink = undefined
      this.lastPatterns = undefined
    }
    return this.snapshot()
  }

  answerRecall(ans: AnswerRecall): GameSnapshot {
    this.assertPhase("Recall")
    const ok = sequencesEqual(this.blinkSequence, ans.sequence)
    this.score += ok ? this.cfg.pointsCorrect : this.cfg.pointsWrong
    this.phase = "Complete"
    return this.snapshot()
  }

  getTruth() {
    return {
      blinkSequence: this.blinkSequence.slice(),
      lastPatterns: this.lastPatterns,
      symmetryResults: this.symmetryResults.slice(), // NEW: return results
    }
  }

  private assertPhase(p: Phase) {
    if (this.phase !== p) throw new Error(`Invalid phase: expected ${p}, got ${this.phase}`)
  }
}


export function sequencesEqual(a: Cell[], b: Cell[]): boolean {
  if (a.length !== b.length) return false
  for (let i = 0; i < a.length; i++) {
    if (a[i].r !== b[i].r || a[i].c !== b[i].c) return false
  }
  return true
}