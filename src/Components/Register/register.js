import {useNavigate} from "react-router-dom"
import React, { useState } from 'react';


const Register = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const navigate = useNavigate()



	 return (
	  	<>
		<main className="pa6 black-80">
		<div className="measure center"  >
	    	<fieldset id="sign_up" className="ba b--transparent ph2 mh0">
	      	<legend className="f2 fw6 ph0 mh0">Register</legend>
  				<div className="mt3">
        				<label className="pa1 db fw6 lh-copy f6" htmlFor="email-address">Email</label>
        				<input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-50" 
        				type="email" 
        				name="email-address"  
        				id="email-address"
        				onChange={event => setEmail(event.target.value)}
        				/> 

      			</div>
      			<div className="mt3">
        				<label className="pa1 db fw6 lh-copy f6" htmlFor="password">Password</label>
        				<input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-50" 
        				type="password" 
        				name="password" 
        				id="current-password"
        				onChange={event => setPassword(event.target.value)}
        				/>
      			</div>
      			<div className="mt3">
        				<label className="pa1 db fw6 lh-copy f6" htmlFor="password">Name</label>
        				<input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-50" 
        				type="name" 
        				name="name" 
        				id="current-name"
        				onChange={event => setName(event.target.value)}
        				/>
      			</div>

      			<div className="mt3">
        				<label className="pa1 db fw6 lh-copy f6" htmlFor="password">Phone Number</label>
        				<input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-50" 
        				type="phone" 
        				name="phone" 
        				id="current-phone"
        				onChange={event => setPhone(event.target.value)}
        				/>
      			</div>


    				</fieldset>
   					<div className="mv3">
      					<input		
      					className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
      					type="submit" 
      					value="Register"
      					onClick={() => navigate("/dashboard")}
      					/>

    				</div>
    				<div className="lh-copy mt3">
      					<p onClick={() => navigate("/")}
      					className="f6 link dim black db">
      					Login 
      					</p>
				</div>
  		</div>
		</main>
	    </>
	  );
	}


export default Register;