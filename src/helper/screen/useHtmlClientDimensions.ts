import { useEffect, useMemo, useState } from "react";

import { getHtmlClientDimensions } from ".";
import type { IHtmlClientDimensions } from ".";

export const useHtmlClientDimensions = (): IHtmlClientDimensions => {
  const initialDimensions: IHtmlClientDimensions = useMemo(
    getHtmlClientDimensions,
    []
  );
  const [dimensions, setDimensions] = useState(initialDimensions);

  useEffect(() => {
    const onResize = () => setDimensions(getHtmlClientDimensions());

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return dimensions;
};
