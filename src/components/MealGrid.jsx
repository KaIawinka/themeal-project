import MealCard from './MealCard'

function MealGrid({ meals, loading }) {
  if (loading && meals.length === 0) {
    return <p className="meal-status">Loading meals...</p>
  }

  if (meals.length === 0) {
    return <p className="meal-status">No meals found.</p>
  }

  return (
    <div className="meal-grid">
      {meals.map((meal) => <MealCard key={meal.idMeal} meal={meal} />)}
    </div>
  )
}

export default MealGrid