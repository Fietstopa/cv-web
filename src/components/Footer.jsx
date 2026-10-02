const SOCIAL = [
  { name: 'GitHub', href: 'https://github.com/Fietstopa' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/bohdan-myshko-716577206/' },
  { name: 'Instagram', href: 'https://www.instagram.com/bohdxn.x/' },
  { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=100014153014796' },
]

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--bg)',
      borderTop: '1px solid var(--border)',
      padding: '2rem clamp(1.5rem, 6vw, 5rem)',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem 2rem',
      }}>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
          © {new Date().getFullYear()} Bohdan Myshko · Brno
        </p>

        <ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: '0.5rem 1.5rem' }}>
          {SOCIAL.map((s) => (
            <li key={s.name}>
              <a href={s.href} target="_blank" rel="noopener noreferrer" className="footer-link">
                {s.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        .footer-link { color: var(--text-muted); font-size: 0.88rem; transition: color 0.2s; }
        .footer-link:hover { color: var(--text); }
      `}</style>
    </footer>
  )
}
