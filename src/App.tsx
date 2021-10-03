import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import DashboardTemplate from "./dashboard/DashboardTemplate";
import { CustomThemeContext, CustomThemeContextType } from "./contexts/CustomThemeContext";
import { defaultUserIdentity, UserIdentityContext } from "./contexts/UserIdentityContext";
import { defaultCustomTheme } from "./themes/CustomThemes";
import lightMUIThemeTemplate from "./themes/LightMUIThemeTemplate";
import darkMUIThemeTemplate from "./themes/DarkMUIThemeTemplate";

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

  const [themeMode, setThemeMode] = useState("dark");

  const [muiTheme, setMUITheme] = useState(lightMUIThemeTemplate);
  const [customTheme, setCustomTheme] = useState(defaultCustomTheme);
  const [userIdentity, setUserIdentity] = useState(defaultUserIdentity);

  const customThemeProps: CustomThemeContextType = { 
    muiTheme, 
    setMUITheme, 
    customTheme, 
    setCustomTheme, 
    themeMode, 
    setThemeMode 
  };
  
  useEffect(() => {
    
    console.log("Theme mode", themeMode);
    
    let listener = (e: MediaQueryListEvent) => {
      let template = e.matches ? darkMUIThemeTemplate : lightMUIThemeTemplate;
      let theme = createTheme({ ...template });
      setMUITheme(theme);
    };

    if(themeMode === "system") {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', listener);
    }
    else {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', listener);
    }

    // let template = matches ? darkMUIThemeTemplate : lightMUIThemeTemplate;
    // let theme = createTheme({ ...template });
    // setMUITheme(theme);

    // return window.matchMedia('(prefers-color-scheme: dark)')
    //   .removeEventListener('change', modeListener);

  }, [themeMode]);

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