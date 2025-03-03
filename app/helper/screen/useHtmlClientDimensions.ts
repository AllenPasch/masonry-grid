import { useEffect, useMemo, useState } from "react";

import { HAS_WINDOW } from "./constant";
import { getHtmlClientDimensions } from "./getHtmlClientDimensions";
import { type IHtmlClientDimensions } from ".";

export const useHtmlClientDimensions = (): IHtmlClientDimensions => {
  const initialDimensions: IHtmlClientDimensions = useMemo(
    getHtmlClientDimensions,
    []
  );
  const [dimensions, setDimensions] = useState(initialDimensions);

  useEffect(() => {
    if (!HAS_WINDOW) {
      return;
    }

    const onResize = () => setDimensions(getHtmlClientDimensions());

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return dimensions;
};
