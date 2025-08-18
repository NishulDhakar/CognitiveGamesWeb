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

// Pattern generators
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

function generateSymmetricPattern(size: number, shapes: Shape[]): Grid {
  const grid: Grid = Array.from({ length: size }, () => Array(size).fill(shapes[0]));
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (i === j || i + j === size - 1) {
        grid[i][j] = shapes[1];
      } else {
        grid[i][j] = shapes[0];
      }
    }
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

function generateSingleShapeGrid(size: number, shape: Shape): Grid {
  return Array.from({ length: size }, () => Array(size).fill(shape));
}

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

// Pattern validation functions
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

function hasSingleShapePattern(grid: Grid): boolean {
  if (grid.length === 0) return false;
  const shape = grid[0][0];
  return grid.every(row => row.every(cell => cell === shape));
}

export function generatePuzzle(level: number): InductivePuzzle {
  const size = 3; // Keep it simple with 3x3 grids
  const availableShapes = SHAPES.slice(0, Math.min(4 + Math.floor(level / 3), 6));
  
  // Choose pattern type based on level
  const patterns = [
    { name: 'unique rows', generator: generateUniqueRowsPattern, validator: hasUniqueRowsPattern, rule: 'Each row contains all different shapes (no repeats)' },
    { name: 'rotation', generator: generateRotationPattern, validator: hasRotationPattern, rule: 'Each row is the previous row shifted one position right' },
    { name: 'symmetric', generator: generateSymmetricPattern, validator: hasSymmetricPattern, rule: 'The grid is symmetric across the diagonal' },
    { name: 'alternating', generator: generateAlternatingPattern, validator: hasAlternatingPattern, rule: 'Shapes alternate in a checkerboard pattern' }
  ];
  
  const patternIndex = (level - 1) % patterns.length;
  const pattern = patterns[patternIndex];
  
  // Generate examples
  const examples: Grid[] = [];
  for (let i = 0; i < 2; i++) {
    const shuffledShapes = [...availableShapes].sort(() => Math.random() - 0.5);
    examples.push(pattern.generator(size, shuffledShapes));
  }
  
  // Generate candidates (2 correct, 2 incorrect)
  const candidates: Grid[] = [];
  const correctIndices: number[] = [];
  
  // Generate 2 correct candidates
  for (let i = 0; i < 2; i++) {
    const shuffledShapes = [...availableShapes].sort(() => Math.random() - 0.5);
    candidates.push(pattern.generator(size, shuffledShapes));
    correctIndices.push(i);
  }
  
  // Generate 2 incorrect candidates
  for (let i = 0; i < 2; i++) {
    let incorrectGrid: Grid;
    let attempts = 0;
    do {
      if (Math.random() < 0.5) {
        // Generate random grid
        incorrectGrid = generateRandomGrid(size, availableShapes);
      } else {
        // Generate grid with single shape (obvious wrong answer)
        const randomShape = availableShapes[Math.floor(Math.random() * availableShapes.length)];
        incorrectGrid = generateSingleShapeGrid(size, randomShape);
      }
      attempts++;
    } while (pattern.validator(incorrectGrid) && attempts < 10);
    
    candidates.push(incorrectGrid);
  }
  
  // Shuffle candidates while keeping track of correct indices
  const candidateIndices = [0, 1, 2, 3];
  const shuffledIndices = candidateIndices.sort(() => Math.random() - 0.5);
  const shuffledCandidates = shuffledIndices.map(i => candidates[i]);
  const newCorrectIndices = shuffledIndices
    .map((originalIndex, newIndex) => correctIndices.includes(originalIndex) ? newIndex : -1)
    .filter(index => index !== -1);
  
  const difficulty = level <= 5 ? 'Easy' : level <= 10 ? 'Medium' : 'Hard';
  
  return {
    examples,
    candidates: shuffledCandidates,
    correctIndices: newCorrectIndices,
    rule: pattern.rule,
    difficulty
  };
}

export function checkInductiveAnswer(puzzle: InductivePuzzle, selectedIndices: number[]): boolean {
  const sortedSelected = [...selectedIndices].sort();
  const sortedCorrect = [...puzzle.correctIndices].sort();
  return JSON.stringify(sortedSelected) === JSON.stringify(sortedCorrect);
}