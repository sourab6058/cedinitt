import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function SideMiniNav({ rows }) {
  const [active, setActive] = useState(rows[0].name);
  return (
    <TableContainer
      component={Paper}
      style={{
        maxWidth: "max-content",
        maxHeight: "max-content",
      }}
    >
      <Table aria-label="caption table">
        <TableBody>
          {rows.map((row) =>
            row.name === active ? (
              <TableRow key={row.name}>
                <Link to={row.link}>
                  <TableCell
                    component="th"
                    scope="row"
                    className="border-l-4 border-blue-600"
                  >
                    <span>{row.name}</span>
                  </TableCell>
                </Link>
              </TableRow>
            ) : (
              <TableRow key={row.name} onClick={() => setActive(row.name)}>
                <Link to={row.link}>
                  <TableCell
                    component="th"
                    scope="row"
                    className="border-white border-l-4"
                  >
                    <span>{row.name}</span>
                  </TableCell>
                </Link>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
