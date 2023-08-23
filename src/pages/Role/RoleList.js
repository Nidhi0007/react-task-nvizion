import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Container, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteRole } from "../../Redux/slices/roleSlice";
import DialogBox from "../../components/dialog/Dialog";

export default function RoleList() {
  const dispatch = useDispatch();
  const header = ["Role Name", "Role Key", "Actions"];
  const [open, setOpen] = useState({
    state: false,
    id: null,
  });
  const { roleData } = useSelector((state) => state.role);
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    dispatch(deleteRole({ id: open.id }));
    setOpen(false);
  };
  return (
    <>
      <Typography variant="h5" gutterBottom sx={{ textAlign: "center", m: 1 }}>
        Role list
      </Typography>
      <TableContainer
        sx={{ minWidth: 60 }}
        style={{ width: "fit-content", margin: "auto" }}
        aria-label="simple table"
        component={Paper}
      >
        <Link to="add-role">
          <Button variant="contained">Add</Button>
        </Link>
        <Table>
          <TableHead>
            <TableRow>
              {header.map((item) => {
                return <TableCell>{item}</TableCell>;
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {roleData?.length ? (
              roleData.map((row) => (
                <TableRow
                  key={row.roleKey}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.roleLabel}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.roleKey}
                  </TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={2}>
                      <Link
                        to="edit-role"
                        state={{
                          id: row.id,
                          roleLabel: row.roleLabel,
                          roleKey: row.roleKey,
                        }}
                      >
                        {" "}
                        <Button variant="contained">Edit</Button>
                      </Link>

                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => setOpen({ state: true, id: row.id })}
                      >
                        Delete
                      </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableCell colSpan={header.length} align="center">
              <Container
                style={{
                  height: 200,
                  display: "flex",              // Use flexbox for centering
                  alignItems: "center",        // Center vertically
                  justifyContent: "center",    // Center horizontally
                }}
                aria-label="simple table"
            
              >
                No Data
              </Container>
            </TableCell>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {open && (
        <DialogBox
          open={open}
          handleClose={handleClose}
          handleSubmit={handleSubmit}
        />
      )}
    </>
  );
}
