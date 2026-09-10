function MealSearch({ value, onChange }) {
  return (
    <input
      className="meal-search"
      type="search"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder="Search for a Meal..."
      aria-label="Search for a meal"
    />
  )
}

export default MealSearch