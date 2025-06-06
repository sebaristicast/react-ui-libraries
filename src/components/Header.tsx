import { Box, Typography, IconButton, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import ViewStreamIcon from "@mui/icons-material/ViewStream";
import { LanguageSelector } from "./LanguageSelector";

interface HeaderProps {
  isLoading: boolean;
  isDarkMode: boolean;
  onLoadingChange: (checked: boolean) => void;
  onDarkModeChange: () => void;
}

export const Header = ({
  isLoading,
  isDarkMode,
  onLoadingChange,
  onDarkModeChange,
}: HeaderProps) => {
  const theme = useTheme();
  const { t } = useTranslation();

  const buttonStyle = {
    bgcolor: theme.palette.action.selected,
    borderRadius: 2,
    p: 1,
    "&:hover": {
      bgcolor: theme.palette.action.focus,
    },
  };

  return (
    <Box
      sx={{
        position: "absolute",
        top: 16,
        left: 0,
        right: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: 2,
        gap: 2,
      }}
    >
      <Box sx={{ display: "flex", gap: 1 }}>
        <IconButton
          onClick={() => onLoadingChange(!isLoading)}
          sx={{
            ...buttonStyle,
            color: isLoading ? theme.palette.primary.main : "text.primary",
          }}
        >
          <ViewStreamIcon sx={{ fontSize: 24 }} />
        </IconButton>
        <LanguageSelector />
      </Box>

      <Typography
        variant="h5"
        component="h1"
        sx={{
          fontWeight: "bold",
          color: "text.primary",
        }}
      >
        {t("header.title")}
      </Typography>

      <IconButton onClick={onDarkModeChange} sx={buttonStyle}>
        {isDarkMode ? (
          <LightModeIcon sx={{ fontSize: 24 }} />
        ) : (
          <DarkModeIcon sx={{ fontSize: 24 }} />
        )}
      </IconButton>
    </Box>
  );
};
