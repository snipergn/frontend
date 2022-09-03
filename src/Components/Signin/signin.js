import './signin.css'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


class SignIn extends React.Component { 
	constructor() {
		super()
		this.state = {
			email: '',
			password: ''
		}
			this.OnEmailChange = this.OnEmailChange.bind(this);
		  this.OnPasswordChange = this.OnPasswordChange.bind(this);
		  this.OnConsoleChange = this.OnConsoleChange.bind(this);
		}

		OnEmailChange = (event) => {
			this.setState({email: event.target.value})
		}

		OnPasswordChange = (event) => {
			this.setState({password: event.target.value})
		}

		OnConsoleChange = (event) => {
			console.log(this.state.email + '' + this.state.password);
		}

		render() {
			  const navigation = useNavigation();

			return (
		  	<>
			<main class="pa6 black-80">
			<div class="measure center" onChange={this.OnConsoleChange}>
		    	<fieldset id="sign_up" class="ba b--transparent ph2 mh0">
		      	<legend class="f2 fw6 ph0 mh0">Sign In</legend>
	  				<div class="mt3">
	        				<label class="pa1 db fw6 lh-copy f6" for="email-address">Email</label>
	        				<input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-50" 
	        				type="email" 
	        				name="email-address"  
	        				id="email-address"
	        				onChange={this.OnEmailChange}			
	        				/> 

	      			</div>
	      			<div class="mv3">
	        				<label class="pa1 db fw6 lh-copy f6" for="password">Password</label>
	        				<input class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-50" 
	        				type="password" 
	        				name="password" 
	        				id="current-password"
	        				onChange={this.OnPasswordChange}
	        				/>
	      			</div>
	    				</fieldset>
	   					<div class="">
	      					<input
								className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Sign in"
	      					/>
	    				</div>
	    				<div class="lh-copy mt3">
	      					<p onClick={() =>  navigation.navigate('/navigation')}		
	      					class="f6 link dim black db">
	      					Register
	      					</p>
					</div>
	  		</div>
			</main>
		    </>
		  );
		}
	}


export default SignIn;