import { getBackButtonTo } from "./getBackButtonTo";

describe("getBackButtonTo", () => {
  test("Go back, if window.history.state says there's 1 previous page.", () => {
    // Arrange
    const window = {
      history: {
        state: {
          idx: 1,
        },
      },
    } as Window;

    // Act
    const to = getBackButtonTo(window);

    // Assert
    expect(to).toBe(-1);
  });

  test("Go back, if window.history.state says there's several previous pages.", () => {
    // Arrange
    const window = {
      history: {
        state: {
          idx: 4,
        },
      },
    } as Window;

    // Act
    const to = getBackButtonTo(window);

    // Assert
    expect(to).toBe(-1);
  });

  test(`Go to /, if window.history.state says this is the 1st page.
        The user may have loaded the page directly or opened the page in a new window.`, () => {
    // Arrange
    const window = {
      history: {
        state: {
          idx: 0,
        },
      },
    } as Window;

    // Act
    const to = getBackButtonTo(window);

    // Assert
    expect(to).toBe("/");
  });
});
