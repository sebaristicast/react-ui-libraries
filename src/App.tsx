import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";
import { useState, useMemo } from "react";
import { getTheme } from "./theme/mui-theme";
import { MuiButton } from "./components/mui/MuiButton";
import { MuiTextField } from "./components/mui/MuiTextField";
import { MuiLoadingSpinner } from "./components/mui/MuiLoadingSpinner";
import { MuiDialog } from "./components/mui/MuiDialog";
import { MuiRating } from "./components/mui/MuiRating";
import { Header } from "./components/Header";
import { UILibraryCard } from "./components/UILibraryCard";
import { uiLibrariesData } from "./data/ui-libraries";
import { SEO } from "./components/SEO";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = useMemo(
    () => getTheme(isDarkMode ? "dark" : "light"),
    [isDarkMode]
  );

  const muiComponents = {
    Button: MuiButton,
    TextField: MuiTextField,
    LoadingSpinner: MuiLoadingSpinner,
    Dialog: MuiDialog,
    Rating: MuiRating,
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SEO />
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
        <Header
          isLoading={isLoading}
          isDarkMode={isDarkMode}
          onLoadingChange={setIsLoading}
          onDarkModeChange={() => setIsDarkMode(!isDarkMode)}
        />

        <Box
          sx={{
            width: "100%",
            maxWidth: "md",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 3,
          }}
        >
          <UILibraryCard
            libraryInfo={uiLibrariesData[0]}
            components={muiComponents}
            isLoading={isLoading}
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
