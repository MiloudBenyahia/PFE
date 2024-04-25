// Course.jsx
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

const Course = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div id="Course" className="movie">
      <div className="vertical-text movie-info bg-blue-gradient flex justify-center">COURSE :</div>
      <div className={`overview ${isExpanded ? 'expanded' : ''}`}>  
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Course</TableCell>
                <TableCell align="right">ID</TableCell>
                <TableCell align="right">NºCO</TableCell>
                <TableCell align="right">NºTD</TableCell>
                <TableCell align="right">NºTP</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.COURSES.map((course, index) => (
                <TableRow key={index}>
                  <TableCell>{course.TITLE}</TableCell>
                  <TableCell align="right">{course.ID_COURSE}</TableCell>
                  <TableCell align="right">{course.NB_CO}</TableCell>
                  <TableCell align="right">{course.NB_TD}</TableCell>
                  <TableCell align="right">{course.NB_TP}</TableCell>
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

export default Course;
