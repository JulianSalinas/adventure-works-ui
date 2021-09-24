import { createTheme } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { useCustomThemeContext } from "../contexts/CustomThemeContext";
import { useUserIdentityContext } from "../contexts/UserIdentityContext";
import DashboardTemplate from "../dashboard/DashboardTemplate";
import darkTheme from "../themes/DarkTheme";
import lightTheme from "../themes/LightTheme";

const NotFound = () => {
  return <div> Not Found </div>;
};

const AppRouter = () => {
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
    <Switch>
        <Redirect exact path={"/"} to={"/index"}/>
        <Redirect exact path={"/index"} to={"/dashboard/welcome"}/>
        <Redirect exact path={"/dashboard"} to={"/dashboard/welcome"}/>
        <Route path={"/dashboard"} component={DashboardTemplate}/>
        <Route component={NotFound}/>
    </Switch>
  );
};

export default AppRouter;
