// Subtle "More info" link — accent colored, arrow nudges on hover
window.MoreInfoLink = function MoreInfoLink({ href, accent, label }) {
  const [hover, setHover] = React.useState(false);
  const fullHref = href + (typeof window !== 'undefined' ? (window.location.search || '') : '');
  return (
    <a
      href={fullHref}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 10,
        marginTop: 40,
        padding: '12px 0',
        fontSize: 15, fontWeight: 600,
        color: accent,
        letterSpacing: '-0.01em',
        borderBottom: '1px solid ' + accent + (hover ? 'CC' : '44'),
        transition: 'border-color 0.25s ease',
        alignSelf: 'flex-start',
        width: 'fit-content',
      }}
    >
      <span>{label}</span>
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{
        transform: hover ? 'translateX(4px)' : 'translateX(0)',
        transition: 'transform 0.25s cubic-bezier(0.2,1,0.3,1)',
      }}>
        <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke={accent} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </a>
  );
};
