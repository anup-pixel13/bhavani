import { useState, useCallback, useRef } from "react";

/**
 * Generic pagination hook.
 *
 * @param {Array}  items        - Full array of items to paginate
 * @param {number} initialPerPage - Items per page (default 6)
 * @returns pagination state + helpers
 */
export function usePagination(items = [], initialPerPage = 6) {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(initialPerPage);
  const listTopRef = useRef(null);

  const totalPages = Math.max(1, Math.ceil(items.length / perPage));

  // Clamp current page when perPage changes
  const safeCurrentPage = Math.min(currentPage, totalPages);

  const start = (safeCurrentPage - 1) * perPage;
  const pageItems = items.slice(start, start + perPage);

  /**
   * Scroll to the top of the product list (for Next / direct page clicks).
   */
  const scrollToListTop = useCallback(() => {
    if (listTopRef.current) {
      listTopRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  /**
   * Scroll to near the bottom of the list / pagination controls
   * (for Previous button clicks — rule: go to bottom of previous page).
   */
  const scrollToListBottom = useCallback(() => {
    if (listTopRef.current) {
      const el = listTopRef.current;
      const rect = el.getBoundingClientRect();
      const approxBottom = window.scrollY + rect.top + el.offsetHeight;
      window.scrollTo({ top: approxBottom, behavior: "smooth" });
    }
  }, []);

  const goToPage = useCallback(
    (page, direction = "forward") => {
      const clamped = Math.min(Math.max(1, page), totalPages);
      setCurrentPage(clamped);
      if (direction === "prev") {
        scrollToListBottom();
      } else {
        scrollToListTop();
      }
    },
    [totalPages, scrollToListTop, scrollToListBottom]
  );

  const next = useCallback(() => {
    goToPage(safeCurrentPage + 1, "forward");
  }, [safeCurrentPage, goToPage]);

  const prev = useCallback(() => {
    goToPage(safeCurrentPage - 1, "prev");
  }, [safeCurrentPage, goToPage]);

  const changePerPage = useCallback(
    (n) => {
      setPerPage(Number(n));
      setCurrentPage(1);
      scrollToListTop();
    },
    [scrollToListTop]
  );

  return {
    currentPage: safeCurrentPage,
    totalPages,
    perPage,
    pageItems,
    totalItems: items.length,
    listTopRef,
    goToPage,
    next,
    prev,
    changePerPage,
    hasPrev: safeCurrentPage > 1,
    hasNext: safeCurrentPage < totalPages,
  };
}
