type SwapResult = [a: number, b: number];

// swap numbers
export function swap(a: number, b: number): SwapResult {
  const tmp = a;

  a = b;
  b = tmp;

  return [a, b];
}

// with array destructoring
export function swapDesc(a: number, b: number): SwapResult {
  [a, b] = [b, a];

  return [a, b];
}

// arrow function
export const swapArrow = (a: number, b: number): SwapResult => [b, a];
