import { useEffect } from "react";

function ScrollToTop() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return null;
}

export default ScrollToTop;
