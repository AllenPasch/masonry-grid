import { windowNode } from "./windowNode";

export const getDevicePixelRatio = (): number =>
  windowNode?.devicePixelRatio || 1;
