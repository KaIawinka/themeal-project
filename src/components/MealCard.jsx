function MealCard({ meal }) {
  return (
    <article className="meal-card">
      <img src={meal.strMealThumb} alt={meal.strMeal} loading="lazy" />
      <h3>{meal.strMeal}</h3>
    </article>
  )
}

export default MealCard