export type Shape = 'CIRCLE' | 'SQUARE' | 'TRIANGLE' | 'PLUS' | 'DIAMOND' | 'STAR';
export type Grid = Shape[][];

export interface InductivePuzzle {
  examples: Grid[];
  candidates: Grid[];
  correctIndices: number[];
  rule: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

const SHAPES: Shape[] = ['CIRCLE', 'SQUARE', 'TRIANGLE', 'PLUS', 'DIAMOND', 'STAR'];

/* ---------------- Utility Functions ---------------- */
function shuffleArray<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function getRandomShapes(count: number, availableShapes: Shape[]): Shape[] {
  return shuffleArray(availableShapes).slice(0, count);
}

/* ---------------- Pattern Generators ---------------- */
function generateUniqueRowsPattern(size: number, shapes: Shape[]): Grid {
  const grid: Grid = [];
  const requiredShapes = shapes.slice(0, size); // Ensure we have exactly 'size' shapes
  
  for (let row = 0; row < size; row++) {
    grid.push(shuffleArray(requiredShapes));
  }
  return grid;
}

function generateRotationPattern(size: number, shapes: Shape[]): Grid {
  const grid: Grid = [];
  const baseRow = shapes.slice(0, size);
  
  for (let row = 0; row < size; row++) {
    const rotatedRow: Shape[] = [];
    for (let col = 0; col < size; col++) {
      rotatedRow.push(baseRow[(col - row + size) % size]);
    }
    grid.push(rotatedRow);
  }
  return grid;
}

function generateSymmetricPattern(size: number, shapes: Shape[]): Grid {
  const grid: Grid = Array.from({ length: size }, () => Array(size).fill(shapes[0]));
  
  // Fill upper triangle randomly, then mirror to lower triangle
  for (let i = 0; i < size; i++) {
    for (let j = i; j < size; j++) {
      const shape = shapes[Math.floor(Math.random() * Math.min(shapes.length, 3))];
      grid[i][j] = shape;
      grid[j][i] = shape; // Mirror across diagonal
    }
  }
  return grid;
}

function generateAlternatingPattern(size: number, shapes: Shape[]): Grid {
  const grid: Grid = [];
  const shape1 = shapes[0];
  const shape2 = shapes[1];
  
  for (let row = 0; row < size; row++) {
    const rowData: Shape[] = [];
    for (let col = 0; col < size; col++) {
      rowData.push((row + col) % 2 === 0 ? shape1 : shape2);
    }
    grid.push(rowData);
  }
  return grid;
}

function generateDiagonalPattern(size: number, shapes: Shape[]): Grid {
  const grid: Grid = Array.from({ length: size }, () => Array(size).fill(shapes[0]));
  
  // Main diagonal and anti-diagonal get special shapes
  for (let i = 0; i < size; i++) {
    grid[i][i] = shapes[1]; // Main diagonal
    grid[i][size - 1 - i] = shapes[2] || shapes[1]; // Anti-diagonal
  }
  return grid;
}

function generateRandomGrid(size: number, shapes: Shape[]): Grid {
  return Array.from({ length: size }, () =>
    Array.from({ length: size }, () => shapes[Math.floor(Math.random() * shapes.length)])
  );
}

/* ---------------- Validators ---------------- */
function hasUniqueRowsPattern(grid: Grid): boolean {
  for (const row of grid) {
    const seen = new Set(row);
    if (seen.size !== row.length) return false;
  }
  return true;
}

function hasRotationPattern(grid: Grid): boolean {
  if (grid.length === 0) return false;
  const size = grid.length;
  const firstRow = grid[0];
  
  for (let row = 1; row < size; row++) {
    for (let col = 0; col < size; col++) {
      const expected = firstRow[(col - row + size) % size];
      if (grid[row][col] !== expected) return false;
    }
  }
  return true;
}

function hasSymmetricPattern(grid: Grid): boolean {
  const size = grid.length;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (grid[i][j] !== grid[j][i]) return false;
    }
  }
  return true;
}

function hasAlternatingPattern(grid: Grid): boolean {
  const size = grid.length;
  if (size === 0) return false;
  
  const pattern1 = grid[0][0];
  const pattern2 = grid[0][1] || grid[1]?.[0];
  
  if (!pattern2 || pattern1 === pattern2) return false;

  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      const expected = (row + col) % 2 === 0 ? pattern1 : pattern2;
      if (grid[row][col] !== expected) return false;
    }
  }
  return true;
}

