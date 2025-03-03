import { cachedPages } from "./cache";
import { type ISearchResults } from ".";

export const getSearchResults = (searchQuery: string): ISearchResults => ({
  query: searchQuery,
  pages: cachedPages[searchQuery] || [],
});
