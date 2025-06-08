import {
  Card,
  CardContent,
  Divider,
  Box,
  Typography,
  Stack,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import DownloadIcon from "@mui/icons-material/Download";
import ExtensionIcon from "@mui/icons-material/Extension";
import type { UILibraryInfo, UILibraryComponents } from "../types/ui-library";

interface UILibraryCardProps {
  libraryInfo: UILibraryInfo;
  components: UILibraryComponents;
  isLoading: boolean;
}

const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M`;
  }
  if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}K`;
  }
  return num.toString();
};

const InfoItem = ({
  icon,
  value,
}: {
  icon: React.ReactNode;
  value: string;
}) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      gap: 1,
      bgcolor: "action.hover",
      px: 2,
      py: 1,
      borderRadius: 2,
      transition: "all 0.2s ease",
      "&:hover": {
        bgcolor: "action.selected",
        transform: "translateY(-2px)",
        "& .icon": {
          color: "primary.main",
          transform: "scale(1.1)",
        },
      },
    }}
  >
    <Box
      className="icon"
      sx={{
        color: "text.secondary",
        display: "flex",
        alignItems: "center",
        transition: "all 0.2s ease",
        "& > svg": {
          fontSize: "1.5rem",
        },
      }}
    >
      {icon}
    </Box>
    <Typography variant="body1" fontWeight="medium">
      {value}
    </Typography>
  </Box>
);

export const UILibraryCard = ({
  libraryInfo,
  components,
  isLoading,
}: UILibraryCardProps) => {
  const { Button, TextField, Dialog, Rating, Slider } = components;
  const { t } = useTranslation();

  return (
    <Card variant="outlined" sx={{ width: "100%" }}>
      <CardContent
        sx={{
          p: { xs: 1.5, sm: 2 },
          "&:last-child": { pb: { xs: 1.5, sm: 2 } },
        }}
      >
        <Stack spacing={{ xs: 1.5, sm: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box
              component="img"
              src={libraryInfo.logoUrl}
              alt={t(`libraries.${libraryInfo.name}.name`)}
              sx={{
                height: { xs: 24, sm: 32 },
                width: "auto",
                objectFit: "contain",
              }}
            />
            <Typography
              variant="subtitle1"
              fontWeight="medium"
              sx={{ fontSize: { xs: "1rem", sm: "1.125rem" } }}
            >
              {t(`libraries.${libraryInfo.name}.name`)}
            </Typography>
          </Box>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
              lineHeight: { xs: 1.4, sm: 1.5 },
            }}
          >
            {t(`libraries.${libraryInfo.name}.description`)}
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: { xs: 2, sm: 3 },
              justifyContent: "center",
            }}
          >
            <InfoItem
              icon={<DownloadIcon />}
              value={formatNumber(libraryInfo.metrics.downloads)}
            />
            <InfoItem
              icon={<ExtensionIcon />}
              value={libraryInfo.metrics.totalComponents.toString()}
            />
          </Box>
        </Stack>

        <Divider sx={{ my: { xs: 1.5, sm: 2 } }} />

        <Box
          sx={{
            display: "flex",
            gap: { xs: 1.5, sm: 3 },
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
          <Button isLoading={isLoading} />
          <TextField isLoading={isLoading} />
          <Slider isLoading={isLoading} />
          <Dialog isLoading={isLoading} />
          <Rating isLoading={isLoading} />
        </Box>
      </CardContent>
    </Card>
  );
};
