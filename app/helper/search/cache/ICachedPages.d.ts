import type { IPage } from "~/helper/grid";

export interface ICachedPages {
  [query: string]: (IPage | undefined)[];
}
