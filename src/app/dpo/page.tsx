"use client";
import { useEffect, useState } from "react";

export default function DPOPage() {
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    const url = new URL(window.location.href);
    if (url.searchParams.get("success") === "1") setSuccess(true);
  }, []);

  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "var(--bg-color)" }}>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-6">Encarregado de Dados (DPO)</h1>
        <p className="text-gray-300 mb-6">
          Utilize os formulários abaixo para exercer seus direitos previstos na LGPD: acesso aos dados, revogação de consentimento e exclusão (direito ao esquecimento).
        </p>

        {success && (
          <div className="mb-6 p-4 rounded border" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)' }}>
            <p className="text-green-400">Solicitação enviada com sucesso. Em breve entraremos em contato.</p>
          </div>
        )}

        <section id="form" className="space-y-10">
          {/* Formulário genérico de solicitações ao DPO */}
          <div className="backdrop-blur-sm border rounded-xl p-6" style={{backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)'}}>
            <h2 className="text-2xl font-semibold text-white mb-4">Solicitação de Titular</h2>
            <form action="/api/dpo" method="post" className="space-y-4">
              <input type="hidden" name="redirect" value="/dpo?success=1#form" />

              <div>
                <label htmlFor="type" className="block text-gray-200 mb-2">Tipo de solicitação</label>
                <select id="type" name="type" required className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white">
                  <option value="access">Acesso aos dados</option>
                  <option value="revoke">Revogação de consentimento</option>
                  <option value="delete">Exclusão de dados (direito ao esquecimento)</option>
                </select>
              </div>

              <div>
                <label htmlFor="name" className="block text-gray-200 mb-2">Seu nome</label>
                <input type="text" id="name" name="name" required className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white" />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-200 mb-2">Seu e-mail</label>
                <input type="email" id="email" name="email" required className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white" />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-200 mb-2">Detalhes da solicitação</label>
                <textarea id="message" name="message" rows={5} required className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white" />
              </div>

              <button type="submit" className="bg-blue-600 hover:bg-blue-500 text-white py-3 px-4 rounded-lg">Enviar solicitação</button>
            </form>
          </div>

          {/* Link para reabrir gerenciamento de cookies */}
          <div className="text-gray-300">
            <button onClick={() => (window as any).openCookieManager?.()} className="text-blue-400 hover:underline">Gerenciar cookies</button>
          </div>
        </section>
      </div>
    </main>
  );
}