import React from 'react'
import './navigation.css'
import {useNavigate} from "react-router-dom"

const Navigation = () => {
	const navigate = useNavigate();
	
	 return (
	  	<>
		<nav className="db dt-l w-100 border-box pa3 ph5-l">
		  <a className="db dtc-l v-mid mid-gray link dim w-100 w-30-l tc tl-l mb2 mb0-l" href="#6">
		    <img src="http://tachyons.io/img/logo.jpg" className="dib w2 h2 br-100" alt="Site Name"/>
		  </a>
		  <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
			<div className="dropdown">
			  <button className=" link dim dark-gray f6 f5-l dib dropbtn">Profile</button>
			  <div className="dropdown-content">
			    <p className="buttonup underline tj" href="#"
			    onClick={() => navigate("/")}
			    >	Logout
			    </p>	    
			  </div>
			</div>

		  </div>
		  
		</nav>
	    </>
	  );
	}


export default Navigation;