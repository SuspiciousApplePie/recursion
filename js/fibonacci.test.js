import { fibsLoop, fibsRecs } from "./fibonacci";

describe("Fibonacci Loop", () => {
  test("Fibonacci 1", () => {
    expect(fibsLoop(1)).toStrictEqual([0]);
  });
  test("Fibonacci 2", () => {
    expect(fibsLoop(2)).toStrictEqual([0, 1]);
  });
  test("Fibonacci 3", () => {
    expect(fibsLoop(3)).toStrictEqual([0, 1, 1]);
  });
  test("Fibonacci 8", () => {
    expect(fibsLoop(8)).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });
  test("Fibonacci 9", () => {
    expect(fibsLoop(9)).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13, 21]);
  });
});

describe("Fibonacci recursion", () => {
  test("Fibonacci 1", () => {
    expect(fibsRecs(1)).toStrictEqual([0]);
  });
  test("Fibonacci 2", () => {
    expect(fibsRecs(2)).toStrictEqual([0, 1]);
  });
  test("Fibonacci 3", () => {
    expect(fibsRecs(3)).toStrictEqual([0, 1, 1]);
  });
  test("Fibonacci 8", () => {
    expect(fibsRecs(8)).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });
  test("Fibonacci 9", () => {
    expect(fibsLoop(9)).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13, 21]);
  });
});
