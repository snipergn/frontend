import { MapContainer, TileLayer, Marker, Popup, Tooltip} from 'react-leaflet';
import './dashboard.css';
import React, { useState, useEffect } from 'react';
import Star from '../Assets/star-on.png';
import L from 'leaflet';

const Dashboard = () => {
	const [userMap, setUserMap] = useState([]);
	const [button, setButton] = React.useState(true);
	const [seeButton, setSeeButton] = useState('ADD TO FAVORITE');


	const setButtonUp = () => {
			setButton(false);
			setSeeButton('REMOVE TO FAVORITE');
			
			
	};
	const setButtonDown = () => {
			setButton(true);
			setSeeButton('ADD TO FAVORITE');
	};
	
	const newButton = () => {
		Object.assign(userMap[1],  {button, seeButton});
	};

	newButton();

	console.log(userMap)
    //  Create the Icon
	const LeafIcon =L.Icon.extend({
		option: {}
	})
	
	  const blueIcon = new LeafIcon({
			iconUrl:
		"https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|abcdef&chf=a,s,ee00FFFF"
	  }),
		greenIcon = new LeafIcon({
			iconUrl:
        "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|2ecc71&chf=a,s,ee00FFFF"
		});
		
		//  Use the state hook:
	  const [icon, setIcon] = useState(blueIcon);
	
		// This function will change the state's icon:
	
	  const changeIconColor = (icon) => {
		if (icon.options.iconUrl === greenIcon.options.iconUrl) {
		  setIcon((current) => (current = blueIcon));
		} else {
		  setIcon((current) => (current = greenIcon));
		}
		};
		// #1 Create object for every button
		
		// #2 Display objects in return statement


	useEffect(() => {
		fetch('https://6304d6b494b8c58fd7264985.mockapi.io/spot')
		.then(response => response.json())
		.then(spot => {setUserMap(spot);
	})
	}, [])
	

	 return (
	  	<MapContainer center={[51.505, -0.09]}  zoom={4} scrollWheelZoom={false}>
		  <TileLayer
		    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
		  />
		  {
		  userMap.map((spot) => {
		  	return (	  		
		  		<div>
					<Marker className="marker"
					key={spot.id}
					position={[spot.lat, spot.long]}
					icon={icon}
					>
           		 	<Tooltip><b>{spot.name} </b></Tooltip>
	           		  	 <Popup className="popup" key={spot.id}>
					        { button 
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
						      	{ button 
									?	<div className="button" onClick={() => {
										
										setButtonUp();
										changeIconColor(icon);
										}}>
										{spot.seeButton}
						      		</div>
									:	<div className="buttonclose" onClick={() => {
										setButtonDown();
										changeIconColor(icon);
									}}>
										{spot.seeButton}
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