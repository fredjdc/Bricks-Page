// Product section: Calc — frameless floating screenshot
window.ProductCalc = function ProductCalc({ t }) {
  const reveal = window.useReveal();
  const accent = window.ACCENTS.calc.light;

  return (
    <section id="product-calc" ref={reveal} style={{
      padding: '100px 48px', maxWidth: 1280, margin: '0 auto',
    }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 96, alignItems: 'center' }}>
        {/* Left: screenshot */}
        <div className="reveal">
          <window.ScreenshotPhone
            src="assets/bricks-calc-en.png"
            alt="Bricks Calc amortization breakdown"
            accent={accent}
            tilt={1.5}
          />
        </div>

        {/* Right copy */}
        <div className="reveal reveal-d1">
          <div style={{ ...window.eyebrowStyle, color: accent }}>{t.calc.eyebrow}</div>
          <h2 style={window.h2Big}>
            {t.calc.title[0]}<br/>
            <span style={{ color: 'var(--b-text-2)' }}>{t.calc.title[1]}</span>
          </h2>
          <p style={window.leadP}>{t.calc.body}</p>
          <div style={{ display:'flex', flexDirection:'column', gap: 22, marginTop: 36 }}>
            {t.calc.bullets.map((b,i) => <window.Bullet key={i} accent={accent} {...b} />)}
          </div>
          <window.MoreInfoLink href="calc.html" accent={accent} label={t.calc.more} />
        </div>
      </div>
    </section>
  );
};
