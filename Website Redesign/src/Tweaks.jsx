// Tweaks panel (host-driven). The footer has visible toggles already; this
// just exposes them to the external Tweaks toolbar and persists state.
window.useTweaks = function useTweaks({ lang, setLang, theme, setTheme }) {
  React.useEffect(() => {
    const handler = (e) => {
      const d = e.data || {};
      if (d.type === '__activate_edit_mode') setVisible(true);
      if (d.type === '__deactivate_edit_mode') setVisible(false);
    };
    window.addEventListener('message', handler);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', handler);
  }, []);

  const [visible, setVisible] = React.useState(false);

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed', right: 24, bottom: 24, zIndex: 200,
      background: 'var(--b-bg-elevated)', borderRadius: 24,
      boxShadow: '0 12px 40px rgba(0,0,0,0.18), var(--emboss-soft)',
      padding: 20, minWidth: 260,
      border: '1px solid var(--b-border)',
    }}>
      <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--b-text-3)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 14 }}>Tweaks</div>
      <TweakRow label="Language">
        {['en','es'].map(v => (
          <button key={v} onClick={() => { setLang(v); persist({ lang: v }); }} style={tweakBtn(lang === v)}>{v.toUpperCase()}</button>
        ))}
      </TweakRow>
      <TweakRow label="Appearance">
        {[['auto','System'],['light','Light'],['dark','Dark']].map(([v,l]) => (
          <button key={v} onClick={() => { setTheme(v); persist({ theme: v }); }} style={tweakBtn(theme === v)}>{l}</button>
        ))}
      </TweakRow>
    </div>
  );
};

function persist(edits) {
  window.parent.postMessage({ type: '__edit_mode_set_keys', edits }, '*');
}
function TweakRow({ label, children }) {
  return (
    <div style={{ marginBottom: 12 }}>
      <div style={{ fontSize: 11, color: 'var(--b-text-2)', marginBottom: 6 }}>{label}</div>
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>{children}</div>
    </div>
  );
}
function tweakBtn(active) {
  return {
    padding: '6px 12px', borderRadius: 100, border: 'none', cursor: 'pointer',
    fontSize: 12, fontWeight: 600, fontFamily: 'inherit',
    background: active ? 'var(--b-text)' : 'var(--b-bg)',
    color: active ? 'var(--b-bg)' : 'var(--b-text)',
    boxShadow: active ? 'none' : 'var(--emboss-soft)',
  };
}
