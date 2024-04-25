// Seance.jsx
import React, { useState } from "react";
/*import styles from "../style"; */
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { Rarrow } from "../assests/index.js";

const Seance = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="movie" id="Seance">
      <div className="vertical-text  bg-blue-gradient movie-info flex justify-center">SEANCE :</div>
      <div className={`overview ${isExpanded ? 'expanded' : ''}`}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">ID</TableCell>
                <TableCell align="right">Horaires</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.SEANCES.map((seance, index) => (
                <TableRow key={index}>
                  <TableCell align="right">{seance.ID_SEANCE}</TableCell>
                  <TableCell align="right">{seance.HORAIRE}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <img
        src={Rarrow}
        className={`arrow bg-blue-gradient ${isExpanded ? 'expanded' : ''}`}
        onClick={toggleExpanded}
        alt="Expand"
      />
    </div>
  );
}

export default Seance;
