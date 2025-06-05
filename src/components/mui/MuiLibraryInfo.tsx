import { Box, Typography, Stack } from "@mui/material";

export const MuiLibraryInfo = () => {
  return (
    <Stack spacing={1}>
      <Typography variant="subtitle1" fontWeight="medium">
        Material UI (MUI)
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ fontSize: "0.875rem" }}
      >
        Biblioteca React que implementa Material Design. Ideal para proyectos
        empresariales.
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 3,
          fontSize: "0.875rem",
        }}
      >
        <InfoItem label="Descargas" value="85.2M total" />
        <InfoItem label="Componentes" value="128" />
      </Box>
    </Stack>
  );
};

const InfoItem = ({ label, value }: { label: string; value: string }) => (
  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
    <Typography variant="caption" color="text.secondary">
      {label}:
    </Typography>
    <Typography variant="caption">{value}</Typography>
  </Box>
);
