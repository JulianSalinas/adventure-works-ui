import { Box, Paper, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import { FC, PropsWithChildren } from 'react';


interface IThemeItem {
  isSelected: boolean,
  name: string;
  background: string;
  backgroundImage: string;
  onSelected: () => void
}

const ThemeItem: FC<IThemeItem> = (props: PropsWithChildren<IThemeItem>) => {

  const backgroundImage = require(`../../assets/images/${props.backgroundImage}`).default

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
        borderRadius: 1,
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover"
      }}>

        <Box sx={{
          position: "absolute",
          right: 0,
          height: "inherit",
          width: "70%",
          background: props.background,
          clipPath: "polygon(50% 0, 100% 0%, 100% 100%, 0% 100%)",
        }} />

      </Box>

      <Typography sx={{ fontWeight: "light"}}>
        {props.name}
      </Typography>

    </Paper>
  );
}

export default ThemeItem;