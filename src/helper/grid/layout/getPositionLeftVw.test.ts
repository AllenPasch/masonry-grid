import { getPositionLeftVw } from ".";

describe("getPositionLeftVw()", () => {
  test("Column 0 is just spacingSidesVw from the left.", () => {
    expect(getPositionLeftVw(1, 0, 20, 10)).toBe(20);
    expect(getPositionLeftVw(2, 0, 20, 10)).toBe(20);
    expect(getPositionLeftVw(3, 0, 20, 10)).toBe(20);
    expect(getPositionLeftVw(4, 0, 20, 10)).toBe(20);
    expect(getPositionLeftVw(5, 0, 20, 10)).toBe(20);
  });

  test("Column 1 starts at spacingSidesVw + spacingBetweenVw + 1 photo width.", () => {
    expect(getPositionLeftVw(2, 1, 20, 10)).toBe(30 + (1 * (100 - 50)) / 2);

    expect(getPositionLeftVw(3, 1, 20, 10)).toBe(30 + (1 * (100 - 60)) / 3);

    expect(getPositionLeftVw(4, 1, 20, 10)).toBe(30 + (1 * (100 - 70)) / 4);

    expect(getPositionLeftVw(5, 1, 20, 10)).toBe(30 + (1 * (100 - 80)) / 5);
  });

  test("Column 2 starts at spacingSidesVw + 2 spacingBetweenVw + 2 photo widths.", () => {
    expect(getPositionLeftVw(3, 2, 20, 10)).toBe(40 + (2 * (100 - 60)) / 3);

    expect(getPositionLeftVw(4, 2, 20, 10)).toBe(40 + (2 * (100 - 70)) / 4);

    expect(getPositionLeftVw(5, 2, 20, 10)).toBe(40 + (2 * (100 - 80)) / 5);
  });

  test("Column 3 starts at spacingSidesVw + 3 spacingBetweenVw + 3 photo widths.", () => {
    expect(getPositionLeftVw(4, 3, 20, 10)).toBe(50 + (3 * (100 - 70)) / 4);

    expect(getPositionLeftVw(5, 3, 20, 10)).toBe(50 + (3 * (100 - 80)) / 5);
  });

  test("Column 4 starts at spacingSidesVw + 4 spacingBetweenVw + 4 photo widths.", () => {
    expect(getPositionLeftVw(5, 4, 20, 10)).toBe(60 + (4 * (100 - 80)) / 5);
  });
});
