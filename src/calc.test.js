import { add } from "../src/calc";

test("add of 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});
