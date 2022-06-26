import axios from 'axios'
import styled from 'styled-components'

const Wethers = styled.div`
	position: absolute;
	top: 110px;
	left: 0;
	width: 50px;
	height: 50px;
	font-size: 20px;
	color: red;

	p {
		color: #fff;
	}
`

export default function Weather() {
	async function getWeather() {
		try {
			const { data } = await axios.get(
				'https://api.openweathermap.org/data/2.5/weather?lat=50.463807&lon=30.569740&APPID=e4bdf24f044b57ecdb9bbc9845a5e899'
			)
			console.log(data)
		} catch (error) {
			console.error(error)
		}
	}
	const data = getWeather()
	return <Wethers>{data.temp}</Wethers>
}
