const windowNode =
  typeof window !== "undefined" ? window : ({} as unknown as Window);

export const getBackButtonTo = ({ history }: Window = windowNode) => {
  const stateIndex = history?.state?.idx;
  if (stateIndex && stateIndex > 0) {
    return -1;
  }

  return "/";
};
