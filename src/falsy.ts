// filter falsy values
type Args = number | string | boolean | undefined | null;

export function filterFalsy(array: Args[]): Args[] {
  const filtered = array.filter(Boolean);

  return filtered;
}

export const filterFalsyArrow = (array: Args[]): Args[] =>
  array.filter(Boolean);
