export type Symbol = string;

export interface GridCell {
  value: Symbol | null;
  row: number;
  col: number;
}

export interface Puzzle {
  grid: (Symbol | null)[][];
  emptyCells: { row: number; col: number }[];
  targetCell: { row: number; col: number };
  answer: Symbol;
  options: Symbol[];
}

export type GameStatus = 'playing' | 'results';
