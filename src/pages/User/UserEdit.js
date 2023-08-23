import React from "react";
import UserForm from "../../components/form/UserForm";
import { Container } from "@mui/material";
import { useLocation } from "react-router-dom";
export default function UserEdit() {
  let { state } = useLocation();
  return (
    <>
      <Container fixed>
        <UserForm isEdit={true} data={state} />
      </Container>
    </>
  );
}
