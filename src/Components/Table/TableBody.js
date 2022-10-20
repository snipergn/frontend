import React, { useState, useEffect } from 'react';

const TableBody = ({ columns }) => {
    const [userMap, setUserMap] = useState([]);

    useEffect(() => {
        fetch('https://6304d6b494b8c58fd7264985.mockapi.io/spot')
        .then(response => response.json())
        .then(spot => {setUserMap(spot);
        })
        }, [])
        
    return (
     <tbody>
      {userMap.map((spot, data) => {
       return (
        <tr key={spot.id}>
         {columns.map(({ accessor }) => {
          return <td key={accessor}>{spot.name}</td>;
         })}
        </tr>
       );
      })}
     </tbody>
    );
   };
   
   export default TableBody;