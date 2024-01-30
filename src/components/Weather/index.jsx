import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import getWeather from '../../services/getWeather';

const WeatherContainer = styled.div`
	position: absolute;
	top: 0;
	right: 20px;
	display: flex;
	align-items: center;
	height: 100%;

	p {
		margin: 0 5px;
		font-size: 16px;
		color: #fff;
		opacity: 0.5;
	}
`;

const WeatherIcon = styled.img`
	width: 24px;
	height: 24px;
`;

export default function Weather() {
	const [weatherData, setWeatherData] = useState(null);

	useEffect(() => {
		const fetchWeatherData = async () => {
			try {
				const data = await getWeather();
				setWeatherData(data);
			} catch (error) {
				console.error('Error fetching weather data:', error);
			}
		};

		fetchWeatherData();
	}, []);

	return (
		<WeatherContainer>
			{weatherData && (
				<>
					<WeatherIcon src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt="Weather Icon" />
					<p>{weatherData.name}</p>
					<p>temp: {weatherData.main.temp.toFixed(1)}&deg;C</p>
					<p>wind: {weatherData.wind.speed}m/s</p>
				</>
			)}
		</WeatherContainer>
	);
}

