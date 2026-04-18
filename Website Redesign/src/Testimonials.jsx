// Testimonials — marquee-style big type carousel
window.Testimonials = function Testimonials({ t }) {
  const reveal = window.useReveal();
  const [i, setI] = React.useState(0);
  const quotes = t.testimonials.quotes;

  React.useEffect(() => {
    const id = setInterval(() => setI(v => (v + 1) % quotes.length), 6500);
    return () => clearInterval(id);
  }, [quotes.length]);

  return (
    <section ref={reveal} style={{
      padding: '120px 48px', maxWidth: 1200, margin: '0 auto',
    }}>
      <div className="reveal" style={{ fontSize: 12, fontWeight: 700, color: 'var(--b-text-3)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 32, textAlign: 'center' }}>
        {t.testimonials.eyebrow}
      </div>
      <div className="reveal reveal-d1" style={{
        background: 'var(--b-bg-elevated)', borderRadius: 48, padding: '72px 64px 56px',
        boxShadow: 'var(--emboss-raised)', position: 'relative',
        minHeight: 340,
      }}>
        <div style={{ position:'absolute', top: 32, left: 48, fontSize: 120, lineHeight: 0.7, color: 'var(--b-text-3)', opacity: 0.3, fontFamily: 'Georgia, serif', fontWeight: 700 }}>“</div>
        <div style={{ position: 'relative', minHeight: 200 }}>
          {quotes.map((q, k) => (
            <div key={k} style={{
              position: 'absolute', inset: 0,
              opacity: i === k ? 1 : 0,
              transform: i === k ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.16,1,0.3,1)',
              pointerEvents: i === k ? 'auto' : 'none',
            }}>
              <div style={{ fontSize: 36, fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1.25, color: 'var(--b-text)', maxWidth: 980, textWrap: 'pretty' }}>
                “{q.q}”
              </div>
              <div style={{ marginTop: 40, display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: '50%', background: 'var(--b-bg)',
                  boxShadow: 'var(--emboss-soft)',
                  display: 'flex', alignItems:'center', justifyContent:'center',
                  fontSize: 14, fontWeight: 700, color: 'var(--b-text)', letterSpacing: '-0.01em',
                }}>{q.n.split(' ').map(s => s[0]).join('').slice(0,2)}</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--b-text)' }}>{q.n}</div>
                  <div style={{ fontSize: 13, color: 'var(--b-text-2)' }}>{q.r} · {q.c}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ position: 'absolute', bottom: 32, right: 40, display: 'flex', gap: 8 }}>
          {quotes.map((_, k) => (
            <button key={k} onClick={() => setI(k)} style={{
              width: i === k ? 24 : 8, height: 8, borderRadius: 4,
              background: i === k ? 'var(--b-text)' : 'var(--b-text-3)',
              border: 'none', cursor: 'pointer', padding: 0,
              transition: 'width 0.3s ease, background 0.3s ease',
            }}/>
          ))}
        </div>
      </div>
    </section>
  );
};
