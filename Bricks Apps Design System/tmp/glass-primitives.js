
// ─────────────────────────────────────────────────────────────
// LIQUID GLASS — iOS 26 native material primitives
// recipe: content-tinted blur + edge refraction + specular shine + fine hairline
// ─────────────────────────────────────────────────────────────
const glassBase = (dark, tintOpacity = 1) => ({
  position: 'absolute', inset: 0, borderRadius: 'inherit',
  backdropFilter: 'blur(22px) saturate(200%) brightness(' + (dark ? 1.05 : 1.12) + ')',
  WebkitBackdropFilter: 'blur(22px) saturate(200%) brightness(' + (dark ? 1.05 : 1.12) + ')',
  background: dark
    ? 'rgba(28,28,30,' + (0.45 * tintOpacity) + ')'
    : 'rgba(255,255,255,' + (0.55 * tintOpacity) + ')',
});
const glassShine = (dark) => ({
  position: 'absolute', inset: 0, borderRadius: 'inherit', pointerEvents: 'none',
  boxShadow: dark
    ? 'inset 1.5px 1.5px 1.5px rgba(255,255,255,0.16), inset -1px -1.5px 1.5px rgba(255,255,255,0.06), inset 0 -0.5px 0 rgba(0,0,0,0.2)'
    : 'inset 1.5px 1.5px 1.5px rgba(255,255,255,0.9), inset -1px -1.5px 1.5px rgba(255,255,255,0.5), inset 0 0.5px 0 rgba(255,255,255,0.9)',
  border: dark ? '0.5px solid rgba(255,255,255,0.14)' : '0.5px solid rgba(255,255,255,0.7)',
});
const glassHairline = (dark) => ({
  position: 'absolute', inset: 0, borderRadius: 'inherit', pointerEvents: 'none',
  boxShadow: dark
    ? '0 0 0 0.5px rgba(0,0,0,0.5)'
    : '0 0 0 0.5px rgba(0,0,0,0.08)',
});

function LiquidGlass({ children, radius = 26, dark = false, tint = 1, shadow = true, style = {}, onClick }) {
  return (
    <div onClick={onClick} style={{
      position: 'relative', borderRadius: radius, overflow: 'hidden', isolation: 'isolate',
      boxShadow: shadow ? (dark
        ? '0 4px 14px rgba(0,0,0,0.28), 0 1px 2px rgba(0,0,0,0.3)'
        : '0 4px 14px rgba(11,15,20,0.07), 0 1px 2px rgba(11,15,20,0.05)') : 'none',
      ...style,
    }}>
      <div style={glassBase(dark, tint)}/>
      <div style={glassShine(dark)}/>
      <div style={glassHairline(dark)}/>
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </div>
  );
}

function LiquidGlassBar({ children, dark = false, style = {} }) {
  return (
    <div style={{
      position: 'relative', borderRadius: 9999, overflow: 'hidden', isolation: 'isolate',
      boxShadow: dark
        ? '0 6px 20px rgba(0,0,0,0.4), 0 2px 6px rgba(0,0,0,0.25)'
        : '0 6px 20px rgba(11,15,20,0.1), 0 2px 6px rgba(11,15,20,0.06)',
      ...style,
    }}>
      <div style={glassBase(dark, 1.05)}/>
      <div style={glassShine(dark)}/>
      <div style={glassHairline(dark)}/>
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center' }}>{children}</div>
    </div>
  );
}

// Glass chip — smaller, for segments and inline tags
function LiquidGlassChip({ children, active = false, accent, dark = false, style = {} }) {
  return (
    <div style={{
      position: 'relative', borderRadius: 9999, overflow: 'hidden', isolation: 'isolate',
      padding: '7px 14px', minHeight: 30,
      boxShadow: active
        ? '0 2px 8px ' + (accent ? accent + '55' : 'rgba(0,0,0,0.15)') + ', 0 1px 2px rgba(0,0,0,0.08)'
        : '0 1px 2px rgba(0,0,0,0.04)',
      ...style,
    }}>
      <div style={{
        position:'absolute', inset:0, borderRadius: 9999,
        backdropFilter: 'blur(18px) saturate(180%)',
        WebkitBackdropFilter: 'blur(18px) saturate(180%)',
        background: active
          ? (accent || (dark ? 'rgba(255,255,255,0.8)' : 'rgba(11,15,20,0.88)'))
          : (dark ? 'rgba(120,120,128,0.36)' : 'rgba(255,255,255,0.55)'),
      }}/>
      <div style={glassShine(dark)}/>
      <div style={glassHairline(dark)}/>
      <div style={{position:'relative',zIndex:1, display:'flex', alignItems:'center', justifyContent:'center', gap:6,
        fontSize:13, fontWeight:600, letterSpacing:-0.1,
        color: active ? (dark ? '#000' : '#fff') : (dark ? 'rgba(255,255,255,0.85)' : 'rgba(60,60,67,0.85)')}}>{children}</div>
    </div>
  );
}
