import type { Photo } from "@/api/pexels";
import { getPhotoUrl } from ".";
import type { ICachedPhotoSize } from ".";

describe("getPhotoUrl()", () => {
  test("When devicePixelRatio is 1, it does not need to be included in the URL.", () => {
    // Arrange
    const photo = {
      width: 4640,
      src: {
        original:
          "https://images.pexels.com/photos/30930147/pexels-photo-30930147.jpeg",
      },
    } as Photo;

    const size: ICachedPhotoSize = {
      devicePixelRatio: 1,
      widthPx: 360,
    };

    // Act
    const url = getPhotoUrl(photo, size);

    // Assert
    expect(url).toBe(
      "https://images.pexels.com/photos/30930147/pexels-photo-30930147.jpeg?auto=compress&cs=tinysrgb&w=360"
    );
  });

  test("When devicePixelRatio is more than 1, include it in the URL.", () => {
    // Arrange
    const photo = {
      width: 4640,
      src: {
        original:
          "https://images.pexels.com/photos/30930147/pexels-photo-30930147.jpeg",
      },
    } as Photo;

    const size: ICachedPhotoSize = {
      devicePixelRatio: 2.5,
      widthPx: 360,
    };

    // Act
    const url = getPhotoUrl(photo, size);

    // Assert
    expect(url).toBe(
      "https://images.pexels.com/photos/30930147/pexels-photo-30930147.jpeg?auto=compress&cs=tinysrgb&dpr=2.5&w=360"
    );
  });

  test(`When the desired (devicePixelRatio * widthPx) exceeds the original photo width, do not include the devicePixelRatio or widthPx in the URL.
        That just causes the backend to upscale the image, reducing performance, without any quality improvements.`, () => {
    // Arrange
    const photo = {
      width: 4640,
      src: {
        original:
          "https://images.pexels.com/photos/30930147/pexels-photo-30930147.jpeg",
      },
    } as Photo;

    const size: ICachedPhotoSize = {
      devicePixelRatio: 3,
      widthPx: 2000,
    };

    // Act
    const url = getPhotoUrl(photo, size);

    // Assert
    expect(url).toBe(
      "https://images.pexels.com/photos/30930147/pexels-photo-30930147.jpeg?auto=compress&cs=tinysrgb"
    );
  });

  test("When widthPx is just under a full integer, round widthPx up to the nearest integer.", () => {
    // Arrange
    const photo = {
      width: 4640,
      src: {
        original:
          "https://images.pexels.com/photos/30930147/pexels-photo-30930147.jpeg",
      },
    } as Photo;

    const size: ICachedPhotoSize = {
      devicePixelRatio: 1,
      widthPx: 359.9,
    };

    // Act
    const url = getPhotoUrl(photo, size);

    // Assert
    expect(url).toBe(
      "https://images.pexels.com/photos/30930147/pexels-photo-30930147.jpeg?auto=compress&cs=tinysrgb&w=360"
    );
  });

  test(`When widthPx is 0.3 less than a full integer, round widthPx down to the nearest integer.
        This is just a performance hack; I'm not sure if it's really worth it.`, () => {
    // Arrange
    const photo = {
      width: 4640,
      src: {
        original:
          "https://images.pexels.com/photos/30930147/pexels-photo-30930147.jpeg",
      },
    } as Photo;

    const size: ICachedPhotoSize = {
      devicePixelRatio: 1,
      widthPx: 359.7,
    };

    // Act
    const url = getPhotoUrl(photo, size);

    // Assert
    expect(url).toBe(
      "https://images.pexels.com/photos/30930147/pexels-photo-30930147.jpeg?auto=compress&cs=tinysrgb&w=359"
    );
  });
});
