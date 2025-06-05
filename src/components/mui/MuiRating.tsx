import { Rating, Skeleton } from "@mui/material";

interface MuiRatingProps {
  isLoading?: boolean;
}

export const MuiRating = ({ isLoading = false }: MuiRatingProps) => {
  if (isLoading) {
    return <Skeleton variant="rectangular" width={200} height={28} />;
  }

  return <Rating defaultValue={3} />;
};
