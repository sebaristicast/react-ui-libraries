import { TextField, Skeleton } from "@mui/material";

interface MuiTextFieldProps {
  isLoading?: boolean;
}

export const MuiTextField = ({ isLoading = false }: MuiTextFieldProps) => {
  if (isLoading) {
    return <Skeleton variant="rectangular" height={56} />;
  }

  return <TextField label="Text Field" variant="outlined" />;
};
