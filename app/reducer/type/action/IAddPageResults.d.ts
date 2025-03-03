import type { IPhotos } from "~/api/pexels";

export interface IAddPageResults {
  readonly type: "addPageResults";
  readonly query: string;
  readonly pageNumber: number;
  readonly photos: IPhotos;
}
