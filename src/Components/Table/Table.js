import React, { useState, useEffect } from "react";
import './Table.css';

const Table = () => {
 const [userMap, setUserMap] = useState([]);
 const [sortedField, setSortedField] = React.useState(null);

 let sortedProducts = [...userMap]
 if(sortedField !== null) {
    sortedField.sort((a,b) => {
        if (a[sortedField] < b[sortedField]) {
            return -1;
        }
        if(a[sortedField] > b[sortedField]) {
            return 1;
        }
      return 0;  
    })
 }

useEffect(() => {
    fetch('https://6304d6b494b8c58fd7264985.mockapi.io/spot')
    .then(response => response.json())
    .then(spot => {setUserMap(spot);
    })
    }, [])

 return (
  <>
   <table className="table">
      <thead>
        <tr className="container">
          <th onClick={() => setSortedField('name')}>Name</th>
          <th onClick={() => setSortedField('country')}>Country</th>
          <th onClick={() => setSortedField('lan')}>Latitude</th>
          <th onClick={() => setSortedField('long')}>Longitude</th>
          <th onClick={() => setSortedField('probability')}>probability</th>
          <th onClick={() => setSortedField('month')}>Month</th>
        </tr>
      </thead>
      <tbody className="items">
        {userMap.map(spot => (
          <tr key={spot.id}>
            <td>{spot.name}</td>
            <td>{spot.country}</td>
            <td>{spot.lat}</td>
            <td>{spot.long}</td>
            <td>{spot.probability}</td>
            <td>{spot.month}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
 );
};

export default Table;
  