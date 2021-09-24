import { Theme } from "@mui/material";
import { createContext, useContext } from "react";
import DarkTheme from "../themes/DarkTheme";

export type CustomThemeContextType = {
  theme: Theme;
  setTheme: (Theme: Theme) => void;
};

export const CustomThemeContext = createContext<CustomThemeContextType>({
  theme: DarkTheme,
  setTheme: (_) => console.warn("No setTheme function was provided"),
});
export const useCustomThemeContext = () => useContext(CustomThemeContext);
