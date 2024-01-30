import styled from 'styled-components'
import { motion } from 'framer-motion'

import { Gallery } from './SkillCarousel'
import { Skills } from './Skills'
import { Education } from './Education/Education'

import my_photo from '../../images/photo_my.jpg'
/* import My_CV from '../../helpers/CVBT.pdf'
 */
const AboutDiv = styled.div`
	padding: 150px 100px 0;
	position: relative;
	top: 0;
	opacity: 1;
	transition: 1.1s;
	display: grid;
	grid-template-columns: 40% 60%;
	grid-gap: 40px;

	p {
		color: #fff;
		opacity: 0.62;
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

/* const Button = styled.button`
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
` */

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
					{/* <Button type='button'>
						<a href={My_CV} download='CV_Bohdan.pdf'>
							downlaod cV
						</a>
					</Button> */}
				</AboutWrap>
				<p>
					PROACTIVE - HIGH ORGANIZATION - ATTENTIVE TO DETAILS <br></br> I possess extensive experience in team management, adept at collaborating within teams to achieve exceptional results. Continuously striving for self-improvement, I actively seek out additional knowledge and skill enhancement, both in management practices and within the IT realm.
					<br></br>
					During my training as a Full Stack Developer at GoIT from 2021 to 2022, I actively participated in three team projects, honing my collaborative skills and gaining practical experience in project management.
					<br></br>
					In addition to my proficiency in HTML, CSS, React, JS, and Node.js, I also excel in Kotlin and utilize IntelliJ IDEA and Android Studio for Android development projects. My dedication to language learning extends beyond English, as I have been actively studying German for the past two years.
					<br></br>
					To stay current with the latest developments in IT, I regularly engage with modern resources such as foreign YouTube channels and online platforms like Medium, focusing on topics related to JS, React, Node.js, Git, and more. This proactive approach ensures that I remain at the forefront of technological advancements, enabling me to deliver innovative solutions effectively.
				</p>
			</AboutDiv>
			<Skills />
			<Gallery />
			<Education />
		</motion.div>
	)
}
