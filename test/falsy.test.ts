import { describe, it, expect } from "vitest";
import { filterFalsy, filterFalsyArrow } from "../src/falsy";

describe("Filter falsy values", () => {
  const arr = [1, undefined, 0, "3", null, true, false];
  const res = [1, "3", true];

  it("should filter falsy values", () => {
    expect(filterFalsy(arr)).toMatchObject(res);
    expect(filterFalsy(arr)).toBeTruthy();
  });

  it("should filter falsy values with arrow function", () => {
    expect(filterFalsyArrow(arr)).toMatchObject(res);
    expect(filterFalsyArrow(arr)).toBeTruthy();
  });
});
