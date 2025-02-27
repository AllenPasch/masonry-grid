import { getLeftPosition } from "./getLeftPosition";

describe("getLeftPosition()", () => {
  test("column 0 is just spacingSidesPx from the left", () => {
    expect(getLeftPosition(0, 0, 20, 10)).toBe("20px");
    expect(getLeftPosition(1, 0, 20, 10)).toBe("20px");
    expect(getLeftPosition(2, 0, 20, 10)).toBe("20px");
    expect(getLeftPosition(3, 0, 20, 10)).toBe("20px");
    expect(getLeftPosition(4, 0, 20, 10)).toBe("20px");
  });

  test("column 1 starts at spacingSidesPx + spacingBetweenPx + 1 image width", () => {
    expect(getLeftPosition(2, 1, 20, 10)).toBe("30px + 1 * (100vw - 50px) / 2");

    expect(getLeftPosition(3, 1, 20, 10)).toBe("30px + 1 * (100vw - 60px) / 3");

    expect(getLeftPosition(4, 1, 20, 10)).toBe("30px + 1 * (100vw - 70px) / 4");

    expect(getLeftPosition(5, 1, 20, 10)).toBe("30px + 1 * (100vw - 80px) / 5");
  });

  test("column 2 starts at spacingSidesPx + 2 spacingBetweenPx + 2 image widths", () => {
    expect(getLeftPosition(3, 2, 20, 10)).toBe("40px + 2 * (100vw - 60px) / 3");

    expect(getLeftPosition(4, 2, 20, 10)).toBe("40px + 2 * (100vw - 70px) / 4");

    expect(getLeftPosition(5, 2, 20, 10)).toBe("40px + 2 * (100vw - 80px) / 5");
  });

  test("column 3 starts at spacingSidesPx + 3 spacingBetweenPx + 3 image widths", () => {
    expect(getLeftPosition(4, 3, 20, 10)).toBe("50px + 3 * (100vw - 70px) / 4");

    expect(getLeftPosition(5, 3, 20, 10)).toBe("50px + 3 * (100vw - 80px) / 5");
  });

  test("column 4 starts at spacingSidesPx + 4 spacingBetweenPx + 4 image widths", () => {
    expect(getLeftPosition(5, 4, 20, 10)).toBe("60px + 4 * (100vw - 80px) / 5");
  });
});
