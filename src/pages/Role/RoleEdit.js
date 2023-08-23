import React from "react";
import RoleForm from "../../components/form/RoleForm";
import { useLocation } from "react-router-dom";

export default function RoleEdit() {
    let { state } = useLocation();
  return (
    <>
      <RoleForm isEdit={true} data={state} />
    </>
  );
}
