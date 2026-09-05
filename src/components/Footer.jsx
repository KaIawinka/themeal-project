import '../styles/Footer.css'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-copyright">
          <p>© 2026 TheMealDB</p>
          <p>Proudly built in the UK <span aria-label="United Kingdom flag">🇬🇧</span></p>
        </div>

        <div className="footer-socials" aria-label="Social media links">
          <span>Socials:</span>
          <a className="social-link facebook" href="https://www.facebook.com/TheMealDB" aria-label="Facebook">f</a>
          <a className="social-link twitter" href="https://twitter.com" aria-label="Twitter"><img className='socLogo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjs3mML8Pof9WSo5-PY1NZ9SYXbeA3Kv_eQJYKle53sw&s=10" alt="" /></a>
          <a className="social-link discord" href="https://discord.gg/" aria-label="Discord"><img className='socLogo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT98HoaQ-ZD_HmdWsGruXDKAYejIr2vkhG8TctlcmaY2Q&s=10" alt="" /></a>
          <div className="footer-network" aria-label="Our other databases">
            <a className="cocktail-db" href="https://www.thecocktaildb.com/">TheCocktailDB</a>
            <a className="audio-db" href="https://www.theaudiodb.com/"><small>The</small>AudioDB</a>
            <a className="sports-db" href="https://www.thesportsdb.com/">TheSportsDB</a>
          </div>
        </div>

        <nav className="footer-links" aria-label="Footer navigation">
          <a href="#terms">Terms</a>
          <a href="#privacy">Privacy</a>
          <a href="#contact">Contact</a>
          <a href="#refunds">Refunds</a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
