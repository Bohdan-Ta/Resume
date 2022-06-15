import React, { lazy } from 'react'

import { Route, Routes, useLocation } from 'react-router-dom'

import { AnimatePresence } from 'framer-motion'

const Home = lazy(() => import('./Home'))
const About = lazy(() => import('./About'))
const Contact = lazy(() => import('./Contact'))
const Project = lazy(() => import('./Project'))

export default function AnimatedRoutes() {
	const location = useLocation()

	return (
		<AnimatePresence>
			<Routes location={location} key={location.pathname}>
				<Route path='/' element={<Home />}></Route>
				<Route path='/about' element={<About />}></Route>
				<Route path='/contact' element={<Contact />}></Route>
				<Route path='/project' element={<Project />}></Route>
			</Routes>
		</AnimatePresence>
	)
}
