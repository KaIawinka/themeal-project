import axios from 'axios'

const apiClient = axios.create({
	baseURL: 'https://www.themealdb.com/api/json/v1/1',
	timeout: 10000,
})

export async function fetchMeals(searchText = '', signal) {
	const response = await apiClient.get('/search.php', {
		params: { s: searchText },
		signal,
	})

	return response.data.meals?.slice(0, 8) ?? []
}
