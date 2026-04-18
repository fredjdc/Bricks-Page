// Changelog section
window.Changelog = function Changelog({ t }) {
  const reveal = window.useReveal();
  const tagColors = {
    Scan: window.ACCENTS.scan.light,
    Calc: window.ACCENTS.calc.light,
    Leads: window.ACCENTS.leads.light,
  };
  return (
    <section id="changelog" ref={reveal} style={{
      padding: '120px 48px', maxWidth: 1200, margin: '0 auto',
    }}>
      <div style={{ display:'grid', gridTemplateColumns: '1fr 1.6fr', gap: 96, alignItems: 'start' }}>
        <div className="reveal">
          <div style={window.eyebrowStyle}>{t.changelog.eyebrow}</div>
          <h2 style={{ fontSize: 52, fontWeight: 900, letterSpacing: '-0.035em', lineHeight: 1.05, margin: '0 0 18px', color: 'var(--b-text)' }}>
            {t.changelog.title}
          </h2>
          <p style={{ fontSize: 16, color: 'var(--b-text-2)', lineHeight: 1.6, margin: 0 }}>
            {t.changelog.sub}
          </p>
        </div>
        <div className="reveal reveal-d1" style={{
          background: 'var(--b-bg-elevated)', borderRadius: 36, padding: '8px 32px',
          boxShadow: 'var(--emboss-raised)',
        }}>
          {t.changelog.items.map((it, i) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '88px 72px 1fr', gap: 24,
              alignItems: 'start', padding: '26px 0',
              borderBottom: i === t.changelog.items.length - 1 ? 'none' : '1px solid var(--b-border)',
            }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--b-text-2)', paddingTop: 3 }}>{it.date}</div>
              <div>
                <span style={{
                  display: 'inline-block', padding: '3px 10px', borderRadius: 100,
                  background: tagColors[it.tag] + '1A', color: tagColors[it.tag],
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.05em',
                }}>{it.tag}</span>
              </div>
              <div>
                <div style={{ fontSize: 18, fontWeight: 600, color: 'var(--b-text)', letterSpacing: '-0.01em', marginBottom: 4 }}>{it.title}</div>
                <div style={{ fontSize: 14, color: 'var(--b-text-2)', lineHeight: 1.55 }}>{it.body}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
