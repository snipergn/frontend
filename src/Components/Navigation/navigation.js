import React from 'react'
import './navigation.css'

const Navigation = ({OnRouteChange} ) => {
	 return (
	  	<>
		<nav class="db dt-l w-100 border-box pa3 ph5-l">
		  <a class="db dtc-l v-mid mid-gray link dim w-100 w-30-l tc tl-l mb2 mb0-l" href="#6">
		    <img src="http://tachyons.io/img/logo.jpg" class="dib w2 h2 br-100" alt="Site Name"/>
		  </a>
		  <div class="db dtc-l v-mid w-100 w-75-l tc tr-l">
			<div class="dropdown">
			  <button class=" link dim dark-gray f6 f5-l dib dropbtn">Profile</button>
			  <div class="dropdown-content">
			    <p class="button underline tj" href="#"
			    onClick={() => OnRouteChange('signin')}
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