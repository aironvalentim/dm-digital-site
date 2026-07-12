import { FaWhatsapp } from "react-icons/fa";
import { whatsappLink } from "../data/content";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      onClick={() => window.dataLayer?.push({ event: "whatsapp_click", location: "floating_button" })}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] text-white px-4 py-3.5 shadow-lg shadow-black/15 hover:scale-105 transition-transform duration-200"
    >
      <FaWhatsapp size={22} />
      <span className="hidden sm:inline font-body text-sm font-semibold pr-1">Fale conosco</span>
    </a>
  );
}
