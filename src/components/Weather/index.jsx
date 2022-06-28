import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import getWeather from '../../services/getWeather'

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
	const [weather, setWeather] = useState([])

	useEffect(() => {
		const getTemp = async () => {
			const result = await getWeather()
			console.log(result)
			setWeather(result)
		}

		getTemp()
	}, [])

	const { name } = weather
	return <Wethers>{name}</Wethers>
}
