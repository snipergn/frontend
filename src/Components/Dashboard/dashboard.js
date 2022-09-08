import { MapContainer, TileLayer, Marker, Popup, Tooltip} from 'react-leaflet';
import './dashboard.css';
import React, { useState, useEffect } from 'react';
import IconMinus from '../Assets/minus-icon.svg';
import Star from '../Assets/star-on.png';


const Dashboard = () => {
	const [userMap, setUserMap] = useState([]);
	const [isOpen, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	const FilterMap = () => {
		userMap.forEach((spot) => {
			if(spot.id) {
				return true
			} else 
				return false
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
		  		 <Marker position={[spot.lat, spot.long]}>			  		
           		 <Tooltip><b>{spot.name} </b></Tooltip>
           		 <Popup className="popup">
				      	<h1 className="title">{spot.name}</h1> 
				      	<p className="country">{spot.country}</p>
				      	<hr/>
					      	<p className="para"><strong>LATITUDINE:</strong> <br/>{spot.lat}</p>   
					      	<p className="para"><strong>LONGITUDE:</strong> <br/>{spot.long}</p>      
					      	<p className="para"><strong>WHEN TO GO:</strong> <br/>{spot.month}</p>
						
						{ isOpen && FilterMap
				 	? <div  onClick={handleClose} className="buttonclose">REMOVE FROM FAVORITE</div>				 	
					: <div  onClick={handleOpen} className="button">ADD TO FAVORITE</div >
				     	}
				    </Popup>
         		 </Marker>		      
				)
			})
		}
		</MapContainer>
	  );

	}

export default Dashboard;