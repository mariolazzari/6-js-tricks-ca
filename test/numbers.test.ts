import { describe, it, expect } from "vitest";
import { numToLocale, numToLocaleArrow } from "../src/numbers";

describe("Number to locale string", () => {
  const n = 1234567.89;
  const nLoc = n.toLocaleString();
  const itLoc = n.toLocaleString("it");
  const usLoc = n.toLocaleString("us");

  it("should format a number to locale string", () => {
    expect(numToLocale(n)).toBe(nLoc);
    expect(numToLocale(n, "it")).toBe(itLoc);
    expect(numToLocale(n, "us")).toBe(usLoc);
  });

  it("should format a number to locale string with arrow function", () => {
    expect(numToLocale(n)).toBe(nLoc);
    expect(numToLocale(n, "it")).toBe(itLoc);
    expect(numToLocale(n, "us")).toBe(usLoc);
  });
});
