import type { IPage } from "@/helper/grid";

export interface ISearchResults {
  readonly query: string;
  readonly pages: readonly (IPage | undefined)[];
}
