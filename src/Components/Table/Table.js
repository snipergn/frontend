import { useState, useEffect } from "react";
import './Table.css'
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const BasicTable = () => {
 const [userMap, setUserMap] = useState([]);
 const filter = userMap.filter((spot) => spot.name.length > 4);

useEffect(() => {
    fetch('https://6304d6b494b8c58fd7264985.mockapi.io/spot')
    .then(response => response.json())
    .then(spot => {setUserMap(spot);
    })
    }, [])



 return (
  <>
    <TableContainer className="tablezone" component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>name</TableCell>
              <TableCell align="right">country</TableCell>
              <TableCell align="right">latitude</TableCell>
              <TableCell align="right">longitude</TableCell>
              <TableCell align="right">probability</TableCell>
              <TableCell align="right">month</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="displaydata">
            {filter.map((spot) => (
              <TableRow 
                key={spot.id}
              >
                <TableCell component="th" scope="row">
                  {spot.name}
                </TableCell>
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
  </>
 );
};

export default BasicTable;
  