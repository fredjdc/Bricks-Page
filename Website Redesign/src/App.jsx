// App shell
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "lang": "en",
  "theme": "auto"
}/*EDITMODE-END*/;

function App() {
  const [lang, setLang] = React.useState(TWEAK_DEFAULTS.lang);
  const [theme, setTheme] = React.useState(TWEAK_DEFAULTS.theme);

  // Apply theme (auto = system)
  React.useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const apply = () => {
      const effective = theme === 'auto' ? (mq.matches ? 'dark' : 'light') : theme;
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
  }, [lang]);

  const t = window.COPY[lang];

  window.useTweaks({ lang, setLang, theme, setTheme });

  return (
    <>
      <window.Header t={t} lang={lang}/>
      <window.HeroSplit t={t} lang={lang}/>
      <window.StatsBand t={t}/>
      <window.ProductScan t={t}/>
      <window.ProductCalc t={t}/>
      <window.ProductLeads t={t}/>
      <window.PhilosophyBand t={t}/>
      <window.Testimonials t={t}/>
      <window.Changelog t={t}/>
      <window.DownloadCTA t={t}/>
      <window.Footer t={t} lang={lang} setLang={setLang} theme={theme} setTheme={setTheme}/>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
