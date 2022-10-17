import React, { useState, useEffect } from 'react';


const TableHead = () => {
    const [userMap, setUserMap] = useState([]);
    useEffect(() => {
		fetch('https://6304d6b494b8c58fd7264985.mockapi.io/spot')
		.then(response => response.json())
		.then(spot => {setUserMap(spot);
		})
	}, [])

    return (
     <thead>
      <tr>
       {userMap.map((spot) => {
        return <th key={spot.id}>{spot.name}</th>;
       })}
      </tr>
     </thead>
    );
   };
   
export default TableHead;