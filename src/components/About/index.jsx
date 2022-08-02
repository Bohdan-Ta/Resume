import styled from 'styled-components'
import { motion } from 'framer-motion'

import { Gallery } from './SkillCarousel'
import { Skills } from './Skills'
import { Education } from './Education/Education'

import my_photo from '../../images/photo_my.jpg'
import My_CV from '../../helpers/i.pdf'

const AboutDiv = styled.div`
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

	a {
		color: #fff;
		text-decoration: none;
	}
`

export default function About() {
	return (
		<motion.div
			intial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ y: window.innerWidth, transition: { duration: 0.2 } }}
		>
			<AboutDiv>
				<AboutWrap>
					<img src={my_photo} alt='man' />
					<Button type='button'>
						<a href={My_CV} download='CV_Bohdan.pdf'>
							downlaod cV
						</a>
					</Button>
				</AboutWrap>
				<p>
					PROACTIVE - HIGH ORGANIZATION - ATTENTIVE TO DETAILS <br></br> I have experience in team management, I know
					how to work in a team to achieve results. I constantly strive to gain additional knowledge and improve my
					skills both in management experience and in the field of IT. I gained experience in three team projects while
					training Full Stack Developer at GoIT, which lasted from 2021 till 2022. Additionally, I have got knowledge of
					HTML, CSS, React, JS, Node.js and other frameworks that allows me to create sites and other software products.
					I have been learning English for the last 2 years. I read and implement modern developments in IT, in
					particular I use foreign youtube channels, electronic media resources in particular Medium in the direction of
					JS, React, Node.JS, Git etcetrua.
				</p>
			</AboutDiv>
			<Skills />
			<Gallery />
			<Education />
		</motion.div>
	)
}
