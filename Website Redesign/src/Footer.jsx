// Footer with language + theme toggles
window.Footer = function Footer({ t, lang, setLang, theme, setTheme }) {
  return (
    <footer style={{
      padding: '80px 48px 48px', borderTop: '1px solid var(--b-border)',
      background: 'var(--b-bg)',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 48,
        marginBottom: 56,
      }}>
        <div>
          <BricksFooterMark/>
          <p style={{ fontSize: 14, color: 'var(--b-text-2)', lineHeight: 1.6, margin: '16px 0 24px', maxWidth: 300 }}>
            {t.footer.tag}
          </p>
          <div style={{ display: 'flex', gap: 10 }}>
            {['instagram','x','linkedin'].map(s => (
              <a key={s} href="#" style={{
                width: 36, height: 36, borderRadius: '50%', background: 'var(--b-bg-elevated)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: 'var(--emboss-soft)', color: 'var(--b-text-2)',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--b-text)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--b-text-2)'}
              >
                <SocialIcon kind={s}/>
              </a>
            ))}
          </div>
        </div>
        {t.footer.sections.map((s, i) => (
          <div key={i}>
            <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--b-text-3)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 18 }}>{s.h}</div>
            <div style={{ display:'flex', flexDirection:'column', gap: 12 }}>
              {s.l.map((l, j) => (
                <a key={j} href="#" style={{ fontSize: 14, color: 'var(--b-text)', opacity: 0.85 }}>{l}</a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Toggles row */}
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        padding: '32px 0', borderTop: '1px solid var(--b-border)',
        display: 'flex', gap: 32, flexWrap: 'wrap', alignItems: 'center',
      }}>
        <ToggleGroup
          label={t.footer.language}
          options={[{ v:'en', l:'EN' }, { v:'es', l:'ES' }]}
          value={lang} setValue={setLang}
        />
        <ToggleGroup
          label={t.footer.appearance}
          options={[
            { v:'auto', l: t.footer.auto },
            { v:'light', l: t.footer.light },
            { v:'dark', l: t.footer.dark },
          ]}
          value={theme} setValue={setTheme}
        />
      </div>

      <div style={{
        maxWidth: 1200, margin: '24px auto 0',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: 16,
      }}>
        <div style={{ fontSize: 13, color: 'var(--b-text-2)' }}>{t.footer.copyright}</div>
        <div style={{ display:'flex', gap: 20 }}>
          {t.footer.legal.map((l, i) => (
            <a key={i} href="#" style={{ fontSize: 13, color: 'var(--b-text-2)' }}>{l}</a>
          ))}
        </div>
      </div>
    </footer>
  );
};

function ToggleGroup({ label, options, value, setValue }) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
      <div style={{ fontSize: 11, fontWeight: 500, color: 'var(--b-text-3)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{label}</div>
      <div style={{ display: 'inline-flex', gap: 2 }}>
        {options.map((o, i) => (
          <React.Fragment key={o.v}>
            {i > 0 && <span style={{ color: 'var(--b-text-3)', fontSize: 12, alignSelf: 'center', opacity: 0.5 }}>·</span>}
            <button onClick={() => setValue(o.v)}
              style={{
                border: 'none', background: 'transparent', cursor: 'pointer', fontFamily: 'inherit',
                padding: '2px 6px', fontSize: 12,
                fontWeight: value === o.v ? 600 : 400,
                color: value === o.v ? 'var(--b-text)' : 'var(--b-text-2)',
                opacity: value === o.v ? 1 : 0.7,
                transition: 'opacity 0.2s ease, color 0.2s ease',
              }}
              onMouseEnter={(e) => { if (value !== o.v) e.currentTarget.style.opacity = 1; }}
              onMouseLeave={(e) => { if (value !== o.v) e.currentTarget.style.opacity = 0.7; }}
            >{o.l}</button>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

function BricksFooterMark() {
  return (
    <svg width="80" height="24" viewBox="0 0 290 90" fill="none" style={{ color: 'var(--b-text)' }}>
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
    </svg>
  );
}

function SocialIcon({ kind }) {
  const s = { stroke: 'currentColor', fill: 'none', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' };
  if (kind === 'instagram') return (
    <svg width="15" height="15" viewBox="0 0 20 20"><rect x="3" y="3" width="14" height="14" rx="4" {...s}/><circle cx="10" cy="10" r="3.2" {...s}/><circle cx="14.3" cy="5.7" r="0.5" fill="currentColor"/></svg>
  );
  if (kind === 'x') return (
    <svg width="13" height="13" viewBox="0 0 20 20" fill="currentColor"><path d="M15.2 2h2.8l-6.1 7 7.2 9h-5.6l-4.4-5.8L4 18H1.2l6.5-7.5L1 2h5.7l4 5.3zm-1 14.6h1.5L5.9 3.3H4.3z"/></svg>
  );
  return (
    <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor"><path d="M5.4 7.5h2.4v8.6H5.4zM6.6 3.5c-.8 0-1.4.6-1.4 1.4s.6 1.4 1.4 1.4 1.4-.6 1.4-1.4-.6-1.4-1.4-1.4zM9.4 7.5h2.3v1.2c.3-.6 1.1-1.3 2.3-1.3 2.4 0 2.9 1.6 2.9 3.7v5h-2.4v-4.4c0-1-.02-2.4-1.5-2.4-1.5 0-1.7 1.2-1.7 2.3v4.5H9.4z"/></svg>
  );
}
