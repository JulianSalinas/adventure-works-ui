import { Box, Paper, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import { FC, PropsWithChildren } from "react";
import { ThemeMode } from "../../themes/ThemeMode"; 

interface IThemeModeOption {
  themeMode: ThemeMode;
  isSelected: boolean,
  onSelected: () => void
}

const ThemeModeOption: FC<IThemeModeOption> = (props: PropsWithChildren<IThemeModeOption>) => {

  return (
    <Paper elevation={2} onClick={props.onSelected} sx={{
      width: props.isSelected ? 140 : 136,
      px: 1,
      pt: 1,
      borderWidth: props.isSelected ? 2 : 0,
      borderStyle: "solid",
      borderColor: blue[300],
    }}>

      <Box sx={{
        position: "relative",
        width: 120,
        height: 70,
        backgroundColor: props.themeMode === "light" || props.themeMode === "system" ? "#EDEDED" : "black",
      }}>

        <Box sx={{
          position: "absolute",
          right: 0,
          height: "inherit",
          width: "70%",
          backgroundColor: props.themeMode === "dark" || props.themeMode === "system" ? "black" : "#EDEDED",
          clipPath: "polygon(50% 0, 100% 0%, 100% 100%, 0% 100%)",
        }} />

      </Box>

      <Typography sx={{ fontWeight: "light"}}>
        {props.themeMode[0].toUpperCase() + props.themeMode.substring(1)}
      </Typography>

    </Paper>
  );
}

export default ThemeModeOption;