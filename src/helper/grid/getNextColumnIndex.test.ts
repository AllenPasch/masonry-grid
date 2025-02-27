import { getNextColumnIndex } from ".";

describe("getNextColumnIndex()", () => {
  test("photos are added to the column with the lowest nextColumnTopVw", () => {
    expect(getNextColumnIndex([100, 50, 75, 33, 80])).toBe(3);
  });

  test("at the top of the page, the 1st photo is added to column 0", () => {
    expect(getNextColumnIndex([0])).toBe(0);
    expect(getNextColumnIndex([0, 0])).toBe(0);
    expect(getNextColumnIndex([0, 0, 0])).toBe(0);
    expect(getNextColumnIndex([0, 0, 0, 0])).toBe(0);
    expect(getNextColumnIndex([0, 0, 0, 0, 0])).toBe(0);
  });

  test("at the top of the page, the 2nd photo is added to column 1", () => {
    expect(getNextColumnIndex([100, 0])).toBe(1);
    expect(getNextColumnIndex([100, 0, 0])).toBe(1);
    expect(getNextColumnIndex([100, 0, 0, 0])).toBe(1);
    expect(getNextColumnIndex([100, 0, 0, 0, 0])).toBe(1);
  });

  test("at the top of the page, the 3rd photo is added to column 2", () => {
    expect(getNextColumnIndex([100, 50, 0])).toBe(2);
    expect(getNextColumnIndex([100, 50, 0, 0])).toBe(2);
    expect(getNextColumnIndex([100, 50, 0, 0, 0])).toBe(2);
  });

  test("at the top of the page, the 4th photo is added to column 3", () => {
    expect(getNextColumnIndex([100, 50, 75, 0])).toBe(3);
    expect(getNextColumnIndex([100, 50, 75, 0, 0])).toBe(3);
  });

  test("at the top of the page, the 5th photo is added to column 4", () => {
    expect(getNextColumnIndex([100, 50, 75, 33, 0])).toBe(4);
  });
});
