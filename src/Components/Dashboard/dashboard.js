import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import "./dashboard.css";
import React, { useState, useEffect } from "react";
import Star from "../Assets/star-on.png";
import L, { popup } from "leaflet";
import BasicTable from "../Table/Table";
import Filter from '../FilterLoc/filter.js'


const Dashboard = () => {
  const [userMap, setUserMap] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const filter = userMap.filter((spot) => spot.name.length > 4);
  const [button, setButton] = useState(true);
  const [nameButton, setnameButton] = useState("ADD TO FAVORITE");

  const setButtonUp = () => {
    if (button) {
      setButton(false);
      setnameButton("REMOVE FROM FAVORITE");
    } else {
      setButton(true);
      setnameButton("ADD TO FAVORITE");
    }
  };

  const handleClick = (event) => {
    setIsActive((current) => !current);
  };

  //  Create the Icon
  const LeafIcon = L.Icon.extend({
    options: {},
  });

  const blueIcon = new LeafIcon({
      iconUrl:
        "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|abcdef&chf=a,s,ee00FFFF",
    }),
    greenIcon = new LeafIcon({
      iconUrl:
        "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|2ecc71&chf=a,s,ee00FFFF",
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
  useEffect(() => {
    fetch("https://6304d6b494b8c58fd7264985.mockapi.io/spot")
      .then((response) => response.json())
      .then((spot) => {
        setUserMap(spot);
      });
  }, []);


  return (
    <div>
     <Filter/>
      <MapContainer center={[51.505, -0.09]} zoom={4} scrollWheelZoom={false}>
      <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {filter.map((spot) => {
          return (
            
            <Marker
              className="marker"
              position={[spot.lat, spot.long]}
              key={spot.id}
              icon={icon}
            >
             
              <Tooltip>
                <b>{spot.name}</b>
              </Tooltip>
              <Popup className="popup" key={spot.id}>
              <h1 className="title">
                  {spot.name}
                    { isActive && <img
                      className="icon"
                      src={Star}
                      width="20px"
                      alt="Star Icon"
                    />}
                </h1>

                <p className="country">{spot.country}</p>
                <hr />
                <p className="para">
                  <strong>LATITUDINE:</strong> <br />
                  {spot.lat}
                </p>
                <p className="para">
                  <strong>LONGITUDE:</strong> <br />
                  {spot.long}
                </p>
                <p className="para">
                  <strong>WHEN TO GO:</strong> <br />
                  {spot.month}
                </p>
                <div
                  onClick={() => {
                    handleClick();
                    setButtonUp();
                    changeIconColor(icon);
                  }}
                  className={isActive ? "buttonclose" : "button"}
                >
                  {nameButton}
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
      <BasicTable />
      
    </div>
  );
};

export default Dashboard;
