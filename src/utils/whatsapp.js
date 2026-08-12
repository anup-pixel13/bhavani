/**
 * Build a WhatsApp deep-link URL.
 *
 * @param {string} number  - Phone number with country code, digits only (e.g. "919867933763")
 * @param {string} message - Pre-filled message text
 * @returns {string} WhatsApp URL
 */
export function buildWhatsAppUrl(number, message = "") {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${encoded}`;
}
