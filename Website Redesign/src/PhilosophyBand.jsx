// Philosophy / "Why trust Bricks" band
window.PhilosophyBand = function PhilosophyBand({ t }) {
  const reveal = window.useReveal();
  return (
    <section id="philosophy" ref={reveal} style={{
      padding: '120px 48px', maxWidth: 1200, margin: '0 auto',
    }}>
      <div className="reveal" style={{ maxWidth: 780, marginBottom: 72 }}>
        <div style={window.eyebrowStyle}>{t.philosophy.eyebrow}</div>
        <h2 style={{ fontSize: 64, fontWeight: 900, letterSpacing: '-0.035em', lineHeight: 1.02, margin: '0 0 24px', color: 'var(--b-text)' }}>
          {t.philosophy.title[0]}<br/>
          <span style={{ color: 'var(--b-text-2)' }}>{t.philosophy.title[1]}</span>
        </h2>
        <p style={{ fontSize: 20, color: 'var(--b-text-2)', lineHeight: 1.55, margin: 0 }}>
          {t.philosophy.body}
        </p>
      </div>
      <div style={{ display:'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
        {t.philosophy.pillars.map((p, i) => (
          <div key={i} className={`reveal reveal-d${i+1}`} style={{
            background: 'var(--b-bg-elevated)', borderRadius: 36, padding: '32px 32px 36px',
            boxShadow: 'var(--emboss-raised)',
          }}>
            <div style={{
              width: 42, height: 42, borderRadius: 14, background: 'var(--b-bg)',
              boxShadow: 'var(--emboss-recessed)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: 22, color: 'var(--b-text)',
            }}>
              <PhilosophyIcon index={i}/>
            </div>
            <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.01em', marginBottom: 8, color: 'var(--b-text)' }}>{p.t}</div>
            <div style={{ fontSize: 15, color: 'var(--b-text-2)', lineHeight: 1.55 }}>{p.d}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

function PhilosophyIcon({ index }) {
  const stroke = { stroke: 'currentColor', strokeWidth: 1.5, fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' };
  if (index === 0) return (
    <svg width="20" height="20" viewBox="0 0 20 20"><rect x="4" y="3" width="12" height="14" rx="2" {...stroke}/><path d="M7 7h6M7 10h6M7 13h4" {...stroke}/><circle cx="10" cy="17.5" r="0.5" fill="currentColor"/></svg>
  );
  if (index === 1) return (
    <svg width="20" height="20" viewBox="0 0 20 20"><path d="M10 2a5 5 0 013 9c-.5 2-.5 4 0 6H7c.5-2 .5-4 0-6a5 5 0 013-9z" {...stroke}/></svg>
  );
  return (
    <svg width="20" height="20" viewBox="0 0 20 20"><circle cx="10" cy="10" r="7" {...stroke}/><path d="M10 6v4l3 2" {...stroke}/></svg>
  );
}
