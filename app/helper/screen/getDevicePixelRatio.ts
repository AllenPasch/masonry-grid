import { windowNode } from ".";

export const getDevicePixelRatio = (matchServer: boolean = false): number =>
  (!matchServer && windowNode?.devicePixelRatio) || 1;
