export default function PoliticaDePrivacidade() {
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "var(--bg-color)" }}>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-6">Política de Privacidade</h1>
        <p className="text-gray-300 mb-4">Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>

        <section className="space-y-4 text-gray-300">
          <p>
            A Neuroflow respeita sua privacidade e está comprometida com a proteção dos seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
            Esta Política descreve como coletamos, utilizamos, armazenamos e protegemos seus dados ao utilizar nosso site.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-6">1. Dados Coletados e Finalidade</h2>
          <p>
            Coletamos dados pessoais fornecidos voluntariamente, como nome, e-mail e mensagem, por meio do formulário de contato, com a finalidade de responder às suas solicitações e prestar atendimento.
            Não utilizamos cookies de rastreamento sem seu consentimento. Cookies necessários são usados apenas para o funcionamento essencial do site.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-6">2. Bases Legais</h2>
          <p>
            Tratamos seus dados com base nas seguintes bases legais: consentimento (art. 7º, I), execução de contrato ou de procedimentos preliminares (art. 7º, V) e legítimo interesse (art. 7º, IX), quando aplicável.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-6">3. Direitos dos Titulares</h2>
          <p>
            Você possui, nos termos da LGPD, os seguintes direitos: confirmação da existência de tratamento, acesso, correção de dados incompletos, portabilidade, anonimização, bloqueio, eliminação, informação sobre compartilhamento e revogação do consentimento.
            Para exercer seus direitos, acesse a página <a className="text-blue-400 hover:underline" href="/dpo">Contato do Encarregado (DPO)</a>.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-6">4. Retenção e Eliminação</h2>
          <p>
            Manteremos seus dados pelo tempo necessário para cumprir as finalidades descritas e/ou obrigações legais. Após esse período, os dados serão eliminados ou anonimizados, conforme aplicável.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-6">5. Segurança</h2>
          <p>
            Adotamos medidas técnicas e administrativas para proteger seus dados contra acessos não autorizados e situações acidentais ou ilícitas de destruição, perda, alteração, comunicação ou difusão.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-6">6. Compartilhamento</h2>
          <p>
            Não compartilhamos seus dados com terceiros, exceto quando necessário para cumprir obrigações legais, contratuais ou mediante o seu consentimento.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-6">7. Cookies e Preferências</h2>
          <p>
            Utilizamos um banner de consentimento para que você possa gerenciar suas preferências de cookies (funcionais, análise e marketing). Você pode revisitar suas escolhas em qualquer momento clicando em <a href="/dpo#form" className="text-blue-400 hover:text-blue-300 underline">&quot;Gerenciar cookies&quot;</a> no rodapé.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-6">8. Contato do DPO</h2>
          <p>
            Para dúvidas sobre esta Política ou para exercer seus direitos, entre em contato com nosso Encarregado de Proteção de Dados (DPO) pela página <a className="text-blue-400 hover:underline" href="/dpo">/dpo</a>.
          </p>
        </section>
      </div>
    </main>
  );
}