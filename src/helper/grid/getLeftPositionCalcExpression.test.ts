import { getLeftPositionCalcExpression } from ".";

describe("getLeftPositionCalcExpression()", () => {
  test("column 0 is just spacingSidesVw from the left", () => {
    expect(getLeftPositionCalcExpression(0, 0, 20, 10)).toBe("20vw");
    expect(getLeftPositionCalcExpression(1, 0, 20, 10)).toBe("20vw");
    expect(getLeftPositionCalcExpression(2, 0, 20, 10)).toBe("20vw");
    expect(getLeftPositionCalcExpression(3, 0, 20, 10)).toBe("20vw");
    expect(getLeftPositionCalcExpression(4, 0, 20, 10)).toBe("20vw");
  });

  test("column 1 starts at spacingSidesVw + spacingBetweenVw + 1 image width", () => {
    expect(getLeftPositionCalcExpression(2, 1, 20, 10)).toBe("30vw + 1 * (100vw - 50vw) / 2");

    expect(getLeftPositionCalcExpression(3, 1, 20, 10)).toBe("30vw + 1 * (100vw - 60vw) / 3");

    expect(getLeftPositionCalcExpression(4, 1, 20, 10)).toBe("30vw + 1 * (100vw - 70vw) / 4");

    expect(getLeftPositionCalcExpression(5, 1, 20, 10)).toBe("30vw + 1 * (100vw - 80vw) / 5");
  });

  test("column 2 starts at spacingSidesVw + 2 spacingBetweenVw + 2 image widths", () => {
    expect(getLeftPositionCalcExpression(3, 2, 20, 10)).toBe("40vw + 2 * (100vw - 60vw) / 3");

    expect(getLeftPositionCalcExpression(4, 2, 20, 10)).toBe("40vw + 2 * (100vw - 70vw) / 4");

    expect(getLeftPositionCalcExpression(5, 2, 20, 10)).toBe("40vw + 2 * (100vw - 80vw) / 5");
  });

  test("column 3 starts at spacingSidesVw + 3 spacingBetweenVw + 3 image widths", () => {
    expect(getLeftPositionCalcExpression(4, 3, 20, 10)).toBe("50vw + 3 * (100vw - 70vw) / 4");

    expect(getLeftPositionCalcExpression(5, 3, 20, 10)).toBe("50vw + 3 * (100vw - 80vw) / 5");
  });

  test("column 4 starts at spacingSidesVw + 4 spacingBetweenVw + 4 image widths", () => {
    expect(getLeftPositionCalcExpression(5, 4, 20, 10)).toBe("60vw + 4 * (100vw - 80vw) / 5");
  });
});
