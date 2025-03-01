import { useEffect, useState } from "react";

import { getHtmlClientWidth } from ".";

export const useHtmlClientWidth = (): number => {
  const [htmlClientWidth, setHtmlClientWidth] = useState(getHtmlClientWidth());

  useEffect(() => {
    const onResize = () => setHtmlClientWidth(getHtmlClientWidth());

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return htmlClientWidth;
};
