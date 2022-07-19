import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import getWeather from '../../services/getWeather'

const Wethers = styled.div`
	position: absolute;
	top: 0;
	right: 20px;
	display: flex;
	align-items: center;
	height: 100%;

	p {
		margin: 0 5px;
		font-size: 16px;
		/* text-transform: capitalize; */

		color: #fff;
		opacity: 0.5;
	}
`

export default function Weather() {
	const [weatherDate, setWeatherDate] = useState([])
	useEffect(() => {
		const getTemp = async () => {
			const result = await getWeather()
			// console.log(result)
			setWeatherDate(result)
		}
		getTemp()
	}, [])

	return typeof weatherDate.main != 'undefined' ? (
		<Wethers>
			<p>{weatherDate.name}</p>
			<p>temp: {weatherDate.main.temp.toFixed(1)}&deg;C</p>
			<p>wind: {weatherDate.wind.speed}m/s</p>
		</Wethers>
	) : (
		<div></div>
	)
}
