// Download CTA
window.DownloadCTA = function DownloadCTA({ t }) {
  const reveal = window.useReveal();
  return (
    <section id="download" ref={reveal} style={{
      padding: '60px 48px 120px', maxWidth: 1200, margin: '0 auto',
    }}>
      <div className="reveal" style={{
        background: 'var(--b-text)', borderRadius: 48, padding: '96px 64px',
        textAlign: 'center', position: 'relative', overflow: 'hidden',
        boxShadow: '0 20px 60px rgba(11,15,20,0.25)',
      }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents:'none',
          background: 'radial-gradient(circle at 20% 10%, rgba(0,166,161,0.1), transparent 55%), radial-gradient(circle at 80% 90%, rgba(255,149,0,0.08), transparent 55%)',
        }}/>
        <h2 style={{ fontSize: 64, fontWeight: 900, letterSpacing: '-0.035em', lineHeight: 1.02, margin: '0 0 20px', color: '#fff', position: 'relative' }}>
          {t.cta.title[0]}<br/>
          <span style={{ color: 'rgba(255,255,255,0.55)' }}>{t.cta.title[1]}</span>
        </h2>
        <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, margin: '0 auto 40px', maxWidth: 520, position: 'relative' }}>
          {t.cta.sub}
        </p>
        <div style={{ position: 'relative' }}>
          <button style={{
            display: 'inline-flex', alignItems: 'center', gap: 12,
            padding: '16px 28px', background: '#fff', color: '#0B0F14',
            border: 'none', borderRadius: 100, fontSize: 15, fontWeight: 600,
            fontFamily: 'inherit', cursor: 'pointer', letterSpacing: '-0.01em',
            boxShadow: '0 12px 28px rgba(0,0,0,0.25)',
          }}>
            <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor"><path d="M13.5 5.3c-1.4-.1-2.6.8-3.3.8-.7 0-1.8-.8-3-.8-1.5 0-2.9.9-3.7 2.2-1.6 2.8-.4 6.9 1.1 9.1.7 1.1 1.6 2.3 2.8 2.3 1.1-.1 1.5-.7 2.8-.7 1.4 0 1.8.7 3 .7 1.2 0 2-1.1 2.8-2.2.9-1.3 1.2-2.5 1.3-2.6-.1-.1-2.4-.9-2.4-3.7 0-2.3 1.9-3.4 2-3.5-1.1-1.5-2.7-1.7-3.3-1.7zm-.9-1.5c.6-.8 1-1.8 0.9-2.8-.9.1-2 .6-2.6 1.3-.6.7-1.1 1.8-.9 2.7 1 .1 2-.5 2.6-1.2z"/></svg>
            {t.cta.primary}
          </button>
        </div>
      </div>
    </section>
  );
};
