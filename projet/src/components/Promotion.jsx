import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { Rarrow } from "../assests/index.js";

const Promotion = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div id="Promotion" className="movie">
      <div className="vertical-text bg-blue-gradient movie-info flex justify-center">PROMOTION :</div>
      <div className={`overview ${isExpanded ? 'expanded' : ''}`}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Promotion</TableCell>
                <TableCell align="right">ID</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">NºSections</TableCell>
                <TableCell align="right">NºGroupes</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.PROMOTIONS.map((promotion, index) => (
                <TableRow key={index}>
                  <TableCell>{promotion.TITLE}</TableCell>
                  <TableCell align="right">{promotion.ID_PROMOTION}</TableCell>
                  <TableCell align="right">{promotion.COURSES.join(', ')}</TableCell>
                  <TableCell align="right">{promotion.NB_SECTIONS}</TableCell>
                  <TableCell align="right">{promotion.NB_GROUPES}</TableCell>
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

export default Promotion;
