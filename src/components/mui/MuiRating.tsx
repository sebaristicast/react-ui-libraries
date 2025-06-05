import { Rating, Skeleton } from "@mui/material";

interface MuiRatingProps {
  isLoading?: boolean;
}

export const MuiRating = ({ isLoading = false }: MuiRatingProps) => {
  if (isLoading) {
    return (
      <Skeleton variant="rounded" width={160} height={24} animation="wave" />
    );
  }

  return <Rating defaultValue={3} />;
};
