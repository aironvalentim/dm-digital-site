import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="px-6 pt-16 pb-8 border-t border-espresso/10">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-10 mb-12">
        <div>
          <Logo />
          <p className="font-body text-sm text-ink/60 mt-4 max-w-xs leading-relaxed">
            Transformando empresas através de marketing estratégico de resultados.
          </p>
        </div>

        <div>
          <h3 className="font-display text-espresso mb-4">Acesso rápido</h3>
          <ul className="font-body text-sm text-ink/65 flex flex-col gap-2.5">
            <li><a href="#inicio" className="hover:text-bronze">Início</a></li>
            <li><a href="#quem-somos" className="hover:text-bronze">Quem Somos</a></li>
            <li><a href="#servicos" className="hover:text-bronze">Serviços</a></li>
            <li><a href="#contato" className="hover:text-bronze">Contato</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-espresso mb-4">Contato</h3>
          <ul className="font-body text-sm text-ink/65 flex flex-col gap-2.5 mb-5">
            <li>contato@dmdigital.com.br</li>
            <li>(00) 00000-0000</li>
          </ul>
          <div className="flex gap-3">
            {[FaInstagram, FaFacebookF, FaLinkedinIn].map((Icon, i) => (
              <a key={i} href="#" aria-label="Rede social"
                className="w-9 h-9 rounded-full border border-espresso/15 flex items-center justify-center text-espresso hover:bg-bronze hover:text-cream hover:border-bronze transition-colors">
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-6 border-t border-espresso/10 flex flex-col sm:flex-row justify-between gap-3">
        <p className="font-body text-xs text-ink/50">© {new Date().getFullYear()} DM Digital. Todos os direitos reservados.</p>
        <a href="/politica-de-privacidade" className="font-body text-xs text-ink/50 hover:text-bronze">Política de Privacidade</a>
      </div>
    </footer>
  );
}
