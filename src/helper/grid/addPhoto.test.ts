import type { Photo } from "@/api/pexels";
import { addPhoto } from ".";

describe("addPhoto()", () => {
  test("at the top of the page, the 1st photo is added to column 0", () => {
    // Arrange
    const nextColumnTopVws = [0, 0, 0, 0];

    const photo = {
      width: 240,
      height: 120,
    } as Photo;

    const spacingSidesVw = 8;
    const spacingBetweenVw = 7;

    const expectedPhotoWidthVw = (100 - (2 * 8 + 3 * 7)) / 4;
    const expectedPhotoHeightVw = 0.5 * expectedPhotoWidthVw;

    // Act
    const result = addPhoto(
      nextColumnTopVws,
      photo,
      spacingSidesVw,
      spacingBetweenVw
    );

    // Assert
    expect(result.columnIndex).toBe(0);
    expect(result.widthVw).toBe(expectedPhotoWidthVw);
    expect(result.heightVw).toBe(expectedPhotoHeightVw);
    expect(result.nextColumnTopVws).toEqual([
      expectedPhotoHeightVw + spacingBetweenVw,
      0,
      0,
      0,
    ]);
  });

  test("at the top of the page, the 2nd photo is added to column 1", () => {
    // Arrange
    const nextColumnTopVws = [14.875, 0, 0, 0];

    const photo = {
      width: 240,
      height: 480,
    } as Photo;

    const spacingSidesVw = 8;
    const spacingBetweenVw = 7;

    const expectedPhotoWidthVw = (100 - (2 * 8 + 3 * 7)) / 4;
    const expectedPhotoHeightVw = 2 * expectedPhotoWidthVw;

    // Act
    const result = addPhoto(
      nextColumnTopVws,
      photo,
      spacingSidesVw,
      spacingBetweenVw
    );

    // Assert
    expect(result.columnIndex).toBe(1);
    expect(result.widthVw).toBe(expectedPhotoWidthVw);
    expect(result.heightVw).toBe(expectedPhotoHeightVw);
    expect(result.nextColumnTopVws).toEqual([
      14.875,
      expectedPhotoHeightVw + spacingBetweenVw,
      0,
      0,
    ]);
  });
});
