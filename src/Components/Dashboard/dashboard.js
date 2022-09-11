import { MapContainer, TileLayer, Marker, Popup, Tooltip} from 'react-leaflet';
import './dashboard.css';
import React, { useState, useEffect } from 'react';
import Star from '../Assets/star-on.png';


const Dashboard = () => {
	const [userMap, setUserMap] = useState([]);
	const [button, setButton] = React.useState(true);
	const [seeButton, setSeeButton] = useState('ADD TO FAVORITE')


	const setButtonUp = () => {
			setButton(false);
			setSeeButton('REMOVE TO FAVORITE');
		
	}
	const setButtonDown = () => {
			setButton(true);
			setSeeButton('ADD TO FAVORITE');
			}

	const SetVerify = () => {
		userMap.forEach((spot) => {
			if(spot.country.length > 3) {
				return setButtonUp && setButtonUp 
			} else {
				return 'error';
			}
		})
	}


useEffect(() => {
    fetch('https://6304d6b494b8c58fd7264985.mockapi.io/spot')
    .then(response => response.json())
    .then(spot => {setUserMap(spot);
  })
}, [])
	

	 return (
	  	<MapContainer center={[51.505, -0.09]} zoom={4} scrollWheelZoom={false}>
		  <TileLayer
		    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
		  />
		  {
		  userMap.map((spot) => {
		  	return (	  		
		  	<div> 
		  		  <Marker key={spot.id} position={[spot.lat, spot.long]}>
           		 <Tooltip><b>{spot.name} </b></Tooltip>       	
	           		  	 <Popup className="popup" key={spot.id}>
					        { button && SetVerify
					        ?  <h1 className="title">{spot.name}</h1>
					        : <h1 className="title">{spot.name}
							    <img className="icon" src={Star} width='20px' alt='Star Icon'/>
				        	</h1>
				        	} 
					     	<p className="country">{spot.country}</p>
					      	<hr/>
						      	<p className="para"><strong>LATITUDINE:</strong> <br/>{spot.lat}</p>   
						      	<p className="para"><strong>LONGITUDE:</strong> <br/>{spot.long}</p>      
						      	<p className="para"><strong>WHEN TO GO:</strong> <br/>{spot.month}</p>
						      	{ button  && SetVerify
						      	?	<div className="button" onClick={setButtonUp}>
						      		{seeButton}
						      		</div>
						      	:	<div className="buttonclose" onClick={setButtonDown}>	
									{seeButton}
									</div> }
					    </Popup>   
				    </Marker>
				    </div>
   
				)
			})
		}
		</MapContainer>
	  );

	}

export default Dashboard;