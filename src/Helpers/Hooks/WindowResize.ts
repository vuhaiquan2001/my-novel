import { useEffect } from "react";
type CallbackFunction = () => void;
function useDebouncedResize(callback: CallbackFunction, delay: number = 0) {
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const resizeHandler = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(callback, delay);
    };

    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
      clearTimeout(timeoutId);
    };
  }, [callback, delay]);
}

export default useDebouncedResize;
