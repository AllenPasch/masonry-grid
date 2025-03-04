import { SPACING_TOP_VW } from "../layout";
import { initializeColumnTopVws } from "./initializeColumnTopVws";

test("initializeColumnTopVws()", () => {
  expect(initializeColumnTopVws(1)).toEqual([SPACING_TOP_VW]);
  expect(initializeColumnTopVws(2)).toEqual([SPACING_TOP_VW, SPACING_TOP_VW]);
  expect(initializeColumnTopVws(3)).toEqual([
    SPACING_TOP_VW,
    SPACING_TOP_VW,
    SPACING_TOP_VW,
  ]);
  expect(initializeColumnTopVws(4)).toEqual([
    SPACING_TOP_VW,
    SPACING_TOP_VW,
    SPACING_TOP_VW,
    SPACING_TOP_VW,
  ]);
  expect(initializeColumnTopVws(5)).toEqual([
    SPACING_TOP_VW,
    SPACING_TOP_VW,
    SPACING_TOP_VW,
    SPACING_TOP_VW,
    SPACING_TOP_VW,
  ]);
});
