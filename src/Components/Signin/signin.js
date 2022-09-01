import './signin.css'
import React from 'react'
import {useNavigate} from "react-router-dom";


const SignIn = ({event, handleChangeEmail, handleChangePassword}) => { 
	const navigate = useNavigate();
		handleChangeEmail({
			[event.target.email]: event.target.value
		});

		handleChangePassword({
			[event.target.password]: event.target.value
		})


	 return (
	  	<>
		<main class="pa6 black-80">
		<div class="measure center">
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
      					onClick={() => navigate('/navigation')}
      					class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
      					type="submit" 
      					value="Sign in"/>
    				</div>
    				<div class="lh-copy mt3">
      					<p onClick={() => navigate('/Register')} 			
      					class="f6 link dim black db">
      					Register
      					</p>
				</div>
  		</div>
		</main>
	    </>
	  );
	}



export default SignIn;