import { createTheme, Theme } from "@mui/material";

let lightTheme: Theme = createTheme({
  palette: {
    mode: "light",
    primary: { 
      main: "#212121"
    },
    secondary: { 
      main: "#FF416C",
    },
  },
});

export default lightTheme;
