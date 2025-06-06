import { Rating, Skeleton } from "@mui/material";
import { useTranslation } from "react-i18next";

interface MuiRatingProps {
  isLoading?: boolean;
}

export const MuiRating = ({ isLoading = false }: MuiRatingProps) => {
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <Skeleton variant="rounded" width={160} height={24} animation="wave" />
    );
  }

  return <Rating defaultValue={3} aria-label={t("components.rating")} />;
};
