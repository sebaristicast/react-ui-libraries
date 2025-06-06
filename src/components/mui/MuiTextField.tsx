import { TextField, Skeleton } from "@mui/material";
import { useTranslation } from "react-i18next";

interface MuiTextFieldProps {
  isLoading?: boolean;
}

export const MuiTextField = ({ isLoading = false }: MuiTextFieldProps) => {
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <Skeleton variant="rounded" width={180} height={56} animation="wave" />
    );
  }

  return (
    <TextField
      label={t("components.textField")}
      variant="outlined"
      sx={{ width: 180 }}
    />
  );
};
