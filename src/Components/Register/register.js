import React from 'react'

class Register extends React.Component {
	constructor() {
		super()
		this.state = {
			email: '',
			password: '',
			name: '',
			phone: ''
		}
			this.OnEmailChange = this.OnEmailChange.bind(this);
		  this.OnPasswordChange = this.OnPasswordChange.bind(this);
		  this.OnNameChange = this.OnNameChange.bind(this);
		  this.OnPhoneChange = this.OnPhoneChange.bind(this);
		}

		OnEmailChange = (event) => {
			this.setState({email: event.target.value})
		}

		OnPasswordChange = (event) => {
			this.setState({password: event.target.value})
		}
		OnNameChange = (event) => {
			this.setState({name: event.target.value})
		}

		OnPhoneChange = (event) => {
			this.setState({phone: event.target.value})
		}

	
	render() {
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
        				onChange={this.OnEmailChange}
        				/> 

      			</div>
      			<div className="mv3">
        				<label className="pa1 db fw6 lh-copy f6" htmlFor="password">Password</label>
        				<input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-50" 
        				type="password" 
        				name="password" 
        				id="current-password"
        				onChange={this.OnPasswordChange}
        				/>
      			</div>
      			<div className="mv3">
        				<label className="pa1 db fw6 lh-copy f6" htmlFor="password">Name</label>
        				<input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-50" 
        				type="name" 
        				name="name" 
        				id="current-name"
        				onChange={this.OnNameChange}
        				/>
      			</div>

      			<div className="mv3">
        				<label className="pa1 db fw6 lh-copy f6" htmlFor="password">Phone Number</label>
        				<input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-50" 
        				type="phone" 
        				name="phone" 
        				id="current-phone"
        				onChange={this.OnPhoneChange}
        				/>
      			</div>


    				</fieldset>
   					<div className="">
      					<input
      					
      					className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
      					type="submit" 
      					value="Register"/>
    				</div>
    				<div className="lh-copy mt3">
      					<p
      					className="f6 link dim black db">
      					Login 
      					</p>
				</div>
  		</div>
		</main>
	    </>
	  );
	}
}


export default Register;