function hasDiagonalPattern(grid: Grid): boolean {
  const size = grid.length;
  if (size === 0) return false;
  
  // Check if main diagonal and anti-diagonal have consistent special shapes
  const mainDiagShape = grid[0][0];
  const antiDiagShape = grid[0][size - 1];
  
  for (let i = 0; i < size; i++) {
    if (grid[i][i] !== mainDiagShape) return false;
    if (grid[i][size - 1 - i] !== antiDiagShape) return false;
  }
  return true;
}

/* ---------------- Pattern Definitions ---------------- */
interface PatternDefinition {
  name: string;
  generator: (size: number, shapes: Shape[]) => Grid;
  validator: (grid: Grid) => boolean;
  rule: string;
  minShapes: number;
}

const PATTERNS: PatternDefinition[] = [
  {
    name: 'unique_rows',
    generator: generateUniqueRowsPattern,
    validator: hasUniqueRowsPattern,
    rule: 'Each row contains all different shapes (no repeats).',
    minShapes: 3
  },
  {
    name: 'rotation',
    generator: generateRotationPattern,
    validator: hasRotationPattern,
    rule: 'Each row is the previous row shifted one position to the right.',
    minShapes: 3
  },
  {
    name: 'symmetric',
    generator: generateSymmetricPattern,
    validator: hasSymmetricPattern,
    rule: 'The grid is symmetric across the main diagonal.',
    minShapes: 2
  },
  {
    name: 'alternating',
    generator: generateAlternatingPattern,
    validator: hasAlternatingPattern,
    rule: 'Shapes alternate in a checkerboard pattern using two shapes.',
    minShapes: 2
  },
  {
    name: 'diagonal',
    generator: generateDiagonalPattern,
    validator: hasDiagonalPattern,
    rule: 'Main diagonal and anti-diagonal have special shape patterns.',
    minShapes: 3
  }
];

