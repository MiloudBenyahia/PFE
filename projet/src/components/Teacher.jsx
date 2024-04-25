import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { Rarrow } from "../assests/index.js";

const Teacher = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div id="Teacher" className="movie">
      <div className="vertical-text movie-info bg-blue-gradient flex justify-center">TEACHER :</div>
      <div className={`overview ${isExpanded ? 'expanded' : ''}`}>
        <TableContainer component={Paper} className="w-[90%]">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>FullName</TableCell>
                <TableCell align="right">ID</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Surname</TableCell>
                <TableCell align="right">Courses</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.TEACHERS.map((teacher, index) => (
                <TableRow key={index}>
                  <TableCell>{`${teacher.SURNAME}.${teacher.NAME}`}</TableCell>
                  <TableCell align="right">{teacher.ID_TEACHER}</TableCell>
                  <TableCell align="right">{teacher.NAME}</TableCell>
                  <TableCell align="right">{teacher.SURNAME}</TableCell>
                  <TableCell align="right">{teacher.COURSES.join(', ')}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <img
        src={Rarrow}
        className={`arrow  bg-blue-gradient ${isExpanded ? 'expanded' : ''}`}
        onClick={toggleExpanded}
        alt="Expand"
      />
    </div>
  );
}

export default Teacher;
