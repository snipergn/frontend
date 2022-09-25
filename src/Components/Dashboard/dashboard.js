import { MapContainer, TileLayer, Marker, Popup, Tooltip} from 'react-leaflet';
import './dashboard.css';
import React, { useState, useEffect } from 'react';
import Star from '../Assets/star-on.png';
import L, { map } from 'leaflet';
import BasicTable from './Table';


const Dashboard = () => {
	const [userMap, setUserMap] = useState([]);
	const [button, setButton] = React.useState(true);
	const [nameButton, setnameButton] = useState('ADD TO FAVORITE')
	const [isActive, setIsActive] = useState(false);
	const filter = userMap.filter(spot => spot.name.length > 4)


	const setButtonUp = () => {

		if(button) {
			setButton(false)
			setnameButton('REMOVE FROM FAVORITE')
			handleClick()
		} else {
			setButton(true);
			setnameButton('ADD TO FAVORITE')
			handleClick()
		}
	
	};

	const handleClick = event => {
		setIsActive(current => !current);
	  };
	
	   //  Create the Icon
	   const LeafIcon = L.Icon.extend({
		options: {}
	  });
	
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
	}

		// A popup when is clicked the button 'Add to favorite' -> change button, star, marker color 
		//  popup when is clicked the button 'Remove from favorite' -> Change button, star, marker color to default.

		//#1 Add a button, a star icon and marker color only for Popup with id, lat, long
		const ChangePopup = () => {	
				const spot = filter.map(spot);
				const map = L.map('map').setView([16.233131, -61.572646], 10);
				const marker = L.marker([spot.lat, spot.long]).addTo(map);
				marker.bindPopup(
					<div 
					onClick={ () => {
					setButtonUp()}}
					className={isActive ? 'buttonclose' : 'button'}>
					{nameButton}
					</div>)
			
			
		}
		//#2 When you click the button change state for button, marker and star.



	useEffect(() => {
		fetch('https://6304d6b494b8c58fd7264985.mockapi.io/spot')
		.then(response => response.json())
		.then(spot => {setUserMap(spot);
		})
	}, [])

 
	 return ( 	
	<div>
	<MapContainer center={[51.505, -0.09]}  zoom={4} scrollWheelZoom={false}>
		<TileLayer
		attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
		/>
		{ filter.map(spot => {
		return (
		<Marker className="marker"
				position={[spot.lat, spot.long]}
				key={spot.id}
				icon={icon}
				
				>
			<Tooltip><b>{spot.name}</b></Tooltip>
				<Popup className="popup" key={spot.id} >
				{ button   
					? <h1 className="title" >{spot.name}</h1>
					: <h1 className="title"  >{spot.name}
						<img className="icon" src={Star} width='20px' alt='Star Icon'/>
					</h1>
				} 
				<p className="country" >{spot.country}</p>
				<hr/>
					
					<p className="para"><strong>LATITUDINE:</strong> <br/>{spot.lat}</p>  
					<p className="para" ><strong>LONGITUDE:</strong> <br/>{spot.long}</p>         
					<p className="para" ><strong>WHEN TO GO:</strong> <br/>{spot.month}</p>
					<ChangePopup/>
				</Popup>   
			</Marker>
				)
			})	      
		}			
		</MapContainer>
		<BasicTable/>
		</div>
	  	)
	}

export default Dashboard;