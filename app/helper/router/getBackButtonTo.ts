import { windowNode } from "~/helper/screen";

export const getBackButtonTo = (window: Window | null = windowNode) => {
  const stateIndex = window?.history?.state?.idx;
  if (stateIndex && stateIndex > 0) {
    return -1;
  }

  return "/";
};
