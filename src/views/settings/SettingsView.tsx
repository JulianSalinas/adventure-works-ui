import { Box, createTheme, Typography } from "@mui/material";
import { useCustomThemeContext } from "../../contexts/CustomThemeContext";
import { CustomTheme } from "../../models/CustomTheme";
import customThemes from "../../themes/CustomThemes";
import darkMUIThemeTemplate from "../../themes/DarkMUIThemeTemplate";
import lightMUIThemeTemplate from "../../themes/LightMUIThemeTemplate";
import { themeModes } from "./../../themes/ThemeMode";
import CustomThemeOption from "./CustomThemeOption";
import ThemeModeOption from "./ThemeModeOption";

const SettingsView = () => {

  const { themeMode, setThemeMode, customTheme, setCustomTheme, setMUITheme } = useCustomThemeContext();

  const onThemeModeSelected = (mode: string): void => {
    setThemeMode(mode);
    let template = mode === "light" ? lightMUIThemeTemplate : darkMUIThemeTemplate;
    let muiTheme = createTheme({ ...template });
    setMUITheme(muiTheme);
  };

  const renderCustomThemeType = (theme: CustomTheme) => (
    <CustomThemeOption
      key={theme.themeName}
      isSelected={theme.themeName === customTheme.themeName}
      themeName={theme.themeName}
      background={theme.primaryGradient}
      themeImage={theme.drawerBackground}
      onSelected={() => setCustomTheme(theme)}
    />
  );

  const renderThemeModeType = (mode: string) => (
    <ThemeModeOption
      key={mode}
      themeMode={mode}
      isSelected={mode === themeMode}
      onSelected={() => onThemeModeSelected(mode)}
    />
  );

  return (
    <Box>
      <Box sx={{ display: "flex" }}>
        <Typography variant={"h6"}>Modes</Typography>
      </Box>

      <Box sx={{ my: 1 }} />

      <Box sx={{ display: "flex", gap: 2 }}>{themeModes.map(renderThemeModeType)}</Box>

      <Box sx={{ my: 2 }} />

      <Box sx={{ display: "flex" }}>
        <Typography variant={"h6"}>Themes</Typography>
      </Box>

      <Box sx={{ my: 1 }} />

      <Box sx={{ display: "flex", gap: 2 }}>{customThemes.map(renderCustomThemeType)}</Box>
    </Box>
  );
};

export default SettingsView;
