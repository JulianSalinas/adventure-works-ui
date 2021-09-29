import { createTheme, Theme } from "@mui/material";
import { orange } from '@mui/material/colors';

let darkTheme: Theme = createTheme({
  palette: {
    mode: "dark",
    primary: { 
      main: orange[700]
    },
    secondary: { 
      main: "#76608A"
    },
    text: {
      primary: "#FFF"
    }
  },
});

export default darkTheme;
