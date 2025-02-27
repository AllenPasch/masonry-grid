import type { Photo } from "@/api/pexels";
import { getHeight } from ".";

describe("getHeight()", () => {
  test("a photo with half the width has half the height", () => {
    // Arrange
    const widthPx = 120;

    const photo = {
      width: 240,
      height: 60,
    } as Photo;

    // Act
    const heightPx = getHeight(widthPx, photo);

    // Assert
    expect(heightPx).toBe(30);
  });

  test("a photo with 0 dimensions should result in a height of 0, instead of NaN", () => {
    // Arrange
    const widthPx = 120;

    const photo = {
      width: 0,
      height: 0,
    } as Photo;

    // Act
    const heightPx = getHeight(widthPx, photo);

    // Assert
    expect(heightPx).toBe(0);
  });
});
