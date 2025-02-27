import { getWidthPx } from ".";

describe("getWidthPx()", () => {
  test("with 1 column, use the whole window, minus 2 spacingSidesPx", () => {
    expect(getWidthPx(1, 1000, 20, 10)).toBe(1000 - 2 * 20);
  });

  test("with 2 columns, share the whole window, minus 2 spacingSidesPx and 1 spacingBetweenPx", () => {
    expect(getWidthPx(2, 1000, 20, 10)).toBe((1000 - 2 * 20 - 1 * 10) / 2);
  });

  test("with 3 columns, share the whole window, minus 2 spacingSidesPx and 2 spacingBetweenPx", () => {
    expect(getWidthPx(3, 1000, 20, 10)).toBe((1000 - 2 * 20 - 2 * 10) / 3);
  });

  test("with 4 columns, share the whole window, minus 2 spacingSidesPx and 3 spacingBetweenPx", () => {
    expect(getWidthPx(4, 1000, 20, 10)).toBe((1000 - 2 * 20 - 3 * 10) / 4);
  });

  test("with 5 columns, share the whole window, minus 2 spacingSidesPx and 4 spacingBetweenPx", () => {
    expect(getWidthPx(5, 1000, 20, 10)).toBe((1000 - 2 * 20 - 4 * 10) / 5);
  });
});
