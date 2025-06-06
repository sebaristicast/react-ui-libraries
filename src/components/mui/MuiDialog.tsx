import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Skeleton,
} from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface MuiDialogProps {
  isLoading?: boolean;
}

export const MuiDialog = ({ isLoading = false }: MuiDialogProps) => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

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
        {t("components.dialog")}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{t("components.dialog")}</DialogTitle>
        <DialogContent>Dialog Content Description</DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
