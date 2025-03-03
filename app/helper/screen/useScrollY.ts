import { useEffect, useState } from "react";

import { HAS_WINDOW } from "./constant";
import { windowNode } from "./windowNode";

export const useScrollY = (): number => {
  const [scrollY, setScrollY] = useState(windowNode?.scrollY || 0);

  useEffect(() => {
    if (!HAS_WINDOW) return;

    let timeout: NodeJS.Timeout | undefined;

    const onScroll = () => {
      if (!timeout) {
        timeout = setTimeout(() => {
          timeout = undefined;
          setScrollY(window.scrollY);
        }, 5);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    // Recalculate the scroll position, after the user goes back.
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return scrollY;
};
