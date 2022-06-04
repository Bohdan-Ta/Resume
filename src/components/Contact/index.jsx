import { Formik, Field, ErrorMessage, Form } from 'formik'
import * as Yup from 'yup'
import styled from 'styled-components'

const FormStyled = styled.div`
	position: absolute;
	top: 50px;
	opacity: 1;
	transition: 1s;
	padding: 100px 150px;
	height: 100vh;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 50px;
`
const FormWrap = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 20px;

	input {
		width: 100%;
		height: 40px;
		background: rgba(255, 255, 255, 0.2);
		border: 1px solid #fff;
		margin-bottom: 30px;
		border-radius: 5px;
		text-transform: capitalize;
		color: #fff;
		padding: 5px 10px;
	}
	label {
		color: #fff;
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
	}
	/* message {
		height: 280px;
		resize: none;
		font-family: sans-serif;
	} */
`
const Map = styled.div`
	width: 100%;
	height: 100%;
	padding: 10px;
	border: 2px solid #fff;
	background: rgba(255, 255, 255, 0.2);
	border-radius: 10px;

	iframe {
		width: 100%;
		height: 100%;
		border-radius: 5px;
	}
`

export const Contact = () => {
	return (
		<FormStyled>
			<Formik
				initialValues={{ firstName: '', email: '', message: '' }}
				validationSchema={Yup.object({
					firstName: Yup.string().max(15, 'Must be 15 characters or less').required(),
					email: Yup.string().email('Invalid email address').required(),
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
						<label htmlFor='firstName'>Name</label>
						<Field name='firstName' type='text' />
						<ErrorMessage name='firstName' />

						<label htmlFor='email'>Email Address</label>
						<Field name='email' type='email' />
						<ErrorMessage name='email' />

						<label htmlFor='message'>Message</label>
						<Field name='message' as='textarea' />

						<button type='submit'>Contacts</button>
					</Form>
				</FormWrap>
			</Formik>
			<Map>
				<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d325515.68161572196!2d30.25251015734255!3d50.402136755748614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2z0JrQuNGX0LIsIDAyMDAw!5e0!3m2!1suk!2sua!4v1643055222962!5m2!1suk!2sua'></iframe>
			</Map>
		</FormStyled>
	)
}
