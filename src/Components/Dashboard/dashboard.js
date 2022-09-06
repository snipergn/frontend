import { MapContainer, TileLayer, Marker, Popup, Tooltip} from 'react-leaflet';
import './dashboard.css';
import React, { useState, useEffect } from 'react';

const Dashboard = () => {
	const [userMap, setUserMap] = useState([]);

	useEffect(() => {
		fetch('https://6304d6b494b8c58fd7264985.mockapi.io/spot')
		.then(response => response.json())
		.then(spot => {setUserMap(userMap)})
		.catch(err => console.log(err))
	})

	 return (
	  	<MapContainer center={[51.505, -0.09]} zoom={12} scrollWheelZoom={false}>
		  <TileLayer
		    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
		  />
		  {
		  userMap.map((spot) => {
		  	return (
		  		 <Marker position={[spot.lat, spot.lng]}>
			  		 <Popup>
				      A pretty CSS3 popup. <br /> Easily customizable.
				      <br/>
				      <button> Add to favorite</button>
				    </Popup>
           		 <Tooltip><b>{spot.location}</b></Tooltip>
         		 </Marker>		      
				)
			})
		}
		</MapContainer>
	  );
	}


export default Dashboard;