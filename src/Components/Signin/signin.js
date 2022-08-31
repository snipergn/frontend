import './signin.css'
import React from 'react'
import {useNavigate} from "react-router-dom";


const SignIn = ({handleChangeEmail, handleChangePassword, handleChangeElements}) => { 
	const navigate = useNavigate();
	 return (
	  	<>
		<main class="pa6 black-80">
		<div class="measure center" onSubmit={alert('it\'s work email')}>
	    	<fieldset id="sign_up" class="ba b--transparent ph2 mh0">
	      	<legend class="f2 fw6 ph0 mh0">Sign In</legend>
  				<div class="mt3">
        				<label class="pa1 db fw6 lh-copy f6" for="email-address">Email</label>
        				<input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-50" 
        				type="email" 
        				name="email-address"  
        				id="email-address"
        				onChange={handleChangeEmail}
        				/> 

      			</div>
      			<div class="mv3">
        				<label class="pa1 db fw6 lh-copy f6" for="password">Password</label>
        				<input class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-50" 
        				type="password" 
        				name="password" 
        				id="current-password"
        				onChange={handleChangePassword}
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