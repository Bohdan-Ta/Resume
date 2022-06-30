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
		text-transform: capitalize;

		color: #fff;
		opacity: 0.5;
	}
`

export default function Weather() {
	const [weather, setWeather] = useState([])

	useEffect(() => {
		const getTemp = async () => {
			const result = await getWeather()
			console.log(result)
			setWeather(result)
		}

		getTemp()
	}, [])

	return typeof weather.main != 'undefined' ? (
		<Wethers>
			<p>{weather.name}</p>
			<p>{weather.main.temp.toFixed(1)}&deg;C</p>
		</Wethers>
	) : (
		<div></div>
	)
}
