import { CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import dashboardRoutes from "./app/DashboardRoutes";
import DashboardTemplate from "./app/DashboardTemplate";
import { CustomThemeContext } from "./contexts/CustomThemeContext";
import { DashboardContext, defaultDashboardOptions } from "./contexts/DashboardContext";
import { defaultUserIdentity, UserIdentityContext } from "./contexts/UserIdentityContext";
import lightTheme from "./themes/LightTheme";

/**
 * Not found page, as simple as it is! 
 * @returns 
 */
const NotFound = () => {
  return <div> Not Found </div>;
};

/**
 * Are you logged then Dashboard, else ask for authentication 
 * @returns 
 */
const AppRouter = () => {
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

/**
 * Creates providers for all the application 
 * @returns 
 */
function App() {

  const [theme, setTheme] = useState(lightTheme);
  const [userIdentity, setUserIdentity] = useState(defaultUserIdentity);

  return (
    <CustomThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme}>
        <UserIdentityContext.Provider value={{ userIdentity, setUserIdentity }}>
          <CssBaseline />
          <AppRouter />
        </UserIdentityContext.Provider>
      </ThemeProvider>
    </CustomThemeContext.Provider>
  );

}

export default App;