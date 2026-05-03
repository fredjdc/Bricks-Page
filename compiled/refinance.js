function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
window.COPY = {
  en: {
    nav: {
      products: 'Products',
      philosophy: 'Philosophy',
      changelog: "What's new",
      download: 'Download'
    },
    hero: {
      eyebrow: 'A suite for real estate',
      title: ['Three focused tools.', 'One quiet suite.'],
      body: 'Scan, calculate, follow up. Without bloat, without accounts, without distractions.',
      cta: 'Explore the suite',
      secondary: 'See what changed',
      pickLabel: 'Pick a tool'
    },
    products: {
      scan: {
        name: 'Scan',
        tagline: 'Documents, organized.',
        pitch: 'Scan, read, file.'
      },
      calc: {
        name: 'Calc',
        tagline: 'Mortgages, instantly.',
        pitch: 'Model a deal.'
      },
      leads: {
        name: 'Leads',
        tagline: 'A calm CRM.',
        pitch: 'Stay on follow-up.'
      }
    },
    cta: {
      title: ['Three tools.', 'One quiet suite.'],
      sub: 'Free to try. No account. Native on Apple.',
      primary: 'Download on the App Store'
    },
    footer: {
      tag: 'Focused apps for real estate agents on Apple.',
      sections: [{
        h: 'Apps',
        l: [{
          label: 'Bricks Scan',
          href: 'scan.html'
        }, {
          label: 'Bricks Calc',
          href: 'calc.html'
        }, {
          label: 'Bricks Leads',
          href: 'leads.html'
        }]
      }, {
        h: 'Business',
        l: [{
          label: 'About',
          href: 'about.html'
        }, {
          label: 'Purchase guide',
          href: 'purchase-guide-01.html'
        }, {
          label: 'hello@bricks.pe',
          href: 'mailto:hello@bricks.pe'
        }]
      }, {
        h: 'Support',
        l: [{
          label: 'Contact',
          href: 'support.html'
        }, {
          label: 'Vote on features',
          href: 'https://bricksapps.userjot.com'
        }, {
          label: 'Guides',
          href: 'help.html'
        }, {
          label: 'Survey',
          href: 'survey.html'
        }]
      }],
      legal: [{
        label: 'Privacy Policy',
        href: 'privacy.html'
      }, {
        label: 'Terms of Service',
        href: 'terms.html'
      }],
      copyright: '\u00a9 2026 Bricks Apps. Made with care.',
      language: 'Language',
      appearance: 'Appearance',
      light: 'Light',
      dark: 'Dark',
      auto: 'System'
    }
  },
  es: {
    nav: {
      products: 'Productos',
      philosophy: 'Filosof\u00eda',
      changelog: 'Novedades',
      download: 'Descargar'
    },
    hero: {
      eyebrow: 'Una suite para bienes ra\u00edces',
      title: ['Tres herramientas.', 'Una suite simple.'],
      body: 'Escanea, calcula, da seguimiento. Sin relleno, sin cuentas, sin distracciones.',
      cta: 'Explorar la suite',
      secondary: 'Ver novedades',
      pickLabel: 'Elige una herramienta'
    },
    products: {
      scan: {
        name: 'Scan',
        tagline: 'Documentos ordenados.',
        pitch: 'Escanea, lee, archiva.'
      },
      calc: {
        name: 'Calc',
        tagline: 'Hipotecas al instante.',
        pitch: 'Modela una oferta.'
      },
      leads: {
        name: 'Leads',
        tagline: 'Un CRM sin distracciones.',
        pitch: 'Mant\u00e9n el seguimiento.'
      }
    },
    cta: {
      title: ['Tres herramientas.', 'Una suite simple.'],
      sub: 'Gratis para empezar. Sin cuenta. Nativa en Apple.',
      primary: 'Descargar en el App Store'
    },
    footer: {
      tag: 'Apps enfocadas para agentes inmobiliarios en Apple.',
      sections: [{
        h: 'Apps',
        l: [{
          label: 'Bricks Scan',
          href: 'scan.html'
        }, {
          label: 'Bricks Calc',
          href: 'calc.html'
        }, {
          label: 'Bricks Leads',
          href: 'leads.html'
        }]
      }, {
        h: 'Empresa',
        l: [{
          label: 'Sobre nosotros',
          href: 'about.html'
        }, {
          label: 'Gu\u00eda de compra',
          href: 'purchase-guide-01.html'
        }, {
          label: 'hello@bricks.pe',
          href: 'mailto:hello@bricks.pe'
        }]
      }, {
        h: 'Soporte',
        l: [{
          label: 'Contacto',
          href: 'support.html'
        }, {
          label: 'Votar funciones',
          href: 'https://bricksapps.userjot.com'
        }, {
          label: 'Gu\u00edas',
          href: 'help.html'
        }, {
          label: 'Encuesta',
          href: 'survey.html'
        }]
      }],
      legal: [{
        label: 'Pol\u00edtica de privacidad',
        href: 'privacy.html'
      }, {
        label: 'T\u00e9rminos del servicio',
        href: 'terms.html'
      }],
      copyright: '\u00a9 2026 Bricks Apps. Hecho con cuidado.',
      language: 'Idioma',
      appearance: 'Apariencia',
      light: 'Claro',
      dark: 'Oscuro',
      auto: 'Sistema'
    }
  }
};
window.ACCENTS = {
  scan: {
    light: '#00A6A1',
    vivid: '#00C7B2'
  },
  calc: {
    light: '#007AFF',
    vivid: '#2E90FF'
  },
  leads: {
    light: '#FF9500',
    vivid: '#FFAD33'
  }
};
window.eyebrowStyle = {
  fontSize: 12,
  fontWeight: 700,
  color: 'var(--b-text-3)',
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  marginBottom: 14
};
window.h2Big = {
  fontSize: 56,
  fontWeight: 900,
  letterSpacing: '-0.035em',
  lineHeight: 1.02,
  margin: '0 0 24px',
  color: 'var(--b-text)'
};
window.leadP = {
  fontSize: 18,
  lineHeight: 1.6,
  color: 'var(--b-text-2)',
  margin: 0,
  maxWidth: 520
};
window.useReveal = function useReveal() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -8% 0px'
    });
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
    const tick = now => {
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
  window.scrollTo({
    top: y,
    behavior: 'smooth'
  });
};
window.useScrollDirection = function useScrollDirection() {
  const [state, setState] = React.useState({
    dir: 'up',
    atTop: true
  });
  React.useEffect(() => {
    let last = window.scrollY;
    let lastDir = 'up';
    let ticking = false;
    const THRESHOLD = 10;
    const TOP_ZONE = 80;
    const update = () => {
      ticking = false;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const y = Math.max(0, Math.min(window.scrollY, max));
      const atTop = y < TOP_ZONE;
      let dir = lastDir;
      if (atTop) {
        dir = 'up';
      } else if (y > last + THRESHOLD) {
        dir = 'down';
        last = y;
      } else if (y < last - THRESHOLD) {
        dir = 'up';
        last = y;
      }
      setState(prev => prev.dir === dir && prev.atTop === atTop ? prev : {
        dir,
        atTop
      });
      lastDir = dir;
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    };
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return state;
};
window.useIsMobile = function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = React.useState(() => window.innerWidth <= breakpoint);
  React.useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
    setIsMobile(mq.matches);
    const handler = e => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [breakpoint]);
  return isMobile;
};
window.useTheme = function useTheme() {
  const [theme, setTheme] = React.useState(() => document.documentElement.getAttribute('data-theme') || 'light');
  React.useEffect(() => {
    const observer = new MutationObserver(() => {
      setTheme(document.documentElement.getAttribute('data-theme') || 'light');
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });
    return () => observer.disconnect();
  }, []);
  return theme;
};
window.ThemeLogo = function ThemeLogo({
  height = 24
}) {
  return React.createElement(React.Fragment, null, React.createElement("img", {
    src: "images/bricks-dark-logo.svg",
    alt: "Bricks",
    className: "logo-light-theme",
    style: {
      height
    }
  }), React.createElement("img", {
    src: "images/bricks-light-logo.svg",
    alt: "Bricks",
    className: "logo-dark-theme",
    style: {
      height
    }
  }));
};
window.Header = function Header({
  t,
  lang,
  currentProduct,
  cta
}) {
  const {
    dir,
    atTop
  } = window.useScrollDirection();
  const isMobile = window.useIsMobile();
  const hidden = dir === 'down' && !atTop;
  const [dlOpen, setDlOpen] = React.useState(false);
  const dlRef = React.useRef(null);
  React.useEffect(() => {
    if (!dlOpen) return;
    const handler = e => {
      if (dlRef.current && !dlRef.current.contains(e.target)) setDlOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [dlOpen]);
  const downloadItems = [{
    label: 'Bricks Calc',
    href: 'https://apps.apple.com/us/app/bricks-calc-loan-calculator/id6754506837?ct=bricks_web_calc_header_menu_calc&mt=8',
    accent: window.ACCENTS.calc.light,
    external: true
  }, {
    label: 'Bricks Scan',
    href: 'https://apps.apple.com/us/app/bricks-scan-scan-to-pdf/id6758148083?ct=bricks_web_calc_header_menu_scan&mt=8',
    accent: window.ACCENTS.scan.light,
    external: true
  }, {
    label: 'Bricks Leads',
    href: 'leads.html',
    accent: window.ACCENTS.leads.light,
    external: false
  }];
  const links = currentProduct ? [] : [{
    id: 'product-scan',
    label: t.nav.products
  }, {
    id: 'philosophy',
    label: t.nav.philosophy
  }, {
    id: 'changelog',
    label: t.nav.changelog
  }];
  return React.createElement("header", {
    style: {
      position: 'fixed',
      top: isMobile ? 12 : 24,
      left: isMobile ? 16 : 48,
      right: isMobile ? 16 : 48,
      zIndex: 100,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: isMobile ? '10px 10px 10px 18px' : '12px 14px 12px 24px',
      background: 'color-mix(in srgb, var(--b-bg-elevated) 65%, transparent)',
      backdropFilter: 'blur(20px) saturate(180%)',
      WebkitBackdropFilter: 'blur(20px) saturate(180%)',
      borderRadius: 100,
      border: '1px solid var(--b-border)',
      boxShadow: '0 8px 32px rgba(11,15,20,0.06)',
      transform: hidden ? 'translateY(-130%)' : 'translateY(0)',
      opacity: hidden ? 0 : 1,
      transition: 'transform 0.45s cubic-bezier(0.16,1,0.3,1), opacity 0.35s ease'
    }
  }, React.createElement("a", {
    href: currentProduct ? 'index.html' : '#top',
    onClick: e => {
      if (!currentProduct) {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, React.createElement(window.ThemeLogo, {
    height: 24
  })), React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, !isMobile && links.map(link => React.createElement("a", {
    key: link.id,
    href: '#' + link.id,
    onClick: e => {
      e.preventDefault();
      window.smoothScrollTo(link.id);
    },
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--b-text)',
      padding: '8px 14px',
      borderRadius: 100,
      letterSpacing: '-0.01em',
      opacity: 0.8,
      transition: 'opacity 0.2s, background 0.2s'
    },
    onMouseEnter: e => e.currentTarget.style.opacity = 1,
    onMouseLeave: e => e.currentTarget.style.opacity = 0.8
  }, link.label)), cta ? React.createElement("a", {
    href: cta.href,
    target: cta.href && cta.href.startsWith('http') ? '_blank' : undefined,
    rel: cta.href && cta.href.startsWith('http') ? 'noopener noreferrer' : undefined,
    onClick: e => {
      if (cta.href && cta.href.startsWith('#')) {
        e.preventDefault();
        window.smoothScrollTo(cta.href.slice(1));
      }
      if (cta.onClick) cta.onClick(e);
    },
    style: {
      marginLeft: isMobile ? 0 : 6,
      padding: isMobile ? '9px 16px' : '10px 18px',
      borderRadius: 100,
      background: 'var(--b-text)',
      color: 'var(--b-bg)',
      border: 'none',
      fontSize: 14,
      fontWeight: 600,
      letterSpacing: '-0.01em',
      boxShadow: '0 8px 20px rgba(11,15,20,0.18)',
      transition: 'transform 0.15s ease'
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'translateY(-1px)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'translateY(0)';
    }
  }, cta.label) : React.createElement("div", {
    ref: dlRef,
    style: {
      position: 'relative'
    }
  }, React.createElement("button", {
    onClick: () => setDlOpen(v => !v),
    style: {
      marginLeft: isMobile ? 0 : 6,
      padding: isMobile ? '9px 16px' : '10px 18px',
      borderRadius: 100,
      background: 'var(--b-text)',
      color: 'var(--b-bg)',
      border: 'none',
      fontSize: 14,
      fontWeight: 600,
      cursor: 'pointer',
      fontFamily: 'inherit',
      letterSpacing: '-0.01em',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      boxShadow: '0 8px 20px rgba(11,15,20,0.18)',
      transition: 'transform 0.15s ease, box-shadow 0.2s'
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'translateY(-1px)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'translateY(0)';
    }
  }, t.nav.download, React.createElement("svg", {
    width: "10",
    height: "10",
    viewBox: "0 0 10 10",
    fill: "none",
    style: {
      transform: dlOpen ? 'rotate(180deg)' : 'rotate(0)',
      transition: 'transform 0.25s ease'
    }
  }, React.createElement("path", {
    d: "M2 3.5L5 6.5L8 3.5",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), React.createElement("div", {
    style: {
      position: 'absolute',
      top: 'calc(100% + 10px)',
      right: 0,
      minWidth: 220,
      background: 'color-mix(in srgb, var(--b-bg-elevated) 85%, transparent)',
      backdropFilter: 'blur(24px) saturate(180%)',
      WebkitBackdropFilter: 'blur(24px) saturate(180%)',
      borderRadius: 20,
      border: '1px solid var(--b-border)',
      boxShadow: '0 16px 48px rgba(11,15,20,0.16)',
      padding: 8,
      opacity: dlOpen ? 1 : 0,
      transform: dlOpen ? 'translateY(0) scale(1)' : 'translateY(-8px) scale(0.96)',
      pointerEvents: dlOpen ? 'auto' : 'none',
      transition: 'opacity 0.25s ease, transform 0.3s cubic-bezier(0.16,1,0.3,1)'
    }
  }, downloadItems.map((item, i) => React.createElement("a", {
    key: i,
    href: item.href,
    target: item.external ? '_blank' : undefined,
    rel: item.external ? 'noopener noreferrer' : undefined,
    onClick: () => setDlOpen(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 16px',
      borderRadius: 14,
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--b-text)',
      transition: 'background 0.15s ease',
      textDecoration: 'none'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'var(--b-bg)',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent'
  }, React.createElement("div", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 4,
      background: item.accent,
      flexShrink: 0
    }
  }), React.createElement("span", {
    style: {
      flex: 1
    }
  }, item.label), React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    style: {
      opacity: 0.4
    }
  }, React.createElement("path", {
    d: item.external ? 'M4 2h6v6M10 2L3 9' : 'M4 2l5 4-5 4',
    stroke: "currentColor",
    strokeWidth: "1.3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))))))));
};
window.ScreenshotPhone = function ScreenshotPhone({
  src,
  alt,
  accent,
  tilt = 0
}) {
  const ref = React.useRef(null);
  const [y, setY] = React.useState(0);
  const isMobile = window.useIsMobile();
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
        const progress = (vh * 0.5 - (rect.top + rect.height * 0.5)) / vh;
        setY(Math.max(-1, Math.min(1, progress)));
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  const translateY = -y * 40;
  return React.createElement("div", {
    ref: ref,
    style: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      perspective: 1800,
      minHeight: isMobile ? 360 : 640
    }
  }, React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: '10% 15%',
      background: `radíal-gradient(ellipse at 50% 55%, ${accent}22 0%, ${accent}10 35%, transparent 70%)`,
      filter: 'blur(40px)',
      pointerEvents: 'none',
      transform: `translateY(${translateY * 0.5}px)`,
      transition: 'transform 0.05s linear'
    }
  }), React.createElement("img", {
    src: src + (window.location.search || ''),
    alt: alt,
    style: {
      width: isMobile ? '100%' : 340,
      maxWidth: isMobile ? 280 : 'none',
      height: 'auto',
      display: 'block',
      borderRadius: 48,
      transform: `translateY(${translateY}px) rotate(${tilt}deg)`,
      transition: 'transform 0.05s linear',
      boxShadow: '0 2px 4px rgba(0,0,0,0.04), 0 12px 24px rgba(0,0,0,0.08), 0 40px 80px rgba(0,0,0,0.12), 0 80px 140px rgba(0,0,0,0.14)',
      willChange: 'transform'
    }
  }));
};
window.ScreenshotVideo = function ScreenshotVideo({
  src,
  posterSrc,
  alt,
  accent,
  tilt = 0
}) {
  const ref = React.useRef(null);
  const [y, setY] = React.useState(0);
  const isMobile = window.useIsMobile();
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
        const progress = (vh * 0.5 - (rect.top + rect.height * 0.5)) / vh;
        setY(Math.max(-1, Math.min(1, progress)));
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  const translateY = -y * 40;
  return React.createElement("div", {
    ref: ref,
    style: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      perspective: 1800,
      minHeight: isMobile ? 360 : 640
    }
  }, React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: '10% 15%',
      background: `radíal-gradient(ellipse at 50% 55%, ${accent}22 0%, ${accent}10 35%, transparent 70%)`,
      filter: 'blur(40px)',
      pointerEvents: 'none',
      transform: `translateY(${translateY * 0.5}px)`,
      transition: 'transform 0.05s linear'
    }
  }), React.createElement("div", {
    style: {
      width: isMobile ? '100%' : 340,
      maxWidth: isMobile ? 280 : 'none',
      borderRadius: 48,
      transform: `translateY(${translateY}px) rotate(${tilt}deg)`,
      transition: 'transform 0.05s linear',
      boxShadow: '0 2px 4px rgba(0,0,0,0.04), 0 12px 24px rgba(0,0,0,0.08), 0 40px 80px rgba(0,0,0,0.12), 0 80px 140px rgba(0,0,0,0.14)',
      willChange: 'transform',
      overflow: 'hidden',
      background: 'var(--b-bg-elevated)',
      display: 'flex'
    }
  }, React.createElement("video", {
    key: src,
    autoPlay: true,
    loop: true,
    muted: true,
    playsInline: true,
    poster: posterSrc,
    style: {
      width: '100%',
      height: 'auto',
      display: 'block',
      outline: 'none'
    },
    "aria-label": alt
  }, React.createElement("source", {
    src: src,
    type: "video/mp4"
  }))));
};
window.Bullet = function Bullet({
  accent,
  t,
  d
}) {
  return React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'flex-start'
    }
  }, React.createElement("div", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 4,
      background: accent,
      marginTop: 9,
      flexShrink: 0
    }
  }), React.createElement("div", null, React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 600,
      color: 'var(--b-text)',
      marginBottom: 3,
      letterSpacing: '-0.01em'
    }
  }, t), React.createElement("div", {
    style: {
      fontSize: 15,
      color: 'var(--b-text-2)',
      lineHeight: 1.5
    }
  }, d)));
};
window.DownloadCTA = function DownloadCTA({
  t,
  variant = 'default',
  betaCopy,
  productCopy,
  accent
}) {
  const reveal = window.useReveal();
  const isMobile = window.useIsMobile();
  const [hovered, setHovered] = React.useState(null);
  const isBeta = variant === 'beta';
  const isProduct = variant === 'product' && productCopy;
  const title = isProduct ? productCopy.title : isBeta ? betaCopy.title : t.cta.title;
  const sub = isProduct ? productCopy.sub : isBeta ? betaCopy.sub : t.cta.sub;
  const apps = isProduct ? productCopy.actions : [{
    label: 'Bricks Calc',
    href: 'https://apps.apple.com/us/app/bricks-calc-loan-calculator/id6754506837?ct=bricks_web_calc_download_calc&mt=8',
    accent: window.ACCENTS.calc.light,
    external: true
  }, {
    label: 'Bricks Scan',
    href: 'https://apps.apple.com/us/app/bricks-scan-scan-to-pdf/id6758148083?ct=bricks_web_calc_download_scan&mt=8',
    accent: window.ACCENTS.scan.light,
    external: true
  }, {
    label: 'Bricks Leads',
    href: 'leads.html',
    accent: window.ACCENTS.leads.light,
    external: false
  }];
  return React.createElement("section", {
    id: "download",
    ref: reveal,
    style: {
      padding: isMobile ? '32px 20px 64px' : '60px 48px 120px',
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, React.createElement("div", {
    className: "reveal",
    style: {
      background: 'var(--b-text)',
      borderRadius: isMobile ? 32 : 48,
      padding: isMobile ? '56px 24px' : '96px 64px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '0 20px 60px rgba(11,15,20,0.25)'
    }
  }, React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      background: 'radíal-gradient(circle at 20% 10%, rgba(0,166,161,0.1), transparent 55%), radíal-gradient(circle at 80% 90%, rgba(255,149,0,0.08), transparent 55%)'
    }
  }), React.createElement("h2", {
    style: {
      fontSize: isMobile ? 40 : 64,
      fontWeight: 900,
      letterSpacing: '-0.035em',
      lineHeight: 1.02,
      margin: '0 0 20px',
      color: 'var(--b-bg)',
      position: 'relative'
    }
  }, title[0], React.createElement("br", null), React.createElement("span", {
    style: {
      opacity: 0.55
    }
  }, title[1])), React.createElement("p", {
    style: {
      fontSize: isMobile ? 16 : 18,
      color: 'var(--b-bg)',
      opacity: 0.7,
      lineHeight: 1.6,
      margin: '0 auto 40px',
      maxWidth: 520,
      position: 'relative'
    }
  }, sub), React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      gap: 12,
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, apps.map((app, i) => React.createElement("a", {
    key: i,
    href: app.href,
    target: app.external ? '_blank' : undefined,
    rel: app.external ? 'noopener noreferrer' : undefined,
    onMouseEnter: () => setHovered(i),
    onMouseLeave: () => setHovered(null),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      padding: isMobile ? '14px 22px' : '16px 28px',
      background: hovered === i ? app.accent : 'var(--b-bg)',
      color: hovered === i ? '#fff' : 'var(--b-text)',
      textDecoration: 'none',
      border: 'none',
      borderRadius: 100,
      fontSize: 15,
      fontWeight: 600,
      fontFamily: 'inherit',
      letterSpacing: '-0.01em',
      boxShadow: '0 12px 28px rgba(0,0,0,0.25)',
      transition: 'background 0.25s ease, color 0.25s ease, transform 0.15s ease',
      transform: hovered === i ? 'translateY(-2px)' : 'translateY(0)'
    }
  }, React.createElement("div", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 4,
      background: hovered === i ? 'rgba(255,255,255,0.6)' : app.accent,
      flexShrink: 0,
      transition: 'background 0.25s ease'
    }
  }), app.label)))));
};
window.Footer = function Footer({
  t,
  lang,
  setLang,
  theme,
  setTheme
}) {
  const isMobile = window.useIsMobile();
  return React.createElement("footer", {
    style: {
      padding: isMobile ? '48px 20px 32px' : '80px 48px 48px',
      borderTop: '1px solid var(--b-border)',
      background: 'var(--b-bg)'
    }
  }, React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1.4fr 1fr 1fr 1fr',
      gap: isMobile ? 32 : 48,
      marginBottom: isMobile ? 40 : 56
    }
  }, React.createElement("div", {
    style: {
      gridColumn: isMobile ? '1 / -1' : undefined
    }
  }, React.createElement(window.ThemeLogo, null), React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--b-text-2)',
      lineHeight: 1.6,
      margin: '16px 0 24px',
      maxWidth: 300
    }
  }, t.footer.tag), React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, [{
    kind: 'instagram',
    href: 'https://www.instagram.com/hellobricksapps/'
  }, {
    kind: 'linkedin',
    href: 'https://www.linkedin.com/company/bricksapps/'
  }].map(s => React.createElement("a", {
    key: s.kind,
    href: s.href,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      width: 36,
      height: 36,
      borderRadius: '50%',
      background: 'var(--b-bg-elevated)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'var(--emboss-soft)',
      color: 'var(--b-text-2)',
      transition: 'color 0.2s'
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--b-text)',
    onMouseLeave: e => e.currentTarget.style.color = 'var(--b-text-2)'
  }, React.createElement(SocialIcon, {
    kind: s.kind
  }))))), t.footer.sections.map((s, i) => React.createElement("div", {
    key: i
  }, React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: 'var(--b-text-3)',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      marginBottom: 18
    }
  }, s.h), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, s.l.map((l, j) => React.createElement("a", {
    key: j,
    href: l.href,
    style: {
      fontSize: 14,
      color: 'var(--b-text)',
      opacity: 0.85
    }
  }, l.label)))))), React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: isMobile ? '24px 0' : '32px 0',
      borderTop: '1px solid var(--b-border)',
      display: 'flex',
      gap: isMobile ? 20 : 32,
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, React.createElement(ToggleGroup, {
    label: t.footer.language,
    options: [{
      v: 'en',
      l: 'EN'
    }, {
      v: 'es',
      l: 'ES'
    }],
    value: lang,
    setValue: setLang
  }), React.createElement(ToggleGroup, {
    label: t.footer.appearance,
    options: [{
      v: 'auto',
      l: t.footer.auto
    }, {
      v: 'light',
      l: t.footer.light
    }, {
      v: 'dark',
      l: t.footer.dark
    }],
    value: theme,
    setValue: setTheme
  })), React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '24px auto 0',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 16
    }
  }, React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--b-text-2)'
    }
  }, t.footer.copyright), React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20
    }
  }, t.footer.legal.map((l, i) => React.createElement("a", {
    key: i,
    href: l.href,
    style: {
      fontSize: 13,
      color: 'var(--b-text-2)'
    }
  }, l.label)))));
};
function ToggleGroup({
  label,
  options,
  value,
  setValue
}) {
  return React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 10
    }
  }, React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 500,
      color: 'var(--b-text-3)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase'
    }
  }, label), React.createElement("div", {
    style: {
      display: 'inline-flex',
      gap: 2
    }
  }, options.map((o, i) => React.createElement(React.Fragment, {
    key: o.v
  }, i > 0 && React.createElement("span", {
    style: {
      color: 'var(--b-text-3)',
      fontSize: 12,
      alignSelf: 'center',
      opacity: 0.5
    }
  }, "\xB7"), React.createElement("button", {
    onClick: () => setValue(o.v),
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      fontFamily: 'inherit',
      padding: '2px 6px',
      fontSize: 12,
      fontWeight: value === o.v ? 600 : 400,
      color: value === o.v ? 'var(--b-text)' : 'var(--b-text-2)',
      opacity: value === o.v ? 1 : 0.7,
      transition: 'opacity 0.2s ease, color 0.2s ease'
    },
    onMouseEnter: e => {
      if (value !== o.v) e.currentTarget.style.opacity = 1;
    },
    onMouseLeave: e => {
      if (value !== o.v) e.currentTarget.style.opacity = 0.7;
    }
  }, o.l)))));
}
function SocialIcon({
  kind
}) {
  const s = {
    stroke: 'currentColor',
    fill: 'none',
    strokeWidth: 1.6,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  };
  if (kind === 'instagram') return React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 20 20"
  }, React.createElement("rect", _extends({
    x: "3",
    y: "3",
    width: "14",
    height: "14",
    rx: "4"
  }, s)), React.createElement("circle", _extends({
    cx: "10",
    cy: "10",
    r: "3.2"
  }, s)), React.createElement("circle", {
    cx: "14.3",
    cy: "5.7",
    r: "0.5",
    fill: "currentColor"
  }));
  if (kind === 'x') return React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, React.createElement("path", {
    d: "M15.2 2h2.8l-6.1 7 7.2 9h-5.6l-4.4-5.8L4 18H1.2l6.5-7.5L1 2h5.7l4 5.3zm-1 14.6h1.5L5.9 3.3H4.3z"
  }));
  return React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, React.createElement("path", {
    d: "M5.4 7.5h2.4v8.6H5.4zM6.6 3.5c-.8 0-1.4.6-1.4 1.4s.6 1.4 1.4 1.4 1.4-.6 1.4-1.4-.6-1.4-1.4-1.4zM9.4 7.5h2.3v1.2c.3-.6 1.1-1.3 2.3-1.3 2.4 0 2.9 1.6 2.9 3.7v5h-2.4v-4.4c0-1-.02-2.4-1.5-2.4-1.5 0-1.7 1.2-1.7 2.3v4.5H9.4z"
  }));
}
window.useTweaks = function useTweaks({
  lang,
  setLang,
  theme,
  setTheme
}) {
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const handler = e => {
      const d = e.data || {};
      if (d.type === '__activate_edit_mode') setVisible(true);
      if (d.type === '__deactivate_edit_mode') setVisible(false);
    };
    window.addEventListener('message', handler);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', handler);
  }, []);
  if (!visible) return null;
  return React.createElement("div", {
    style: {
      position: 'fixed',
      right: 24,
      bottom: 24,
      zIndex: 200,
      background: 'var(--b-bg-elevated)',
      borderRadius: 24,
      boxShadow: '0 12px 40px rgba(0,0,0,0.18), var(--emboss-soft)',
      padding: 20,
      minWidth: 260,
      border: '1px solid var(--b-border)'
    }
  }, React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: 'var(--b-text-3)',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      marginBottom: 14
    }
  }, "Tweaks"), React.createElement(TweakRow, {
    label: "Language"
  }, ['en', 'es'].map(v => React.createElement("button", {
    key: v,
    onClick: () => {
      setLang(v);
      tweakPersist({
        lang: v
      });
    },
    style: tweakBtn(lang === v)
  }, v.toUpperCase()))), React.createElement(TweakRow, {
    label: "Appearance"
  }, [['auto', 'System'], ['light', 'Light'], ['dark', 'Dark']].map(([v, l]) => React.createElement("button", {
    key: v,
    onClick: () => {
      setTheme(v);
      tweakPersist({
        theme: v
      });
    },
    style: tweakBtn(theme === v)
  }, l))));
};
function tweakPersist(edits) {
  window.parent.postMessage({
    type: '__edit_mode_set_keys',
    edits
  }, '*');
}
function TweakRow({
  label,
  children
}) {
  return React.createElement("div", {
    style: {
      marginBottom: 12
    }
  }, React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--b-text-2)',
      marginBottom: 6
    }
  }, label), React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, children));
}
function tweakBtn(active) {
  return {
    padding: '6px 12px',
    borderRadius: 100,
    border: 'none',
    cursor: 'pointer',
    fontSize: 12,
    fontWeight: 600,
    fontFamily: 'inherit',
    background: active ? 'var(--b-text)' : 'var(--b-bg)',
    color: active ? 'var(--b-bg)' : 'var(--b-text)',
    boxShadow: active ? 'none' : 'var(--emboss-soft)'
  };
}
const CALC_COPY = {
  en: {
    hero: {
      eyebrow: 'Bricks Calc for refinancing',
      title: ['Refinance Calculator.', 'Know when it pays off.'],
      body: 'Compare your current loan with a new rate, payment, and term. See the new monthly payment, break-even timing, and long-term savings before you refinance.',
      cta: 'Download on the App Store',
      sub: 'Free to try. No account required. One-time unlock available.'
    },
    stats: {
      eyebrow: 'Built for the refinance decision',
      title: 'New payment. Break-even. Savings.',
      sub: 'The numbers that matter before replacing a loan.',
      items: [{
        v: 100,
        l: 'On device',
        suffix: '%'
      }, {
        v: 0,
        l: 'Account required',
        suffix: ''
      }, {
        v: 1,
        l: 'One-time unlock',
        suffix: ''
      }]
    },
    pillars: {
      eyebrow: 'Why Calc',
      title: ['Compare the loan', 'before you commit.'],
      body: 'A refinance only makes sense when the new payment, closing costs, interest savings, and remaining term hold up together. Calc keeps that comparison focused.',
      items: [{
        t: 'No spreadsheets',
        d: 'Open the app and compare the current loan against the new option without rebuilding formulas.',
        icon: 'icon-spreadsheets.svg'
      }, {
        t: 'Adjust live',
        d: 'Change the new rate, payment, term, or costs and see the impact right away.',
        icon: 'icon-adjust.svg'
      }, {
        t: 'Compare clearly',
        d: 'Keep the current loan and refinance option side by side so the tradeoff is easy to review.',
        icon: 'icon-compare.svg'
      }]
    },
    feature1: {
      eyebrow: 'New payment',
      title: ['See the payment', 'after refinancing.'],
      body: 'Model the new loan amount, rate, and term before you start paperwork. See whether the lower payment is meaningful after the full loan picture is included.',
      icon: 'icon-spreadsheets.svg',
      bullets: [{
        t: 'Current vs new loan',
        d: 'Compare your existing loan with the refinance option in one focused view.'
      }, {
        t: 'Rate and term changes',
        d: 'Test a lower rate, a shorter term, or a different payment structure.'
      }, {
        t: 'Amortization schedules',
        d: 'Review how principal, interest, and balance change over time.'
      }]
    },
    feature_prepay: {
      eyebrow: 'Break-even',
      title: ['Know when', 'it starts to make sense.'],
      body: 'A lower payment is not enough. Use Bricks Calc to compare savings over time and understand when a refinance begins to pay back the cost of changing loans.',
      icon: 'icon-adjust.svg',
      bullets: [{
        t: 'Break-even timing',
        d: 'Estimate when the refinance savings begin to outweigh the cost of the change.'
      }, {
        t: 'Interest difference',
        d: 'Compare total interest between the current loan and the new option.'
      }, {
        t: 'Long-term view',
        d: 'See how the decision changes if you keep the loan longer or pay it down faster.'
      }]
    },
    feature2: {
      eyebrow: 'After refinancing',
      title: ['Test extra payments', 'on the new loan.'],
      body: 'After the refinance comparison is clear, model one-time or recurring extra payments to see how much time and interest they could save.',
      icon: 'icon-compare.svg',
      bullets: [{
        t: 'One-time or recurring',
        d: 'Add an extra payment once or repeat it monthly to understand the impact.'
      }, {
        t: 'Share anywhere',
        d: 'Use the native Apple share sheet for Messages, Mail, or AirDrop.'
      }, {
        t: 'Always private',
        d: 'Calculations stay on your device. Nothing is ever uploaded.'
      }]
    },
    testimonials: {
      eyebrow: 'Used in real decisions',
      sub: 'Short notes from people using Bricks Calc to compare loan options.',
      quotes: [{
        q: 'When someone asks whether a lower rate is worth it, Calc gives me the current loan and new loan side by side.',
        n: 'Bruno A.',
        r: 'Broker Associate',
        c: 'Lima'
      }, {
        q: 'The useful part is seeing the payment and the long-term interest difference in the same conversation.',
        n: 'Sarah J.',
        r: 'Real Estate Agent',
        c: 'Miami'
      }, {
        q: 'It keeps refinance conversations practical. Change the rate, change the term, then look at the numbers.',
        n: 'Carlos M.',
        r: 'Independent Agent',
        c: 'Bogotá'
      }]
    },
    social: {
      eyebrow: 'Updates',
      title: 'Latest from Bricks.',
      sub: 'Short product notes, launch updates, and real workflow details from Instagram.',
      fallback: 'Posts by @hellobricksapps',
      loading: 'Loading Instagram posts...',
      unavailable: 'Instagram posts could not load in this browser. Private browsing, tracking protection, or a content blocker may prevent the native embed from appearing.',
      action: 'Open on Instagram'
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Common refinance questions.',
      items: [{
        q: 'Can Bricks Calc tell me if refinancing is worth it?',
        a: 'Bricks Calc helps compare the current loan with a new loan so you can review payment, amortization, break-even timing, and interest difference. Final terms should always be confirmed with your lender.'
      }, {
        q: 'Can I compare the current loan and new loan side by side?',
        a: 'Yes. You can model the existing loan and the refinance option, then compare the numbers before deciding.'
      }, {
        q: 'Does it work offline?',
        a: 'Yes. The core calculator works offline, so you can review refinance scenarios without an internet connection.'
      }, {
        q: 'Is Bricks Calc only for Apple devices?',
        a: 'Yes. Bricks Calc is built natively for iPhone, iPad, and Mac.'
      }, {
        q: 'Is it free?',
        a: 'You can download and try Bricks Calc for free. Unlimited saved calculations can be unlocked with an in-app purchase, including a one-time option.'
      }]
    },
    download: {
      title: ['Compare before', 'you refinance.'],
      sub: 'Free to try. No account required. Built for iPhone, iPad, and Mac.',
      actions: [{
        label: 'Download on the App Store',
        href: 'https://apps.apple.com/us/app/bricks-calc-loan-calculator/id6754506837?ct=bricks_web_refinance_download_primary&mt=8',
        accent: window.ACCENTS.calc.light,
        external: true
      }]
    },
    ecosystem: {
      eyebrow: 'The suite',
      title: 'Part of a quiet toolkit.',
      sub: 'Three apps, one approach. Each one removes a single friction from the day.',
      items: [{
        id: 'scan',
        name: 'Bricks Scan',
        tagline: 'Documents, organized.',
        href: 'scan.html',
        active: false
      }, {
        id: 'calc',
        name: 'Bricks Calc',
        tagline: 'Mortgages and refinancing.',
        href: 'calc.html',
        active: true
      }, {
        id: 'leads',
        name: 'Bricks Leads',
        tagline: 'A calm CRM.',
        href: 'leads.html',
        active: false
      }]
    }
  },
  es: {
    hero: {
      eyebrow: 'Bricks Calc para refinanciamiento',
      title: ['Calculadora de refinanciamiento.', 'Compara antes de cambiar.'],
      body: 'Compara tu crédito actual con una nueva tasa, cuota y plazo. Revisa la nueva cuota, el punto en que se compensa el cambio y la diferencia en intereses antes de refinanciar.',
      cta: 'Descargar en App Store',
      sub: 'Gratis para probar. Sin cuenta obligatoria. Pago único disponible.'
    },
    stats: {
      eyebrow: 'Hecha para decidir con calma',
      title: 'Nueva cuota. Punto de equilibrio. Ahorro.',
      sub: 'Los números que importan antes de reemplazar un crédito.',
      items: [{
        v: 100,
        l: 'En el dispositivo',
        suffix: '%'
      }, {
        v: 0,
        l: 'Cuentas requeridas',
        suffix: ''
      }, {
        v: 1,
        l: 'Pago único',
        suffix: ''
      }]
    },
    pillars: {
      eyebrow: 'Por qué Calc',
      title: ['Compara el crédito', 'antes de cambiarlo.'],
      body: 'Un refinanciamiento solo conviene cuando la nueva cuota, los costos, los intereses y el plazo se sostienen juntos. Calc mantiene esa comparación enfocada.',
      items: [{
        t: 'Sin hojas de cálculo',
        d: 'Abre la app y compara tu crédito actual con la nueva opción sin armar formulas.',
        icon: 'icon-spreadsheets.svg'
      }, {
        t: 'Ajusta en vivo',
        d: 'Cambia la tasa, la cuota, el plazo o los costos y ve el impacto al instante.',
        icon: 'icon-adjust.svg'
      }, {
        t: 'Compara claramente',
        d: 'Mantén el crédito actual y la nueva opción lado a lado para revisar el cambio con calma.',
        icon: 'icon-compare.svg'
      }]
    },
    feature1: {
      eyebrow: 'Nueva cuota',
      title: ['Mira la cuota', 'después de refinanciar.'],
      body: 'Modela el nuevo monto, la tasa y el plazo antes de avanzar con el trámite. Revisa si la cuota menor realmente mejora el escenario completo.',
      icon: 'icon-spreadsheets.svg',
      bullets: [{
        t: 'Crédito actual vs nueva opción',
        d: 'Compara el crédito vigente con la opción de refinanciamiento en una vista enfocada.'
      }, {
        t: 'Cambios de tasa y plazo',
        d: 'Prueba una mejor tasa, un plazo menor o una estructura distinta de cuota.'
      }, {
        t: 'Tabla de amortización',
        d: 'Revisa capital, intereses y saldo pendiente a lo largo del crédito.'
      }]
    },
    feature_prepay: {
      eyebrow: 'Punto de equilibrio',
      title: ['Evalúa cuando', 'empieza a convenir.'],
      body: 'Una cuota menor no basta. Usa Bricks Calc para comparar el ahorro en el tiempo y entender cuando el refinanciamiento compensa el costo del cambio.',
      icon: 'icon-adjust.svg',
      bullets: [{
        t: 'Momento de compensación',
        d: 'Estima cuando el ahorro del refinanciamiento empieza a superar el costo del cambio.'
      }, {
        t: 'Diferencia en intereses',
        d: 'Compara los intereses totales entre el crédito actual y la nueva opción.'
      }, {
        t: 'Visión de largo plazo',
        d: 'Revisa cómo cambia la decision si mantienes el crédito por más tiempo o lo pagas antes.'
      }]
    },
    feature2: {
      eyebrow: 'Despues de refinanciar',
      title: ['Prueba pagos extra', 'en el nuevo crédito.'],
      body: 'Cuando la comparación ya esta clara, modela pagos adelantados únicos o recurrentes para ver cuánto tiempo e interés podrías reducir.',
      icon: 'icon-compare.svg',
      bullets: [{
        t: 'Únicos o recurrentes',
        d: 'Agrega un pago extra una vez o repítelo cada mes para entender el impacto.'
      }, {
        t: 'Comparte donde sea',
        d: 'Usa el menu nativo de Apple para mensajes, correo o AirDrop.'
      }, {
        t: 'Siempre privado',
        d: 'Los cálculos se quedan en tu dispositivo. Nada se sube a nuestros servidores.'
      }]
    },
    testimonials: {
      eyebrow: 'Usado en decisiones reales',
      sub: 'Notas breves de personas que usan Bricks Calc para comparar créditos.',
      quotes: [{
        q: 'Cuando alguien pregunta si una mejor tasa conviene, Calc me deja comparar el crédito actual y el nuevo crédito lado a lado.',
        n: 'Bruno A.',
        r: 'Broker Associate',
        c: 'Lima'
      }, {
        q: 'Lo útil es ver la cuota y la diferencia de intereses en la misma conversación.',
        n: 'Sarah J.',
        r: 'Agente Inmobiliaria',
        c: 'Miami'
      }, {
        q: 'Mantiene la conversación practica. Cambias la tasa, cambias el plazo y miras los números.',
        n: 'Carlos M.',
        r: 'Agente Independiente',
        c: 'Bogotá'
      }]
    },
    social: {
      eyebrow: 'Actualizaciones',
      title: 'Lo último de Bricks.',
      sub: 'Notas breves de producto, lanzamientos y detalles reales del flujo de trabajo en Instagram.',
      fallback: 'Publicaciones de @hellobricksapps',
      loading: 'Cargando publicaciones de Instagram...',
      unavailable: 'Las publicaciones de Instagram no pudieron cargarse en este navegador. La navegación privada, la protección de rastreo o un bloqueador de contenido pueden impedir que aparezca el embed nativo.',
      action: 'Abrir en Instagram'
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Preguntas frecuentes.',
      items: [{
        q: '¿Bricks Calc me dice si refinanciar conviene?',
        a: 'Bricks Calc ayuda a comparar el crédito actual con una nueva opción para revisar cuota, amortización, punto de equilibrio y diferencia en intereses. Las condiciones finales deben confirmarse con la entidad financiera.'
      }, {
        q: '¿Puedo comparar mi crédito actual con una nueva tasa?',
        a: 'Sí. Puedes modelar el crédito vigente y la opción de refinanciamiento para comparar los números antes de decidir.'
      }, {
        q: '¿Necesito conexión a internet?',
        a: 'No. La calculadora principal funciona sin conexión, así que puedes revisar escenarios de refinanciamiento sin internet.'
      }, {
        q: '¿Bricks Calc funciona solo en dispositivos Apple?',
        a: 'Sí. Bricks Calc está hecha de forma nativa para iPhone, iPad y Mac.'
      }, {
        q: '¿Es gratis?',
        a: 'Puedes descargar y probar Bricks Calc gratis. Los cálculos guardados ilimitados se desbloquean con una compra dentro de la app, incluyendo una opción de pago único.'
      }]
    },
    download: {
      title: ['Compara antes', 'de refinanciar.'],
      sub: 'Gratis para probar. Sin cuenta obligatoria. Nativa para iPhone, iPad y Mac.',
      actions: [{
        label: 'Descargar en App Store',
        href: 'https://apps.apple.com/us/app/bricks-calc-loan-calculator/id6754506837?ct=bricks_web_refinanciamiento_download_primary&mt=8',
        accent: window.ACCENTS.calc.light,
        external: true
      }]
    },
    ecosystem: {
      eyebrow: 'La suite',
      title: 'Tres apps, un mismo enfoque.',
      sub: 'Cada una quita una fricción del día.',
      items: [{
        id: 'scan',
        name: 'Bricks Scan',
        tagline: 'Documentos ordenados.',
        href: 'scan.html',
        active: false
      }, {
        id: 'calc',
        name: 'Bricks Calc',
        tagline: 'Hipotecas y refinanciamiento.',
        href: 'calculadora-hipotecaria.html',
        active: true
      }, {
        id: 'leads',
        name: 'Bricks Leads',
        tagline: 'Un CRM sin distracciones.',
        href: 'leads.html',
        active: false
      }]
    }
  }
};
const CALC_ACCENT = window.ACCENTS.calc.light;
function CalcHero({
  t,
  lang,
  theme
}) {
  const reveal = window.useReveal();
  const isMobile = window.useIsMobile();
  const videoSrc = `images-bricks-calc/hero-video-${lang}.mp4`;
  const posterSrc = `images-bricks-calc/hero-video-img-${lang}.png`;
  return React.createElement("section", {
    ref: reveal,
    style: {
      padding: isMobile ? '120px 20px 48px' : '160px 48px 80px',
      maxWidth: 1280,
      margin: '0 auto'
    }
  }, isMobile && React.createElement("div", {
    className: "reveal",
    style: {
      marginBottom: 40
    }
  }, React.createElement(window.ScreenshotVideo, {
    src: videoSrc,
    posterSrc: posterSrc,
    alt: "Bricks Calc - Refinance Calculator App",
    accent: CALC_ACCENT,
    lang: lang
  })), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1.1fr 1fr',
      gap: isMobile ? 40 : 64,
      alignItems: 'center'
    }
  }, React.createElement("div", null, React.createElement("div", {
    className: "reveal",
    style: {
      ...window.eyebrowStyle,
      color: CALC_ACCENT
    }
  }, t.hero.eyebrow), React.createElement("h1", {
    className: "reveal reveal-d1",
    style: {
      fontSize: isMobile ? 44 : 72,
      fontWeight: 900,
      letterSpacing: '-0.04em',
      lineHeight: 1.02,
      margin: '0 0 24px',
      color: 'var(--b-text)'
    }
  }, t.hero.title[0], React.createElement("br", null), React.createElement("span", {
    style: {
      color: 'var(--b-text-2)'
    }
  }, t.hero.title[1])), React.createElement("p", {
    className: "reveal reveal-d2",
    style: {
      fontSize: isMobile ? 17 : 19,
      lineHeight: 1.6,
      color: 'var(--b-text-2)',
      margin: '0 0 36px',
      maxWidth: 520
    }
  }, t.hero.body), React.createElement("div", {
    className: "reveal reveal-d3"
  }, React.createElement("a", {
    href: "https://apps.apple.com/us/app/bricks-calc-loan-calculator/id6754506837?ct=bricks_web_refinance_hero&mt=8",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      padding: isMobile ? '14px 26px' : '16px 32px',
      background: CALC_ACCENT,
      color: '#fff',
      textDecoration: 'none',
      border: 'none',
      borderRadius: 100,
      fontSize: 15,
      fontWeight: 600,
      fontFamily: 'inherit',
      letterSpacing: '-0.01em',
      boxShadow: '0 12px 28px rgba(0,122,255,0.25)',
      transition: 'transform 0.15s ease'
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'translateY(-2px)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'translateY(0)';
    }
  }, t.hero.cta), React.createElement("p", {
    style: {
      fontSize: 13,
      color: 'var(--b-text-3)',
      lineHeight: 1.55,
      marginTop: 12
    }
  }, t.hero.sub))), !isMobile && React.createElement("div", {
    className: "reveal reveal-d2"
  }, React.createElement(window.ScreenshotVideo, {
    src: videoSrc,
    posterSrc: posterSrc,
    alt: "Bricks Calc - Mortgage and Loan Calculator App",
    accent: CALC_ACCENT,
    tilt: -1.5,
    lang: lang
  }))));
}
function CalcStats({
  t
}) {
  const reveal = window.useReveal();
  const isMobile = window.useIsMobile();
  const [visible, setVisible] = React.useState(false);
  const bandRef = React.useRef(null);
  React.useEffect(() => {
    const el = bandRef.current;
    if (!el) return;
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setVisible(true);
          io.unobserve(e.target);
        }
      });
    }, {
      threshold: 0.3
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return React.createElement("section", {
    ref: reveal,
    style: {
      padding: isMobile ? '40px 20px' : '80px 48px',
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, React.createElement("div", {
    className: "reveal",
    style: {
      textAlign: 'center',
      marginBottom: isMobile ? 32 : 48
    }
  }, React.createElement("div", {
    style: {
      ...window.eyebrowStyle,
      color: CALC_ACCENT
    }
  }, t.stats.eyebrow), React.createElement("h2", {
    style: {
      fontSize: isMobile ? 32 : 44,
      fontWeight: 900,
      letterSpacing: '-0.035em',
      lineHeight: 1.05,
      margin: '0 0 12px',
      color: 'var(--b-text)'
    }
  }, t.stats.title), React.createElement("p", {
    style: {
      fontSize: 16,
      color: 'var(--b-text-2)',
      margin: 0
    }
  }, t.stats.sub)), React.createElement("div", {
    ref: bandRef,
    className: "reveal reveal-d1",
    style: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
      gap: isMobile ? 16 : 24,
      background: 'var(--b-bg-elevated)',
      borderRadius: isMobile ? 32 : 48,
      padding: isMobile ? '28px 24px' : '48px 32px',
      boxShadow: 'var(--emboss-soft)'
    }
  }, t.stats.items.map((item, i) => React.createElement(StatCell, {
    key: i,
    item: item,
    visible: visible
  }))));
}
function StatCell({
  item,
  visible
}) {
  const v = window.useCountUp(item.v, visible);
  return React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '12px 8px'
    }
  }, React.createElement("div", {
    style: {
      fontSize: 48,
      fontWeight: 900,
      letterSpacing: '-0.035em',
      color: CALC_ACCENT,
      lineHeight: 1
    }
  }, window.fmtNum(v), item.suffix), React.createElement("div", {
    style: {
      marginTop: 10,
      fontSize: 14,
      color: 'var(--b-text-2)'
    }
  }, item.l));
}
function CalcPillars({
  t,
  theme
}) {
  const reveal = window.useReveal();
  const isMobile = window.useIsMobile();
  return React.createElement("section", {
    ref: reveal,
    style: {
      padding: isMobile ? '56px 20px' : '120px 48px',
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1.2fr',
      gap: isMobile ? 32 : 80,
      alignItems: 'start',
      marginBottom: isMobile ? 40 : 64
    }
  }, React.createElement("div", {
    className: "reveal"
  }, React.createElement("div", {
    style: {
      ...window.eyebrowStyle,
      color: CALC_ACCENT
    }
  }, t.pillars.eyebrow), React.createElement("h2", {
    style: {
      fontSize: isMobile ? 36 : 56,
      fontWeight: 900,
      letterSpacing: '-0.035em',
      lineHeight: 1.02,
      margin: 0,
      color: 'var(--b-text)'
    }
  }, t.pillars.title[0], React.createElement("br", null), React.createElement("span", {
    style: {
      color: 'var(--b-text-2)'
    }
  }, t.pillars.title[1]))), React.createElement("p", {
    className: "reveal reveal-d1",
    style: {
      fontSize: 18,
      lineHeight: 1.6,
      color: 'var(--b-text-2)',
      margin: 0
    }
  }, t.pillars.body)), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
      gap: isMobile ? 16 : 24
    }
  }, t.pillars.items.map((p, i) => React.createElement("div", {
    key: i,
    className: `reveal reveal-d${i + 1}`,
    style: {
      background: 'var(--b-bg-elevated)',
      borderRadius: 32,
      padding: isMobile ? 28 : 36,
      boxShadow: 'var(--emboss-soft)',
      border: '1px solid var(--b-border)'
    }
  }, React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 14,
      background: `${CALC_ACCENT}1a`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20,
      boxShadow: 'var(--emboss-soft)',
      border: '1px solid var(--b-border)'
    }
  }, React.createElement("div", {
    style: {
      width: 22,
      height: 22,
      backgroundColor: CALC_ACCENT,
      máskImage: `url(images-bricks-calc/${p.icon})`,
      WebkitMaskImage: `url(images-bricks-calc/${p.icon})`,
      máskSize: 'contain',
      WebkitMaskSize: 'contain',
      máskRepeat: 'no-repeat',
      WebkitMaskRepeat: 'no-repeat'
    }
  })), React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      color: 'var(--b-text)',
      marginBottom: 8,
      letterSpacing: '-0.01em'
    }
  }, p.t), React.createElement("div", {
    style: {
      fontSize: 15,
      color: 'var(--b-text-2)',
      lineHeight: 1.55
    }
  }, p.d)))));
}
function CalcFeatureSplit({
  feature,
  reverse,
  shotSrc,
  theme
}) {
  const reveal = window.useReveal();
  const isMobile = window.useIsMobile();
  return React.createElement("section", {
    ref: reveal,
    style: {
      padding: isMobile ? '56px 20px' : '96px 48px',
      maxWidth: 1280,
      margin: '0 auto'
    }
  }, React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      gap: isMobile ? 40 : 96,
      alignItems: 'center',
      direction: reverse && !isMobile ? 'rtl' : 'ltr'
    }
  }, React.createElement("div", {
    className: "reveal",
    style: {
      direction: 'ltr'
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 14
    }
  }, React.createElement("div", {
    style: {
      width: 20,
      height: 20,
      backgroundColor: CALC_ACCENT,
      máskImage: `url(images-bricks-calc/${feature.icon})`,
      WebkitMaskImage: `url(images-bricks-calc/${feature.icon})`,
      máskSize: 'contain',
      WebkitMaskSize: 'contain',
      máskRepeat: 'no-repeat',
      WebkitMaskRepeat: 'no-repeat'
    }
  }), React.createElement("div", {
    style: {
      ...window.eyebrowStyle,
      color: CALC_ACCENT,
      marginBottom: 0
    }
  }, feature.eyebrow)), React.createElement("h2", {
    style: {
      fontSize: isMobile ? 36 : 52,
      fontWeight: 900,
      letterSpacing: '-0.035em',
      lineHeight: 1.02,
      margin: '0 0 20px',
      color: 'var(--b-text)'
    }
  }, feature.title[0], React.createElement("br", null), React.createElement("span", {
    style: {
      color: 'var(--b-text-2)'
    }
  }, feature.title[1])), React.createElement("p", {
    style: {
      ...window.leadP,
      marginBottom: 28
    }
  }, feature.body), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, feature.bullets.map((b, i) => React.createElement(window.Bullet, {
    key: i,
    accent: CALC_ACCENT,
    t: b.t,
    d: b.d
  })))), React.createElement("div", {
    className: "reveal reveal-d1",
    style: {
      direction: 'ltr'
    }
  }, React.createElement(window.ScreenshotPhone, {
    src: shotSrc,
    alt: feature.title.join(' '),
    accent: CALC_ACCENT,
    tilt: reverse ? 1.5 : -1.5
  }))));
}
function CalcTestimonials({
  t
}) {
  const reveal = window.useReveal();
  const isMobile = window.useIsMobile();
  return React.createElement("section", {
    ref: reveal,
    style: {
      padding: isMobile ? '56px 20px' : '120px 48px',
      maxWidth: 1280,
      margin: '0 auto'
    }
  }, React.createElement("div", {
    className: "reveal",
    style: {
      textAlign: 'center',
      marginBottom: isMobile ? 32 : 56
    }
  }, React.createElement("div", {
    style: {
      ...window.eyebrowStyle,
      color: CALC_ACCENT
    }
  }, t.testimonials.eyebrow), React.createElement("p", {
    style: {
      fontSize: 16,
      color: 'var(--b-text-2)',
      margin: 0,
      maxWidth: 520,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  }, t.testimonials.sub)), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
      gap: isMobile ? 16 : 24
    }
  }, t.testimonials.quotes.map((q, i) => React.createElement("figure", {
    key: i,
    className: `reveal reveal-d${i + 1}`,
    style: {
      background: 'var(--b-bg-elevated)',
      borderRadius: 32,
      padding: isMobile ? 28 : 36,
      boxShadow: 'var(--emboss-soft)',
      border: '1px solid var(--b-border)',
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    style: {
      flexShrink: 0,
      opacity: 0.6
    }
  }, React.createElement("path", {
    d: "M6 11c0-3 2-5 5-5v2c-2 0-3 1-3 3h3v5H6V11zm8 0c0-3 2-5 5-5v2c-2 0-3 1-3 3h3v5h-5V11z",
    fill: CALC_ACCENT
  })), React.createElement("blockquote", {
    style: {
      margin: 0,
      fontSize: isMobile ? 16 : 17,
      lineHeight: 1.5,
      color: 'var(--b-text)',
      letterSpacing: '-0.005em',
      flex: 1
    }
  }, q.q), React.createElement("figcaption", {
    style: {
      fontSize: 14,
      color: 'var(--b-text-2)',
      lineHeight: 1.5
    }
  }, React.createElement("div", {
    style: {
      fontWeight: 600,
      color: 'var(--b-text)'
    }
  }, q.n), React.createElement("div", null, q.r, " \xB7 ", q.c))))));
}
function CalcSocialFeed({
  t,
  theme
}) {
  const reveal = window.useReveal();
  const isMobile = window.useIsMobile();
  const [embedStatus, setEmbedStatus] = React.useState('loading');
  const instagramUrl = 'https://www.instagram.com/hellobricksapps/';
  const instagramEmbedUrl = 'https://www.instagram.com/hellobricksapps/embed';
  React.useEffect(() => {
    setEmbedStatus('loading');
    const fallbackTimer = window.setTimeout(() => {
      setEmbedStatus(status => status === 'loading' ? 'blocked' : status);
    }, 5000);
    return () => {
      window.clearTimeout(fallbackTimer);
    };
  }, [theme]);
  return React.createElement("section", {
    ref: reveal,
    style: {
      padding: isMobile ? '56px 20px' : '96px 48px',
      maxWidth: 960,
      margin: '0 auto'
    }
  }, React.createElement("div", {
    className: "reveal",
    style: {
      textAlign: 'center',
      marginBottom: isMobile ? 28 : 40
    }
  }, React.createElement("div", {
    style: {
      ...window.eyebrowStyle,
      color: CALC_ACCENT
    }
  }, t.social.eyebrow), React.createElement("h2", {
    style: {
      fontSize: isMobile ? 32 : 44,
      fontWeight: 900,
      letterSpacing: '-0.035em',
      lineHeight: 1.05,
      margin: '0 0 12px',
      color: 'var(--b-text)'
    }
  }, t.social.title), React.createElement("p", {
    style: {
      fontSize: 16,
      color: 'var(--b-text-2)',
      lineHeight: 1.6,
      margin: 0,
      maxWidth: 540,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  }, t.social.sub)), React.createElement("div", {
    className: "reveal reveal-d1",
    style: {
      background: 'var(--b-bg-elevated)',
      borderRadius: 32,
      boxShadow: 'var(--emboss-soft)',
      border: '1px solid var(--b-border)',
      padding: isMobile ? 12 : 16,
      overflow: 'hidden'
    }
  }, React.createElement("div", {
    key: theme,
    style: {
      minHeight: embedStatus === 'blocked' ? 0 : isMobile ? 560 : 620,
      display: 'flex',
      justifyContent: 'center',
      position: 'relative'
    }
  }, embedStatus !== 'blocked' && React.createElement("iframe", {
    src: instagramEmbedUrl,
    title: t.social.fallback,
    loading: "lazy",
    onLoad: () => setEmbedStatus('ready'),
    onError: () => setEmbedStatus('blocked'),
    style: {
      width: '100%',
      maxWidth: 540,
      minHeight: isMobile ? 560 : 620,
      border: 'none',
      borderRadius: 24,
      background: 'var(--b-bg)',
      opacity: embedStatus === 'ready' ? 1 : 0,
      transition: 'opacity 0.25s ease'
    }
  })), embedStatus === 'loading' && React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: isMobile ? '28px 18px' : '36px 28px',
      fontSize: 14,
      color: 'var(--b-text-2)'
    }
  }, t.social.loading), embedStatus === 'blocked' && React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: isMobile ? '28px 18px' : '36px 28px'
    }
  }, React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--b-text-2)',
      margin: '0 auto 18px',
      maxWidth: 520
    }
  }, t.social.unavailable), React.createElement("a", {
    href: instagramUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 40,
      padding: '0 18px',
      borderRadius: 999,
      background: CALC_ACCENT,
      color: '#fff',
      fontSize: 14,
      fontWeight: 600,
      textDecoration: 'none'
    }
  }, t.social.action))), embedStatus === 'ready' && React.createElement("div", {
    className: "reveal reveal-d2",
    style: {
      textAlign: 'center',
      marginTop: 20
    }
  }, React.createElement("a", {
    href: instagramUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: CALC_ACCENT,
      textDecoration: 'none'
    }
  }, t.social.action)));
}
function CalcFAQ({
  t
}) {
  const reveal = window.useReveal();
  const isMobile = window.useIsMobile();
  const [open, setOpen] = React.useState(0);
  return React.createElement("section", {
    ref: reveal,
    style: {
      padding: isMobile ? '56px 20px' : '120px 48px',
      maxWidth: 960,
      margin: '0 auto'
    }
  }, React.createElement("div", {
    className: "reveal",
    style: {
      marginBottom: isMobile ? 32 : 48
    }
  }, React.createElement("div", {
    style: {
      ...window.eyebrowStyle,
      color: CALC_ACCENT
    }
  }, t.faq.eyebrow), React.createElement("h2", {
    style: {
      fontSize: isMobile ? 36 : 52,
      fontWeight: 900,
      letterSpacing: '-0.035em',
      lineHeight: 1.02,
      margin: 0,
      color: 'var(--b-text)'
    }
  }, t.faq.title)), React.createElement("div", {
    className: "reveal reveal-d1",
    style: {
      background: 'var(--b-bg-elevated)',
      borderRadius: 32,
      boxShadow: 'var(--emboss-soft)',
      border: '1px solid var(--b-border)',
      overflow: 'hidden'
    }
  }, t.faq.items.map((item, i) => {
    const isOpen = open === i;
    return React.createElement("div", {
      key: i,
      style: {
        borderTop: i === 0 ? 'none' : '1px solid var(--b-border)'
      }
    }, React.createElement("button", {
      onClick: () => setOpen(isOpen ? -1 : i),
      style: {
        width: '100%',
        textAlign: 'left',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'inherit',
        padding: isMobile ? '20px 24px' : '24px 32px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 16,
        fontSize: isMobile ? 16 : 17,
        fontWeight: 600,
        color: 'var(--b-text)',
        letterSpacing: '-0.01em'
      }
    }, React.createElement("span", null, item.q), React.createElement("svg", {
      width: "14",
      height: "14",
      viewBox: "0 0 14 14",
      fill: "none",
      style: {
        flexShrink: 0,
        transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
        transition: 'transform 0.3s cubic-bezier(0.16,1,0.3,1)'
      }
    }, React.createElement("path", {
      d: "M3 5.5L7 9.5L11 5.5",
      stroke: "currentColor",
      strokeWidth: "1.6",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))), React.createElement("div", {
      style: {
        maxHeight: isOpen ? 400 : 0,
        overflow: 'hidden',
        transition: 'max-height 0.35s cubic-bezier(0.16,1,0.3,1)'
      }
    }, React.createElement("div", {
      style: {
        padding: isMobile ? '0 24px 22px' : '0 32px 28px',
        fontSize: 15,
        lineHeight: 1.6,
        color: 'var(--b-text-2)',
        maxWidth: 720
      }
    }, item.a)));
  })));
}
function CalcEcosystem({
  t
}) {
  const reveal = window.useReveal();
  const isMobile = window.useIsMobile();
  return React.createElement("section", {
    id: "ecosystem",
    ref: reveal,
    style: {
      padding: isMobile ? '56px 20px' : '120px 48px',
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, React.createElement("div", {
    className: "reveal",
    style: {
      textAlign: 'center',
      marginBottom: isMobile ? 32 : 48
    }
  }, React.createElement("div", {
    style: {
      ...window.eyebrowStyle,
      color: CALC_ACCENT
    }
  }, t.ecosystem.eyebrow), React.createElement("h2", {
    style: {
      fontSize: isMobile ? 32 : 44,
      fontWeight: 900,
      letterSpacing: '-0.035em',
      lineHeight: 1.05,
      margin: '0 0 12px',
      color: 'var(--b-text)'
    }
  }, t.ecosystem.title), React.createElement("p", {
    style: {
      fontSize: 16,
      color: 'var(--b-text-2)',
      margin: 0,
      maxWidth: 520,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  }, t.ecosystem.sub)), React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
      gap: isMobile ? 16 : 20
    }
  }, t.ecosystem.items.map((it, i) => {
    const accent = window.ACCENTS[it.id].light;
    return React.createElement("a", {
      key: i,
      href: it.href,
      className: `reveal reveal-d${i + 1}`,
      style: {
        background: 'var(--b-bg-elevated)',
        borderRadius: 28,
        padding: isMobile ? 24 : 32,
        boxShadow: 'var(--emboss-soft)',
        border: `1px solid ${it.active ? accent + '55' : 'var(--b-border)'}`,
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
        textDecoration: 'none',
        transition: 'transform 0.2s ease',
        position: 'relative'
      },
      onMouseEnter: e => {
        if (!it.active) e.currentTarget.style.transform = 'translateY(-3px)';
      },
      onMouseLeave: e => {
        e.currentTarget.style.transform = 'translateY(0)';
      }
    }, React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, React.createElement("div", {
      style: {
        width: 12,
        height: 12,
        borderRadius: 6,
        background: accent
      }
    }), React.createElement("div", {
      style: {
        fontSize: 17,
        fontWeight: 700,
        color: 'var(--b-text)',
        letterSpacing: '-0.01em'
      }
    }, it.name), it.active && React.createElement("span", {
      style: {
        marginLeft: 'auto',
        fontSize: 11,
        fontWeight: 700,
        color: accent,
        letterSpacing: '0.08em',
        textTransform: 'uppercase'
      }
    }, "Now")), React.createElement("div", {
      style: {
        fontSize: 15,
        color: 'var(--b-text-2)',
        lineHeight: 1.5
      }
    }, it.tagline));
  })));
}
const TWEAK_DEFAULTS = {
  "lang": "en",
  "theme": "auto"
};
function getInitialLang() {
  const params = new URLSearchParams(window.location.search);
  const requested = params.get('lang');
  return requested === 'es' || requested === 'en' ? requested : TWEAK_DEFAULTS.lang;
}
function setMetaContent(selector, content) {
  const el = document.querySelector(selector);
  if (el) el.setAttribute('content', content);
}
function App() {
  const [lang, setLang] = React.useState(getInitialLang);
  const [theme, setTheme] = React.useState(TWEAK_DEFAULTS.theme);
  React.useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const apply = () => {
      const effective = theme === 'auto' ? mq.matches ? 'dark' : 'light' : theme;
      document.documentElement.setAttribute('data-theme', effective);
    };
    apply();
    if (theme === 'auto') {
      mq.addEventListener('change', apply);
      return () => mq.removeEventListener('change', apply);
    }
  }, [theme]);
  React.useEffect(() => {
    document.documentElement.setAttribute('lang', lang);
    const metadata = lang === 'es' ? {
      title: 'Calculadora de Refinanciamiento para iPhone, iPad y Mac | Bricks Calc',
      description: 'Compara tu crédito actual con una nueva tasa, cuota y plazo. Revisa la nueva cuota, el punto de equilibrio y la diferencia en intereses antes de refinanciar.'
    } : {
      title: 'Refinance Calculator for iPhone, iPad, and Mac | Bricks Calc',
      description: 'Compare your current loan with a new rate, payment, and term. See break-even timing, amortization, and long-term savings before you refinance.'
    };
    document.title = metadata.title;
    setMetaContent('meta[name="description"]', metadata.description);
    setMetaContent('meta[property="og:title"]', metadata.title);
    setMetaContent('meta[property="og:description"]', metadata.description);
    setMetaContent('meta[name="twitter:title"]', metadata.title);
    setMetaContent('meta[name="twitter:description"]', metadata.description);
  }, [lang]);
  const effectiveTheme = window.useTheme();
  const t = window.COPY[lang] || window.COPY.en;
  const calcT = CALC_COPY[lang] || CALC_COPY.en;
  const shot1 = `images-bricks-calc/screenshot-precision-section-${lang}-light.png`;
  const shotPrepay = lang === 'en' ? 'images-bricks-calc/screenshot-prepay-section-en-light.png' : 'images-bricks-calc/screenshot-prepay-section-es-light.png';
  const shot2 = `images-bricks-calc/screenshot-share-section-${lang}-light.png`;
  return React.createElement("div", {
    style: {
      background: 'var(--b-bg)',
      minHeight: '100vh',
      overflow: 'hidden'
    }
  }, React.createElement(window.Header, {
    t: t,
    lang: lang,
    currentProduct: "calc",
    cta: {
      label: t.nav.download,
      href: 'https://apps.apple.com/us/app/bricks-calc-loan-calculator/id6754506837?ct=bricks_web_refinance_header_cta&mt=8'
    }
  }), React.createElement("main", null, React.createElement(CalcHero, {
    t: calcT,
    lang: lang,
    theme: effectiveTheme
  }), React.createElement(CalcStats, {
    t: calcT
  }), React.createElement(CalcPillars, {
    t: calcT,
    theme: effectiveTheme
  }), React.createElement(CalcFeatureSplit, {
    feature: calcT.feature1,
    reverse: false,
    shotSrc: shot1,
    theme: effectiveTheme
  }), React.createElement(CalcFeatureSplit, {
    feature: calcT.feature_prepay,
    reverse: true,
    shotSrc: shotPrepay,
    theme: effectiveTheme
  }), React.createElement(CalcFeatureSplit, {
    feature: calcT.feature2,
    reverse: false,
    shotSrc: shot2,
    theme: effectiveTheme
  }), React.createElement(CalcTestimonials, {
    t: calcT
  }), React.createElement(window.DownloadCTA, {
    t: t,
    variant: "product",
    productCopy: calcT.download
  }), React.createElement(CalcSocialFeed, {
    t: calcT,
    theme: effectiveTheme
  }), React.createElement(CalcFAQ, {
    t: calcT
  }), React.createElement(CalcEcosystem, {
    t: calcT
  })), React.createElement(window.Footer, {
    t: t,
    lang: lang,
    setLang: setLang,
    theme: theme,
    setTheme: setTheme
  }), React.createElement(window.useTweaks, {
    lang: lang,
    setLang: setLang,
    theme: theme,
    setTheme: setTheme
  }));
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App, null));
