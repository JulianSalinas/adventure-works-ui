import { Box, createTheme, Divider, Paper, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { useCustomThemeContext } from "../../contexts/CustomThemeContext";
import { useDashboardContext } from "../../contexts/DashboardContext";
import { useUserIdentityContext } from "../../contexts/UserIdentityContext";
import darkTheme from "../../themes/DarkTheme";
import lightTheme from "../../themes/LightTheme";
import { blue } from '@mui/material/colors';
import { DashboardOptions } from "../../models/DashboardOptions";
import ThemeItem from "./ThemeItem";

interface AvailableTheme {
  name: string, 
  background: string,
  backgroundImage: string
}

const availableThemes: Array<AvailableTheme> = [
  {
    name: "Sylvia",
    background: "linear-gradient(to right, #FF4B2B, #FF416C)",
    backgroundImage: "img-reimu.jpg"
  },
  {
    name: "Azure Lane",
    background: "linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
    backgroundImage: "img-ganyu.jpeg"
  }
];

const SettingsView = () => {

  const { setTheme } = useCustomThemeContext();
  const { userIdentity } = useUserIdentityContext();
  const { dashboardOptions, setDashboardOptions } = useDashboardContext();
  const [themeName, setThemeName] = useState("light");
  const drawerBackground = require(`../../assets/images/${dashboardOptions.drawerBackground}`).default;

  const [currentTheme, setThemeItem] = useState(availableThemes[0]);

  function changeTheme(
    event: ChangeEvent<{ name?: string | undefined; value: unknown }>
  ): void {
    let themeName = event.target.value as string;
    setThemeName(themeName);
    let template = themeName === "light" ? lightTheme : darkTheme;
    let theme = createTheme({ ...template });
    setTheme(theme);
  }

  const onAvailableThemeSelected = (theme: AvailableTheme): void => {

    setThemeItem({ ...theme });

    const options: DashboardOptions = { 
      ...dashboardOptions,
      drawerBackground: theme.backgroundImage,
      customGradient: theme.background
    };

    setDashboardOptions(options);
  }

  const renderAvailableThemes = (theme: AvailableTheme) => (
    <ThemeItem key={theme.name} 
      isSelected={theme.name === currentTheme.name}
      name={theme.name} 
      background={theme.background} 
      backgroundImage={theme.backgroundImage}
      onSelected={() => onAvailableThemeSelected(theme)}/>
  );

  return (
    <Box>

        <Box sx={{ display: "flex" }}>
          <Typography variant={"h5"}>
            Theme 
          </Typography>
        </Box>

        <Box sx={{ my: 1 }}/>

        <Box sx={{ display: "flex", gap: 2 }}>
          {availableThemes.map(renderAvailableThemes)}
        </Box>


    </Box>
  );
  
};

export default SettingsView;
