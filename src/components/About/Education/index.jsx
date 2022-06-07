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
		margin-bottom: 150px;
	}
`
// const Container = styled.div`
// 	display: block;
// 	width: 90%;
// 	margin: 150px auto;
// 	margin-bottom: 150px;
// `
const CardWrapp = styled.div`
	display: block;
	width: 90%;
	margin: 150px auto;

	h2 {
		font-size: 30px;
		font-weight: 300;
		margin-bottom: 20px;
	}
`
const Card = styled.div`
	width: 45%;
	padding: 30px;
	border-radius: 10px;
	color: #fff;
	display: block;
	margin: -80px 0;
	position: relative;
	background: #f00;

	&:nth-child(even) {
		margin-left: auto;
	}

	&:nth-child(even):before {
		div {
			content: '';
			position: absolute;
			left: -15%;
			top: 50%;
			transform: translateY(-50%);
			width: 20px;
			height: 20px;
			border: 5px solid #191919;
			border-radius: 50%;
		}
	}

	&:nth-child(even):after {
		div {
			content: '';
			position: absolute;
			left: -8.5%;
			top: 50%;
			transform: translateY(-50%);
			width: 7%;
			height: 2px;
			background: #fff;
			z-index: -1;
		}
	}

	&:nth-child(odd):before {
		content: '';
		position: absolute;
		right: -13%;
		top: 50%;
		transform: translateY(-50%);
		width: 20px;
		height: 20px;
		border: 5px solid #191919;
		border-radius: 50%;
	}

	&:nth-child(odd):after {
		content: '';
		position: absolute;
		right: -8.5%;
		top: 50%;
		transform: translateY(-50%);
		width: 7%;
		height: 2px;
		background: #fff;
		z-index: -1;
	}

	&:nth-child(2),
	&:nth-child(2):before {
		background: #ff4f4f;
	}
	&:nth-child(3),
	&:nth-child(3):before {
		background: #ffb84f;
	}
	&:nth-child(4),
	&:nth-child(4):before {
		background: #3dca5c;
	}
	&:nth-child(5),
	&:nth-child(5):before {
		background: #565252;
	}
	&:nth-child(6),
	&:nth-child(6):before {
		background: #4fa0ff;
	}
	&:nth-child(even) {
		div {
			content: '';
			position: absolute;
			left: -12%;
			top: 0;
			width: 0px;
			height: 100%;
			border: 1px dashed #fff;
			z-index: -1;
		}
	}
`

export const Education = () => {
	return (
		<Section>
			{/* <Container> */}
			<h1>education and experience</h1>
			<CardWrapp>
				<Card>
					<h2>2000-2002</h2>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto sequi recusandae laborum ipsam
						dignissimos nostrum vitae provident officia, consectetur ab accusantium corrupti exercitationem temporibus
						repellat non magni cupiditate ea reprehenderit.
					</p>
				</Card>
			</CardWrapp>
			<CardWrapp>
				<Card>
					<h2>2000-2002</h2>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto sequi recusandae laborum ipsam
						dignissimos nostrum vitae provident officia, consectetur ab accusantium corrupti exercitationem temporibus
						repellat non magni cupiditate ea reprehenderit.
					</p>
				</Card>
			</CardWrapp>
			<CardWrapp>
				<Card>
					<h2>2000-2002</h2>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto sequi recusandae laborum ipsam
						dignissimos nostrum vitae provident officia, consectetur ab accusantium corrupti exercitationem temporibus
						repellat non magni cupiditate ea reprehenderit.
					</p>
				</Card>
			</CardWrapp>
			<CardWrapp>
				<Card>
					<h2>2000-2002</h2>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto sequi recusandae laborum ipsam
						dignissimos nostrum vitae provident officia, consectetur ab accusantium corrupti exercitationem temporibus
						repellat non magni cupiditate ea reprehenderit.
					</p>
				</Card>
			</CardWrapp>
			<CardWrapp>
				<Card>
					<h2>2000-2002</h2>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto sequi recusandae laborum ipsam
						dignissimos nostrum vitae provident officia, consectetur ab accusantium corrupti exercitationem temporibus
						repellat non magni cupiditate ea reprehenderit.
					</p>
				</Card>
			</CardWrapp>
			{/* </Container> */}
		</Section>
	)
}
