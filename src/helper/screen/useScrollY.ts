import { useEffect, useState } from "react";

const HAS_WINDOW = typeof window !== "undefined";

export const useScrollY = (): number => {
  const [scrollY, setScrollY] = useState(HAS_WINDOW ? window.scrollY : 0);

  useEffect(() => {
    if (!HAS_WINDOW) return;

    const onScroll = () => setScrollY(window.scrollY);

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return scrollY;
};
