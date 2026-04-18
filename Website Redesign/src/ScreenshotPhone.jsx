// Frameless floating phone screenshot, parallax on scroll.
// The PNG has no phone bezel — we treat the screenshot corners as the phone corners.
window.ScreenshotPhone = function ScreenshotPhone({ src, alt, accent, tilt = 0 }) {
  const ref = React.useRef(null);
  const [y, setY] = React.useState(0);

  React.useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        // progress: -1 (far below fold) → 0 (centered) → +1 (scrolled off top)
        const progress = (vh * 0.5 - (rect.top + rect.height * 0.5)) / vh;
        setY(Math.max(-1, Math.min(1, progress)));
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // translate ~ ±40px of vertical parallax
  const translateY = -y * 40;

  return (
    <div ref={ref} style={{
      position: 'relative',
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      perspective: 1800,
      minHeight: 640,
    }}>
      {/* Ambient color wash behind */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: '10% 15%',
        background: `radial-gradient(ellipse at 50% 55%, ${accent}22 0%, ${accent}10 35%, transparent 70%)`,
        filter: 'blur(40px)',
        pointerEvents: 'none',
        transform: `translateY(${translateY * 0.5}px)`,
        transition: 'transform 0.05s linear',
      }}/>
      <img
        src={src + (window.location.search || '')}
        alt={alt}
        style={{
          width: 340,
          height: 'auto',
          display: 'block',
          borderRadius: 48,
          transform: `translateY(${translateY}px) rotate(${tilt}deg)`,
          transition: 'transform 0.05s linear',
          boxShadow: `
            0 2px 4px rgba(0,0,0,0.04),
            0 12px 24px rgba(0,0,0,0.08),
            0 40px 80px rgba(0,0,0,0.12),
            0 80px 140px rgba(0,0,0,0.14)
          `,
          willChange: 'transform',
        }}
      />
    </div>
  );
};
