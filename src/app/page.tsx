import Image from "next/image";

export default function Home() {
  return (
    <div
      className="min-h-screen text-white"
      style={{ backgroundColor: "var(--background)" }}
    >
      {/* Navigation */}
      <nav
        className="fixed top-0 w-full backdrop-blur-md z-50 border-b border-blue-900/20"
        style={{ backgroundColor: "var(--background)/80" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Image
                src="/neuroflow-logo-transparent.svg"
                alt="Neuroflow Logo"
                width={150}
                height={45}
                priority
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="#home"
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  Início
                </a>
                <a
                  href="#about"
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  Quem Somos
                </a>
                <a
                  href="#why-us"
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  Diferenciais
                </a>
                <a
                  href="#testimonials"
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  Feedbacks
                </a>
                <a
                  href="#how-we-work"
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  Como Trabalhamos
                </a>
                <a
                  href="#contact"
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  Contato
                </a>
              </div>
            </div>
            <a
              href="#contact"
              className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 px-6 py-2 rounded-full text-white font-medium transition-all duration-300"
            >
              Começar Agora
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-blue-800/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-azonix text-6xl md:text-8xl tracking-wide font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
            Neuroflow
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Usamos soluções inteligentes para entregar os melhores resultados
            para o seu negócio.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="#contact"
              className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 px-8 py-4 rounded-full text-white font-medium text-lg transition-all duration-300 transform hover:scale-105"
            >
              Começar Agora
            </a>
          </div>

          {/* Key Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div
              className="backdrop-blur-sm border rounded-lg p-6 text-center"
              style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
              }}
            >
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                {/* Ícone: Loja (storefront) para e-commerce */}
                <svg
                  className="w-6 h-6 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 11h16v9H4z M6 7h12l2 4H4l2-4z M11 14h2v6h-2z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-2">
                Desenvolvimento de e-commerce
              </h3>
              <p className="text-gray-400 text-sm">
                Criamos e otimizamos seu e-commerce para aumentar o tráfego e as
                vendas
              </p>
            </div>

            <div
              className="backdrop-blur-sm border rounded-lg p-6 text-center"
              style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
              }}
            >
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                {/* Ícone: Código (<>), para Construção de agente de IA */}
                <svg
                  className="w-6 h-6 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 6L3 12l5 6M16 18l5-6-5-6M13 6l-2 12"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-2">
                Construção de agente de IA
              </h3>
              <p className="text-gray-400 text-sm">
                Criamos agentes de IA personalizados para suas necessidades
              </p>
            </div>

            <div
              className="backdrop-blur-sm border rounded-lg p-6 text-center"
              style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
              }}
            >
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                {/* Ícone: Robô para Automação de tarefas */}
                <svg
                  className="w-6 h-6 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v2 M7 8h10v8H7z M10 12h.01 M14 12h.01 M9 14h6 M6 12h1 M17 12h1"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-2">
                Automação de tarefas
              </h3>
              <p className="text-gray-400 text-sm">
                Criamos automações personalizadas para otimizar seus processos
              </p>
            </div>

            <div
              className="backdrop-blur-sm border rounded-lg p-6 text-center"
              style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
              }}
            >
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                {/* Ícone: Editor de Código IA (janela com código) */}
                <svg
                  className="w-6 h-6 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 5h16v14H4zM7 8h2m2 0h2m2 0h2M8 12l2 2-2 2M13 16h4"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-2">
                Solucionamos seus problemas de forma inteligente
              </h3>
              <p className="text-gray-400 text-sm">
                Utilizamos a tecnologia mais avançada para fornecer soluções
                personalizadas para cada desafio
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        style={{ backgroundColor: "rgba(26, 35, 50, 0.3)" }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
              Quem Somos
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Nossa Missão
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Na Neuroflow, acreditamos que a tecnologia deve ser acessível,
                poderosa e intuitiva. Somos uma empresa inovadora dedicada a
                transformar seus problemas em soluções inteligentes, criando
                ferramentas que amplificam a capacidade humana.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Nossa equipe é composta por especialistas em IA, desenvolvedores
                visionários e designers experientes que compartilham a paixão
                por criar ferramentas que realmente fazem a diferença no dia a
                dia das pessoas.
              </p>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">99.9%</div>
                  <div className="text-gray-400">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">24/7</div>
                  <div className="text-gray-400">Suporte</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-2xl p-8 backdrop-blur-sm border border-blue-900/30">
                <h4 className="text-xl font-bold text-white mb-4">
                  Nossos Valores
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                    <div>
                      <h5 className="font-semibold text-white">
                        Inovação Constante
                      </h5>
                      <p className="text-gray-300 text-sm">
                        Sempre buscando as tecnologias mais avançadas
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                    <div>
                      <h5 className="font-semibold text-white">Simplicidade</h5>
                      <p className="text-gray-300 text-sm">
                        Tornamos o complexo simples e acessível
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                    <div>
                      <h5 className="font-semibold text-white">Excelência</h5>
                      <p className="text-gray-300 text-sm">
                        Comprometidos com a qualidade em cada detalhe
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
              Por que Somos os Melhores
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Descubra os diferenciais que nos tornam líderes em soluções de
              Tecnologia
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div
              className="backdrop-blur-sm border rounded-xl p-8 text-center hover:transform hover:scale-105 transition-all duration-300"
              style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
              }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Performance Excepcional
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Nossas soluções de Tecnologia processam informações 10x mais
                rápido que a concorrência, garantindo respostas instantâneas e
                uma experiência fluida em todas as funcionalidades.
              </p>
            </div>

            <div
              className="backdrop-blur-sm border rounded-xl p-8 text-center hover:transform hover:scale-105 transition-all duration-300"
              style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
              }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Segurança Avançada
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Implementamos criptografia de ponta a ponta e protocolos de
                segurança para proteger seus dados e garantir total privacidade
                em todas as operações.
              </p>
            </div>

            <div
              className="backdrop-blur-sm border rounded-xl p-8 text-center hover:transform hover:scale-105 transition-all duration-300"
              style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
              }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Suporte Humanizado
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Nossa equipe de especialistas oferece suporte personalizado e
                completo para maximizar seu potencial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        style={{ backgroundColor: "rgba(26, 35, 50, 0.3)" }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
              O que Nossos Clientes Dizem
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div
              className="backdrop-blur-sm border rounded-xl p-8"
              style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
              }}
            >
              <div className="flex items-center mb-6">
                <Image
                  src="/carlinha.jpg"
                  alt="Ana Maria Silva"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-white">Ana Paula Godoi</h4>
                  <p className="text-gray-400 text-sm">CEO, TechStart</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 leading-relaxed">
                &quot;A Neuroflow revolucionou nossa empresa. A automação nos ajudou
                em processos que antes levavam horas.&quot;
              </p>
            </div>

            <div
              className="backdrop-blur-sm border rounded-xl p-8"
              style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
              }}
            >
              <div className="flex items-center mb-6">
                <Image
                  src="/otavio.jpg"
                  alt="Roberto Costa"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-white">Roberto Costa</h4>
                  <p className="text-gray-400 text-sm">
                    Analista sênior, InnovaCorp
                  </p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 leading-relaxed">
  &quot;Como desenvolvedor, fiquei impressionado com a qualidade das
  ferramentas utilizadas pela Neuroflow. Aumentou nossa
  produtividade em 300%.&quot;
