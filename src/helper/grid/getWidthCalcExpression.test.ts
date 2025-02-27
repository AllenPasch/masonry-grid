import { getWidthCalcExpression } from ".";

describe("getWidthCalcExpression()", () => {
  test("with 1 column, use the whole window, minus 2 spacingSidesVw", () => {
    expect(getWidthCalcExpression(1, 20, 10)).toBe("(100vw - 40vw)");
  });

  test("with 2 columns, share the whole window, minus 2 spacingSidesVw and 1 spacingBetweenVw", () => {
    expect(getWidthCalcExpression(2, 20, 10)).toBe("(100vw - 50vw) / 2");
  });

  test("with 3 columns, share the whole window, minus 2 spacingSidesVw and 2 spacingBetweenVw", () => {
    expect(getWidthCalcExpression(3, 20, 10)).toBe("(100vw - 60vw) / 3");
  });

  test("with 4 columns, share the whole window, minus 2 spacingSidesVw and 3 spacingBetweenVw", () => {
    expect(getWidthCalcExpression(4, 20, 10)).toBe("(100vw - 70vw) / 4");
  });

  test("with 5 columns, share the whole window, minus 2 spacingSidesVw and 4 spacingBetweenVw", () => {
    expect(getWidthCalcExpression(5, 20, 10)).toBe("(100vw - 80vw) / 5");
  });
});