/* ---------------- Puzzle Generator ---------------- */
export function generatePuzzle(level: number): InductivePuzzle {
  const size = 3; // 3x3 grids
  const maxShapes = Math.min(4 + Math.floor(level / 3), 6);
  const availableShapes = SHAPES.slice(0, maxShapes);
  
  // Select pattern based on level
  const patternIndex = (level - 1) % PATTERNS.length;
  const selectedPattern = PATTERNS[patternIndex];
  
  // Use consistent shapes for ALL grids (examples + candidates)
  const requiredShapes = Math.max(selectedPattern.minShapes, 3);
  const shapesForAllGrids = getRandomShapes(requiredShapes, availableShapes);
  
  console.log(`Generating puzzle with pattern: ${selectedPattern.name}`);
  console.log(`Using shapes: ${shapesForAllGrids.join(', ')}`);
  
  // Generate examples that follow the pattern
  const examples: Grid[] = [];
  for (let i = 0; i < 2; i++) {
    let exampleGrid: Grid;
    let attempts = 0;
    do {
      exampleGrid = selectedPattern.generator(size, [...shapesForAllGrids]);
      attempts++;
      if (attempts > 50) {
        console.error(`Failed to generate valid example ${i + 1} after 50 attempts`);
        break;
      }
    } while (!selectedPattern.validator(exampleGrid));
    
    examples.push(exampleGrid);
    console.log(`Example ${i + 1} generated:`, exampleGrid);
    console.log(`Example ${i + 1} validation:`, selectedPattern.validator(exampleGrid));
  }
  
  // Generate ALL candidates first, then select correct/incorrect ones
  const allCandidates: { grid: Grid; isCorrect: boolean }[] = [];
  
  // Generate 4 correct candidates first
  for (let i = 0; i < 6; i++) {
    let correctGrid: Grid;
    let attempts = 0;
    do {
      correctGrid = selectedPattern.generator(size, [...shapesForAllGrids]);
      attempts++;
      if (attempts > 50) break;
    } while (!selectedPattern.validator(correctGrid));
    
    if (selectedPattern.validator(correctGrid)) {
      allCandidates.push({ grid: correctGrid, isCorrect: true });
    }
  }
  
  // Generate incorrect candidates using different methods
  const otherPatterns = PATTERNS.filter(p => p.name !== selectedPattern.name);
  
  for (let i = 0; i < 10; i++) {
    let incorrectGrid: Grid;
    
    if (i < 3) {
      // Method 1: Use completely random grids
      incorrectGrid = generateRandomGrid(size, shapesForAllGrids);
    } else if (i < 6) {
      // Method 2: Use different patterns
      const randomPattern = otherPatterns[i % otherPatterns.length];
      incorrectGrid = randomPattern.generator(size, [...shapesForAllGrids]);
    } else {
      // Method 3: Corrupt a correct pattern slightly
      const baseGrid = selectedPattern.generator(size, [...shapesForAllGrids]);
      incorrectGrid = baseGrid.map(row => [...row]);
      // Change 1-2 random positions to break the pattern
      const pos1 = [Math.floor(Math.random() * size), Math.floor(Math.random() * size)];
      incorrectGrid[pos1[0]][pos1[1]] = shapesForAllGrids[Math.floor(Math.random() * shapesForAllGrids.length)];
    }
    
    // Only add if it doesn't accidentally follow the target pattern
    if (!selectedPattern.validator(incorrectGrid)) {
      allCandidates.push({ grid: incorrectGrid, isCorrect: false });
    }
  }
  
  // Select exactly 2 correct and 2 incorrect candidates
  const correctCandidates = allCandidates.filter(c => c.isCorrect).slice(0, 2);
  const incorrectCandidates = allCandidates.filter(c => !c.isCorrect).slice(0, 2);
  
  // Ensure we have enough candidates
  while (correctCandidates.length < 2) {
    const grid = selectedPattern.generator(size, [...shapesForAllGrids]);
    if (selectedPattern.validator(grid)) {
      correctCandidates.push({ grid, isCorrect: true });
    }
  }
  
  while (incorrectCandidates.length < 2) {
    const grid = generateRandomGrid(size, shapesForAllGrids);
    if (!selectedPattern.validator(grid)) {
      incorrectCandidates.push({ grid, isCorrect: false });
    }
  }
  
  // Combine and shuffle
  const finalCandidates = [...correctCandidates, ...incorrectCandidates];
  const shuffleOrder = shuffleArray([0, 1, 2, 3]);
  const shuffledCandidates = shuffleOrder.map(i => finalCandidates[i].grid);
  const correctIndices = shuffleOrder
    .map((originalIndex, newIndex) => originalIndex < 2 ? newIndex : -1)
    .filter(index => index !== -1);
  
  console.log(`Correct indices: ${correctIndices}`);
  console.log('Final validation:');
  shuffledCandidates.forEach((candidate, i) => {
    const isValid = selectedPattern.validator(candidate);
    const shouldBeCorrect = correctIndices.includes(i);
    console.log(`Candidate ${i}: valid=${isValid}, shouldBeCorrect=${shouldBeCorrect}`);
  });
  
  const difficulty = level <= 5 ? 'Easy' : level <= 10 ? 'Medium' : 'Hard';
  
  return {
    examples,
    candidates: shuffledCandidates,
    correctIndices,
    rule: selectedPattern.rule,
    difficulty
  };
}

/* ---------------- Answer Check ---------------- */
export function checkInductiveAnswer(puzzle: InductivePuzzle, selected: number[]): boolean {
  const selectedSorted = [...selected].sort((a, b) => a - b);
  const correctSorted = [...puzzle.correctIndices].sort((a, b) => a - b);
  return JSON.stringify(selectedSorted) === JSON.stringify(correctSorted);
}

/* ---------------- Debug Helper ---------------- */
export function debugPuzzle(puzzle: InductivePuzzle): void {
  console.log('=== PUZZLE DEBUG ===');
  console.log('Rule:', puzzle.rule);
  console.log('Difficulty:', puzzle.difficulty);
  console.log('Correct indices:', puzzle.correctIndices);
  
  console.log('\nExamples:');
  puzzle.examples.forEach((example, i) => {
    console.log(`Example ${i + 1}:`);
    example.forEach(row => console.log(row.join(' ')));
    console.log('');
  });
  
  console.log('Candidates:');
  puzzle.candidates.forEach((candidate, i) => {
    const isCorrect = puzzle.correctIndices.includes(i);
    console.log(`Option ${String.fromCharCode(65 + i)} (${isCorrect ? 'CORRECT' : 'INCORRECT'}):`);
    candidate.forEach(row => console.log(row.join(' ')));
    console.log('');
  });
}