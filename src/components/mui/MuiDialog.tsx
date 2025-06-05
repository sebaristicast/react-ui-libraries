import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Skeleton,
} from "@mui/material";
import { useState } from "react";

interface MuiDialogProps {
  isLoading?: boolean;
}

export const MuiDialog = ({ isLoading = false }: MuiDialogProps) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  if (isLoading) {
    return (
      <Skeleton variant="rounded" width={100} height={36} animation="wave" />
    );
  }

  return (
    <>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        sx={{
          minWidth: 100,
          height: 36,
        }}
      >
        Dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Dialog Title</DialogTitle>
        <DialogContent>Dialog Content Description</DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
