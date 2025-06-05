import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {
  Box,
  Container,
  Switch,
  FormControlLabel,
  Card,
  CardContent,
  Divider,
  Stack,
  IconButton,
} from "@mui/material";
import { useState, useMemo } from "react";
import { getTheme } from "./theme/mui-theme";
import { MuiButton } from "./components/mui/MuiButton";
import { MuiTextField } from "./components/mui/MuiTextField";
import { MuiLoadingSpinner } from "./components/mui/MuiLoadingSpinner";
import { MuiDialog } from "./components/mui/MuiDialog";
import { MuiRating } from "./components/mui/MuiRating";
import { MuiLibraryInfo } from "./components/mui/MuiLibraryInfo";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = useMemo(
    () => getTheme(isDarkMode ? "dark" : "light"),
    [isDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          py: 3,
          position: "relative",
        }}
      >
        <Box sx={{ position: "absolute", top: 16, left: 16 }}>
          <FormControlLabel
            control={
              <Switch
                checked={isLoading}
                onChange={(e) => setIsLoading(e.target.checked)}
                name="loading"
                color="primary"
              />
            }
            label="Loading State"
          />
        </Box>

        <IconButton
          onClick={() => setIsDarkMode(!isDarkMode)}
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            bgcolor: theme.palette.action.selected,
            borderRadius: 2,
            p: 1,
            "&:hover": {
              bgcolor: theme.palette.action.focus,
            },
          }}
        >
          {isDarkMode ? (
            <LightModeIcon sx={{ fontSize: 24 }} />
          ) : (
            <DarkModeIcon sx={{ fontSize: 24 }} />
          )}
        </IconButton>

        <Box
          sx={{
            width: "100%",
            maxWidth: "md",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Card variant="outlined" sx={{ width: "100%" }}>
            <CardContent sx={{ p: 2, "&:last-child": { pb: 2 } }}>
              <MuiLibraryInfo />
              <Divider sx={{ my: 2 }} />
              <Box
                sx={{
                  display: "flex",
                  gap: { xs: 2, sm: 3 },
                  alignItems: "center",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  width: "100%",
                  "& > *": {
                    minWidth: { xs: "45%", sm: "auto" },
                    display: "flex",
                    justifyContent: "center",
                  },
                }}
              >
                <MuiButton isLoading={isLoading} />
                <MuiTextField isLoading={isLoading} />
                <MuiLoadingSpinner />
                <MuiDialog isLoading={isLoading} />
                <MuiRating isLoading={isLoading} />
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
