import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-emerald-950 text-emerald-200 py-8 border-t border-emerald-900 text-center text-xs">
      <div className="max-w-4xl mx-auto px-4 space-y-3">
        <p className="font-semibold text-emerald-100">
          Atividades Pedagógicas — 7 de Setembro
        </p>
        <p>
          Este site não faz parte nem é endossado pelo Facebook ou Google. Todos os direitos reservados.
        </p>
        <p className="text-emerald-400/80">
          © {new Date().getFullYear()} — Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};
