import React from 'react'
// import { Link, NavLink } from 'react-router-dom'

import styled from 'styled-components'

const Header = styled.header`
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 10;
	background-color: #1a1a1a;

	ul {
		padding: 0;
		list-style: none;
		display: flex;
	}

	a {
		color: #fff;
		opacity: 0.5;
		text-decoration: none;
		text-transform: capitalize;
		padding: 10px 30px;
		margin: 0 20px;
		line-height: 80px;
		transition: 0.5s;
		font-style: 20px;
		cursor: pointer;
		&:hover,
		&:active {
			opacity: 1;
		}
	}
`

export const AppBar = () => {
	return (
		<Header>
			<header>
				<ul>
					<li>
						<a href='/'>Home</a>
					</li>
					<li>
						<a href='/project'>Project</a>
					</li>
					<li>
						<a href='/about'>About</a>
					</li>
					<li>
						<a href='/contact'>Contact</a>
					</li>
				</ul>
			</header>
		</Header>
	)
}
