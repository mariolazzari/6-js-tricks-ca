# 6 JavaScript tricks you should know

YouTube [video](https://www.youtube.com/watch?v=UC1_ydr6Br4)

## Swap numbers

```ts
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
```

## Filter falsy values

```ts
// filter falsy values
type Args = number | string | boolean | undefined | null;

export function filterFalsy(array: Args[]): Args[] {
  const filtered = array.filter(Boolean);

  return filtered;
}

export const filterFalsyArrow = (array: Args[]): Args[] =>
  array.filter(Boolean);
```

## Add a key and its value to existing object

```ts
type Value = string | number | boolean | null | undefined;

export function addKey<T extends {}>(
  obj: T,
  key: string,
  value: Value
): Record<string, Value> {
  return { ...obj, [key]: value };
}

export const addKeyArrow = <T extends {}>(
  obj: T,
  key: string,
  value: Value
): Record<string, Value> => ({ ...obj, [key]: value });
```