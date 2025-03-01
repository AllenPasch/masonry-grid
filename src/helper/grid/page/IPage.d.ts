import type { IBreakpoint, IPhotoBreakpoints } from "../breakpoint";

export interface IPage {
  readonly breakpoints: readonly IBreakpoint[];
  readonly photos: readonly IPhotoBreakpoints[];
  readonly morePages: boolean;
}
