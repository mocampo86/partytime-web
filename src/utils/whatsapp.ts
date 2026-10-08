const whatsAppNumber = import.meta.env.VITE_WHATSAPP_NUMBER?.replace(/\D/g, '');

export function getWhatsAppUrl(message: string) {
  return whatsAppNumber
    ? `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(message)}`
    : null;
}
