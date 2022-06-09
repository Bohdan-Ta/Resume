import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Loader } from './components/Loader'
import { AppBar } from './components/AppBar'
import { Home } from './components/Home'
import { About } from './components/About'
import { Section } from './components/Section'
import { Contact } from './components/Contact'
import { Project } from './components/Project'

// const AppBar = lazy(() => import('./components/AppBar'))
// const Home = lazy(() => import('./components/Home'))
// const About = lazy(() => import('./components/About'))
// const Contact = lazy(() => import('./components/Contact'))
// const Section = lazy(() => import('./components/Section'))

export const App = () => {
	return (
		<Section>
			<Suspense fallback={<Loader />}>
				<AppBar />
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
