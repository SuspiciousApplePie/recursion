import { mergeSort } from "./mergeSort";

describe("Merge Sort Testing", () => {
  test("Base Case", () => {
    expect(mergeSort([])).toStrictEqual([]);
  });
  test("One number", () => {
    expect(mergeSort([83])).toStrictEqual([83]);
  });
  test("Two numbers", () => {
    expect(mergeSort([5, 2])).toStrictEqual([2, 5]);
  });
  test("Two numbers consecutive", () => {
    expect(mergeSort([1, 2])).toStrictEqual([1, 2]);
  });
  test("Three numbers", () => {
    expect(mergeSort([1, 3, 2])).toStrictEqual([1, 2, 3]);
  });
  test("Three numbers consecutive", () => {
    expect(mergeSort([1, 2, 3])).toStrictEqual([1, 2, 3]);
  });
  test("Five numbers consecutive", () => {
    expect(mergeSort([1, 2, 3, 4, 5])).toStrictEqual([1, 2, 3, 4, 5]);
  });
  test("Five numbers  with similarr numbers", () => {
    expect(mergeSort([1, 4, 5, 2, 5])).toStrictEqual([1, 2, 4, 5, 5]);
  });
  test("Lots of number", () => {
    expect(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])).toStrictEqual([
      0, 1, 1, 2, 3, 5, 8, 13,
    ]);
  });
  test("Big numbers", () => {
    expect(mergeSort([1, 2, 3, 4])).toStrictEqual([1, 2, 3, 4]);
  });
});
