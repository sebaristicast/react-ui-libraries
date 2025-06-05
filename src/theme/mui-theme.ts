import { createTheme } from '@mui/material';
import type { PaletteMode } from '@mui/material';

export const getTheme = (mode: PaletteMode) => createTheme({
  palette: {
    mode,
  },
}); 