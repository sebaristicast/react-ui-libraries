import {
  Card,
  CardContent,
  Divider,
  Box,
  Typography,
  Stack,
} from "@mui/material";
import { useTranslation } from "react-i18next";
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

const InfoItem = ({ label, value }: { label: string; value: string }) => (
  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
    <Typography variant="caption" color="text.secondary">
      {label}:
    </Typography>
    <Typography variant="caption">{value}</Typography>
  </Box>
);

export const UILibraryCard = ({
  libraryInfo,
  components,
  isLoading,
}: UILibraryCardProps) => {
  const { Button, TextField, LoadingSpinner, Dialog, Rating } = components;
  const { t } = useTranslation();

  return (
    <Card variant="outlined" sx={{ width: "100%" }}>
      <CardContent sx={{ p: 2, "&:last-child": { pb: 2 } }}>
        <Stack spacing={1}>
          <Typography variant="subtitle1" fontWeight="medium">
            {t(`libraries.${libraryInfo.name}.name`)}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontSize: "0.875rem" }}
          >
            {t(libraryInfo.description)}
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 3,
              fontSize: "0.875rem",
            }}
          >
            <InfoItem
              label={t("metrics.downloads")}
              value={formatNumber(libraryInfo.metrics.downloads)}
            />
            <InfoItem
              label={t("metrics.components")}
              value={libraryInfo.metrics.totalComponents.toString()}
            />
          </Box>
        </Stack>

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
          <Button isLoading={isLoading} />
          <TextField isLoading={isLoading} />
          <LoadingSpinner />
          <Dialog isLoading={isLoading} />
          <Rating isLoading={isLoading} />
        </Box>
      </CardContent>
    </Card>
  );
};
