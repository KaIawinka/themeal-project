import { useEffect, useState } from 'react'
import axios from 'axios'
import '../styles/Home.css'

function Home() {
  const [query, setQuery] = useState('')
  const [meals, setMeals] = useState([])
  const [loading, setLoading] = useState(true)

  
  async function getMeals(searchText) {
    setLoading(true)

    const apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
    let fullUrl = apiUrl + searchText

    try {
      let response = await axios.get(fullUrl)
      let data = response.data

      if (data.meals) {
        let firstEightMeals = data.meals.slice(0, 8)
        setMeals(firstEightMeals)
      } else {
        setMeals([])
      }
    } catch {
      setMeals([])
    }

    setLoading(false)
  }

  
  useEffect(() => {
    getMeals('')
  }, [])

  function changeSearch(event) {
    let text = event.target.value

    setQuery(text)
    getMeals(text)
  }

  return (
    <main className="home-page">
      <section className="home-hero" aria-labelledby="welcome-title">
        <h1 id="welcome-title">Welcome to TheMealDB</h1>
        <p className="hero-copy">
          Welcome to TheMealDB: An open, crowd-sourced database of recipes from around the world.<br />
          We offer a <strong>free recipe API</strong> for anyone wanting to use it, with additional premium features if required.
        </p>
        <div className="hero-actions">
          <button className="hero-button free-button" type="button">Free API</button>
          <button className="hero-button premium-button" type="button">Go Premium</button>
        </div>
        <p className="support-copy">
          Click above to upgrade the free Recipe API to premium for <strong>$10 lifetime one-off</strong><br />
          293 premium supporters.
        </p>
      </section>

      <hr className="home-divider" />

      <section className="meal-browser" aria-label="Meal browser">
        <input
          className="meal-search"
          type="search"
          value={query}
          onChange={changeSearch}
          placeholder="Search for a Meal..."
          aria-label="Search for a meal"
        />
        <div className="meal-stats" aria-label="Meal database statistics">
          <span>Total Meals: 793</span>
          <span>Total Ingredients: 992</span>
          <span>Images: 793</span>
        </div>
      </section>

      <section className="latest-meals" aria-labelledby="latest-title">
        <h2 id="latest-title">Latest Meals</h2>
        {loading && meals.length === 0 ? <p className="meal-status">Loading meals...</p> : meals.length === 0 ? <p className="meal-status">No meals found.</p> : (
          <div className="meal-grid">
            {meals.map((meal) => (
              <article className="meal-card" key={meal.idMeal}>
                <img src={meal.strMealThumb} alt={meal.strMeal} loading="lazy" />
                <h3>{meal.strMeal}</h3>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}

export default Home
