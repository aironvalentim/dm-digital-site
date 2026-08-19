import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Logo from "./Logo";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#beneficios", label: "Benefícios" },
  { href: "#servicos", label: "Serviços" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header className={`fixed top-0 inset-x-0 z-40 h-20 flex items-center transition-all duration-300 bg-gradient-to-r from-secondary to-dark ${scrolled ? "shadow-lg" : ""}`}>
        <nav className="w-full max-w-6xl mx-auto flex items-center justify-between px-6">
          <a href="#inicio">
            <Logo light />
          </a>

          <ul className="hidden lg:flex items-center gap-8 font-sans text-sm font-semibold text-white">
            {links.map((l) => (
              <li key={l.href} className="relative group">
                <a href={l.href} className="py-2 inline-block">
                  {l.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <a href="#contato" className="hidden lg:inline-block font-sans text-sm font-semibold bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark hover:-translate-y-0.5 transition-all shadow-md">
            Solicitar orçamento
          </a>

          <button className="lg:hidden text-white" onClick={() => setOpen(true)} aria-label="Abrir menu">
            <HiMenu size={26} />
          </button>
        </nav>
      </header>

      <div className={`fixed inset-0 z-50 bg-black/80 transition-opacity duration-300 lg:hidden ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} onClick={() => setOpen(false)}>
        <div className={`absolute top-0 right-0 h-full w-4/5 max-w-sm bg-gradient-to-b from-secondary to-dark p-8 flex flex-col transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`} onClick={(e) => e.stopPropagation()}>
          <button className="self-end text-white mb-8" onClick={() => setOpen(false)} aria-label="Fechar menu">
            <HiX size={26} />
          </button>
          <ul className="flex flex-col gap-6">
            {links.map((l) => (
              <li key={l.href} className="border-b border-white/10 pb-4">
                <a href={l.href} onClick={() => setOpen(false)} className="font-sans font-semibold text-white text-lg">{l.label}</a>
              </li>
            ))}
          </ul>
          <a href="#contato" onClick={() => setOpen(false)} className="mt-8 text-center font-sans font-semibold text-sm bg-primary text-white px-6 py-3.5 rounded-lg">Solicitar orçamento</a>
        </div>
      </div>
    </>
  );
}