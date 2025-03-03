import type { IPhoto } from ".";

export interface IPhotos {
  readonly next_page: string | number;
  readonly page: number;
  readonly photos: readonly IPhoto[];
}
