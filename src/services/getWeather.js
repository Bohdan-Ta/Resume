import axios from 'axios'

const weather = axios.create({
	baseURL: 'https://api.openweathermap.org/data/2.5/weather?q=Kiev&units=metric&appid=e4bdf24f044b57ecdb9bbc9845a5e899',
	timeout: 1000,
})

export default async function getWeather() {
	try {
		const response = await weather()
		return response.data
	} catch (error) {
		console.error(error)
	}
}
