import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

export default function DialogBox({ open, handleClose, handleSubmit }) {
  return (
    <Dialog
      open={open.state}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        Are you sure you want to delete this record?
      </DialogTitle>

      <DialogActions>
        <Button onClick={handleClose} autoFocus>
          No
        </Button>
        <Button onClick={handleSubmit} autoFocus>
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
}
