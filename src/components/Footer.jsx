import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import Logo from "./Logo";

const socials = [
  { Icon: FaInstagram, href: "https://www.instagram.com/dmirele?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", label: "Instagram" },
  { Icon: FaFacebookF, href: "#", label: "Facebook" },
  { Icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white px-6 pt-16 pb-8">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-10 mb-12">
        <div>
          <Logo light />
          <p className="font-sans text-sm text-white/60 mt-4 max-w-xs leading-relaxed">
            Transformando empresas através de marketing estratégico de resultados.
          </p>
        </div>

        <div>
          <h3 className="font-sans font-bold mb-4">Links rápidos</h3>
          <ul className="font-sans text-sm text-white/65 flex flex-col gap-2.5">
            <li><a href="#inicio" className="hover:text-primary">Início</a></li>
            <li><a href="#beneficios" className="hover:text-primary">Benefícios</a></li>
            <li><a href="#servicos" className="hover:text-primary">Serviços</a></li>
            <li><a href="#contato" className="hover:text-primary">Contato</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-sans font-bold mb-4">Redes sociais</h3>
          <ul className="font-sans text-sm text-white/65 flex flex-col gap-2.5 mb-5">
            <li>dmdigital.trafegopago@gmail.com</li>
            <li>(81) 98504-0009</li>
          </ul>
          <div className="flex gap-3">
            {socials.map(({ Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors">
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3">
        <p className="font-sans text-xs text-white/50">© {new Date().getFullYear()} DM Digital. Todos os direitos reservados.</p>
        <a href={`${import.meta.env.BASE_URL}politica-de-privacidade`} className="font-sans text-xs text-white/50 hover:text-primary">Política de Privacidade</a>
      </div>
    </footer>
  );
}
