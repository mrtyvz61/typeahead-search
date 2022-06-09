import { useEffect, useRef, useCallback } from "react";

function useOutsideClick(ref, handler, when = true) {
  const savedHandler = useRef(handler);

  const memoizedCallback = useCallback((e) => {
    if (ref && ref.current && !ref.current.contains(e.target)) {
      savedHandler.current(e);
    }
  }, []);

  useEffect(() => {
    savedHandler.current = handler;
  });

  useEffect(() => {
    if (when) {
      document.addEventListener("click", memoizedCallback, true);
      document.addEventListener("ontouchstart", memoizedCallback, true);

      return () => {
        document.removeEventListener("click", memoizedCallback, true);
        document.removeEventListener("ontouchstart", memoizedCallback, true);
      };
    }
  }, [ref, handler, when]);
}

export { useOutsideClick };
