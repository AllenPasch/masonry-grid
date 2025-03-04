import { BREAKPOINTS_PX, MAX_COLUMN_COUNT } from "./constant";
import { getColumnCount } from "./getColumnCount";

describe("getColumnCount()", () => {
  test("Tiny screens only have 1 column.", () => {
    expect(getColumnCount(0)).toBe(1);
    expect(getColumnCount(1)).toBe(1);
    expect(getColumnCount(10)).toBe(1);
  });

  test("Screens smaller than the 2nd breakpoint only have 1 column.", () => {
    expect(getColumnCount(BREAKPOINTS_PX[1] - 1)).toBe(1);
    expect(getColumnCount(BREAKPOINTS_PX[1] - 10)).toBe(1);
  });

  test("Screens at least as big as the 2nd breakpoint have 2 columns.", () => {
    expect(getColumnCount(BREAKPOINTS_PX[1])).toBe(2);
    expect(getColumnCount(BREAKPOINTS_PX[1] + 1)).toBe(2);
    expect(getColumnCount(BREAKPOINTS_PX[1] + 10)).toBe(2);
  });

  test("Screens smaller than the 3nd breakpoint only have 2 column.", () => {
    expect(getColumnCount(BREAKPOINTS_PX[2] - 1)).toBe(2);
    expect(getColumnCount(BREAKPOINTS_PX[2] - 10)).toBe(2);
  });

  test("Screens at least as big as the last breakpoint have MAX_COLUMN_COUNT columns.", () => {
    // Arrange
    const lastBreakpointPx = BREAKPOINTS_PX[MAX_COLUMN_COUNT - 1];

    // Act & Assert
    expect(getColumnCount(lastBreakpointPx)).toBe(MAX_COLUMN_COUNT);
    expect(getColumnCount(lastBreakpointPx + 1)).toBe(MAX_COLUMN_COUNT);
    expect(getColumnCount(lastBreakpointPx + 10)).toBe(MAX_COLUMN_COUNT);
  });

  test("Giant screens have MAX_COLUMN_COUNT columns.", () => {
    expect(getColumnCount(10000)).toBe(MAX_COLUMN_COUNT);
  });
});
