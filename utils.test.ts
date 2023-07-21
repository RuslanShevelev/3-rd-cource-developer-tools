const { it, expect } = require("@jest/globals");
const { getCardsArray } = require("./components/utils");

it("should create an array with a length equal to the argument", () => {
  const level = 12;
  const expected = getCardsArray(level);
  expect(expected).toHaveLength(level);
});

it("should create different arrays on each function call", () => {
  const level = 18;
  const expected = getCardsArray(level);
  const expected2 = getCardsArray(level);
  expect(expected).not.toEqual(expected2);
});

it("should create an array with paired elements", () => {
  const level = 36;
  const array = getCardsArray(level);
  const expected = Array.from(new Set(array));
  expect(expected).toHaveLength(level / 2);
});
