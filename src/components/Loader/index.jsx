import { ClockLoader } from 'react-spinners'
import styled from 'styled-components'

const Override = styled.div`
	position: ${(props) => (props.inBlock ? 'absolute' : 'fixed')};
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`

export const Loader = () => {
	return (
		<Override>
			<div>
				<ClockLoader size={100} color='yellow' />
			</div>
		</Override>
	)
}
