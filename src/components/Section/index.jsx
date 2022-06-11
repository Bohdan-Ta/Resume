import styled from 'styled-components'
const SectionSize = styled.section`
	width: 100%;
	max-width: 1400px;
	display: block;
	margin: 0 auto;
	min-height: 100vh;
	font-family: sans-serif;
`

export default function Section({ children }) {
	return (
		<SectionSize>
			<section>{children}</section>
		</SectionSize>
	)
}
