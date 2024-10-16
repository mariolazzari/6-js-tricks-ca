export function numToLocale(n: number, locale?: string): string {
  return n.toLocaleString(locale);
}

export const numToLocaleArrow = (n: number, locale?: string): string =>
  n.toLocaleString(locale);
