import { useEffect, useState } from "react";

const HAS_WINDOW = typeof window !== "undefined";

export const useScrollY = (): number => {
  const [scrollY, setScrollY] = useState(HAS_WINDOW ? window.scrollY : 0);

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
