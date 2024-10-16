import { describe, it, expect } from "vitest";
import { Obj } from "../src/defaults";

describe("Default values", () => {
  it("should default first value only", () => {
    const obj: Obj = { a: 1 };
    const { a, b } = obj;

    expect(a).toBe(1);
    expect(b).toBeUndefined();
  });

  it("should default second value only", () => {
    const { a, b = 2 }: Obj = { a: 1 };
    expect(a).toBe(1);
    expect(b).toBe(2);
  });

  it("should default both values", () => {
    const { a = 1, b = 2 } = {};
    expect(a).toBe(1);
    expect(b).toBe(2);
  });
});
