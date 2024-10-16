import { describe, it, expect } from "vitest";
import { entries, Person } from "../src/entries";

describe("Object from entries", () => {
  const person: Person = {
    name: "Mario",
    age: 49,
  };

  it("should create an object from entries", () => {
    const obj: Person = Object.fromEntries(entries);
    expect(obj).toMatchObject(person);
    expect(obj).toBeTypeOf("object");
  });
});
