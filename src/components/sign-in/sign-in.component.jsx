import React, { Component } from 'react'

import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { signInWithGoogle, auth } from '../../firebase/firebase.utils'

class SignIn extends Component {
	constructor() {
		super()

		this.state = {
			email: '',
			password: ''
		}
	}

	handleSubmit = async event => {
		event.preventDefault()
		const { email, password } = this.state

		try {
			await auth.signInWithEmailAndPassword(email, password)
			this.setState({ email: '', password: '' })
		} catch (error) {
			console.log(error)
		}
	}

	handleChange = event => {
		const { value, name } = event.target

		this.setState({ [name]: value })
	}
	render() {
		return (
			<div className='sign-in'>
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						handleChange={this.handleChange}
						name='email'
						type='email'
						label='Email'
						value={this.state.email}
						required
					/>
					<FormInput
						handleChange={this.handleChange}
						name='password'
						type='password'
						label='Password'
						value={this.state.password}
						required
					/>

					<div className='buttons'>
						<CustomButton type='submit'>Sign in</CustomButton>
						<CustomButton isGoogleSignIn onClick={signInWithGoogle}>
							Sign in with google
						</CustomButton>
					</div>
				</form>
			</div>
		)
	}
}

export default SignIn
