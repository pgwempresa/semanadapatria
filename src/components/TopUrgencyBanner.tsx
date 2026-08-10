import React from 'react';

export const TopUrgencyBanner: React.FC = () => {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const year = today.getFullYear();
  const formattedDate = `${day}/${month}/${year}`;

  return (
    <div className="bg-emerald-950 text-white text-xs sm:text-sm font-black py-2.5 px-4 text-center border-b-2 border-amber-400 shadow-md flex items-center justify-center gap-1.5 leading-snug">
      <span className="flex items-center gap-1.5 flex-wrap justify-center">
        <span>⚠️ Desconto exclusivo somente até hoje,</span>
        <span className="bg-amber-400 text-slate-950 px-2 py-0.5 rounded-md font-mono font-bold border border-amber-300">
          {formattedDate}
        </span>
        <span>! Aproveite antes que acabe.</span>
      </span>
    </div>
  );
};
