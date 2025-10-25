"use client";
import { useEffect, useState } from "react";

// Tipos de consentimento. "necessary" é sempre habilitado e não pode ser desativado.
const defaultPreferences = {
  necessary: true,
  functional: false,
  analytics: false,
  marketing: false,
};

type Preferences = typeof defaultPreferences;

function loadPreferences(): Preferences | null {
  try {
    const raw = localStorage.getItem("cookieConsent");
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    // Garantir chaves existentes
    return {
      necessary: true,
      functional: !!parsed.functional,
      analytics: !!parsed.analytics,
      marketing: !!parsed.marketing,
    };
  } catch {
    return null;
  }
}

function savePreferences(prefs: Preferences) {
  localStorage.setItem("cookieConsent", JSON.stringify(prefs));
}

export default function CookieBanner() {
  const [open, setOpen] = useState(false);
  const [prefs, setPrefs] = useState<Preferences>(defaultPreferences);
  const [managing, setManaging] = useState(false);

  useEffect(() => {
    const stored = loadPreferences();
    if (stored) {
      setPrefs(stored);
      setOpen(false);
    } else {
      setOpen(true);
    }

    // Expor função global simples para reabrir gerenciamento pela página
    (window as any).openCookieManager = () => {
      setManaging(true);
      setOpen(true);
    };
  }, []);

  const acceptAll = () => {
    const newPrefs = { necessary: true, functional: true, analytics: true, marketing: true };
    setPrefs(newPrefs);
    savePreferences(newPrefs);
    setOpen(false);
    setManaging(false);
  };

  const acceptNecessaryOnly = () => {
    const newPrefs = { necessary: true, functional: false, analytics: false, marketing: false };
    setPrefs(newPrefs);
    savePreferences(newPrefs);
    setOpen(false);
    setManaging(false);
  };

  const save = () => {
    const newPrefs = { ...prefs, necessary: true };
    setPrefs(newPrefs);
    savePreferences(newPrefs);
    setOpen(false);
    setManaging(false);
  };

  if (!open) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-4xl m-4 p-4 rounded-lg shadow-lg" style={{ backgroundColor: "var(--card-bg)", border: "1px solid var(--border-color)" }}>
        <h4 className="text-lg font-semibold text-white mb-2">Consentimento de Cookies</h4>
        <p className="text-gray-300 mb-3">
          Utilizamos cookies necessários para funcionamento do site. Você pode permitir cookies funcionais, de análise e marketing para melhorar sua experiência. Veja nossa
          <a href="/politica-de-privacidade" className="text-blue-400 hover:underline ml-1">Política de Privacidade</a>.
        </p>

        {!managing ? (
          <div className="flex flex-wrap gap-2">
            <button onClick={acceptNecessaryOnly} className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded">Permitir somente necessários</button>
            <button onClick={acceptAll} className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded">Permitir todos</button>
            <button onClick={() => setManaging(true)} className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded">Gerenciar preferências</button>
          </div>
        ) : (
          <div className="space-y-2">
            <div className="text-gray-300">Cookies necessários são sempre habilitados.</div>
            <label className="flex items-center gap-2 text-gray-200">
              <input type="checkbox" checked={prefs.functional} onChange={(e) => setPrefs(p => ({ ...p, functional: e.target.checked }))} /> Funcionais
            </label>
            <label className="flex items-center gap-2 text-gray-200">
              <input type="checkbox" checked={prefs.analytics} onChange={(e) => setPrefs(p => ({ ...p, analytics: e.target.checked }))} /> Análise
            </label>
            <label className="flex items-center gap-2 text-gray-200">
              <input type="checkbox" checked={prefs.marketing} onChange={(e) => setPrefs(p => ({ ...p, marketing: e.target.checked }))} /> Marketing
            </label>
            <div className="flex flex-wrap gap-2 mt-3">
              <button onClick={save} className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded">Salvar preferências</button>
              <button onClick={() => setManaging(false)} className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded">Voltar</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}