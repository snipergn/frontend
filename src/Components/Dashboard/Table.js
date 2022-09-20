import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default function BasicTable() {
    const [userMap, setUserMap] = useState([]);
    const filter = userMap.filter(spot => spot.name.length> 4)

    useEffect(() => {
		fetch('https://6304d6b494b8c58fd7264985.mockapi.io/spot')
		.then(response => response.json())
		.then(spot => {setUserMap(spot);
	
	})
	}, [])

    return (
        <TableContainer component={Paper}>
			<Table className='table' aria-label="simple table">  
				<TableHead>
				<TableRow>
					<TableCell align="right">Name</TableCell>
					<TableCell align="right">Country</TableCell>
					<TableCell align="right">Latitude</TableCell>
					<TableCell align="right">Longitude</TableCell>
					<TableCell align="right">Wind Prob</TableCell>
					<TableCell align="right">When to Go</TableCell>
				</TableRow>
				</TableHead>
				<TableBody>
				{filter.map((spot) => (
					<TableRow key={spot.id}>
					<TableCell align="right">{spot.name}</TableCell>
					<TableCell align="right">{spot.country}</TableCell>
					<TableCell align="right">{spot.lat}</TableCell>
					<TableCell align="right">{spot.long}</TableCell>
					<TableCell align="right">{spot.probability}</TableCell>
					<TableCell align="right">{spot.month}</TableCell>
					</TableRow>
				))}
				</TableBody>
			</Table>
		</TableContainer>
    );
  }
  