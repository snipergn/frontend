import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import SortingCountry from './SortingCountry';

	const useStyles = makeStyles({
		table: {
			width: 1100,
			margin: "auto",
			padding: 100
		}
	});
	
const BasicTable = () => {
    const [userMap, setUserMap] = useState([]);
	const classes = useStyles();
	const filter = userMap.filter(spot => spot.name.length > 4)
	const { rowData} = SortingCountry()


    useEffect(() => {
		fetch('https://6304d6b494b8c58fd7264985.mockapi.io/spot')
		.then(response => response.json())
		.then(spot => {setUserMap(spot);
	})
	}, [])

    return (
        <TableContainer component={Paper}>
			<Table aria-label="simple table" className={classes.table}> 
				<TableHead>
				<TableRow>
					<TableCell align="center">Nr.crt</TableCell>
					<TableCell align="center">Name</TableCell>
					<SortingCountry/>
					<TableCell align="center">Latitude</TableCell>
					<TableCell align="center">Longitude</TableCell>
					<TableCell align="center">Wind probability</TableCell>
					<TableCell align="center">When to Go</TableCell>
				</TableRow>
				</TableHead>
				<TableBody rowData={rowData}>
				{rowData.map((spot) => (
					<TableRow key={spot.id}>
					<TableCell align="center">{spot.id}</TableCell>
					<TableCell align="center">{spot.name}</TableCell>
					<TableCell align="center">{spot.country}</TableCell>
					<TableCell align="center">{spot.lat}</TableCell>
					<TableCell align="center">{spot.long}</TableCell>
					<TableCell align="center">{spot.probability}</TableCell>
					<TableCell align="center">{spot.month}</TableCell>
					</TableRow>
				))}
				</TableBody>
			</Table>
		</TableContainer>
    );
  }
  export default BasicTable
  