import { SPACING_TOP_VW } from "../layout";
import { initializeNextColumnTopVws } from ".";

test("initializeNextColumnTopVws()", () => {
  expect(initializeNextColumnTopVws(1)).toEqual([SPACING_TOP_VW]);
  expect(initializeNextColumnTopVws(2)).toEqual([
    SPACING_TOP_VW,
    SPACING_TOP_VW,
  ]);
  expect(initializeNextColumnTopVws(3)).toEqual([
    SPACING_TOP_VW,
    SPACING_TOP_VW,
    SPACING_TOP_VW,
  ]);
  expect(initializeNextColumnTopVws(4)).toEqual([
    SPACING_TOP_VW,
    SPACING_TOP_VW,
    SPACING_TOP_VW,
    SPACING_TOP_VW,
  ]);
  expect(initializeNextColumnTopVws(5)).toEqual([
    SPACING_TOP_VW,
    SPACING_TOP_VW,
    SPACING_TOP_VW,
    SPACING_TOP_VW,
    SPACING_TOP_VW,
  ]);
});
