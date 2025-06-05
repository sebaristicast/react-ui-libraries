import { Button, Skeleton } from "@mui/material";

interface MuiButtonProps {
  isLoading?: boolean;
}

export const MuiButton = ({ isLoading = false }: MuiButtonProps) => {
  if (isLoading) {
    return <Skeleton variant="rectangular" width={120} height={36} />;
  }

  return <Button variant="contained">Button</Button>;
};
