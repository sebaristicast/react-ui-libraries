import { Button, Skeleton } from "@mui/material";

interface MuiButtonProps {
  isLoading?: boolean;
}

export const MuiButton = ({ isLoading = false }: MuiButtonProps) => {
  if (isLoading) {
    return (
      <Skeleton variant="rounded" width={90} height={36} animation="wave" />
    );
  }

  return <Button variant="contained">Button</Button>;
};
