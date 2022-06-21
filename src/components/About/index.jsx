// import { NavLink, Route, Outlet } from 'react-router-dom'
// import { Suspense } from 'react'

// import { Loader } from '../../components/Loader'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import FileSaver from 'file-saver'

import { Skills } from './Skills'
import { Education } from './Education/Education'

import my_photo from '../../images/photo_my.jpg'

const AboutDiv = styled.div`
	/* width: 100%; */
	padding: 150px 100px 0;
	position: relative;
	top: 0;
	opacity: 1;
	transition: 1s;
	display: grid;
	grid-template-columns: 30% 65%;
	grid-gap: 40px;

	p {
		color: #fff;
		opacity: 0.6;
		font-size: 20px;
		line-height: 40px;
	}
`

const AboutWrap = styled.div`
	position: relative;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 20px;
	}
`

const Button = styled.button`
	position: absolute;
	bottom: 20px;
	left: 50%;
	transform: translateX(-50%);
	padding: 10px 20px;
	color: #fff;
	border: none;
	font-size: 16px;
	text-transform: capitalize;
	cursor: pointer;
	transition: 0.5s;
	background: rgba(0, 0, 0, 0.5);
	&:hover {
		background: #000;
	}
`

export default function About() {
	const download = () => {
		FileSaver.saveAs(process.env.REACT_APP_CLIENT_URL + 'public/resources/i.pdf', 'MyCV.pdf')
	}
	return (
		<motion.div
			intial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
		>
			<AboutDiv>
				<AboutWrap>
					<img src={my_photo} alt='man' />
					<Button type='button' onClick={download}>
						downlaod cv
					</Button>
				</AboutWrap>
				<p>
					PROACTIVE - HIGH ORGANIZATION - ATTENTIVENESS <br></br> I have experience in team management, I know how to
					work in a team to achieve results. I am constantly striving to gain additional knowledge and improve my skills
					both in management experience and in the field of IT. Gained experience in three team projects while training
					Full Stack Developer at GoIT, which lasted from 2021-2022. Gained knowledge of HTML, CSS, React, JS, Node.js
					and other frameworks that allow you to create sites and other software products. I have been working on
					learning English for the last 2 years. I read and implement modern developments in IT, in particular I use
					foreign youtube channels, electronic media resources in particular Medium in the direction of JS, React,
					Node.JS, Git etc.
				</p>
			</AboutDiv>
			<Skills />
			<Education />
		</motion.div>
	)
}
