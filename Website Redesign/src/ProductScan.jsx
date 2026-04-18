// Product section: Scan — frameless floating screenshot
window.ProductScan = function ProductScan({ t }) {
  const reveal = window.useReveal();
  const accent = window.ACCENTS.scan.light;

  return (
    <section id="product-scan" ref={reveal} style={{
      padding: '100px 48px', maxWidth: 1280, margin: '0 auto',
    }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 96, alignItems: 'center' }}>
        <div className="reveal">
          <div style={{ ...window.eyebrowStyle, color: accent }}>{t.scan.eyebrow}</div>
          <h2 style={window.h2Big}>
            {t.scan.title[0]}<br/>
            <span style={{ color: 'var(--b-text-2)' }}>{t.scan.title[1]}</span>
          </h2>
          <p style={window.leadP}>{t.scan.body}</p>
          <div style={{ display:'flex', flexDirection:'column', gap: 22, marginTop: 36 }}>
            {t.scan.bullets.map((b,i) => <window.Bullet key={i} accent={accent} {...b} />)}
          </div>
          <window.MoreInfoLink href="scan.html" accent={accent} label={t.scan.more} />
        </div>

        {/* Right — screenshot */}
        <div className="reveal reveal-d1">
          <window.ScreenshotPhone
            src="assets/bricks-scan-en.png"
            alt="Bricks Scan home screen"
            accent={accent}
            tilt={-1.5}
          />
        </div>
      </div>
    </section>
  );
};

window.Bullet = function Bullet({ accent, t, d }) {
  return (
    <div style={{ display:'flex', gap: 14, alignItems: 'flex-start' }}>
      <div style={{ width: 8, height: 8, borderRadius: 4, background: accent, marginTop: 9, flexShrink: 0 }}/>
      <div>
        <div style={{ fontSize: 18, fontWeight: 600, color: 'var(--b-text)', marginBottom: 3 }}>{t}</div>
        <div style={{ fontSize: 15, color: 'var(--b-text-2)', lineHeight: 1.5 }}>{d}</div>
      </div>
    </div>
  );
};

window.h2Big = {
  fontSize: 56, fontWeight: 900, letterSpacing: '-0.035em', lineHeight: 1.02,
  margin: '0 0 24px', color: 'var(--b-text)',
};
window.leadP = {
  fontSize: 18, lineHeight: 1.6, color: 'var(--b-text-2)', margin: 0, maxWidth: 520,
};
