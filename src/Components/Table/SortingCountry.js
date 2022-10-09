import  {useState, useEffect} from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from "@material-ui/core/TableSortLabel";
import { useBetween } from 'use-between';

function SortingCountry() {
  const [userMap, setUserMap] = useState([]);
  const filter = userMap.filter(spot => spot.name.length > 4)
  const [orderDirection, setOrderDirection] = useState("asc");
  const [rowData, setRowData] = useState(filter);

  useEffect(() => {
	fetch('https://6304d6b494b8c58fd7264985.mockapi.io/spot')
	.then(response => response.json())
	.then(spot => {setUserMap(spot);
	})
	}, [])

	const sortArray = (arr, orderBy) => {
		switch (orderBy) {
		  case "asc":
		  default:
			return arr.sort((spot) =>
			  spot.country > spot.name ? 1 : spot.name > spot.country ? -1 : 0
			);
		  case "desc":
			return arr.sort((spot) =>
			spot.country < spot.name ? 1 : spot.name < spot.country ? -1 : 0
			);
		  }
	  };
	  const handleSortRequest = () => {
		setRowData(sortArray(filter, orderDirection));
		setOrderDirection(orderDirection === "asc" ? "desc" : "asc");
	  };

    return (
      <TableCell align="center" onClick={handleSortRequest}>
      <TableSortLabel active={true} direction={orderDirection}>
		Country
     </TableSortLabel> 
	</TableCell>
    )
}

export default SortingCountry = () => useBetween(SortingCountry);