import { getWidthCalcExpression } from ".";

describe("getWidthCalcExpression()", () => {
  test("with 1 column, use the whole window, minus 2 spacingSidesPx", () => {
    expect(getWidthCalcExpression(1, 20, 10)).toBe("(100vw - 40px)");
  });

  test("with 2 columns, share the whole window, minus 2 spacingSidesPx and 1 spacingBetweenPx", () => {
    expect(getWidthCalcExpression(2, 20, 10)).toBe("(100vw - 50px) / 2");
  });

  test("with 3 columns, share the whole window, minus 2 spacingSidesPx and 2 spacingBetweenPx", () => {
    expect(getWidthCalcExpression(3, 20, 10)).toBe("(100vw - 60px) / 3");
  });

  test("with 4 columns, share the whole window, minus 2 spacingSidesPx and 3 spacingBetweenPx", () => {
    expect(getWidthCalcExpression(4, 20, 10)).toBe("(100vw - 70px) / 4");
  });

  test("with 5 columns, share the whole window, minus 2 spacingSidesPx and 4 spacingBetweenPx", () => {
    expect(getWidthCalcExpression(5, 20, 10)).toBe("(100vw - 80px) / 5");
  });
});
