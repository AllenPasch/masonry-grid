const BREAKPOINT_XSM_PX = 0;
const BREAKPOINT_SM_PX = 576;
const BREAKPOINT_MD_PX = 768;
const BREAKPOINT_LG_PX = 992;
const BREAKPOINT_XL_PX = 1200;
const BREAKPOINT_XXL_PX = 1400;

export const BREAKPOINTS_PX = [
  BREAKPOINT_XSM_PX,
  BREAKPOINT_SM_PX,
  BREAKPOINT_MD_PX,
  BREAKPOINT_LG_PX,
  BREAKPOINT_XL_PX,
  BREAKPOINT_XXL_PX,
];

/**
 * Number of columns shown at the widest breakpoint.
 */
export const MAX_COLUMN_COUNT = BREAKPOINTS_PX.length;

/**
 * Horizontal spacing on the left and right sides of the window.
 */
export const SPACING_SIDES_VW = 4;

/**
 * Vertical spacing at the top of the window.
 */
export const SPACING_TOP_VW = 4;

/**
 * Vertical spacing after the last photo in the grid.
 */
export const SPACING_BOTTOM_VW = 4;

/**
 * Spacing between photos.
 */
export const SPACING_BETWEEN_VW = 2;
