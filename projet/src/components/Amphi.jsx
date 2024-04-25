// Amphi.jsx
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

const Amphi = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div id="Amphi" className="movie">
      <div className="vertical-text movie-info bg-blue-gradient flex justify-center">AMPHI :</div>
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
              {data.AMPHIS.map((amphi, index) => (
                <TableRow key={index}>
                  <TableCell>{amphi.LOCALISATION}</TableCell>
                  <TableCell align="right">{amphi.ID_AMPHI}</TableCell>
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

export default Amphi;
