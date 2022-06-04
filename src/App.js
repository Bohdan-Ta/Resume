import { Route, Routes } from 'react-router-dom'
// import { Loader } from './components/Loader'
import { AppBar } from './components/AppBar'
import { Home } from './components/Home'
import { About } from './components/About'
import { Section } from './components/Section'
import { Contacts } from './components/Contacts'

function App() {
	return (
		<>
			<Section>
				<AppBar />
				<Routes>
					<Route path='/' element={<Home />}></Route>
					<Route path='/about' element={<About />}></Route>
					<Route path='/contacts' element={<Contacts />}></Route>
				</Routes>
			</Section>
		</>
	)
}

export default App
