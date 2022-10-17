import { useState } from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

const Table = () => {
 const [tableData, setTableData] = useState([]);

 const columns = [
  { label: "name", accessor: "name_location" },
  { label: "country", accessor: "country" },
  { label: "latitude", accessor: "lat" },
  { label: "longitude", accessor: "long" },
  { label: "probability", accessor: "probability" },
  { label: "month", accessor: "month" }
 ];

 return (
  <>
   <table className="table">
    <caption>
     Developers currently enrolled in this course, column headers are sortable.
    </caption>
    <TableHead columns={columns} />
    <TableBody columns={columns} tableData={tableData} />
   </table>
  </>
 );
};

export default Table;
  