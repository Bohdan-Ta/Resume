import styled from 'styled-components'

const Section = styled.div`
	width: 100%;
	margin: 100px 0;

	h1 {
		text-align: center;
		font-size: 60px;
		color: #fff;
		text-transform: capitalize;
		font-weight: 300;
		margin-bottom: 100px;
	}
`
const Container = styled.div`
	width: 95%;
	margin: auto;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 100px;
	color: #fff;
`
const Skill = styled.div`
	position: relative;

	img {
		display: block;
		margin: 30px 0 20px;
		height: 200px;
	}

	h2 {
		font-size: 30px;
		font-weight: 300;
		text-align: center;
		text-transform: capitalize;
		margin: 30px 0 20px;
	}
	p {
		text-align: center;
		opacity: 0.5;
		font-size: 18px;
		line-height: 30px;
	}

	div {
		position: absolute;
		top: 80px;
		right: 0;
		width: 150px;
		height: 150px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 22px;
		border-radius: 50%;
		border: 10px solid;
	}

	&:nth-child(1) {
		div {
			background: #ff4f4f28;
			border-color: #ff4f4f;
			color: #ff4f4f;
		}
	}
	&:nth-child(2) {
		div {
			background: #4fa0ff28;
			border-color: #4fa0ff;
			color: #4fa0ff;
		}
	}
	&:nth-child(3) {
		div {
			background: #ffed4f28;
			border-color: #ffed4f;
			color: #ffed4f;
		}
	}
	&:nth-child(4) {
		div {
			background: #52ff4f28;
			border-color: #52ff4f;
			color: #52ff4f;
		}
	}
	&:nth-child(5) {
		div {
			background: #4fdfff28;
			border-color: #4fdfff;
			color: #4fdfff;
		}
	}
	&:nth-child(6) {
		div {
			background: #6370e428;
			border-color: #d9e8eb;
			color: #4fdfff;
		}
	}
`

export const Skills = () => {
	return (
		<Section>
			<h1>skills</h1>
			<Container>
				<Skill>
					<img src='#' alt='' />
					<div>HTML</div>
					{/* <h2>HTML</h2> */}
					<p>Confidence in possession. Using semantics when designing sites.</p>
				</Skill>
				<Skill>
					<img src='#' alt='' />
					<div>CSS</div>
					{/* <h2>CSS</h2> */}
					<p>Confident possession. When creating sites I use both css and sass, styled-component, inline Styles</p>
				</Skill>
				<Skill>
					<img src='#' alt='' />
					<div>JS</div>
					{/* <h2>JS</h2> */}
					<p>
						I have knowledge of JS at a level that allows you to build sites with interactive elements. Use asynchronous
						queries. When writing code, you can use classes, hooks, classic or arrow functions, and other JS
						capabilities.
					</p>
				</Skill>
				<Skill>
					<img src='#' alt='' />
					<div>NODE.JS</div>
					{/* <h2>NODE.JS</h2> */}
					<p>I have the knowledge to use Node.js to create back-end sites and applications</p>
				</Skill>
				<Skill>
					<img src='#' alt='' />
					<div>REACT</div>
					{/* <h2>REACT</h2> */}
					<p>
						React is what allows me to create what the customer wants or wants. Using React with all libraries and
						frameworks you can create an amazing product. When writing code, I use both classes and hooks. Redux is a
						great way to monitor the status of the application.
					</p>
				</Skill>
				<Skill>
					<img src='#' alt='' />
					<div>GIT</div>
					{/* <h2>REACT</h2> */}
					<p>
						Git is something incredible that allows the whole team to work on a project at once. Experience of team work
						on the project, the ability to create projects, configure the project for team work, resolve conflicts in
						the implementation of commits
					</p>
				</Skill>
			</Container>
		</Section>
	)
}
