import { createTheme, Theme } from "@mui/material";
import { orange } from '@mui/material/colors';

let lightTheme: Theme = createTheme({
  palette: {
    mode: "light",
    primary: { 
      main: orange[700]
    },
    secondary: { 
      main: "#FF416C",
    },
    text: {
      primary: "#000"
    }
  },
});

export default lightTheme;
