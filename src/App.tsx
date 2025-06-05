import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Container, Switch, FormControlLabel } from "@mui/material";
import { useState } from "react";
import { theme } from "./theme/mui-theme";
import { MuiButton } from "./components/mui/MuiButton";
import { MuiTextField } from "./components/mui/MuiTextField";
import { MuiLoadingSpinner } from "./components/mui/MuiLoadingSpinner";
import { MuiDialog } from "./components/mui/MuiDialog";
import { MuiRating } from "./components/mui/MuiRating";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ py: 4 }}>
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

          <Box sx={{ display: "flex", flexDirection: "column", gap: 4, mt: 4 }}>
            <MuiButton isLoading={isLoading} />
            <MuiTextField isLoading={isLoading} />
            <MuiLoadingSpinner />
            <MuiDialog isLoading={isLoading} />
            <MuiRating isLoading={isLoading} />
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
