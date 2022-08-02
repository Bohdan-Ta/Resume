import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

const handleDragStart = (e) => e.preventDefault()
const responsive = {
	0: { items: 1 },
	568: { items: 2 },
	1024: { items: 5 },
}

const items = [
	<a href='https://www.w3.org/html/' target='_blank' rel='noreferrer' onDragStart={handleDragStart} role='presentation'>
		<img
			src='https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg'
			alt='html5'
			width='50'
			height='50'
		/>
	</a>,

	<a
		href='https://www.w3schools.com/css/'
		target='_blank'
		rel='noreferrer'
		onDragStart={handleDragStart}
		role='presentation'
	>
		<img
			src='https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg'
			alt='css3'
			width='50'
			height='50'
		/>
	</a>,
	<a href='https://babeljs.io/' target='_blank' rel='noreferrer' onDragStart={handleDragStart} role='presentation'>
		<img src='https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg' alt='babel' width='50' height='50' />
	</a>,

	<a
		href='https://www.gnu.org/software/bash/'
		target='_blank'
		rel='noreferrer'
		onDragStart={handleDragStart}
		role='presentation'
	>
		<img src='https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg' alt='bash' width='50' height='50' />
	</a>,

	<a href='https://getbootstrap.com' target='_blank' rel='noreferrer'>
		<img
			src='https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg'
			alt='bootstrap'
			width='50'
			height='50'
		/>
	</a>,

	<a href='https://www.figma.com/' target='_blank' rel='noreferrer'>
		<img src='https://www.vectorlogo.zone/logos/figma/figma-icon.svg' alt='figma' width='50' height='50' />
	</a>,

	<a href='https://firebase.google.com/' target='_blank' rel='noreferrer'>
		<img src='https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg' alt='firebase' width='50' height='50' />
	</a>,

	<a href='https://git-scm.com/' target='_blank' rel='noreferrer'>
		<img src='https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg' alt='git' width='50' height='50' />{' '}
	</a>,

	<a href='https://materializecss.com/' target='_blank' rel='noreferrer'>
		<img
			src='https://raw.githubusercontent.com/prplx/svg-logos/5585531d45d294869c4eaab4d7cf2e9c167710a9/svg/materialize.svg'
			alt='materialize'
			width='50'
			height='50'
		/>
	</a>,

	<a href='https://nodejs.org' target='_blank' rel='noreferrer'>
		<img
			src='https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg'
			alt='nodejs'
			width='50'
			height='50'
		/>
	</a>,

	<a href='https://postman.com' target='_blank' rel='noreferrer'>
		<img src='https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' alt='postman' width='50' height='50' />
	</a>,

	<a href='https://redux.js.org' target='_blank' rel='noreferrer'>
		<img
			src='https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg'
			alt='redux'
			width='50'
			height='50'
		/>
	</a>,

	<a href='https://sass-lang.com' target='_blank' rel='noreferrer'>
		<img
			src='https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg'
			alt='sass'
			width='50'
			height='50'
		/>
	</a>,

	<a href='https://webpack.js.org' target='_blank' rel='noreferrer'>
		<img
			src='https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg'
			alt='webpack'
			width='50'
			height='50'
		/>
	</a>,
]

export const Gallery = () => {
	return <AliceCarousel mouseTracking items={items} responsive={responsive} controlsStrategy='alternate' />
}
