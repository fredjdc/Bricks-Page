// Product section: Leads — frameless floating screenshot
window.ProductLeads = function ProductLeads({ t }) {
  const reveal = window.useReveal();
  const accent = window.ACCENTS.leads.light;

  return (
    <section id="product-leads" ref={reveal} style={{
      padding: '100px 48px', maxWidth: 1280, margin: '0 auto',
    }}>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1.1fr', gap: 96, alignItems:'center' }}>
        <div className="reveal">
          <div style={{ ...window.eyebrowStyle, color: accent }}>{t.leads.eyebrow}</div>
          <h2 style={window.h2Big}>
            {t.leads.title[0]}<br/>
            <span style={{ color: 'var(--b-text-2)' }}>{t.leads.title[1]}</span>
          </h2>
          <p style={window.leadP}>{t.leads.body}</p>
          <div style={{ display:'flex', flexDirection:'column', gap: 22, marginTop: 36 }}>
            {t.leads.bullets.map((b,i) => <window.Bullet key={i} accent={accent} {...b} />)}
          </div>
          <window.MoreInfoLink href="leads.html" accent={accent} label={t.leads.more} />
        </div>

        <div className="reveal reveal-d1">
          <window.ScreenshotPhone
            src="assets/bricks-leads-en.png"
            alt="Bricks Leads daily schedule"
            accent={accent}
            tilt={-1.5}
          />
        </div>
      </div>
    </section>
  );
};
