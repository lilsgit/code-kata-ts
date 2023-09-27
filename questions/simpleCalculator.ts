export function add(x: number, y: number): number {
  return x + y;
}

export function subtract(x: number, y: number): number {
  return x - y;
}

export function multiply(x: number, y: number): number {
  return x * y;
}

export function divide(x: number, y: number): number {
  if (y === 0) {
    throw new Error("Cannot divide by zero");
  }
  return x / y;
}