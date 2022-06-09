import styled from 'styled-components'

import projectOne from '../../images/project-1.jpg'
import projectSecond from '../../images/project-2.jpg'
import projectThird from '../../images/project-3.jpg'
import projectFourth from '../../images/project-4.jpg'

const ProjectContainer = styled.div`
	width: 100%;
	min-height: 100vh;
	padding: 150px 100px 100px;
	position: relative;
	top: 0;

	h1 {
		font-size: 100px;
		background: #252525;
		text-transform: capitalize;
		text-align: center;
		margin-bottom: 50px;
		color: #1a1a1a;
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-stroke: 8px transparent;
	}
`
const ProjectBlock = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 100px;
`

const Card = styled.div`
	height: 400px;
	position: relative;

	img {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		object-fit: cover;
		transition: 0.5s;
	}
	:hover img {
		filter: blur(20px);
	}
`

const Content = styled.div`
	position: relative;
	padding: 40px;
	color: #fff;
	transition: 0.5s;
	opacity: 0;
	&:hover {
		opacity: 1;
	}

	h2 {
		font-size: 50px;
		text-transform: capitalize;
		text-align: center;
		font-weight: 300;
	}
	p {
		margin: 40px;
		font-size: 20px;
		line-height: 30px;
		text-align: center;
	}
`

const ButtonGroup = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 20px;
`

const BtnGit = styled.button`
	height: 40px;
	text-transform: capitalize;
	font-size: 18px;
	border: none;
	background: #000;
	color: #fff;
	cursor: pointer;
`
const BtnLive = styled.button`
	height: 40px;
	text-transform: capitalize;
	font-size: 18px;
	border: none;
	background: none;
	border: 2px solid #fff;
	color: #fff;
	cursor: pointer;
`

export const Project = () => {
	return (
		<ProjectContainer>
			<h1>some of my projects</h1>
			<ProjectBlock>
				<Card>
					<img src={projectOne} alt='abstraction' />
					<Content>
						<h2>project 1</h2>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit vitae delectus cumque repudiandae
							aliquam optio accusamus natus nobis! Nam, sunt?
						</p>
						<ButtonGroup>
							<BtnGit type='button'>github repo</BtnGit>
							<BtnLive type='button'>see live</BtnLive>
						</ButtonGroup>
					</Content>
				</Card>
				<Card>
					<img src={projectSecond} alt='abstraction' />
					<Content>
						<h2>project 2</h2>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit vitae delectus cumque repudiandae
							aliquam optio accusamus natus nobis! Nam, sunt?
						</p>
						<ButtonGroup>
							<BtnGit type='button'>github repo</BtnGit>
							<BtnLive type='button'>see live</BtnLive>
						</ButtonGroup>
					</Content>
				</Card>
				<Card>
					<img src={projectThird} alt='abstraction' />
					<Content>
						<h2>project 3</h2>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit vitae delectus cumque repudiandae
							aliquam optio accusamus natus nobis! Nam, sunt?
						</p>
						<ButtonGroup>
							<BtnGit type='button'>github repo</BtnGit>
							<BtnLive type='button'>see live</BtnLive>
						</ButtonGroup>
					</Content>
				</Card>
				<Card>
					<img src={projectFourth} alt='abstraction' />
					<Content>
						<h2>project 4</h2>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit vitae delectus cumque repudiandae
							aliquam optio accusamus natus nobis! Nam, sunt?
						</p>
						<ButtonGroup>
							<BtnGit type='button'>github repo</BtnGit>
							<BtnLive type='button'>see live</BtnLive>
						</ButtonGroup>
					</Content>
				</Card>
			</ProjectBlock>
		</ProjectContainer>
	)
}
