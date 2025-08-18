export type Shape = 'CIRCLE' | 'SQUARE' | 'TRIANGLE' | 'PLUS' | 'DIAMOND' | 'STAR';
export type Grid = Shape[][];

export interface InductivePuzzle {
  examples: Grid[];
  candidates: Grid[];
  correctIndices: number[];
  rule: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  patternType: string;
}

const SHAPES: Shape[] = ['CIRCLE', 'SQUARE', 'TRIANGLE', 'PLUS', 'DIAMOND', 'STAR'];

// Advanced Pattern Generators
function generateColumnUniquePattern(size: number, shapes: Shape[]): Grid {
  const grid: Grid = Array.from({ length: size }, () => Array(size).fill(shapes[0]));
  for (let col = 0; col < size; col++) {
    const shuffled = [...shapes].sort(() => Math.random() - 0.5);
    for (let row = 0; row < size; row++) {
      grid[row][col] = shuffled[row % shuffled.length];
    }
  }
  return grid;
}

function generateDiagonalMirrorPattern(size: number, shapes: Shape[]): Grid {
  const grid: Grid = Array.from({ length: size }, () => Array(size).fill(shapes[0]));
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (i === j) {
        grid[i][j] = shapes[0]; 
      } else if (i + j === size - 1) {
        grid[i][j] = shapes[1]; 
      } else if (i < j) {
        const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
        grid[i][j] = randomShape;
        grid[j][i] = randomShape; 
      }
    }
  }
  return grid;
}

function generateCenterRadialPattern(size: number, shapes: Shape[]): Grid {
  const grid: Grid = Array.from({ length: size }, () => Array(size).fill(shapes[0]));
  const center = Math.floor(size / 2);
  
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const distance = Math.max(Math.abs(i - center), Math.abs(j - center));
      grid[i][j] = shapes[distance % shapes.length];
    }
  }
  return grid;
}

function generateCornerToCornerPattern(size: number, shapes: Shape[]): Grid {
  const grid: Grid = Array.from({ length: size }, () => Array(size).fill(shapes[0]));
  
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      // Create pattern based on distance from top-left corner
      const distance = i + j;
      grid[i][j] = shapes[distance % shapes.length];
    }
  }
  return grid;
}

function generateSpiralPattern(size: number, shapes: Shape[]): Grid {
  const grid: Grid = Array.from({ length: size }, () => Array(size).fill(shapes[0]));
  let shapeIndex = 0;
  
  let top = 0, bottom = size - 1, left = 0, right = size - 1;
  
  while (top <= bottom && left <= right) {
    // Fill top row
    for (let i = left; i <= right; i++) {
      grid[top][i] = shapes[shapeIndex % shapes.length];
    }
    top++;
    shapeIndex++;
    
    // Fill right column
    for (let i = top; i <= bottom; i++) {
      grid[i][right] = shapes[shapeIndex % shapes.length];
    }
    right--;
    shapeIndex++;
    
    // Fill bottom row
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        grid[bottom][i] = shapes[shapeIndex % shapes.length];
      }
      bottom--;
      shapeIndex++;
    }
    
    // Fill left column
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        grid[i][left] = shapes[shapeIndex % shapes.length];
      }
      left++;
      shapeIndex++;
    }
  }
  return grid;
}

function generatePerimeterFillPattern(size: number, shapes: Shape[]): Grid {
  const grid: Grid = Array.from({ length: size }, () => Array(size).fill(shapes[1]));
  
  // Fill perimeter with one shape, interior with another
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (i === 0 || i === size - 1 || j === 0 || j === size - 1) {
        grid[i][j] = shapes[0]; // Perimeter
      }
    }
  }
  return grid;
}

function generateXPattern(size: number, shapes: Shape[]): Grid {
  const grid: Grid = Array.from({ length: size }, () => Array(size).fill(shapes[0]));
  
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (i === j || i + j === size - 1) {
        grid[i][j] = shapes[1]; // X pattern
      }
    }
  }
  return grid;
}

