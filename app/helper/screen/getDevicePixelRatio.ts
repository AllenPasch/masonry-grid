import { windowNode } from ".";

export const getDevicePixelRatio = (): number =>
  windowNode?.devicePixelRatio || 1;
