import { useEffect } from "react";

/**
 * Sets document.title and meta description for each page.
 * Falls back gracefully if the meta tag doesn't exist.
 *
 * @param {string} title       - Page title (appended with site name)
 * @param {string} description - Meta description content
 */
export function useSEO(title, description) {
  useEffect(() => {
    const siteName = "Bhavani Enterprises";
    document.title = title
      ? `${title} | ${siteName}`
      : `${siteName} | Security & Networking Solutions in Navi Mumbai`;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    if (description) metaDesc.setAttribute("content", description);
  }, [title, description]);
}
