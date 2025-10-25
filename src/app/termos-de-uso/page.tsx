export default function TermosDeUso() {
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "var(--bg-color)" }}>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-6">Termos de Uso</h1>
        <p className="text-gray-300 mb-4">Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>

        <section className="space-y-4 text-gray-300">
          <h2 className="text-2xl font-semibold text-white mt-6">1. Aceitação dos Termos</h2>
          <p>
            Ao acessar e utilizar este site, você concorda com estes Termos de Uso. Caso não concorde com qualquer parte, recomendamos que interrompa o uso do site.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-6">2. Uso Permitido</h2>
          <p>
            Você se compromete a utilizar o site de forma lícita e respeitosa, não praticando atos que possam violar direitos de terceiros, a legislação vigente ou as políticas da Neuroflow.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-6">3. Limitações de Responsabilidade</h2>
          <p>
            A Neuroflow não se responsabiliza por danos decorrentes de uso indevido do site, indisponibilidades temporárias, ou conteúdos externos vinculados por links.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-6">4. Propriedade Intelectual</h2>
          <p>
            Todo o conteúdo do site (textos, gráficos, logotipos, imagens e software) é protegido por direitos autorais e de propriedade intelectual. É proibida a reprodução sem autorização prévia.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-6">5. Privacidade</h2>
          <p>
            O uso de dados pessoais é regido pela nossa <a className="text-blue-400 hover:underline" href="/politica-de-privacidade">Política de Privacidade</a>, em conformidade com a LGPD.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-6">6. Alterações</h2>
          <p>
            Reservamo-nos o direito de atualizar estes Termos de Uso a qualquer momento. Mudanças relevantes serão comunicadas por meio do site.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-6">7. Contato</h2>
          <p>
            Em caso de dúvidas, entre em contato pelos nossos canais oficiais ou pelo formulário do DPO em <a className="text-blue-400 hover:underline" href="/dpo">/dpo</a>.
          </p>
        </section>
      </div>
    </main>
  );
}