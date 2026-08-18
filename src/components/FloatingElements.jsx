import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { HiArrowUp, HiHome, HiStar, HiOutlineViewGrid, HiOutlineUser, HiOutlineMail, HiOutlineTicket } from "react-icons/hi";
import { whatsappLink } from "../data/content";

const navItems = [
  { href: "#inicio", icon: HiHome, tooltip: "Início" },
  { href: "#beneficios", icon: HiStar, tooltip: "Benefícios" },
  { href: "#servicos", icon: HiOutlineViewGrid, tooltip: "Serviços" },
  { href: "#sobre", icon: HiOutlineUser, tooltip: "Sobre" },
  { href: "#contato", icon: HiOutlineMail, tooltip: "Contato" },
];

export default function FloatingElements() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="hidden md:flex flex-col gap-3 fixed right-8 bottom-32 z-[1002]">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="group relative w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:bg-primary-dark hover:-translate-y-1 hover:scale-110 transition-all"
          >
            <item.icon size={20} />
            <span className="pointer-events-none absolute right-14 top-1/2 -translate-y-1/2 whitespace-nowrap bg-secondary text-white text-xs px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
              {item.tooltip}
            </span>
          </a>
        ))}
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center shadow-lg hover:bg-dark hover:-translate-y-1 hover:scale-110 transition-all"
        >
          <HiOutlineTicket size={20} />
          <span className="pointer-events-none absolute right-14 top-1/2 -translate-y-1/2 whitespace-nowrap bg-secondary text-white text-xs px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
            Solicitar orçamento
          </span>
        </a>
      </div>

      <a
        href="#inicio"
        aria-label="Voltar ao topo"
        className={`fixed right-8 z-[1003] w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:bg-primary-dark hover:-translate-y-1 transition-all duration-300 ${
          showTop ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        style={{ bottom: "14rem" }}
      >
        <HiArrowUp size={20} />
      </a>

      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        onClick={() => window.dataLayer?.push({ event: "whatsapp_click", location: "floating_button" })}
        className="fixed right-8 bottom-8 z-[1001] rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:bg-[#128C7E] hover:scale-110 transition-transform animate-pulse-whatsapp"
        style={{ width: "60px", height: "60px" }}
      >
        <FaWhatsapp size={28} />
      </a>
    </>
  );
}
