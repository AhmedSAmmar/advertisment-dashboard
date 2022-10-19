import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#864879",
      main: "#3F3351",
      dark: "#1F1D36",
      contrastText: "#fff",
    },
    secondary: {
      main: "#F0D9FF",
      light: "#F3F1F5",
    },
  },
  typography: {
    fontFamily: "Montserrat",
  },
});

export default theme;
