import { BeatLoader } from 'react-spinners'
import styled from 'styled-components'

const Override = styled.div`
	position: ${(props) => (props.inBlock ? 'absolute' : 'fixed')};
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 9999;
`

export const Loader = () => {
	return (
		<Override>
			<div>
				<BeatLoader size={20} color='red' />
			</div>
		</Override>
	)
}
