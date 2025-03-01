import { fillPage } from "@/helper/grid";
import type { Action, IState } from ".";

export const reducer = (state: IState, action: Action): IState => {
  const { search } = state;
  const { results } = search;

  if (action.type === "addPageResults") {
    const { query, photos, pageNumber } = action;

    const previousPage = results[query].pages[pageNumber - 1];
    const page = fillPage(previousPage, photos.photos);

    const pages = [...results[query].pages];
    pages[pageNumber] = page;

    return {
      ...state,
      search: {
        ...search,
        results: {
          ...results,
          [query]: {
            ...results[query],
            pages,
          },
        },
      },
    };
  }

  return state;
};
