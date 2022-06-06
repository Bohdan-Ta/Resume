import styled from 'styled-components'

import { Skills } from './Skills'

import my_photo from '../../images/photo_my.png'

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

export const About = () => {
	return (
		<>
			<AboutDiv>
				<AboutWrap>
					<img src={my_photo} alt='man' />
					<Button>downlaod cv</Button>
				</AboutWrap>
				<p>
					Where can I get some? There are many variations of passages of Lorem Ipsum available, but the majority have
					suffered alteration in some form, by injected humour, or randomised words which don't look even slightly
					believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything
					embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat
					predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of
					over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which
					looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or
					non-characteristic words etc.
				</p>
			</AboutDiv>
			<Skills />
		</>
	)
}
