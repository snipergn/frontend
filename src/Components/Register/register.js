import React from 'react'
import {useNavigate} from "react-router-dom";

const Register = ({handleChangeEmail, handleChangePassword, handleChangePhone, handleChangeName}) => {
	const navigate = useNavigate();
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
        				onChange={handleChangeEmail}
        				/> 

      			</div>
      			<div className="mv3">
        				<label className="pa1 db fw6 lh-copy f6" htmlFor="password">Password</label>
        				<input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-50" 
        				type="password" 
        				name="password" 
        				id="current-password"
        				onChange={handleChangePassword}
        				/>
      			</div>
      			<div className="mv3">
        				<label className="pa1 db fw6 lh-copy f6" htmlFor="password">Name</label>
        				<input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-50" 
        				type="name" 
        				name="name" 
        				id="current-name"
        				onChange={handleChangeName}
        				/>
      			</div>

      			<div className="mv3">
        				<label className="pa1 db fw6 lh-copy f6" htmlFor="password">Phone Number</label>
        				<input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-50" 
        				type="phone" 
        				name="phone" 
        				id="current-phone"
        				onChange={handleChangePhone}
        				/>
      			</div>


    				</fieldset>
   					<div className="">
      					<input
      					onClick={() => navigate('/navigation')} 
      					className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
      					type="submit" 
      					value="Register"/>
    				</div>
    				<div className="lh-copy mt3">
      					<p onClick={() => navigate('/')}
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