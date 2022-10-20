import { useState, useEffect } from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

const Table = () => {
 const [userMap, setUserMap] = useState([]);

 const columns = [
  { label: "name", accessor: "name_location" },
  { label: "country", accessor: "country" },
  { label: "latitude", accessor: "lat" },
  { label: "longitude", accessor: "long" },
  { label: "probability", accessor: "probability" },
  { label: "month", accessor: "month" }
 ];
useEffect(() => {
    fetch('https://6304d6b494b8c58fd7264985.mockapi.io/spot')
    .then(response => response.json())
    .then(spot => {setUserMap(spot);
    })
    }, [])

 return (
  <>
   <table className="table">
    <caption>
     Developers currently enrolled in this course, column headers are sortable.
    </caption>
    <TableHead columns={columns} />
    <TableBody columns={columns} userMap={userMap}/>
   </table>
  </>
 );
};

export default Table;
  