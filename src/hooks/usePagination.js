import { useState, useCallback, useRef, useEffect } from "react";

export function usePagination(items = [], initialPerPage = 6) {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(initialPerPage);
  const listTopRef = useRef(null);

  const pendingScrollRef = useRef(null); // "top" | "bottom" | null

  const totalPages = Math.max(1, Math.ceil(items.length / perPage));
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const start = (safeCurrentPage - 1) * perPage;
  const pageItems = items.slice(start, start + perPage);

  useEffect(() => {
    if (!pendingScrollRef.current) return;

    const action = pendingScrollRef.current;
    pendingScrollRef.current = null;

    if (!listTopRef.current) return;

    if (action === "top") {
      listTopRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (action === "bottom") {
      const el = listTopRef.current;
      const gridBottom = el.getBoundingClientRect().bottom + window.scrollY;
      const targetY = gridBottom - window.innerHeight + 40;
      window.scrollTo({ top: Math.max(0, targetY), behavior: "smooth" });
    }
  });

  // ── Used by pagination buttons — DOES scroll ──────────────
  const goToPage = useCallback(
    (page, direction = "forward") => {
      const clamped = Math.min(Math.max(1, page), totalPages);
      setCurrentPage(clamped);
      pendingScrollRef.current = direction === "prev" ? "bottom" : "top";
    },
    [totalPages]
  );

  // ── Used by search / category filter — does NOT scroll ────
  const resetToFirstPage = useCallback(() => {
    setCurrentPage(1);
    // intentionally no scroll
  }, []);

  const next = useCallback(() => {
    goToPage(safeCurrentPage + 1, "forward");
  }, [safeCurrentPage, goToPage]);

  const prev = useCallback(() => {
    goToPage(safeCurrentPage - 1, "prev");
  }, [safeCurrentPage, goToPage]);

  const changePerPage = useCallback((n) => {
    setPerPage(Number(n));
    setCurrentPage(1);
    pendingScrollRef.current = "top";
  }, []);

  return {
    currentPage: safeCurrentPage,
    totalPages,
    perPage,
    pageItems,
    totalItems: items.length,
    listTopRef,
    goToPage,
    resetToFirstPage,
    next,
    prev,
    changePerPage,
    hasPrev: safeCurrentPage > 1,
    hasNext: safeCurrentPage < totalPages,
  };
}