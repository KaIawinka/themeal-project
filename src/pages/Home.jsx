import { useEffect, useRef, useState } from 'react'
import { fetchMeals } from '../axios/apiclient'
import HomeHero from '../components/HomeHero'
import MealGrid from '../components/MealGrid'
import MealSearch from '../components/MealSearch'
import '../styles/Home.css'

function Home() {
  const [query, setQuery] = useState('')
  const [meals, setMeals] = useState([])
  const [loading, setLoading] = useState(true)
  const activeRequest = useRef(null)

  
  useEffect(() => {
    let cancelled = false

    fetchMeals('').then((initialMeals) => {
      if (!cancelled) {
        setMeals(initialMeals)
        setLoading(false)
      }
    }).catch(() => {
      if (!cancelled) {
        setMeals([])
        setLoading(false)
      }
    })

    return () => { cancelled = true }
  }, [])

  async function changeSearch(text) {
    activeRequest.current?.abort()
    const controller = new AbortController()
    activeRequest.current = controller
    setQuery(text)
    setLoading(true)

    try {
      setMeals(await fetchMeals(text, controller.signal))
    } catch {
      if (!controller.signal.aborted) {
        setMeals([])
      }
    } finally {
      if (!controller.signal.aborted) {
        setLoading(false)
      }
    }
  }

  return (
    <main className="home-page">
      <HomeHero />

      <hr className="home-divider" />

      <section className="meal-browser" aria-label="Meal browser">
        <MealSearch value={query} onChange={changeSearch} />
        <div className="meal-stats" aria-label="Meal database statistics">
          <span>Total Meals: 793</span>
          <span>Total Ingredients: 992</span>
          <span>Images: 793</span>
        </div>
      </section>

      <section className="latest-meals" aria-labelledby="latest-title">
        <h2 id="latest-title">Latest Meals</h2>
        <MealGrid meals={meals} loading={loading} />
      </section>
    </main>
  )
}

export default Home
