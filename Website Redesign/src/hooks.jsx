// Shared hooks + small utilities

window.useReveal = function useReveal() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    el.querySelectorAll('.reveal').forEach(n => io.observe(n));
    return () => io.disconnect();
  }, []);
  return ref;
};

window.useCountUp = function useCountUp(target, when, durationMs = 1400) {
  const [val, setVal] = React.useState(0);
  React.useEffect(() => {
    if (!when) return;
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - start) / durationMs);
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(Math.floor(eased * target));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [when, target]);
  return val;
};

window.fmtNum = function fmtNum(n) {
  return n.toLocaleString('en-US');
};

window.smoothScrollTo = function smoothScrollTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 24;
  window.scrollTo({ top: y, behavior: 'smooth' });
};

window.useScrollDirection = function useScrollDirection() {
  const [state, setState] = React.useState({ dir: 'up', atTop: true });
  React.useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const dir = y > last + 4 ? 'down' : y < last - 4 ? 'up' : state.dir;
      setState({ dir, atTop: y < 40 });
      last = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return state;
};
