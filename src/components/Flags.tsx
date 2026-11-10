import React from 'react';

export function SpainFlag({ className = 'w-7 h-5' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 30 20"
      aria-label="Bandera de España"
      className={`${className} inline-block rounded-[2px] shadow-sm border border-black/20 shrink-0`}
    >
      <rect width="30" height="20" fill="#AA151B" />
      <rect y="5" width="30" height="10" fill="#F1BF00" />
      {/* Escudo estilizado */}
      <rect x="6.5" y="7" width="3.2" height="4.5" rx="1" fill="#AA151B" stroke="#7A1C1C" strokeWidth="0.4" />
      <circle cx="8.1" cy="6.5" r="1" fill="#D4AF37" />
    </svg>
  );
}

export function ValenciaFlag({ className = 'w-7 h-5' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 30 20"
      aria-label="Reial Senyera Valenciana"
      className={`${className} inline-block rounded-[2px] shadow-sm border border-black/20 shrink-0`}
    >
      {/* Fundo Ouro das Quatro Barras */}
      <rect width="30" height="20" fill="#FCDD09" />
      {/* Quatro Barras Vermelhas (Goles) */}
      <rect y="2.2" width="30" height="2.2" fill="#DA121A" />
      <rect y="6.6" width="30" height="2.2" fill="#DA121A" />
      <rect y="11.0" width="30" height="2.2" fill="#DA121A" />
      <rect y="15.4" width="30" height="2.2" fill="#DA121A" />
      {/* Franja Azul Real junto à tralha (Reial Senyera Coronada) */}
      <rect width="7.5" height="20" fill="#0038A8" />
      {/* Ornamento da Coroa Real em Ouro na faixa azul */}
      <path
        d="M2 5 L3.75 3.5 L5.5 5 L5.5 15 L3.75 16.5 L2 15 Z"
        fill="none"
        stroke="#D4AF37"
        strokeWidth="0.9"
      />
      <circle cx="3.75" cy="7.5" r="0.9" fill="#FCDD09" />
      <circle cx="3.75" cy="10" r="0.9" fill="#DA121A" />
      <circle cx="3.75" cy="12.5" r="0.9" fill="#FCDD09" />
    </svg>
  );
}

export function BrazilFlag({ className = 'w-6 h-4' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 30 20"
      aria-label="Bandeira do Brasil"
      className={`${className} inline-block rounded-[2px] shadow-sm border border-black/20 shrink-0`}
    >
      <rect width="30" height="20" fill="#009B3A" />
      <polygon points="15,2.5 27,10 15,17.5 3,10" fill="#FEDF00" />
      <circle cx="15" cy="10" r="4.2" fill="#002776" />
    </svg>
  );
}

export function SpainAndValenciaFlags({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const dims =
    size === 'lg'
      ? 'w-10 h-7'
      : size === 'sm'
      ? 'w-6 h-4'
      : 'w-8 h-5';

  return (
    <span
      className="inline-flex items-center gap-1.5 px-2 py-1 bg-parchment-card/90 border border-deco-gold/70 rounded-sm shadow-sm"
      title="España & Comunitat Valenciana (Vinaròs)"
    >
      <SpainFlag className={dims} />
      <ValenciaFlag className={dims} />
    </span>
  );
}

export function SpainValenciaBrazilFlags({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const dims =
    size === 'lg'
      ? 'w-10 h-7'
      : size === 'sm'
      ? 'w-6 h-4'
      : 'w-8 h-5';

  return (
    <span
      className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-parchment-card/95 border border-deco-gold/80 rounded-sm shadow-sm"
      title="España • Comunitat Valenciana • Brasil"
    >
      <SpainFlag className={dims} />
      <ValenciaFlag className={dims} />
      <BrazilFlag className={dims} />
    </span>
  );
}
