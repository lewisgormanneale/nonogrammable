import { NonogramGrid } from "@/lib/types";

export function generatePuzzle(rows: number, cols: number): NonogramGrid {
  return Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => (Math.random() > 0.5 ? 1 : 0))
  );
}