import { describe, it, expect } from "vitest";
import { addKey, addKeyArrow } from "../src/keys";

describe("Add key to object", () => {
  const obj = {
    name: "Mario",
  };

  const res = {
    ...obj,
    age: 49,
  };

  const key = "age";
  const value = 49;

  it("should add a key and a value to an existing object", () => {
    expect(addKey(obj, key, value)).toMatchObject(res);
  });

  it("should add a key and a value to an existing object with arrow function", () => {
    expect(addKey(obj, key, value)).toMatchObject(res);
  });
});