function generateQuadrantPattern(size: number, shapes: Shape[]): Grid {
  const grid: Grid = Array.from({ length: size }, () => Array(size).fill(shapes[0]));
  const mid = Math.floor(size / 2);
  
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      let quadrant = 0;
      if (i >= mid && j < mid) quadrant = 1;
      else if (i >= mid && j >= mid) quadrant = 2;
      else if (i < mid && j >= mid) quadrant = 3;
      
      grid[i][j] = shapes[quadrant % shapes.length];
    }
  }
  return grid;
}

// Legacy patterns
function generateUniqueRowsPattern(size: number, shapes: Shape[]): Grid {
  const grid: Grid = [];
  for (let row = 0; row < size; row++) {
    const shuffled = [...shapes].sort(() => Math.random() - 0.5);
    grid.push(shuffled.slice(0, size));
  }
  return grid;
}

function generateRotationPattern(size: number, shapes: Shape[]): Grid {
  const grid: Grid = [];
  const baseRow = shapes.slice(0, size);
  for (let row = 0; row < size; row++) {
    grid.push([...baseRow.slice(row), ...baseRow.slice(0, row)]);
  }
  return grid;
}

function generateAlternatingPattern(size: number, shapes: Shape[]): Grid {
  const grid: Grid = [];
  for (let row = 0; row < size; row++) {
    const rowData: Shape[] = [];
    for (let col = 0; col < size; col++) {
      rowData.push(shapes[(row + col) % 2]);
    }
    grid.push(rowData);
  }
  return grid;
}

// Utility functions
function generateRandomGrid(size: number, shapes: Shape[]): Grid {
  const grid: Grid = [];
  for (let row = 0; row < size; row++) {
    const rowData: Shape[] = [];
    for (let col = 0; col < size; col++) {
      rowData.push(shapes[Math.floor(Math.random() * shapes.length)]);
    }
    grid.push(rowData);
  }
  return grid;
}

function generateSingleShapeGrid(size: number, shape: Shape): Grid {
  return Array.from({ length: size }, () => Array(size).fill(shape));
}

function introduceFlaw(grid: Grid, shapes: Shape[]): Grid {
  const flawed = grid.map(row => [...row]);
  const size = grid.length;
  
  // Introduce a single random flaw
  const row = Math.floor(Math.random() * size);
  const col = Math.floor(Math.random() * size);
  let newShape;
  do {
    newShape = shapes[Math.floor(Math.random() * shapes.length)];
  } while (newShape === flawed[row][col]);
  
  flawed[row][col] = newShape;
  return flawed;
}

// Advanced Pattern Validators
function hasColumnUniquePattern(grid: Grid): boolean {
  const size = grid.length;
  for (let col = 0; col < size; col++) {
    const seen = new Set();
    for (let row = 0; row < size; row++) {
      if (seen.has(grid[row][col])) return false;
      seen.add(grid[row][col]);
    }
  }
  return true;
}

function hasDiagonalMirrorPattern(grid: Grid): boolean {
  const size = grid.length;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (grid[i][j] !== grid[j][i]) return false;
    }
  }
  return true;
}

function hasCenterRadialPattern(grid: Grid): boolean {
  const size = grid.length;
  const center = Math.floor(size / 2);
  
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const distance = Math.max(Math.abs(i - center), Math.abs(j - center));
      const expectedShape = grid[center + (distance > 0 ? distance : 0)][center];
      
      // Check if all cells at same distance have same shape
      for (let ii = 0; ii < size; ii++) {
        for (let jj = 0; jj < size; jj++) {
          const currentDistance = Math.max(Math.abs(ii - center), Math.abs(jj - center));
          if (currentDistance === distance && grid[ii][jj] !== grid[i][j]) {
            return false;
          }
        }
      }
    }
  }
  return true;
}

function hasCornerToCornerPattern(grid: Grid): boolean {
  const size = grid.length;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const distance = i + j;
      // Check if all cells at same distance have same shape
      for (let ii = 0; ii < size; ii++) {
        for (let jj = 0; jj < size; jj++) {
          if (ii + jj === distance && grid[ii][jj] !== grid[i][j]) {
            return false;
          }
        }
      }
    }
  }
  return true;
}

