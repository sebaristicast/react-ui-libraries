import { TextField, Skeleton } from "@mui/material";

interface MuiTextFieldProps {
  isLoading?: boolean;
}

export const MuiTextField = ({ isLoading = false }: MuiTextFieldProps) => {
  if (isLoading) {
    return (
      <Skeleton variant="rounded" width={180} height={56} animation="wave" />
    );
  }

  return (
    <TextField label="Text Field" variant="outlined" sx={{ width: 180 }} />
  );
};
