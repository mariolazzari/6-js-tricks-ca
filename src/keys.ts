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
