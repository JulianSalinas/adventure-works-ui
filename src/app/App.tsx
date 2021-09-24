import { CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { CustomThemeContext } from "../contexts/CustomThemeContext";
import { DashboardContext, defaultDashboardOptions } from "../contexts/DashboardContext";
import { defaultUserIdentity, UserIdentityContext } from "../contexts/UserIdentityContext";
import dashboardRoutes from "../dashboard/DashboardRoutes";
import lightTheme from "../themes/LightTheme";
import AppRouter from "./AppRouter";

export default function App() {

  const [theme, setTheme] = useState(lightTheme);
  const [userIdentity, setUserIdentity] = useState(defaultUserIdentity);
  const [dashboardOptions, setDashboardOptions] = useState(defaultDashboardOptions);

  function setIsDrawerOpen(isDrawerOpen: boolean) {
    dashboardOptions.isDrawerOpen = isDrawerOpen;
    setDashboardOptions({ ...dashboardOptions });
  }

  return (
    <CustomThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme}>
        <UserIdentityContext.Provider value={{ userIdentity, setUserIdentity }}>
          <DashboardContext.Provider value={{ dashboardOptions, dashboardRoutes, setDashboardOptions, setIsDrawerOpen }}>
            <CssBaseline />
            <AppRouter />
          </DashboardContext.Provider>
        </UserIdentityContext.Provider>
      </ThemeProvider>
    </CustomThemeContext.Provider>
  );

}
