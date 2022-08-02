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
		margin-bottom: 40px;
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
	p {
		text-align: center;
		opacity: 0.5;
		font-size: 18px;
		line-height: 30px;
	}

	div {
		margin: 0 auto;
		/* position: absolute;
		top: 80px;
		right: calc(50% - 80px); */
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
const IconsSkills = styled.div`
	margin-top: 30px;
	display: flex;
	justify-content: center;

	a {
		width: 50px;
		height: 50px;
		margin: 0 10px;
		background-color: white;
		border-radius: 5%;
	}
`

export const Skills = () => {
	return (
		<Section>
			<h1>skills</h1>
			<Container>
				<Skill>
					<div>HTML</div>
					<p>Confident user, I can use semantics while designing sites.</p>
				</Skill>
				<Skill>
					<div>CSS</div>
					<p>Confident user. While creating sites I use both css and sass, styled-component, inline Styles</p>
				</Skill>
				<Skill>
					<div>JS</div>
					<p>
						I have knowledge of JS at a level that allows me to build sites with interactive elements. I can use
						asynchronous queries. While writing code, I use classes, hooks, classic or arrow functions, and other JS
						capabilities.
					</p>
				</Skill>
				<Skill>
					<div>NODE.JS</div>
					<p>I have knowledge of using Node.js to create back-end sites and applications.</p>
				</Skill>
				<Skill>
					<div>REACT</div>
					<p>
						React is what allows me to create what the customer wants. Using React with all libraries and frameworks I
						can create an amazing product. While writing a code, I use both classes and hooks. Redux is a great way to
						monitor the status of the application.
					</p>
				</Skill>
				<Skill>
					<div>GIT</div>
					<p>
						Git is something incredible that allows the whole team to work on a project at once. It gives experience of
						team work on the project, the ability to create projects, configure the project for team work, resolve
						conflicts in the implementation of commits.
					</p>
				</Skill>
			</Container>
			<IconsSkills>
				<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript' target='_blank' rel='noreferrer'>
					<img
						src='https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg'
						alt='javascript'
						width='50'
						height='50'
					/>
				</a>
				<a href='https://reactjs.org/' target='_blank' rel='noreferrer'>
					<img
						src='https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg'
						alt='react'
						width='50'
						height='50'
					/>
				</a>
				{/* <a href='https://www.typescriptlang.org/' target='_blank' rel='noreferrer'>
					{' '}
					<img
						src='https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg'
						alt='typescript'
						width='50'
						height='50'
					/>{' '}
				</a> */}
				<a href='https://www.w3.org/html/' target='_blank' rel='noreferrer'>
					{' '}
					<img
						src='https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg'
						alt='html5'
						width='50'
						height='50'
					/>{' '}
				</a>
				<a href='https://www.w3schools.com/css/' target='_blank' rel='noreferrer'>
					{' '}
					<img
						src='https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg'
						alt='css3'
						width='50'
						height='50'
					/>{' '}
				</a>
				<a href='https://babeljs.io/' target='_blank' rel='noreferrer'>
					{' '}
					<img
						src='https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg'
						alt='babel'
						width='50'
						height='50'
					/>{' '}
				</a>{' '}
				<a href='https://www.gnu.org/software/bash/' target='_blank' rel='noreferrer'>
					{' '}
					<img
						src='https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg'
						alt='bash'
						width='50'
						height='50'
					/>{' '}
				</a>
				<a href='https://getbootstrap.com' target='_blank' rel='noreferrer'>
					{' '}
					<img
						src='https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg'
						alt='bootstrap'
						width='50'
						height='50'
					/>{' '}
				</a>
				{/* <a href='https://www.chartjs.org' target='_blank' rel='noreferrer'>
					{' '}
					<img src='https://www.chartjs.org/media/logo-title.svg' alt='chartjs' width='50' height='50' />
				</a> */}
				<a href='https://www.figma.com/' target='_blank' rel='noreferrer'>
					{' '}
					<img src='https://www.vectorlogo.zone/logos/figma/figma-icon.svg' alt='figma' width='50' height='50' />{' '}
				</a>
				<a href='https://firebase.google.com/' target='_blank' rel='noreferrer'>
					{' '}
					<img
						src='https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg'
						alt='firebase'
						width='50'
						height='50'
					/>{' '}
				</a>
				<a href='https://git-scm.com/' target='_blank' rel='noreferrer'>
					{' '}
					<img src='https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg' alt='git' width='50' height='50' />{' '}
				</a>
				<a href='https://materializecss.com/' target='_blank' rel='noreferrer'>
					{' '}
					<img
						src='https://raw.githubusercontent.com/prplx/svg-logos/5585531d45d294869c4eaab4d7cf2e9c167710a9/svg/materialize.svg'
						alt='materialize'
						width='50'
						height='50'
					/>{' '}
				</a>
				<a href='https://nodejs.org' target='_blank' rel='noreferrer'>
					{' '}
					<img
						src='https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg'
						alt='nodejs'
						width='50'
						height='50'
					/>{' '}
				</a>
				<a href='https://postman.com' target='_blank' rel='noreferrer'>
					{' '}
					<img
						src='https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg'
						alt='postman'
						width='50'
						height='50'
					/>{' '}
				</a>
				<a href='https://redux.js.org' target='_blank' rel='noreferrer'>
					{' '}
					<img
						src='https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg'
						alt='redux'
						width='50'
						height='50'
					/>{' '}
				</a>
				<a href='https://sass-lang.com' target='_blank' rel='noreferrer'>
					{' '}
					<img
						src='https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg'
						alt='sass'
						width='50'
						height='50'
					/>{' '}
				</a>
				<a href='https://webpack.js.org' target='_blank' rel='noreferrer'>
					{' '}
					<img
						src='https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg'
						alt='webpack'
						width='50'
						height='50'
					/>{' '}
				</a>
			</IconsSkills>
		</Section>
	)
}
