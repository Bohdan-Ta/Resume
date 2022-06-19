import React, { Suspense, lazy } from 'react'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AnimatedRoutes from './components/AnimatedRoutes'
import { Loader } from './components/Loader'

const AppBar = lazy(() => import('./components/AppBar'))
const Section = lazy(() => import('./components/Section'))

export const App = () => {
	return (
		<>
			<Section>
				<AppBar />
				<Suspense fallback={<Loader />}>
					<AnimatedRoutes />
				</Suspense>
			</Section>
			<ToastContainer />
		</>
	)
}
