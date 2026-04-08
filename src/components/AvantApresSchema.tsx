export default function AvantApresSchema() {
  return (
    <div className="mt-12">
      {/* Titre */}
      <p className="font-serif text-xl md:text-2xl font-semibold text-navy text-center mb-8">
        D&apos;un dispositif dispersé à un dispositif structuré et pilotable
      </p>

      <svg
        width="100%"
        viewBox="0 0 860 310"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <marker
            id="arrow-aa"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path
              d="M2 1L8 5L2 9"
              fill="none"
              stroke="context-stroke"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </marker>
        </defs>

        {/* ============================== */}
        {/*         CÔTÉ AVANT             */}
        {/* ============================== */}

        <text
          fontFamily="var(--font-inter), sans-serif"
          fontSize="11"
          fontWeight="500"
          x="185"
          y="20"
          textAnchor="middle"
          fill="currentColor"
          opacity="0.4"
          letterSpacing="0.05em"
        >
          AVANT
        </text>

        {/* Bloc 1 — Informations éparpillées */}
        <rect x="40" y="42" width="190" height="44" rx="6" fill="currentColor" fillOpacity="0.04" stroke="currentColor" strokeWidth="0.7" opacity="0.4" />
        <text fontFamily="var(--font-inter), sans-serif" fontSize="12" x="135" y="68" textAnchor="middle" fill="currentColor" opacity="0.55">Informations éparpillées</text>

        {/* Bloc 2 — Dépendance aux personnes */}
        <rect x="120" y="112" width="196" height="44" rx="6" fill="currentColor" fillOpacity="0.04" stroke="currentColor" strokeWidth="0.7" opacity="0.4" />
        <text fontFamily="var(--font-inter), sans-serif" fontSize="12" x="218" y="138" textAnchor="middle" fill="currentColor" opacity="0.55">Dépendance aux personnes</text>

        {/* Bloc 3 — Difficulté de lecture globale */}
        <rect x="55" y="182" width="210" height="44" rx="6" fill="currentColor" fillOpacity="0.04" stroke="currentColor" strokeWidth="0.7" opacity="0.4" />
        <text fontFamily="var(--font-inter), sans-serif" fontSize="12" x="160" y="208" textAnchor="middle" fill="currentColor" opacity="0.55">Difficulté de lecture globale</text>

        {/* Traits désordonnés — uniquement dans les espaces vides entre blocs */}
        {/* Bas-droit de bloc1 → haut-gauche de bloc2 (espace entre les 2) */}
        <line x1="200" y1="86" x2="155" y2="112" stroke="currentColor" strokeWidth="0.6" strokeDasharray="3 3" opacity="0.18" />
        {/* Bas-gauche de bloc1 → gauche de bloc3 (passe dans la marge gauche) */}
        <line x1="55" y1="86" x2="60" y2="182" stroke="currentColor" strokeWidth="0.6" strokeDasharray="3 3" opacity="0.15" />
        {/* Bas-droit de bloc2 → haut-droit de bloc3 (espace entre les 2) */}
        <line x1="260" y1="156" x2="240" y2="182" stroke="currentColor" strokeWidth="0.6" strokeDasharray="3 3" opacity="0.18" />
        {/* Bas de bloc1 côté gauche → gauche de bloc2 */}
        <line x1="70" y1="86" x2="130" y2="112" stroke="currentColor" strokeWidth="0.6" strokeDasharray="3 3" opacity="0.12" />

        {/* Sous-label */}
        <text fontFamily="var(--font-inter), sans-serif" fontSize="11" x="185" y="262" textAnchor="middle" fill="currentColor" opacity="0.35">Dispersé — difficile à présenter</text>

        {/* ============================== */}
        {/*       SÉPARATION CENTRALE      */}
        {/* ============================== */}

        <line x1="405" y1="32" x2="405" y2="250" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.15" />

        {/* Flèche centrale */}
        <line x1="360" y1="145" x2="420" y2="145" stroke="currentColor" strokeWidth="1.4" opacity="0.45" markerEnd="url(#arrow-aa)" />

        {/* ============================== */}
        {/*         CÔTÉ APRÈS             */}
        {/* ============================== */}

        <text
          fontFamily="var(--font-inter), sans-serif"
          fontSize="11"
          fontWeight="500"
          x="630"
          y="20"
          textAnchor="middle"
          fill="currentColor"
          opacity="0.4"
          letterSpacing="0.05em"
        >
          APRÈS
        </text>

        {/* Bloc — Organisation claire (haut) */}
        <rect x="540" y="38" width="180" height="40" rx="6" fill="currentColor" fillOpacity="0.03" stroke="currentColor" strokeWidth="0.6" opacity="0.4" />
        <text fontFamily="var(--font-inter), sans-serif" fontSize="12" x="630" y="62" textAnchor="middle" fill="currentColor" opacity="0.55">Organisation claire</text>
        <line x1="630" y1="78" x2="630" y2="106" stroke="currentColor" strokeWidth="0.9" opacity="0.3" markerEnd="url(#arrow-aa)" />

        {/* Bloc central — Dispositif structuré */}
        <rect x="540" y="108" width="180" height="56" rx="8" fill="currentColor" fillOpacity="0.06" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
        <text fontFamily="var(--font-inter), sans-serif" fontSize="11" x="630" y="130" textAnchor="middle" fill="currentColor" opacity="0.4">Dispositif</text>
        <text fontFamily="var(--font-cormorant), serif" fontSize="17" fontWeight="600" x="630" y="152" textAnchor="middle" fill="currentColor">structuré</text>

        {/* Bloc — Responsabilités identifiées (droite) */}
        <rect x="742" y="112" width="100" height="48" rx="6" fill="currentColor" fillOpacity="0.03" stroke="currentColor" strokeWidth="0.6" opacity="0.4" />
        <text fontFamily="var(--font-inter), sans-serif" fontSize="11" x="792" y="133" textAnchor="middle" fill="currentColor" opacity="0.55">Responsabilités</text>
        <text fontFamily="var(--font-inter), sans-serif" fontSize="11" x="792" y="148" textAnchor="middle" fill="currentColor" opacity="0.55">identifiées</text>
        <line x1="742" y1="136" x2="722" y2="136" stroke="currentColor" strokeWidth="0.9" opacity="0.3" markerEnd="url(#arrow-aa)" />

        {/* Bloc — Lecture consolidée (bas) */}
        <rect x="540" y="194" width="180" height="40" rx="6" fill="currentColor" fillOpacity="0.03" stroke="currentColor" strokeWidth="0.6" opacity="0.4" />
        <text fontFamily="var(--font-inter), sans-serif" fontSize="12" x="630" y="218" textAnchor="middle" fill="currentColor" opacity="0.55">Lecture consolidée</text>
        <line x1="630" y1="194" x2="630" y2="166" stroke="currentColor" strokeWidth="0.9" opacity="0.3" markerEnd="url(#arrow-aa)" />

        {/* Sous-label */}
        <text fontFamily="var(--font-inter), sans-serif" fontSize="11" x="630" y="262" textAnchor="middle" fill="currentColor" opacity="0.35">Structuré — lisible et démontrable</text>
      </svg>
    </div>
  );
}
