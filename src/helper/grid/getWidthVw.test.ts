import { getWidthVw } from ".";

describe("getWidthVw()", () => {
  test("With 1 column, use the whole window, minus 2 spacingSidesVw.", () => {
    expect(getWidthVw(1, 20, 10)).toBe(100 - 2 * 20);
  });

  test("With 2 columns, share the whole window, minus 2 spacingSidesVw and 1 spacingBetweenVw.", () => {
    expect(getWidthVw(2, 20, 10)).toBe((100 - 50) / 2);
  });

  test("With 3 columns, share the whole window, minus 2 spacingSidesVw and 2 spacingBetweenVw.", () => {
    expect(getWidthVw(3, 20, 10)).toBe((100 - 60) / 3);
  });

  test("With 4 columns, share the whole window, minus 2 spacingSidesVw and 3 spacingBetweenVw.", () => {
    expect(getWidthVw(4, 20, 10)).toBe((100 - 70) / 4);
  });

  test("With 5 columns, share the whole window, minus 2 spacingSidesVw and 4 spacingBetweenVw.", () => {
    expect(getWidthVw(5, 20, 10)).toBe((100 - 80) / 5);
  });
});
