import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Logo from "./Logo";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#quem-somos", label: "Quem Somos" },
  { href: "#servicos", label: "Serviços" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-colors duration-300 ${
        scrolled ? "bg-cream/95 backdrop-blur-sm border-b border-espresso/10" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#inicio">
          <Logo />
        </a>

        <ul className="hidden lg:flex items-center gap-8 font-body text-sm text-ink/80">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-bronze transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contato"
          className="hidden lg:inline-block font-body text-sm font-semibold bg-espresso text-cream px-5 py-2.5 rounded-md hover:bg-bronze transition-colors"
        >
          Solicitar orçamento
        </a>

        <button
          className="lg:hidden text-espresso"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <HiX size={26} /> : <HiMenu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-cream border-t border-espresso/10 px-6 py-4">
          <ul className="flex flex-col gap-4 font-body text-ink/80">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block py-1">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="mt-4 block text-center font-body text-sm font-semibold bg-espresso text-cream px-5 py-3 rounded-md"
          >
            Solicitar orçamento
          </a>
        </div>
      )}
    </header>
  );
}
