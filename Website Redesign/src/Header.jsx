// Floating pill header with scroll-hide
window.Header = function Header({ t, lang }) {
  const { dir, atTop } = window.useScrollDirection();
  const hidden = dir === 'down' && !atTop;
  return (
    <header style={{
      position: 'fixed', top: 24, left: 48, right: 48, zIndex: 100,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '12px 14px 12px 24px',
      background: 'color-mix(in srgb, var(--b-bg-elevated) 65%, transparent)',
      backdropFilter: 'blur(20px) saturate(180%)',
      WebkitBackdropFilter: 'blur(20px) saturate(180%)',
      borderRadius: 100,
      border: '1px solid var(--b-border)',
      boxShadow: '0 8px 32px rgba(11,15,20,0.06)',
      transform: hidden ? 'translateY(-130%)' : 'translateY(0)',
      opacity: hidden ? 0 : 1,
      transition: 'transform 0.45s cubic-bezier(0.16,1,0.3,1), opacity 0.35s ease',
    }}>
      <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top:0, behavior:'smooth' }); }}
         style={{ display:'flex', alignItems:'center', gap: 10 }}>
        <BricksWordmark />
      </a>
      <nav style={{ display:'flex', gap: 6, alignItems: 'center' }}>
        {[
          { id: 'products', label: t.nav.products },
          { id: 'philosophy', label: t.nav.philosophy },
          { id: 'changelog', label: t.nav.changelog },
        ].map(link => (
          <a key={link.id} href={'#' + link.id}
             onClick={(e) => { e.preventDefault(); window.smoothScrollTo(link.id); }}
             style={{
               fontSize: 14, fontWeight: 500, color: 'var(--b-text)',
               padding: '8px 14px', borderRadius: 100,
               letterSpacing: '-0.01em', opacity: 0.8,
               transition: 'opacity 0.2s, background 0.2s',
             }}
             onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
             onMouseLeave={(e) => e.currentTarget.style.opacity = 0.8}
          >{link.label}</a>
        ))}
        <button
          onClick={() => window.smoothScrollTo('download')}
          style={{
            marginLeft: 6, padding: '10px 18px', borderRadius: 100,
            background: 'var(--b-text)', color: 'var(--b-bg)',
            border: 'none', fontSize: 14, fontWeight: 600, cursor: 'pointer',
            fontFamily: 'inherit', letterSpacing: '-0.01em',
            boxShadow: '0 8px 20px rgba(11,15,20,0.18)',
            transition: 'transform 0.15s ease, box-shadow 0.2s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
        >{t.nav.download}</button>
      </nav>
    </header>
  );
};

function BricksWordmark() {
  return (
    <svg width="88" height="22" viewBox="0 0 290 90" fill="none">
      <g fill="currentColor">
        <rect x="29.9" y="16.875" width="28.125" height="9.235" rx="4.6"/>
        <rect x="29.9" y="40.38" width="28.125" height="9.235" rx="4.6"/>
        <rect x="29.9" y="63.89" width="28.125" height="9.235" rx="4.6"/>
        <rect x="45.01" y="28.63" width="28.125" height="9.235" rx="4.6"/>
        <rect x="26.05" y="16.875" width="56.25" height="9.18" rx="4.58" transform="rotate(90 26.05 16.875)"/>
        <path d="M29.9 28.63h7.98c2.55 0 4.62 2.07 4.62 4.62s-2.07 4.62-4.62 4.62H29.9V28.63z"/>
        <path d="M29.9 52.14h7.98c2.55 0 4.62 2.07 4.62 4.62s-2.07 4.62-4.62 4.62H29.9V52.14z"/>
        <rect x="45.01" y="52.14" width="28.125" height="9.235" rx="4.6"/>
      </g>
      <g fill="currentColor">
        <path d="M103 32h8v9h3c6 0 9 3 9 8s-3 9-10 9h-10V32zm8 20h2c3 0 4-1 4-3s-1-3-4-3h-2v6z"/>
        <path d="M128 41h7v3c1-2 3-3 6-3v7c-3 0-5 1-5 4v6h-8V41z"/>
        <path d="M152 40c6 0 10 4 10 9s-4 9-10 9-10-4-10-9 4-9 10-9zm0 13c2 0 3-2 3-4s-1-4-3-4-3 2-3 4 1 4 3 4z"/>
        <path d="M164 32h8v26h-8V32z"/>
        <path d="M185 40c4 0 7 2 8 5l-6 2c0-1-1-2-2-2-2 0-3 2-3 4s1 4 3 4c1 0 2-1 2-2l6 2c-1 3-4 5-8 5-6 0-10-4-10-9s4-9 10-9z"/>
        <path d="M203 50l7 8h-8l-5-7v7h-8V32h8v16l5-7h8l-7 9z"/>
        <path d="M225 45c0-1-1-1-2-1s-2 0-2 1c0 2 11 1 11 8 0 3-3 6-8 6-4 0-7-2-8-5l6-2c0 2 1 2 3 2s2 0 2-1c0-2-11 0-11-8 0-3 3-6 8-6 4 0 7 2 8 5l-7 1z"/>
      </g>
    </svg>
  );
}
