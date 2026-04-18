// Animated stats band
window.StatsBand = function StatsBand({ t }) {
  const ref = React.useRef(null);
  const [active, setActive] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) setActive(true); });
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const reveal = window.useReveal();

  return (
    <section ref={reveal} style={{
      padding: '120px 48px 120px', maxWidth: 1200, margin: '0 auto',
    }}>
      <div ref={ref} className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 96, alignItems: 'end', marginBottom: 48 }}>
        <div>
          <div style={eyebrowStyle}>{t.stats.sub}</div>
          <h2 style={{ fontSize: 52, fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.05, margin: 0, color: 'var(--b-text)' }}>
            {t.stats.title}
          </h2>
        </div>
      </div>
      <div className="reveal reveal-d1" style={{
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0,
        background: 'var(--b-bg-elevated)', borderRadius: 48,
        boxShadow: 'var(--emboss-raised)', padding: '44px 8px',
      }}>
        {t.stats.items.map((s, i) => (
          <StatCell key={i} item={s} active={active} />
        ))}
      </div>
    </section>
  );
};

function StatCell({ item, active }) {
  const val = window.useCountUp(item.v, active, 1600);
  return (
    <div style={{
      padding: '8px 40px', borderLeft: '1px solid var(--b-border)',
      display: 'flex', flexDirection: 'column', gap: 10,
    }}>
      <div style={{ fontSize: 56, fontWeight: 900, letterSpacing: '-0.035em', lineHeight: 1, color: 'var(--b-text)' }}>
        {item.suffix ? val + item.suffix : window.fmtNum(val)}
      </div>
      <div style={{ fontSize: 14, color: 'var(--b-text-2)', lineHeight: 1.4 }}>
        {item.l}
      </div>
    </div>
  );
}

window.eyebrowStyle = {
  fontSize: 12, fontWeight: 700, color: 'var(--b-text-3)',
  letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 14,
};
