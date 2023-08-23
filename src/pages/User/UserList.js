import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button, Container, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DialogBox from "../../components/dialog/Dialog";
import { deleteUser } from "../../Redux/slices/userSlice";

export default function UserList() {
  const dispatch = useDispatch();
  const header = [
    "Name",
    "Email",
    "Username",
    "Mobile",
    "Role",
    "password",
    "Action",
  ];
  const [open, setOpen] = useState({
    state: false,
    id: null,
  });
  const { userData } = useSelector((state) => state.user);
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    dispatch(deleteUser({ id: open.id }));
    setOpen(false);
  };
  return (
    <>
      <Typography variant="h5" gutterBottom sx={{ textAlign: "center", m: 1 }}>
        Users list
      </Typography>

      <TableContainer
        sx={{ minWidth: 650 }}
        aria-label="simple table"
        style={{width: "fit-content", margin: "auto" }}
      >
        <Link to="add-user">
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
            {userData?.length ? (
              userData.map((row) => (
                <TableRow
                  key={row.roleKey}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.email}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.username}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.mobile}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.roleKey}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.password}
                  </TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={2}>
                      <Link
                        to="edit-user"
                        state={{
                          id: row.id,
                          name: row.name,
                          email: row.email,
                          username: row.username,
                          mobile: row.mobile,
                          roleKey: row.roleKey,
                          password: "",
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
