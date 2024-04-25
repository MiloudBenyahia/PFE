// Salle_TP.jsx
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

const Salle_TP = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div id="Salle_TP" className="movie">
      <div className="vertical-text  bg-blue-gradient movie-info flex justify-center">SALLE_TP :</div>
      <div className={`overview ${isExpanded ? 'expanded' : ''}`}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Localisation</TableCell>
                <TableCell align="right">ID</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.SALLES_TP.map((salle_tp, index) => (
                <TableRow key={index}>
                  <TableCell>{salle_tp.LOCALISATION}</TableCell>
                  <TableCell align="right">{salle_tp.ID_SALLE_TP}</TableCell>
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

export default Salle_TP;
