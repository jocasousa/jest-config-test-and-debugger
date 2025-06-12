import { it } from "@jest/globals";

function sum(a, b = 0) {
  return a + b;
}

it("should return the sum of two numbers", () => {
  expect(sum(1, 2)).toBe(3);
});
