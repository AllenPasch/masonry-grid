import type { IState } from ".";

export const initialState: IState = {
  search: {
    query: "",
    results: {
      "": {
        query: "",
        pages: [],
      },
    },
  },
  cachedPhotoSizes: {},
};
