import { Formik, Field, ErrorMessage, Form } from 'formik'
import * as Yup from 'yup'
import styled from 'styled-components'

const FormStyled = styled.div`
	position: absolute;
	top: 50px;
	padding: 100px 150px;
	height: 100vh;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 50px;
`
const FormWrap = styled.div`
	input,
	textarea {
		width: 100%;
		height: 40px;
		background: rgba(255, 255, 255, 0.2);
		border: 1px solid #fff;
		margin-bottom: 30px;
		border-radius: 5px;
		text-transform: capitalize;
		color: #fff;
		padding: 5px 10px;

		::placeholder {
			color: #fff;
		}
	}

	textarea {
		height: 280px;
		resize: none;
		font-family: sans-serif;
	}

	button {
		background: #ff4f4f;
		color: #fff;
		text-transform: capitalize;
		padding: 15px 40px;
		display: block;
		margin: auto;
		border: none;
		border-radius: 10px;
		cursor: pointer;
		transition: 0.25s;

		&:hover {
			color: black;
			border: 1px solid #fff;
		}
	}
`
const ErrorMsg = styled.div`
	position: relative;
	top: -20px;
	right: -10px;
	font-size: 14px;
	color: red;
	z-index: 10;
`

const Map = styled.div`
	width: 600px;
	height: 80%;
	padding: 10px;
	border: 2px solid #fff;
	background: rgba(255, 255, 255, 0.2);
	border-radius: 10px;
`
const Iframe = styled.iframe`
	width: 100%;
	height: 100%;
	border-radius: 5px;
`
export default function Contact() {
	return (
		<FormStyled>
			<Formik
				initialValues={{ name: '', email: '', message: '' }}
				validationSchema={Yup.object({
					name: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
					email: Yup.string().email('Invalid email address').required('Required'),
				})}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						alert(JSON.stringify(values, null, 2))
						setSubmitting(false)
					}, 400)
				}}
			>
				<FormWrap>
					<Form>
						<Field name='name' type='text' placeholder='Name' />
						<ErrorMsg>
							<ErrorMessage name='name' />
						</ErrorMsg>
						<Field name='email' type='email' placeholder='email' />
						<ErrorMsg>
							<ErrorMessage name='email' />
						</ErrorMsg>
						<Field name='message' as='textarea' placeholder='message' />

						<button type='submit'>Contact</button>
					</Form>
				</FormWrap>
			</Formik>
			<Map>
				<Iframe
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d325515.68161572196!2d30.25251015734255!3d50.402136755748614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2z0JrQuNGX0LIsIDAyMDAw!5e0!3m2!1suk!2sua!4v1643055222962!5m2!1suk!2sua'
					loading='lazy'
				></Iframe>
			</Map>
		</FormStyled>
	)
}
