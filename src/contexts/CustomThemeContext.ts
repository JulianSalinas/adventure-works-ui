import { Theme } from "@mui/material";
import { createContext, useContext } from "react";
import CustomTheme from "../models/CustomTheme";
import { defaultCustomTheme } from "../themes/CustomThemes";
import darkMUIThemeTemplate from "../themes/DarkMUIThemeTemplate";
import { ThemeMode } from "../themes/ThemeMode";

export type CustomThemeContextType = {
  themeMode: ThemeMode,
  setThemeMode: (mode: ThemeMode) => void;
  muiTheme: Theme;
  setMUITheme: (theme: Theme) => void;
  customTheme: CustomTheme;
  setCustomTheme: (customTheme: CustomTheme) => void;
};

export const CustomThemeContext = createContext<CustomThemeContextType>({
  themeMode: "system",
  setThemeMode: (_) => console.warn("No setThemeMode function was provided"),
  muiTheme: darkMUIThemeTemplate,
  setMUITheme: (_) => console.warn("No setMUITheme function was provided"),
  customTheme: defaultCustomTheme,
  setCustomTheme: (_) => console.warn("No setTCustomTheme function was provided"),
});

export const useCustomThemeContext = () => useContext(CustomThemeContext);
