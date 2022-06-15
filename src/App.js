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
					{/* <Routes>
						<Route path='/' element={<Home />}></Route>
						<Route path='/about' element={<About />}></Route>
						<Route path='/contact' element={<Contact />}></Route>
						<Route path='/project' element={<Project />}></Route>
					</Routes> */}
				</Suspense>
			</Section>
			<ToastContainer />
		</>
	)
}
