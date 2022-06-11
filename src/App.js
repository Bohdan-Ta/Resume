import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

import { Loader } from './components/Loader'

const AppBar = lazy(() => import('./components/AppBar'))
const Home = lazy(() => import('./components/Home'))
const About = lazy(() => import('./components/About'))
const Contact = lazy(() => import('./components/Contact'))
const Project = lazy(() => import('./components/Project'))
const Section = lazy(() => import('./components/Section'))

export const App = () => {
	return (
		<Section>
			<AppBar />
			<Suspense fallback={<Loader />}>
				<Routes>
					<Route path='/' element={<Home />}></Route>
					<Route path='/about' element={<About />}></Route>
					<Route path='/contact' element={<Contact />}></Route>
					<Route path='/project' element={<Project />}></Route>
				</Routes>
			</Suspense>
		</Section>
	)
}
