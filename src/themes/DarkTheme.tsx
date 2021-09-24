import { createTheme, Theme } from "@mui/material";

let darkTheme: Theme = createTheme({
  palette: {
    mode: "dark",
    primary: { 
      main: "#009688" 
    },
    secondary: { 
      main: "#76608A"
    },
  },
});

export default darkTheme;
