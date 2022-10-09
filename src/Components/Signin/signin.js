import './signin.css'
import React, { useState } from 'react';
import {useNavigate} from "react-router-dom"


const SignIn = () => { 		 
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const navigate = useNavigate();
	const handleSubmit = (event) => {
      event.preventDefault();
      console.log(`Submitting Email ${email} + password ${password}`)
  }


			return (
		  	<div>
					<main className="pa6 black-80">
					<div className="measure center" onChange={handleSubmit} >
				    	<fieldset id="sign_up" className="ba b--transparent ph2 mh0">
				      	<h1 className="f2 fw6 ph0 mh0">Sign In</h1>
			  				<div className="mt3">
			        				<label className="pa1 db fw6 lh-copy f6" htmlFor="email-address">Email</label>
			        				<input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-50" 
			        				type="email" 
			        				name="email-address"  
			        				id="email-address"
			        				onChange={event => setEmail(event.target.value)}
			        				/> 

			      			</div>
			      			<div className="mv3">
			        				<label className="pa1 db fw6 lh-copy f6" htmlFor="password">Password</label>
			        				<input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-50" 
			        				type="password" 
			        				name="current-password" 
			        				id="current-password"
			        				onChange={event => setPassword(event.target.value)}
			        				/>
			      			</div>
			    				</fieldset>
			   					<div className="">
			      					<input
										className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
		                type="submit"
		                value="Sign in"
		                onClick={() => navigate("/dashboard")}
			      					/>
			    				</div>
			    				<div className="lh-copy mt3">
			      					<p onClick={() => navigate("/register")}		
			      					className="f6 link dim black db">
			      					Register
			      					</p>
							</div>
			  		</div>
					</main>
		    </div>
		  );
		}
	


export default SignIn;