import type { ISearchResults } from ".";

export interface ISearch {
  readonly query: string;
  readonly results: { [query: string]: ISearchResults };
}
