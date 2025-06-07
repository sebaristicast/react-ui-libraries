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
import { AntdButton } from "./components/antd/AntdButton";
import { AntdTextField } from "./components/antd/AntdTextField";
import { AntdDialog } from "./components/antd/AntdDialog";
import { AntdRating } from "./components/antd/AntdRating";
import { AntdSlider } from "./components/antd/AntdSlider";
import { ChakraButton } from "./components/chakra/ChakraButton";
import { ChakraTextField } from "./components/chakra/ChakraTextField";
import { ChakraDialog } from "./components/chakra/ChakraDialog";
import { ChakraRating } from "./components/chakra/ChakraRating";
import { ChakraSlider } from "./components/chakra/ChakraSlider";
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

  const antdComponents = {
    Button: AntdButton,
    TextField: AntdTextField,
    Dialog: AntdDialog,
    Rating: AntdRating,
    Slider: AntdSlider,
  };

  const chakraComponents = {
    Button: ChakraButton,
    TextField: ChakraTextField,
    Dialog: ChakraDialog,
    Rating: ChakraRating,
    Slider: ChakraSlider,
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
              <UILibraryCard
                libraryInfo={uiLibrariesData[0]}
                components={muiComponents}
                isLoading={isLoading}
              />
              <UILibraryCard
                libraryInfo={uiLibrariesData[1]}
                components={antdComponents}
                isLoading={isLoading}
              />
              <UILibraryCard
                libraryInfo={uiLibrariesData[2]}
                components={chakraComponents}
                isLoading={isLoading}
              />
            </Stack>
          </Container>
        </ChakraProvider>
      </ConfigProvider>
    </ThemeProvider>
  );
};

export default App;
