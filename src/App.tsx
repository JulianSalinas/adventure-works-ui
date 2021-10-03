import { createTheme, CssBaseline, Theme, ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { CustomThemeContext, CustomThemeContextType } from "./contexts/CustomThemeContext";
import { defaultUserIdentity, UserIdentityContext } from "./contexts/UserIdentityContext";
import DashboardTemplate from "./dashboard/DashboardTemplate";
import { defaultCustomTheme } from "./themes/CustomThemes";
import darkMUIThemeTemplate from "./themes/DarkMUIThemeTemplate";
import lightMUIThemeTemplate from "./themes/LightMUIThemeTemplate";
import { ThemeMode } from "./themes/ThemeMode";

/**
 * Not found page, as simple as it is!
 * @returns
 */
const NotFound: React.FC<{}> = () => {
  return <div> Not Found </div>;
};

/**
 * Are you logged then Dashboard, else ask for authentication
 * @returns
 */
const AppRouter: React.FC<{}> = () => {
  return (
    <Switch>
      <Redirect exact path={"/"} to={"/index"} />
      <Redirect exact path={"/index"} to={"/dashboard/welcome"} />
      <Redirect exact path={"/dashboard"} to={"/dashboard/welcome"} />
      <Route path={"/dashboard"} component={DashboardTemplate} />
      <Route component={NotFound} />
    </Switch>
  );
};

/**
 * Creates providers for all the application
 * @returns
 */
 const App: React.FC<{}> = () => {
  const [userIdentity, setUserIdentity] = useState(defaultUserIdentity);

  
  const [muiTheme, setMUITheme] = useState(() => {

    let mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    let storedThemeMode = localStorage.getItem("themeMode") as ThemeMode;
    let scopedThemeMode = storedThemeMode ? storedThemeMode : "system";

    return scopedThemeMode === "dark"
      ? darkMUIThemeTemplate
      : scopedThemeMode === "light"
      ? lightMUIThemeTemplate
      : mediaQuery.matches
      ? darkMUIThemeTemplate
      : lightMUIThemeTemplate;
  });

  const [customTheme, setCustomTheme] = useState(() => {
    let storedCustomTheme = localStorage.getItem("customTheme");
    return storedCustomTheme ? JSON.parse(storedCustomTheme) : defaultCustomTheme;
  });
  
  const [themeMode, setThemeMode] = useState(() => {
    let storedThemeMode = localStorage.getItem("themeMode") as ThemeMode;
    return storedThemeMode ? storedThemeMode : "system";
  });
  
  const customThemeProps: CustomThemeContextType = {
    muiTheme,
    setMUITheme,
    customTheme,
    setCustomTheme,
    themeMode,
    setThemeMode,
  };

  // componentDidMount()
  useEffect(() => {

    const listener = (ev: MediaQueryListEvent) => {
      let storedThemeMode = localStorage.getItem("themeMode") as ThemeMode;
      let scopedThemeMode = storedThemeMode ? storedThemeMode : "system";
      if (scopedThemeMode !== "system") return;
      let template = ev.matches ? darkMUIThemeTemplate : lightMUIThemeTemplate;
      setMUITheme(createTheme({ ...template }));
    };

    let mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", listener);

    // componentWillUnmount()
    return () => mediaQuery.removeEventListener("change", listener);

  }, []);

  useEffect(() => {

    let mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    let template: Theme = themeMode === "dark"
      ? darkMUIThemeTemplate
      : themeMode === "light"
      ? lightMUIThemeTemplate
      : mediaQuery.matches
      ? darkMUIThemeTemplate
      : lightMUIThemeTemplate;

    setMUITheme(createTheme({ ...template }));
    localStorage.setItem("themeMode", themeMode);

  }, [themeMode]);

  useEffect(() => localStorage.setItem("customTheme", JSON.stringify(customTheme)), [customTheme]);

  return (
    <CustomThemeContext.Provider value={customThemeProps}>
      <ThemeProvider theme={muiTheme}>
        <UserIdentityContext.Provider value={{ userIdentity, setUserIdentity }}>
          <CssBaseline />
          <AppRouter />
        </UserIdentityContext.Provider>
      </ThemeProvider>
    </CustomThemeContext.Provider>
  );
}

export default App;