function hasSpiralPattern(grid: Grid): boolean {
  const size = grid.length;
  const spiral: Shape[] = [];
  
  let top = 0, bottom = size - 1, left = 0, right = size - 1;
  
  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) spiral.push(grid[top][i]);
    top++;
    for (let i = top; i <= bottom; i++) spiral.push(grid[i][right]);
    right--;
    if (top <= bottom) {
      for (let i = right; i >= left; i--) spiral.push(grid[bottom][i]);
      bottom--;
    }
    if (left <= right) {
      for (let i = bottom; i >= top; i--) spiral.push(grid[i][left]);
      left++;
    }
  }
  
  // Check if spiral follows a repeating pattern
  if (spiral.length === 0) return false;
  const uniqueShapes = [...new Set(spiral)];
  let patternLength = 1;
  
  while (patternLength <= spiral.length / 2) {
    let isPattern = true;
    for (let i = patternLength; i < spiral.length; i++) {
      if (spiral[i] !== spiral[i % patternLength]) {
        isPattern = false;
        break;
      }
    }
    if (isPattern) return true;
    patternLength++;
  }
  return false;
}

function hasPerimeterFillPattern(grid: Grid): boolean {
  const size = grid.length;
  if (size < 2) return false;
  
  const perimeterShape = grid[0][0];
  const interiorShape = grid[1][1];
  
  if (perimeterShape === interiorShape) return false;
  
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const isPerimeter = i === 0 || i === size - 1 || j === 0 || j === size - 1;
      const expectedShape = isPerimeter ? perimeterShape : interiorShape;
      if (grid[i][j] !== expectedShape) return false;
    }
  }
  return true;
}

function hasXPattern(grid: Grid): boolean {
  const size = grid.length;
  const diagonalShape = grid[0][0];
  const otherShape = grid[0][1];
  
  if (diagonalShape === otherShape) return false;
  
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const isOnDiagonal = i === j || i + j === size - 1;
      const expectedShape = isOnDiagonal ? diagonalShape : otherShape;
      if (grid[i][j] !== expectedShape) return false;
    }
  }
  return true;
}

function hasQuadrantPattern(grid: Grid): boolean {
  const size = grid.length;
  const mid = Math.floor(size / 2);
  
  const quadrantShapes = [
    grid[0][0], // Top-left
    grid[mid < size ? mid : size - 1][0], // Bottom-left
    grid[mid < size ? mid : size - 1][mid < size ? mid : size - 1], // Bottom-right
    grid[0][mid < size ? mid : size - 1] // Top-right
  ];
  
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      let quadrant = 0;
      if (i >= mid && j < mid) quadrant = 1;
      else if (i >= mid && j >= mid) quadrant = 2;
      else if (i < mid && j >= mid) quadrant = 3;
      
      if (grid[i][j] !== quadrantShapes[quadrant]) return false;
    }
  }
  return true;
}

// Legacy validators
function hasUniqueRowsPattern(grid: Grid): boolean {
  for (const row of grid) {
    const seen = new Set();
    for (const shape of row) {
      if (seen.has(shape)) return false;
      seen.add(shape);
    }
  }
  return true;
}

