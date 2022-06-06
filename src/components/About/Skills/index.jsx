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
		margin: auto;
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
`

export const Skills = () => {
	return (
		<Section>
			<h1>skills</h1>
			<Container>
				<Skill>
					<img src='#' alt='' />
					<div>98%</div>
					<h2>HTML</h2>
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, delectus!</p>
				</Skill>
				<Skill>
					<img src='#' alt='' />
					<div>98%</div>
					<h2>CSS</h2>
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, delectus!</p>
				</Skill>
				<Skill>
					<img src='#' alt='' />
					<div>98%</div>
					<h2>JS</h2>
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, delectus!</p>
				</Skill>
				<Skill>
					<img src='#' alt='' />
					<div>98%</div>
					<h2>NODE.JS</h2>
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, delectus!</p>
				</Skill>
				<Skill>
					<img src='#' alt='' />
					<div>98%</div>
					<h2>REACT</h2>
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, delectus!</p>
				</Skill>
			</Container>
		</Section>
	)
}
