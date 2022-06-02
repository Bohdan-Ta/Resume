import { Route, Routes } from 'react-router-dom'
import { Loader } from './components/Loader'
import { AppBar } from './components/AppBar'
import { Home } from './components/Home'
import { Section } from './components/Section'

function App() {
	return (
		<>
			<Section>
				<AppBar />
				<Routes>
					<Route path='/' element={<Home />}></Route>
					<Route path='/about' element={<Loader />}></Route>
				</Routes>
			</Section>
		</>
	)
}

export default App
