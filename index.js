const getMovie = async () => {
	const options = {
		method: 'GET',
		url: 'https://moviesverse1.p.rapidapi.com/get-trending-trailers',
		headers: {
			'X-RapidAPI-Key': '7bf6656ad3mshbc4e1ffded286f5p1b9769jsn2bb7e62d3674',
			'X-RapidAPI-Host': 'moviesverse1.p.rapidapi.com'
		}
	}
	try {
		const response = await axios.request(options)
		return response.data && response.data.trailers
	} catch (error) {
		console.error(error)
	}
}

document.addEventListener('DOMContentLoaded', async function () {
	const movieList = document.getElementById('movieList')

	const movies = await getMovie()

	movies.forEach((movie) => {
		const movieItem = document.createElement('li')
		movieItem.className = 'movie-item'

		const poster = document.createElement('img')
		poster.src = movie.image
		poster.alt = `${movie.title} Poster`

		const movieDetails = document.createElement('div')
		movieDetails.className = 'movie-details'

		const title = document.createElement('h2')
		title.className = 'movie-title'
		title.textContent = movie.title

		const year = document.createElement('p')
		year.className = 'movie-year'
		year.textContent = `Year: ${movie.releaseDate}`

		const description = document.createElement('p')
		description.className = 'movie-description'
		description.textContent = movie.description

		movieDetails.appendChild(title)
		movieDetails.appendChild(year)
		movieDetails.appendChild(description)

		movieItem.appendChild(poster)
		movieItem.appendChild(movieDetails)

		movieList.appendChild(movieItem)
	})
})
