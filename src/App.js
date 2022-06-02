import { AppBar } from './components/AppBar'
import { Home } from './components/Home'
import { Section } from './components/Section'

function App() {
	return (
		<>
			<Section>
				<AppBar />
				<Home />
			</Section>
		</>
	)
}

export default App
