import { useState } from "react";
import {
  Container,
  CssBaseline,
  ThemeProvider,
  Stack,
  Box,
  ToggleButtonGroup,
  ToggleButton,
  Typography,
} from "@mui/material";
import { ConfigProvider, theme as antdTheme } from "antd";
import { ChakraProvider, Theme, defaultSystem } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import ExtensionIcon from "@mui/icons-material/Extension";
import DownloadIcon from "@mui/icons-material/Download";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
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
import type { UILibraryInfo, UILibraryComponents } from "./types/ui-library";
import "./i18n/config";

type SortCriteria = "name" | "downloads" | "components";
type SortOrder = "asc" | "desc";

export const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [sortCriteria, setSortCriteria] = useState<SortCriteria>("downloads");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const { t } = useTranslation();

  const muiTheme = getTheme(isDarkMode ? "dark" : "light");
  const { defaultAlgorithm, darkAlgorithm } = antdTheme;

  const libraryComponents = {
    mui: {
      Button: MuiButton,
      TextField: MuiTextField,
      Dialog: MuiDialog,
      Rating: MuiRating,
      Slider: MuiSlider,
    },
    antd: {
      Button: AntdButton,
      TextField: AntdTextField,
      Dialog: AntdDialog,
      Rating: AntdRating,
      Slider: AntdSlider,
    },
    chakra: {
      Button: ChakraButton,
      TextField: ChakraTextField,
      Dialog: ChakraDialog,
      Rating: ChakraRating,
      Slider: ChakraSlider,
    },
  };

  const getLibraryComponents = (libraryName: string): UILibraryComponents => {
    switch (libraryName.toLowerCase()) {
      case "mui":
        return libraryComponents.mui;
      case "antd":
        return libraryComponents.antd;
      case "chakra":
        return libraryComponents.chakra;
      default:
        return libraryComponents.mui; // Default to MUI components
    }
  };

  const handleSortCriteriaChange = (
    _: React.MouseEvent<HTMLElement>,
    newCriteria: SortCriteria | null
  ) => {
    if (newCriteria) {
      setSortCriteria(newCriteria);
    }
  };

  const handleSortOrderChange = () => {
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  const sortedLibraries = [...uiLibrariesData].sort((a, b) => {
    let comparison = 0;
    switch (sortCriteria) {
      case "name":
        comparison = t(`libraries.${a.name}.name`).localeCompare(
          t(`libraries.${b.name}.name`)
        );
        break;
      case "downloads":
        comparison = a.metrics.downloads - b.metrics.downloads;
        break;
      case "components":
        comparison = a.metrics.totalComponents - b.metrics.totalComponents;
        break;
    }
    return sortOrder === "asc" ? comparison : -comparison;
  });

  return (
    <ThemeProvider theme={muiTheme}>
      <ConfigProvider
        theme={{
          algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
          token: {
            colorPrimary: "#1890ff",
            borderRadius: 6,
          },
        }}
      >
        <ChakraProvider value={defaultSystem}>
          <Theme appearance={isDarkMode ? "dark" : "light"}>
            <CssBaseline />
            <Container
              maxWidth="lg"
              sx={{
                py: 8,
                position: "relative",
                mt: { xs: 6, sm: 8 },
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
                  display: "flex",
                  gap: 2,
                  alignItems: "center",
                  mb: 3,
                  flexWrap: "wrap",
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  {t("sort.orderBy")}:
                </Typography>
                <ToggleButtonGroup
                  value={sortCriteria}
                  exclusive
                  onChange={handleSortCriteriaChange}
                  aria-label="sort criteria"
                  size="small"
                >
                  <ToggleButton
                    value="downloads"
                    aria-label="sort by downloads"
                  >
                    <DownloadIcon fontSize="small" sx={{ mr: 0.5 }} />
                    {t("sort.downloads")}
                  </ToggleButton>
                  <ToggleButton
                    value="components"
                    aria-label="sort by components"
                  >
                    <ExtensionIcon fontSize="small" sx={{ mr: 0.5 }} />
                    {t("sort.components")}
                  </ToggleButton>
                  <ToggleButton value="name" aria-label="sort by name">
                    <SortByAlphaIcon fontSize="small" sx={{ mr: 0.5 }} />
                    {t("sort.name")}
                  </ToggleButton>
                </ToggleButtonGroup>

                <ToggleButton
                  value={sortOrder}
                  selected={sortOrder === "desc"}
                  onChange={handleSortOrderChange}
                  aria-label="sort order"
                  size="small"
                >
                  {sortOrder === "desc" ? (
                    <TrendingDownIcon fontSize="small" />
                  ) : (
                    <TrendingUpIcon fontSize="small" />
                  )}
                </ToggleButton>
              </Box>

              <Stack spacing={4}>
                {sortedLibraries.map((libraryInfo: UILibraryInfo) => (
                  <UILibraryCard
                    key={libraryInfo.name}
                    libraryInfo={libraryInfo}
                    components={getLibraryComponents(libraryInfo.name)}
                    isLoading={isLoading}
                  />
                ))}
              </Stack>
            </Container>
          </Theme>
        </ChakraProvider>
      </ConfigProvider>
    </ThemeProvider>
  );
};

export default App;
