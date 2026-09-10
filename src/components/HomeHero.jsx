function HomeHero() {
  return (
    <section className="home-hero" aria-labelledby="welcome-title">
      <h1 id="welcome-title">Welcome to TheMealDB</h1>
      <p className="hero-copy">
        Welcome to TheMealDB: An open, crowd-sourced database of recipes from around the world.<br />
        We offer a <strong>free recipe API</strong> for anyone wanting to use it, with additional premium features if required.
      </p>
      <div className="hero-actions">
        <a className="hero-button free-button" href="https://www.themealdb.com/api.php" target="_blank" rel="noreferrer">Free API</a>
        <button className="hero-button premium-button" type="button">Go Premium</button>
      </div>
      <p className="support-copy">
        Click above to upgrade the free Recipe API to premium for <strong>$10 lifetime one-off</strong><br />
        293 premium supporters.
      </p>
    </section>
  )
}

export default HomeHero