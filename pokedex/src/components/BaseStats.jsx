import React, { Component } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(hp, attack, defense, special_attack, special_defense,speed) {
  return { hp, attack, defense, special_attack, special_defense,speed};
}

const rows = [
  createData(159, 6.0, 24, 4.0,1,1,1),
  
];

export default function DenseTable(props) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Base Stats</TableCell>
            <TableCell align="right">hp</TableCell>
            <TableCell align="right">attack</TableCell>
            <TableCell align="right">defense</TableCell>
            <TableCell align="right">special-attack</TableCell>
            <TableCell align="right">special-defense</TableCell>
            <TableCell align="right">speed</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
    
              <TableCell align="right">{row.hp}</TableCell>
              <TableCell align="right">{row.attack}</TableCell>
              <TableCell align="right">{row.defense}</TableCell>
              <TableCell align="right">{row.special_attack}</TableCell>
              <TableCell align="right">{row.special_defense}</TableCell>
              <TableCell align="right">{row.speed}</TableCell>

            </TableRow>

            
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

