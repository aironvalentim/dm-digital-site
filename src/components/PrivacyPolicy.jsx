import Logo from "./Logo";
import Footer from "./Footer";

export default function PrivacyPolicy() {
  const base = import.meta.env.BASE_URL;

  return (
    <div className="bg-white text-text min-h-screen font-sans">
      <header className="bg-gradient-to-r from-secondary to-dark">
        <div className="max-w-4xl mx-auto px-6 py-5">
          <a href={base}>
            <Logo light />
          </a>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <a href={base} className="font-sans text-sm text-primary hover:underline mb-8 inline-block">
          ← Voltar para o início
        </a>

        <h1 className="font-sans font-bold text-3xl sm:text-4xl text-secondary mb-2">
          Política de Privacidade
        </h1>
        <p className="font-sans text-sm text-text-gray mb-10">
          Última atualização: agosto de 2026
        </p>

        <div className="font-sans text-sm sm:text-base text-text leading-relaxed flex flex-col gap-8">
          <section>
            <p>
              A DM Digital ("nós") respeita a sua privacidade e está comprometida
              em proteger os dados pessoais dos visitantes deste site, em
              conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº
              13.709/2018). Esta política explica quais informações coletamos,
              como as usamos e quais são os seus direitos.
            </p>
          </section>

          <section>
            <h2 className="font-sans font-bold text-xl text-secondary mb-3">1. Quais dados coletamos</h2>
            <p className="mb-3">Coletamos dados fornecidos voluntariamente por você ao preencher o formulário de contato ou ao iniciar uma conversa pelo WhatsApp:</p>
            <ul className="list-disc pl-6 flex flex-col gap-1">
              <li>Nome completo</li>
              <li>E-mail</li>
              <li>Número de WhatsApp</li>
              <li>Nome da empresa (quando informado)</li>
              <li>Conteúdo da mensagem enviada</li>
            </ul>
            <p className="mt-3">
              Também coletamos automaticamente dados de navegação por meio de
              cookies e ferramentas de análise, como endereço IP, tipo de
              dispositivo, navegador, páginas visitadas e tempo de permanência
              no site.
            </p>
          </section>

          <section>
            <h2 className="font-sans font-bold text-xl text-secondary mb-3">2. Como usamos seus dados</h2>
            <ul className="list-disc pl-6 flex flex-col gap-1">
              <li>Responder às suas solicitações de orçamento ou contato</li>
              <li>Entrar em contato via e-mail ou WhatsApp sobre nossos serviços</li>
              <li>Medir o desempenho de campanhas de marketing (Google Ads e Meta Ads)</li>
              <li>Melhorar a experiência de navegação e o conteúdo do site</li>
              <li>Cumprir obrigações legais, quando aplicável</li>
            </ul>
          </section>

          <section>
            <h2 className="font-sans font-bold text-xl text-secondary mb-3">3. Cookies e ferramentas de terceiros</h2>
            <p>
              Este site utiliza o Google Tag Manager, Google Analytics e o Meta
              Pixel para medir tráfego e o resultado de campanhas publicitárias.
              Essas ferramentas podem usar cookies para reconhecer seu navegador
              em visitas futuras. Você pode desativar cookies diretamente nas
              configurações do seu navegador, o que pode limitar algumas
              funcionalidades do site.
            </p>
          </section>

          <section>
            <h2 className="font-sans font-bold text-xl text-secondary mb-3">4. Compartilhamento de dados</h2>
            <p>
              Não vendemos nem alugamos seus dados pessoais. Compartilhamos
              informações apenas com prestadores de serviço estritamente
              necessários para o funcionamento do site (como o serviço de envio
              do formulário de contato) e com plataformas de publicidade (Google
              e Meta), na medida exigida para a operação das campanhas.
            </p>
          </section>

          <section>
            <h2 className="font-sans font-bold text-xl text-secondary mb-3">5. Seus direitos</h2>
            <p className="mb-3">De acordo com a LGPD, você tem direito a:</p>
            <ul className="list-disc pl-6 flex flex-col gap-1">
              <li>Confirmar a existência de tratamento dos seus dados</li>
              <li>Acessar os dados que temos sobre você</li>
              <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
              <li>Solicitar a exclusão dos seus dados pessoais</li>
              <li>Revogar o consentimento a qualquer momento</li>
            </ul>
            <p className="mt-3">
              Para exercer qualquer um desses direitos, entre em contato pelo
              e-mail <span className="text-primary">dmdigital.trafegopago@gmail.com</span>.
            </p>
          </section>

          <section>
            <h2 className="font-sans font-bold text-xl text-secondary mb-3">6. Segurança dos dados</h2>
            <p>
              Adotamos medidas técnicas razoáveis para proteger seus dados contra
              acessos não autorizados, perda, alteração ou divulgação indevida.
            </p>
          </section>

          <section>
            <h2 className="font-sans font-bold text-xl text-secondary mb-3">7. Alterações nesta política</h2>
            <p>
              Esta política pode ser atualizada periodicamente. Recomendamos que
              você a revise de tempos em tempos. A data da última atualização
              está indicada no topo desta página.
            </p>
          </section>

          <section>
            <h2 className="font-sans font-bold text-xl text-secondary mb-3">8. Contato</h2>
            <p>
              Em caso de dúvidas sobre esta Política de Privacidade, entre em
              contato conosco pelo e-mail{" "}
              <span className="text-primary">dmdigital.trafegopago@gmail.com</span>{" "}
              ou pelo WhatsApp (81) 98504-0009.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
