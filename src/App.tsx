import { useState } from "react";
import { Container, CssBaseline, ThemeProvider, Stack } from "@mui/material";
import { ConfigProvider, theme as antdTheme } from "antd";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { MuiButton } from "./components/mui/MuiButton";
import { MuiTextField } from "./components/mui/MuiTextField";
import { MuiDialog } from "./components/mui/MuiDialog";
import { MuiRating } from "./components/mui/MuiRating";
import { MuiSlider } from "./components/mui/MuiSlider";
import { UILibraryCard } from "./components/UILibraryCard";
import { Header } from "./components/Header";
import { getTheme } from "./theme/mui-theme";
import { uiLibrariesData } from "./data/ui-libraries";
import "./i18n/config";

export const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { i18n } = useTranslation();

  const muiTheme = getTheme(isDarkMode ? "dark" : "light");
  const { defaultAlgorithm, darkAlgorithm } = antdTheme;

  const muiComponents = {
    Button: MuiButton,
    TextField: MuiTextField,
    Dialog: MuiDialog,
    Rating: MuiRating,
    Slider: MuiSlider,
  };

  return (
    <ThemeProvider theme={muiTheme}>
      <ConfigProvider
        theme={{
          algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
        }}
      >
        <ChakraProvider value={defaultSystem}>
          <CssBaseline />
          <Container maxWidth="lg" sx={{ py: 8, position: "relative" }}>
            <Header
              isDarkMode={isDarkMode}
              isLoading={isLoading}
              onDarkModeChange={() => setIsDarkMode(!isDarkMode)}
              onLoadingChange={setIsLoading}
            />
            <Stack spacing={4}>
              {uiLibrariesData.map((libraryInfo, index) => (
                <UILibraryCard
                  key={libraryInfo.name}
                  libraryInfo={libraryInfo}
                  components={muiComponents}
                  isLoading={isLoading}
                />
              ))}
            </Stack>
          </Container>
        </ChakraProvider>
      </ConfigProvider>
    </ThemeProvider>
  );
};

export default App;
