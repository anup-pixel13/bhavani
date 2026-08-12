import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

/**
 * Manages scroll position for SPA navigation.
 *
 * Behaviour:
 *  - Browser back/forward  → restores saved scroll position
 *  - Normal forward nav    → scrolls to top
 *  - Hash anchor links     → browser handles natively
 */

const scrollPositions = new Map();

export function useScrollRestoration() {
  const location = useLocation();
  const prevKeyRef = useRef(null);
  const prevPathRef = useRef(null);

  useEffect(() => {
    const key = location.key;
    const path = location.pathname;
    const navigationType = window.history.state?.navigationType;

    // Save scroll position of the page we are leaving
    if (prevKeyRef.current && prevKeyRef.current !== key) {
      scrollPositions.set(prevKeyRef.current, window.scrollY);
    }

    // Decide where to scroll on the new page
    const isHashNav = location.hash !== "";
    const isPop = window.history.state?.idx !== undefined &&
      prevKeyRef.current !== null;

    if (isHashNav) {
      // Let the browser handle anchor scrolling natively
    } else if (prevKeyRef.current !== null && scrollPositions.has(key)) {
      // Back/forward — restore
      const savedY = scrollPositions.get(key);
      requestAnimationFrame(() => {
        window.scrollTo({ top: savedY, behavior: "instant" });
      });
    } else {
      // Normal forward navigation — go to top
      window.scrollTo({ top: 0, behavior: "instant" });
    }

    prevKeyRef.current = key;
    prevPathRef.current = path;
  }, [location]);
}
