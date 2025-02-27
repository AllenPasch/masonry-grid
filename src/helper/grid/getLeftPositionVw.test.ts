import { getLeftPositionVw } from ".";

describe("getLeftPositionVw()", () => {
  test("column 0 is just spacingSidesVw from the left", () => {
    expect(getLeftPositionVw(1, 0, 20, 10)).toBe(20);
    expect(getLeftPositionVw(2, 0, 20, 10)).toBe(20);
    expect(getLeftPositionVw(3, 0, 20, 10)).toBe(20);
    expect(getLeftPositionVw(4, 0, 20, 10)).toBe(20);
    expect(getLeftPositionVw(5, 0, 20, 10)).toBe(20);
  });

  test("column 1 starts at spacingSidesVw + spacingBetweenVw + 1 image width", () => {
    expect(getLeftPositionVw(2, 1, 20, 10)).toBe(30 + (1 * (100 - 50)) / 2);

    expect(getLeftPositionVw(3, 1, 20, 10)).toBe(30 + (1 * (100 - 60)) / 3);

    expect(getLeftPositionVw(4, 1, 20, 10)).toBe(30 + (1 * (100 - 70)) / 4);

    expect(getLeftPositionVw(5, 1, 20, 10)).toBe(30 + (1 * (100 - 80)) / 5);
  });

  test("column 2 starts at spacingSidesVw + 2 spacingBetweenVw + 2 image widths", () => {
    expect(getLeftPositionVw(3, 2, 20, 10)).toBe(40 + (2 * (100 - 60)) / 3);

    expect(getLeftPositionVw(4, 2, 20, 10)).toBe(40 + (2 * (100 - 70)) / 4);

    expect(getLeftPositionVw(5, 2, 20, 10)).toBe(40 + (2 * (100 - 80)) / 5);
  });

  test("column 3 starts at spacingSidesVw + 3 spacingBetweenVw + 3 image widths", () => {
    expect(getLeftPositionVw(4, 3, 20, 10)).toBe(50 + (3 * (100 - 70)) / 4);

    expect(getLeftPositionVw(5, 3, 20, 10)).toBe(50 + (3 * (100 - 80)) / 5);
  });

  test("column 4 starts at spacingSidesVw + 4 spacingBetweenVw + 4 image widths", () => {
    expect(getLeftPositionVw(5, 4, 20, 10)).toBe(60 + (4 * (100 - 80)) / 5);
  });
});
