import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";
import { useState, useMemo } from "react";
import { getTheme } from "./theme/mui-theme";
import { MuiButton } from "./components/mui/MuiButton";
import { MuiTextField } from "./components/mui/MuiTextField";
import { MuiDialog } from "./components/mui/MuiDialog";
import { MuiRating } from "./components/mui/MuiRating";
import { MuiSlider } from "./components/mui/MuiSlider";
import { Header } from "./components/Header";
import { UILibraryCard } from "./components/UILibraryCard";
import { uiLibrariesData } from "./data/ui-libraries";
import { SEO } from "./components/SEO";
import { useTranslation } from "react-i18next";

const muiLibrary = {
  name: "mui",
  description: "libraries.mui.description",
  metrics: {
    downloads: 2200000,
    totalComponents: 128,
  },
};

export const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { i18n } = useTranslation();

  const theme = useMemo(
    () => getTheme(isDarkMode ? "dark" : "light"),
    [isDarkMode]
  );

  const muiComponents = {
    Button: MuiButton,
    TextField: MuiTextField,
    Dialog: MuiDialog,
    Rating: MuiRating,
    Slider: MuiSlider,
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
          isDarkMode={isDarkMode}
          isLoading={isLoading}
          onDarkModeChange={() => setIsDarkMode(!isDarkMode)}
          onLoadingChange={setIsLoading}
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
            libraryInfo={muiLibrary}
            components={muiComponents}
            isLoading={isLoading}
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
