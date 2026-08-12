import { company } from "../data/company";

const BASE_URL = "https://bhavanienterprises.in";

/**
 * Generate a standard page <title> string.
 * @param {string} pageTitle - The specific page title
 * @returns {string}
 */
export function buildTitle(pageTitle) {
  if (!pageTitle) return `${company.name} | ${company.tagline}`;
  return `${pageTitle} | ${company.name}`;
}

/**
 * Generate a canonical URL for a page.
 * @param {string} path - e.g. "/services"
 * @returns {string}
 */
export function canonicalUrl(path = "/") {
  return `${BASE_URL}${path}`;
}

/**
 * Standard Open Graph meta object.
 * @param {object} opts
 * @returns {object}
 */
export function buildOgMeta({
  title,
  description,
  path = "/",
  image = "/og-image.jpg",
} = {}) {
  return {
    title: title ?? buildTitle(""),
    description,
    url: canonicalUrl(path),
    image: `${BASE_URL}${image}`,
    siteName: company.name,
  };
}

export const BASE_DESCRIPTION =
  "Bhavani Enterprises provides professional CCTV installation, IP camera setup, networking, biometric access control, and AMC services across Navi Mumbai, Panvel, Kharghar, and Mumbai.";

export { BASE_URL };
