import { useState } from "react";
import { HiOutlineMail, HiOutlineChatAlt2 } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { whatsappLink } from "../data/content";

const initialForm = { nome: "", email: "", empresa: "", whatsapp: "", mensagem: "" };
const WEB3FORMS_ACCESS_KEY = "06c07e93-312f-4eac-8d71-745f13a85581";

export default function ContactCTA() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    window.dataLayer?.push({ event: "generate_lead", form_name: "orcamento" });
    window.fbq?.("track", "Lead");
    window.fbq?.("track", "SubmitForm");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "Novo pedido de orçamento - DM Digital",
          from_name: "Site DM Digital",
          nome: form.nome,
          email: form.email,
          empresa: form.empresa,
          whatsapp: form.whatsapp,
          mensagem: form.mensagem,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("sent");
        setForm(initialForm);
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contato" className="py-20 px-6 bg-gray-bg">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-secondary mb-2">Fale conosco</h2>
          <div className="w-20 h-1 bg-primary mb-6" />
          <p className="font-sans text-text-gray leading-relaxed mb-10 max-w-md">
            Preencha o formulário para solicitar um orçamento. Nossa equipe de
            especialistas fará uma análise inicial do seu negócio.
          </p>

          <div className="flex flex-col gap-5 mb-10">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                <HiOutlineChatAlt2 className="text-primary" size={20} />
              </div>
              <div>
                <p className="font-sans font-bold text-secondary">WhatsApp</p>
                <p className="font-sans text-sm text-text-gray">(81) 98504-0009</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                <HiOutlineMail className="text-primary" size={20} />
              </div>
              <div>
                <p className="font-sans font-bold text-secondary">E-mail</p>
                <p className="font-sans text-sm text-text-gray">dmdigital.trafegopago@gmail.com</p>
              </div>
            </div>
          </div>

          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" onClick={() => window.dataLayer?.push({ event: "whatsapp_click", location: "contact_section" })} className="inline-flex items-center justify-center gap-2 w-full sm:w-auto font-sans font-semibold text-sm bg-[#25D366] text-white px-7 py-4 rounded-lg hover:bg-[#128C7E] hover:-translate-y-0.5 transition-all shadow-md">
            <FaWhatsapp size={20} /> Enviar mensagem
          </a>
        </div>

        <form onSubmit={onSubmit} className="bg-white rounded-xl p-6 sm:p-8 flex flex-col gap-5 shadow-sm">
          <div>
            <label htmlFor="nome" className="font-sans text-sm text-text/80 block mb-1.5">Nome *</label>
            <input id="nome" name="nome" required value={form.nome} onChange={onChange} placeholder="Seu nome completo" className="w-full font-sans text-sm border border-black/10 rounded-lg px-4 py-2.5 bg-white focus:outline-none focus:border-primary" />
          </div>
          <div>
            <label htmlFor="email" className="font-sans text-sm text-text/80 block mb-1.5">E-mail *</label>
            <input id="email" name="email" type="email" required value={form.email} onChange={onChange} placeholder="seu@email.com" className="w-full font-sans text-sm border border-black/10 rounded-lg px-4 py-2.5 bg-white focus:outline-none focus:border-primary" />
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="empresa" className="font-sans text-sm text-text/80 block mb-1.5">Empresa</label>
              <input id="empresa" name="empresa" value={form.empresa} onChange={onChange} placeholder="Nome do seu negócio" className="w-full font-sans text-sm border border-black/10 rounded-lg px-4 py-2.5 bg-white focus:outline-none focus:border-primary" />
            </div>
            <div>
              <label htmlFor="whatsapp" className="font-sans text-sm text-text/80 block mb-1.5">WhatsApp</label>
              <input id="whatsapp" name="whatsapp" value={form.whatsapp} onChange={onChange} placeholder="(00) 00000-0000" className="w-full font-sans text-sm border border-black/10 rounded-lg px-4 py-2.5 bg-white focus:outline-none focus:border-primary" />
            </div>
          </div>
          <div>
            <label htmlFor="mensagem" className="font-sans text-sm text-text/80 block mb-1.5">Mensagem</label>
            <textarea id="mensagem" name="mensagem" rows={4} value={form.mensagem} onChange={onChange} placeholder="Como podemos te ajudar?" className="w-full font-sans text-sm border border-black/10 rounded-lg px-4 py-2.5 bg-white focus:outline-none focus:border-primary resize-none" />
          </div>

          <button type="submit" disabled={status === "sending"} className="font-sans font-semibold text-sm bg-secondary text-white px-7 py-4 rounded-lg hover:bg-dark hover:-translate-y-0.5 transition-all disabled:opacity-60 inline-flex items-center justify-center gap-2">
            {status === "sending" ? "Enviando..." : "Enviar mensagem"}
          </button>

          {status === "sent" && (
            <p className="font-sans text-sm text-green-700">Recebemos sua solicitação! Em breve entraremos em contato.</p>
          )}
          {status === "error" && (
            <p className="font-sans text-sm text-red-700">Não foi possível enviar agora. Tente novamente ou fale pelo WhatsApp.</p>
          )}
        </form>
      </div>
    </section>
  );
}