function hasRotationPattern(grid: Grid): boolean {
  if (grid.length === 0) return false;
  const size = grid.length;
  const firstRow = grid[0];
  
  for (let row = 1; row < size; row++) {
    for (let col = 0; col < size; col++) {
      const expectedShape = firstRow[(col - row + size) % size];
      if (grid[row][col] !== expectedShape) return false;
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

// Pattern configuration
const PATTERN_CONFIGS = [
  // Easy patterns
  { 
    name: 'unique_rows', 
    generator: generateUniqueRowsPattern, 
    validator: hasUniqueRowsPattern, 
    rule: 'Each row contains all different shapes (no repeats)',
    difficulty: 'Easy',
    minShapes: 3
  },
  { 
    name: 'alternating', 
    generator: generateAlternatingPattern, 
    validator: hasAlternatingPattern, 
    rule: 'Shapes alternate in a checkerboard pattern',
    difficulty: 'Easy',
    minShapes: 2
  },
  
  // Medium patterns
  { 
    name: 'rotation', 
    generator: generateRotationPattern, 
    validator: hasRotationPattern, 
    rule: 'Each row is the previous row shifted one position right',
    difficulty: 'Medium',
    minShapes: 3
  },
  { 
    name: 'column_unique', 
    generator: generateColumnUniquePattern, 
    validator: hasColumnUniquePattern, 
    rule: 'Each column contains all different shapes (no repeats)',
    difficulty: 'Medium',
    minShapes: 3
  },
  { 
    name: 'x_pattern', 
    generator: generateXPattern, 
    validator: hasXPattern, 
    rule: 'Forms an X shape with one color on diagonals, another elsewhere',
    difficulty: 'Medium',
    minShapes: 2
  },
  { 
    name: 'perimeter_fill', 
    generator: generatePerimeterFillPattern, 
    validator: hasPerimeterFillPattern, 
    rule: 'Perimeter uses one shape, interior uses another',
    difficulty: 'Medium',
    minShapes: 2
  },
  
  // Hard patterns
  { 
    name: 'diagonal_mirror', 
    generator: generateDiagonalMirrorPattern, 
    validator: hasDiagonalMirrorPattern, 
    rule: 'Grid is symmetric across the main diagonal',
    difficulty: 'Hard',
    minShapes: 3
  },
  { 
    name: 'center_radial', 
    generator: generateCenterRadialPattern, 
    validator: hasCenterRadialPattern, 
    rule: 'Shapes form concentric layers radiating from center',
    difficulty: 'Hard',
    minShapes: 3
  },
  { 
    name: 'corner_to_corner', 
    generator: generateCornerToCornerPattern, 
    validator: hasCornerToCornerPattern, 
    rule: 'Pattern follows diagonal lines from corner to corner',
    difficulty: 'Hard',
    minShapes: 3
  },
  { 
    name: 'spiral', 
    generator: generateSpiralPattern, 
    validator: hasSpiralPattern, 
    rule: 'Shapes follow a spiral pattern from outside to center',
    difficulty: 'Hard',
    minShapes: 4
  },
  { 
    name: 'quadrant', 
    generator: generateQuadrantPattern, 
    validator: hasQuadrantPattern, 
    rule: 'Each quadrant of the grid uses a different shape',
    difficulty: 'Hard',
    minShapes: 4
  }
];

export function generatePuzzle(level: number): InductivePuzzle {
  const size = 3;
  
  // Select difficulty and pattern based on level
  let targetDifficulty: 'Easy' | 'Medium' | 'Hard';
  if (level <= 3) targetDifficulty = 'Easy';
  else if (level <= 8) targetDifficulty = 'Medium';
  else targetDifficulty = 'Hard';
  
  const suitablePatterns = PATTERN_CONFIGS.filter(p => p.difficulty === targetDifficulty);
  const pattern = suitablePatterns[Math.floor(Math.random() * suitablePatterns.length)];
  
  // Determine number of shapes based on pattern and level
  const maxShapes = Math.min(4 + Math.floor(level / 2), 6);
  const minShapes = pattern.minShapes;
  const numShapes = Math.max(minShapes, Math.min(maxShapes, SHAPES.length));
  const availableShapes = SHAPES.slice(0, numShapes);
  
  // Generate examples (2-3 examples for harder puzzles)
  const numExamples = targetDifficulty === 'Hard' ? 3 : 2;
  const examples: Grid[] = [];
  
  for (let i = 0; i < numExamples; i++) {
    const shuffledShapes = [...availableShapes].sort(() => Math.random() - 0.5);
    let example = pattern.generator(size, shuffledShapes);
    
    // Ensure the example actually follows the pattern
    let attempts = 0;
    while (!pattern.validator(example) && attempts < 5) {
      const reshuffled = [...availableShapes].sort(() => Math.random() - 0.5);
      example = pattern.generator(size, reshuffled);
      attempts++;
    }
    examples.push(example);
  }
  
  // Generate candidates
  const candidates: Grid[] = [];
  const correctIndices: number[] = [];
  
  // Generate 2 correct candidates
  for (let i = 0; i < 2; i++) {
    const shuffledShapes = [...availableShapes].sort(() => Math.random() - 0.5);
    let candidate = pattern.generator(size, shuffledShapes);
    
    // Ensure correctness
    let attempts = 0;
    while (!pattern.validator(candidate) && attempts < 5) {
      const reshuffled = [...availableShapes].sort(() => Math.random() - 0.5);
      candidate = pattern.generator(size, reshuffled);
      attempts++;
    }
    
    candidates.push(candidate);
    correctIndices.push(i);
  }
  
  // Generate 2 incorrect candidates with strategic flaws
  for (let i = 0; i < 2; i++) {
    let incorrectGrid: Grid;
    let attempts = 0;
    
    do {
      const strategy = Math.random();
      
      if (strategy < 0.4) {
        // Strategy 1: Start with correct pattern and introduce flaws
        const shuffledShapes = [...availableShapes].sort(() => Math.random() - 0.5);
        const correctGrid = pattern.generator(size, shuffledShapes);
        incorrectGrid = introduceFlaw(correctGrid, availableShapes);
      } else if (strategy < 0.7) {
        // Strategy 2: Generate using wrong pattern
        const wrongPatterns = PATTERN_CONFIGS.filter(p => p.name !== pattern.name);
        const wrongPattern = wrongPatterns[Math.floor(Math.random() * wrongPatterns.length)];
        const shuffledShapes = [...availableShapes].sort(() => Math.random() - 0.5);
        incorrectGrid = wrongPattern.generator(size, shuffledShapes);
      } else {
        // Strategy 3: Completely random
        incorrectGrid = generateRandomGrid(size, availableShapes);
      }
      
      attempts++;
    } while (pattern.validator(incorrectGrid) && attempts < 10);
    
    // Final fallback - ensure it's definitely wrong
    if (pattern.validator(incorrectGrid)) {
      incorrectGrid = generateRandomGrid(size, availableShapes);
    }
    
    candidates.push(incorrectGrid);
  }
  
  // Shuffle candidates while tracking correct indices
  const candidateIndices = [0, 1, 2, 3];
  const shuffledIndices = candidateIndices.sort(() => Math.random() - 0.5);
  const shuffledCandidates = shuffledIndices.map(i => candidates[i]);
  const newCorrectIndices = shuffledIndices
    .map((originalIndex, newIndex) => correctIndices.includes(originalIndex) ? newIndex : -1)
    .filter(index => index !== -1);
  
  return {
    examples,
    candidates: shuffledCandidates,
    correctIndices: newCorrectIndices,
    rule: pattern.rule,
    difficulty: targetDifficulty,
    patternType: pattern.name
  };
}

export function checkInductiveAnswer(puzzle: InductivePuzzle, selectedIndices: number[]): boolean {
  const sortedSelected = [...selectedIndices].sort();
  const sortedCorrect = [...puzzle.correctIndices].sort();
  return JSON.stringify(sortedSelected) === JSON.stringify(sortedCorrect);
}

// Utility function to analyze a grid and detect its pattern
export function analyzeGridPattern(grid: Grid): string[] {
  const detectedPatterns: string[] = [];
  
  PATTERN_CONFIGS.forEach(config => {
    if (config.validator(grid)) {
      detectedPatterns.push(config.name);
    }
  });
  
  return detectedPatterns;
}

// Function to validate puzzle quality
export function validatePuzzleQuality(puzzle: InductivePuzzle): {
  isValid: boolean;
  issues: string[];
} {
  const issues: string[] = [];
  
  // Check if examples follow the same pattern
  const examplePatterns = puzzle.examples.map(analyzeGridPattern);
  const commonPatterns = examplePatterns.reduce((common, patterns) => 
    common.filter(p => patterns.includes(p))
  );
  
  if (commonPatterns.length === 0) {
    issues.push('Examples do not share a common pattern');
  }
  
  // Check if correct candidates follow the pattern
  puzzle.correctIndices.forEach(index => {
    const candidatePatterns = analyzeGridPattern(puzzle.candidates[index]);
    if (!commonPatterns.some(p => candidatePatterns.includes(p))) {
      issues.push(`Correct candidate ${index} does not follow the expected pattern`);
    }
  });
  
  // Check if incorrect candidates don't follow the pattern
  for (let i = 0; i < puzzle.candidates.length; i++) {
    if (!puzzle.correctIndices.includes(i)) {
      const candidatePatterns = analyzeGridPattern(puzzle.candidates[i]);
      if (commonPatterns.some(p => candidatePatterns.includes(p))) {
        issues.push(`Incorrect candidate ${i} incorrectly follows the expected pattern`);
      }
    }
  }
  
  return {
    isValid: issues.length === 0,
    issues
  };
}