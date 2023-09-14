import { useEffect, useState } from "react";

export function useWindowDimensions() {
  const [height, setHeight] = useState(0);
  const handleScroll = () => {
    setHeight(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return height;
}
