import { BREAKPOINTS_PX } from "./constant";
import { getBreakpointIndex } from "./getBreakpointIndex";

describe("getBreakpointIndex()", () => {
  test("Tiny screens use the breakpoint with index 0.", () => {
    expect(getBreakpointIndex(0)).toBe(0);
    expect(getBreakpointIndex(1)).toBe(0);
    expect(getBreakpointIndex(10)).toBe(0);
  });

  test("Screens smaller than the 2nd breakpoint use the breakpoint with index 0.", () => {
    expect(getBreakpointIndex(BREAKPOINTS_PX[1] - 1)).toBe(0);
    expect(getBreakpointIndex(BREAKPOINTS_PX[1] - 10)).toBe(0);
  });

  test("Screens at least as big as the 2nd breakpoint use the breakpoint with index 1.", () => {
    expect(getBreakpointIndex(BREAKPOINTS_PX[1])).toBe(1);
    expect(getBreakpointIndex(BREAKPOINTS_PX[1] + 1)).toBe(1);
    expect(getBreakpointIndex(BREAKPOINTS_PX[1] + 10)).toBe(1);
  });

  test("Screens smaller than the 3nd breakpoint use the breakpoint with index 1.", () => {
    expect(getBreakpointIndex(BREAKPOINTS_PX[2] - 1)).toBe(1);
    expect(getBreakpointIndex(BREAKPOINTS_PX[2] - 10)).toBe(1);
  });

  test("Screens at least as big as the last breakpoint use the last breakpoint index.", () => {
    // Arrange
    const lastBreakpointIndex = BREAKPOINTS_PX.length - 1;
    const lastBreakpointPx = BREAKPOINTS_PX[lastBreakpointIndex];

    // Act & Assert
    expect(getBreakpointIndex(lastBreakpointPx)).toBe(lastBreakpointIndex);
    expect(getBreakpointIndex(lastBreakpointPx + 1)).toBe(lastBreakpointIndex);
    expect(getBreakpointIndex(lastBreakpointPx + 10)).toBe(lastBreakpointIndex);
  });

  test("Giant screens use the last breakpoint index.", () => {
    expect(getBreakpointIndex(10000)).toBe(BREAKPOINTS_PX.length - 1);
  });
});
