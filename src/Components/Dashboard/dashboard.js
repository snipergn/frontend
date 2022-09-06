import { MapContainer, TileLayer, Marker, Popup, Tooltip} from 'react-leaflet';
import './dashboard.css';
import React, { useState, useEffect } from 'react';

const Dashboard = () => {
	const [userMap, setUserMap] = useState([]);

useEffect(() => {
    fetch('https://6304d6b494b8c58fd7264985.mockapi.io/spot')
    .then(response => response.json())
    .then(spot => {setUserMap(spot);
  })
    //  setPostArray([{name: 'a'}, {name: 'b'},{name: 'c'}])
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
           		 <Tooltip><b>{spot.name}</b></Tooltip>
           		 <Popup>
				      	<h1 className="title">Wind Propability</h1>  
				      	<p>LATITUDINE:</p>   
				      	<p>LONGITUDE:</p>      
				      	<p>WHEN TO GO:</p>

				      <button className="button"> Add to favorite</button>
				    </Popup>
         		 </Marker>		      
				)
			})
		}
		</MapContainer>
	  );
	}


export default Dashboard;