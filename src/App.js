import React, { Fragment, Suspense, lazy, useState } from 'react'

import { ToastContainer } from 'react-toastify'

import AnimatedRoutes from './components/AnimatedRoutes'
import { Loader } from './components/Loader'
import { Preloader } from './components/Preloader'

import 'react-toastify/dist/ReactToastify.css'

const AppBar = lazy(() => import('./components/AppBar'))
const Section = lazy(() => import('./components/Section'))

export const App = () => {
	const [isReadyToRender, setIsReadyToRender] = useState(false)
	window.onload = function () {
		setIsReadyToRender(true)
	}

	return (
		<Fragment>
			{!isReadyToRender && <Preloade />}
			<Section>
				<AppBar />
				<Suspense fallback={<Loader />}>
					<AnimatedRoutes />
				</Suspense>
			</Section>
			<ToastContainer />
		</Fragment>
	)
}
