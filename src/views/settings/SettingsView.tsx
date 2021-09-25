import { createTheme } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { useCustomThemeContext } from "../../contexts/CustomThemeContext";
import { useUserIdentityContext } from "../../contexts/UserIdentityContext";
import darkTheme from "../../themes/DarkTheme";
import lightTheme from "../../themes/LightTheme";

const SettingsView = () => {

  const { setTheme } = useCustomThemeContext();
  const { userIdentity } = useUserIdentityContext();
  const [themeName, setThemeName] = useState("light");

  function changeTheme(
    event: ChangeEvent<{ name?: string | undefined; value: unknown }>
  ): void {
    let themeName = event.target.value as string;
    setThemeName(themeName);
    let template = themeName === "light" ? lightTheme : darkTheme;
    let theme = createTheme({ ...template });
    setTheme(theme);
  }

  return (
    <div>
      Hello world! 
    </div>
  );
  
};

export default SettingsView;
