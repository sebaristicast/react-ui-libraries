import { Button, Skeleton } from "@mui/material";
import { useTranslation } from "react-i18next";

interface MuiButtonProps {
  isLoading?: boolean;
}

export const MuiButton = ({ isLoading = false }: MuiButtonProps) => {
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <Skeleton variant="rounded" width={90} height={36} animation="wave" />
    );
  }

  return <Button variant="contained">{t("components.button")}</Button>;
};
