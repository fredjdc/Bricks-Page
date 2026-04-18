// Split hero — 3 vertical panels, one per product
window.HeroSplit = function HeroSplit({ t, lang }) {
  const [hover, setHover] = React.useState(null);
  const ref = window.useReveal();
  const products = [
    { id: 'scan',  accent: window.ACCENTS.scan,  section: 'product-scan'  },
    { id: 'calc',  accent: window.ACCENTS.calc,  section: 'product-calc'  },
    { id: 'leads', accent: window.ACCENTS.leads, section: 'product-leads' },
  ];
  return (
    <section id="top" ref={ref} style={{
      position: 'relative', minHeight: '100vh', paddingTop: 120,
      display: 'flex', flexDirection: 'column', overflow: 'hidden',
      background: 'var(--b-bg)',
    }}>
      {/* Ambient KenBurns light wash */}
      <div style={{
        position:'absolute', inset: 0, pointerEvents:'none', opacity: 0.7,
        background: 'radial-gradient(ellipse 900px 600px at 20% 10%, color-mix(in srgb, var(--b-text) 4%, transparent), transparent 60%), radial-gradient(ellipse 800px 500px at 85% 15%, rgba(0,166,161,0.06), transparent 60%)',
        animation: 'kenburns 26s ease-in-out infinite alternate',
      }}/>

      {/* Top copy */}
      <div className="reveal" style={{
        position:'relative', zIndex:2, maxWidth: 1200, margin: '0 auto',
        padding: '80px 48px 56px', width: '100%',
      }}>
        <div style={{
          display:'inline-block', padding:'6px 14px', borderRadius: 100,
          background: 'var(--b-bg-elevated)', boxShadow: 'var(--emboss-soft)',
          fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
          color: 'var(--b-text-2)', marginBottom: 32,
        }}>{t.hero.eyebrow}</div>
        <h1 style={{
          fontSize: 96, fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 0.98,
          margin: 0, maxWidth: 1100,
        }}>
          {t.hero.title[0]}<br/>
          <span style={{ color: 'var(--b-text-2)' }}>{t.hero.title[1]}</span>
        </h1>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 40, gap: 48 }}>
          <p style={{ fontSize: 20, lineHeight: 1.55, color: 'var(--b-text-2)', margin: 0, maxWidth: 520 }}>
            {t.hero.body}
          </p>
          <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--b-text-3)', letterSpacing: '0.1em', textTransform: 'uppercase', whiteSpace: 'nowrap', paddingBottom: 6 }}>
            {t.hero.pickLabel} ↓
          </div>
        </div>
      </div>

      {/* Split panels */}
      <div className="reveal reveal-d1" style={{
        position:'relative', zIndex:2, flex: 1, display: 'grid',
        gridTemplateColumns: products.map(p => hover === p.id ? '1.4fr' : hover == null ? '1fr' : '0.9fr').join(' '),
        gap: 0, maxWidth: 1400, width: 'calc(100% - 96px)', margin: '0 auto',
        minHeight: 420, transition: 'grid-template-columns 0.6s cubic-bezier(0.16,1,0.3,1)',
        paddingBottom: 80,
      }}>
        {products.map((p, i) => {
          const info = t.products[p.id];
          const isHover = hover === p.id;
          return (
            <a key={p.id} href={'#' + p.section}
               onClick={(e) => { e.preventDefault(); window.smoothScrollTo(p.section); }}
               onMouseEnter={() => setHover(p.id)}
               onMouseLeave={() => setHover(null)}
               style={{
                 position: 'relative', overflow: 'hidden', cursor: 'pointer',
                 background: 'var(--b-bg-elevated)',
                 boxShadow: isHover ? 'var(--emboss-raised)' : 'var(--emboss-soft)',
                 borderRadius: i === 0 ? '48px 0 0 48px' : i === 2 ? '0 48px 48px 0' : '0',
                 padding: '40px 36px 36px',
                 display: 'flex', flexDirection: 'column',
                 transition: 'box-shadow 0.4s ease, transform 0.4s ease',
                 transform: isHover ? 'translateY(-4px)' : 'translateY(0)',
                 borderLeft: i === 0 ? 'none' : '1px solid var(--b-border)',
               }}
            >
              {/* Product accent bar top */}
              <div style={{
                position:'absolute', top: 0, left: 0, right: 0, height: 3,
                background: p.accent.light, opacity: isHover ? 1 : 0.35,
                transition: 'opacity 0.3s ease',
              }}/>
              {/* Accent glow bottom */}
              <div style={{
                position:'absolute', inset: 0, pointerEvents:'none',
                background: `radial-gradient(ellipse 380px 220px at 50% 115%, ${p.accent.light}22, transparent 70%)`,
                opacity: isHover ? 1 : 0.5,
                transition: 'opacity 0.4s ease',
              }}/>

              <div style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: p.accent.light, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  0{i+1} / Bricks {info.name}
                </div>
                <ArrowGlyph accent={p.accent.light} rotated={isHover}/>
              </div>

              <div style={{ flex: 1 }}/>

              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                  fontSize: isHover ? 100 : 84, fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 0.95,
                  color: 'var(--b-text)', transition: 'font-size 0.5s cubic-bezier(0.16,1,0.3,1)',
                  marginBottom: 12,
                }}>{info.name}</div>
                <div style={{ fontSize: 22, fontWeight: 500, color: 'var(--b-text)', letterSpacing: '-0.01em', marginBottom: 6 }}>
                  {info.tagline}
                </div>
                <div style={{ fontSize: 15, color: 'var(--b-text-2)', lineHeight: 1.5 }}>
                  {info.pitch}
                </div>
              </div>
            </a>
          );
        })}
      </div>

      <style>{`
        @keyframes kenburns {
          0% { transform: scale(1) translate(0,0); }
          100% { transform: scale(1.08) translate(2%, -1%); }
        }
      `}</style>
    </section>
  );
};

function ArrowGlyph({ accent, rotated }) {
  return (
    <div style={{
      width: 44, height: 44, borderRadius: '50%',
      background: 'var(--b-bg)', boxShadow: 'var(--emboss-soft)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1)',
      transform: rotated ? 'rotate(-45deg)' : 'rotate(0)',
    }}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M3 8h10M10 5l3 3-3 3" stroke={accent} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}
