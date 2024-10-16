import { describe, it, expect } from "vitest";
import { swap, swapArrow, swapDesc } from "../src/swap";

describe("Swap two numbers", () => {
  const a = 1;
  const b = 2;
  const res = [2, 1];

  it("should swap two numbers with three variables", () => {
    expect(swap(a, b)).toMatchObject(res);
  });

  it("should swap two numbers with destructuring", () => {
    expect(swapDesc(a, b)).toMatchObject(res);
  });

  it("should swap two numbers with arrow function", () => {
    expect(swapArrow(a, b)).toMatchObject(res);
  });
});
