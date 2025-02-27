/**
 * Horizontal spacing on the left and right sides of the window.
 */
export const SPACING_SIDES_PX = 24;

/**
 * Horizontal spacing between photos.
 */
export const SPACING_BETWEEN_PX = 12;

export const getLeftPosition = (
  columnCount: number,
  columnIndex: number,
  spacingSidesPx: number = SPACING_SIDES_PX,
  spacingBetweenPx: number = SPACING_BETWEEN_PX
): string => {
  return `${spacingSidesPx}px`;
};
