import { Box, Slider } from "@mui/material";

interface MuiSliderProps {
  isLoading?: boolean;
}

export const MuiSlider = ({ isLoading = false }: MuiSliderProps) => {
  return (
    <Box sx={{ width: { xs: 100, sm: 150 } }}>
      <Slider
        defaultValue={50}
        size="small"
        aria-label="Example slider"
        sx={{
          opacity: isLoading ? 0.3 : 1,
          transition: "opacity 0.2s",
        }}
      />
    </Box>
  );
};
