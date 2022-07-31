import { Formik, Field, ErrorMessage, Form } from 'formik'
import emailjs from 'emailjs-com'
import * as Yup from 'yup'
import { toast } from 'react-toastify'
import styled from 'styled-components'

import { BsTelegram, BsLinkedin } from 'react-icons/bs'
import { GiPhone } from 'react-icons/gi'

import { motion } from 'framer-motion'

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
		/* text-transform: capitalize; */
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
const StyleIcon = styled.div`
	position: fixed;
	top: 80%;
	left: 50px;
	transform: translateY(-50%);
	display: flex;
	flex-direction: column;

	svg {
		width: 30px;
		height: 30px;
		margin-bottom: 30px;
		color: #fff;

		&:hover {
			color: #ff4f4f;
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
	function sendEmail(object) {
		const success = () => toast.success('Information sent successfully')
		const errors = () => toast.error('Something went wrong')

		emailjs
			.send(
				process.env.REACT_APP_SERVICE_EMAIL_JS,
				process.env.REACT_APP_TEMPLATE_EMAIL_JS,
				object,
				process.env.REACT_APP_PUBLIC_KEY_EMAIL_JS
			)
			.then(
				(result) => {
					success()
					console.log(result.text)
				},
				(error) => {
					errors()
					console.log(error.text)
				}
			)
	}
	return (
		<motion.div
			intial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
		>
			<FormStyled>
				<Formik
					initialValues={{ name: '', email: '', message: '' }}
					validationSchema={Yup.object({
						name: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
						email: Yup.string().email('Invalid email address').required('Required'),
					})}
					onSubmit={(values, { setSubmitting, resetForm }) => {
						setTimeout(() => {
							sendEmail(values)
							setSubmitting(false)
							resetForm()
						}, 400)
					}}
				>
					<FormWrap>
						<Form>
							<Field name='name' type='text' placeholder='Name' />
							<ErrorMsg>
								<ErrorMessage name='name' />
							</ErrorMsg>
							<Field name='email' type='email' placeholder='Email' />
							<ErrorMsg>
								<ErrorMessage name='email' />
							</ErrorMsg>
							<Field name='message' as='textarea' placeholder='Message' />

							<button type='submit'>Send contact</button>
						</Form>
					</FormWrap>
				</Formik>
				<StyleIcon>
					<a href='tel:+380503869202'>
						<GiPhone />
					</a>
					<a href='https://t.me/@tbukraine' target='_blank' rel='noreferrer'>
						<BsTelegram />
					</a>
					<a href='https://www.linkedin.com/in/bohdan-tatarchuk-4961907a/' target='_blank' rel='noreferrer'>
						<BsLinkedin />
					</a>
				</StyleIcon>
				<Map>
					<Iframe
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d325515.68161572196!2d30.25251015734255!3d50.402136755748614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2z0JrQuNGX0LIsIDAyMDAw!5e0!3m2!1suk!2sua!4v1643055222962!5m2!1suk!2sua'
						loading='lazy'
					></Iframe>
				</Map>
			</FormStyled>
		</motion.div>
	)
}