</p>
            </div>

            <div
              className="backdrop-blur-sm border rounded-xl p-8"
              style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
              }}
            >
              <div className="flex items-center mb-6">
                <Image
                  src="/roney.jpg"
                  alt="Mariana Ferreira"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-white">Ricardo Ferreira</h4>
                  <p className="text-gray-400 text-sm">Diretor, LogFerreira</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 leading-relaxed">
  &quot;A interface é super intuitiva. Mesmo sem conhecimento técnico,
  consegui implementar soluções complexas rapidamente.&quot;
</p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section id="how-we-work" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
              Como Trabalhamos?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Nosso processo estruturado garante resultados excepcionais em cada
              projeto
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Process Description */}
            <div className="space-y-8">
              <div
                className="backdrop-blur-sm border rounded-xl p-6"
                style={{
                  backgroundColor: "var(--card-bg)",
                  borderColor: "var(--border-color)",
                }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Análise e Planejamento
                    </h3>
                    <p className="text-gray-300">
                      Entendemos suas necessidades e definimos a melhor
                      estratégia para seu projeto.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="backdrop-blur-sm border rounded-xl p-6"
                style={{
                  backgroundColor: "var(--card-bg)",
                  borderColor: "var(--border-color)",
                }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Desenvolvimento
                    </h3>
                    <p className="text-gray-300">
                      Implementamos soluções usando as tecnologias mais
                      avançadas e práticas recomendadas.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="backdrop-blur-sm border rounded-xl p-6"
                style={{
                  backgroundColor: "var(--card-bg)",
                  borderColor: "var(--border-color)",
                }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Testes e Otimização
                    </h3>
                    <p className="text-gray-300">
                      Garantimos qualidade através de testes rigorosos e
                      otimizações contínuas.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="backdrop-blur-sm border rounded-xl p-6"
                style={{
                  backgroundColor: "var(--card-bg)",
                  borderColor: "var(--border-color)",
                }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Entrega e Suporte
                    </h3>
                    <p className="text-gray-300">
                      Entregamos o projeto finalizado com suporte contínuo para
                      garantir seu sucesso.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Process Mind Map Image */}
            <div className="flex items-center justify-center">
              <div className="relative">
                <Image
                  src="/Etapas de um Processo de Contratação de Serviço 2 - visual selection.png"
                  alt="Mapa Mental - Como Trabalhamos"
                  width={600}
                  height={600}
                  className="w-full h-auto rounded-xl border shadow-2xl"
                  style={{ borderColor: "var(--border-color)" }}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section (form + image) */}
      <section
        id="contato"
        style={{ backgroundColor: "rgba(26, 35, 50, 0.3)" }}
        className="py-20 scroll-mt-24"
      >
        {/* Anchor alias to support #contact links */}
        <span id="contact" className="block scroll-mt-24"></span>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
              Entre em Contato
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Pronto para começar? Envie sua mensagem e retornaremos em breve.
            </p>
          </div>

          <div className="flex justify-center">
            {/* Formulário centralizado */}
            <div
              className="w-full max-w-lg backdrop-blur-sm border rounded-xl p-8"
              style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
              }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Fale com a Neuroflow
              </h3>
              <div className="space-y-6">
                <a
                  href="https://api.whatsapp.com/send?phone=5517991308002&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Neuroflow."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 mx-auto block w-fit bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg transition duration-300"
                >
                  Fale via WhatsApp
                </a>
                <p className="text-gray-300 mt-6"></p>

                {/* Formulário de contato (envio por email via API) */}
                <form action="/api/contact" method="post" className="space-y-4">
                  <input
                    type="hidden"
                    name="redirect"
                    value="/?contact=success#contact"
                  />
                  <div>
                    <label htmlFor="name" className="block text-gray-200 mb-2">
                      Seu nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-200 mb-2">
                      Seu email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-gray-200 mb-2"
                    >
                      Sua mensagem
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg transition duration-300"
                  >
                    Enviar Mensagem
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "var(--card-bg)",
          borderColor: "var(--border-color)",
        }}
        className="border-t py-12"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <Image
                src="/neuroflow-logo-transparent.svg"
                alt="Neuroflow Logo"
                width={150}
                height={45}
                className="mb-4"
              />
              <p className="text-gray-300 mb-4 max-w-md">
                Transformando o futuro com inteligência artificial acessível e
                poderosa. Junte-se à revolução da IA.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">
                Nos siga nas redes sociais
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://www.instagram.com/neuroflowtecnologia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-gray-300 hover:text-pink-400 transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm5.5-2.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
                    </svg>
                    <span>Instagram</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Neuroflow. Todos os direitos reservados.
              <a
                href="/politica-de-privacidade"
                className="text-blue-400 hover:text-blue-300 ml-2"
              >
                Política de Privacidade
              </a>{" "}
              |
              <a
                href="/termos-de-uso"
                className="text-blue-400 hover:text-blue-300 ml-2"
              >
                Termos de Uso
              </a>{" "}
              |
              <a href="/dpo" className="text-blue-400 hover:text-blue-300 ml-2">
                Contato do DPO
              </a>{" "}
              |
              <a
                href="/dpo#form"
                className="text-blue-400 hover:text-blue-300 ml-2 underline"
              >
                Gerenciar cookies
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
