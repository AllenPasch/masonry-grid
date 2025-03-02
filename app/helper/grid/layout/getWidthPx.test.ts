import { getWidthPx } from ".";

describe("getWidthPx()", () => {
  test("With 1 column, use the whole window, minus 2 spacingSidesVw.", () => {
    // Arrange
    const columnCount = 1;
    const htmlClientWidth = 1000;
    const spacingSidesVw = 20;
    const spacingBetweenVw = 10;

    const totalSpacingVw = 2 * spacingSidesVw;
    const availableWidth = htmlClientWidth * (1 - totalSpacingVw / 100);

    // Act
    const widthPx = getWidthPx(
      columnCount,
      htmlClientWidth,
      spacingSidesVw,
      spacingBetweenVw
    );

    // Assert
    expect(widthPx).toBeCloseTo(availableWidth);
  });

  test("With 2 columns, share the whole window, minus 2 spacingSidesVw and 1 spacingBetweenVw.", () => {
    // Arrange
    const columnCount = 2;
    const htmlClientWidth = 1000;
    const spacingSidesVw = 20;
    const spacingBetweenVw = 10;

    const totalSpacingVw = 2 * spacingSidesVw + 1 * spacingBetweenVw;
    const availableWidth = htmlClientWidth * (1 - totalSpacingVw / 100);

    // Act
    const widthPx = getWidthPx(
      columnCount,
      htmlClientWidth,
      spacingSidesVw,
      spacingBetweenVw
    );

    // Assert
    expect(widthPx).toBeCloseTo(availableWidth / columnCount);
  });

  test("With 3 columns, share the whole window, minus 2 spacingSidesVw and 2 spacingBetweenVw.", () => {
    // Arrange
    const columnCount = 3;
    const htmlClientWidth = 1000;
    const spacingSidesVw = 20;
    const spacingBetweenVw = 10;

    const totalSpacingVw = 2 * spacingSidesVw + 2 * spacingBetweenVw;
    const availableWidth = htmlClientWidth * (1 - totalSpacingVw / 100);

    // Act
    const widthPx = getWidthPx(
      columnCount,
      htmlClientWidth,
      spacingSidesVw,
      spacingBetweenVw
    );

    // Assert
    expect(widthPx).toBeCloseTo(availableWidth / columnCount);
  });

  test("With 4 columns, share the whole window, minus 2 spacingSidesVw and 3 spacingBetweenVw.", () => {
    // Arrange
    const columnCount = 4;
    const htmlClientWidth = 1000;
    const spacingSidesVw = 20;
    const spacingBetweenVw = 10;

    const totalSpacingVw = 2 * spacingSidesVw + 3 * spacingBetweenVw;
    const availableWidth = htmlClientWidth * (1 - totalSpacingVw / 100);

    // Act
    const widthPx = getWidthPx(
      columnCount,
      htmlClientWidth,
      spacingSidesVw,
      spacingBetweenVw
    );

    // Assert
    expect(widthPx).toBeCloseTo(availableWidth / columnCount);
  });

  test("With 5 columns, share the whole window, minus 2 spacingSidesVw and 4 spacingBetweenVw.", () => {
    // Arrange
    const columnCount = 5;
    const htmlClientWidth = 1000;
    const spacingSidesVw = 20;
    const spacingBetweenVw = 10;

    const totalSpacingVw = 2 * spacingSidesVw + 4 * spacingBetweenVw;
    const availableWidth = htmlClientWidth * (1 - totalSpacingVw / 100);

    // Act
    const widthPx = getWidthPx(
      columnCount,
      htmlClientWidth,
      spacingSidesVw,
      spacingBetweenVw
    );

    // Assert
    expect(widthPx).toBeCloseTo(availableWidth / columnCount);
  });
});
