import './signin.css'
import React from 'react'

class SignIn extends React.Component {
constructor(props) {
	super(props)
	this.state = {
		email: '',
		password: ''
	}
	this.handleChangeEmail = this.handleChangeEmail.bind(this);
	this.handleChangePassword  = this.handleChangePassword.bind(this);
}

	handleChangeEmail = (event) => {
		this.setState({
			email: event.target.value,
		});
	}
	handleChangePassword = (event) => {
		this.setState({
			password: event.target.value,
		});
	}

	handleSubmit = (event) => {
		console.log(this.state.email  + this.state.password);
		event.preventDefault()
	}

	onSubmitSignIn = () => {
    fetch('https://5ddbb358041ac10014de140b.mockapi.io/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
		.then((response) => response.json())
		.then((data) => {
			console.log(data)
		})
		.catch((err) => {
			console.log(err.message)
		})
}
	render(){ 
	 return (
	  	<>
		<main class="pa6 black-80">
		<form class="measure center" onSubmit={this.handleSubmit}>
	    	<fieldset id="sign_up" class="ba b--transparent ph2 mh0">
	      	<legend class="f2 fw6 ph0 mh0">Sign In</legend>
  				<div class="mt3">
        				<label class="pa1 db fw6 lh-copy f6" for="email-address">Email</label>
        				<input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-50" 
        				type="email" 
        				name="email-address"  
        				id="email-address"
        				onChange={this.handleChangeEmail}

        				/> 

      			</div>
      			<div class="mv3">
        				<label class="pa1 db fw6 lh-copy f6" for="password">Password</label>
        				<input class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-50" 
        				type="password" 
        				name="password" 
        				id="current-password"
        				onChange={this.handleChangePassword}
        				/>
      			</div>
    				</fieldset>
   					<div class="">
      					<input 
      					class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
      					type="submit" 
      					value="Sign in"/>
    				</div>
    				<div class="lh-copy mt3">
      					<a href="#0" 
      					class="f6 link dim black db">
      					Sign up
      					</a>
				</div>
  		</form>
		</main>
	    </>
	  );
	}
}


export default SignIn;