import { Box } from "@mui/material";
import { SxProps, Theme } from "@mui/system";
import { useCustomThemeContext } from "../../contexts/CustomThemeContext";
import { useDashboardContext } from "../../contexts/DashboardContext";
import "./ModernStyles.css";

export const ModernMenuItem: React.FunctionComponent<{}> = ({ children }) => {

  const { customTheme } = useCustomThemeContext();
  const { isDrawerOpen } = useDashboardContext();

  const containerStyles: SxProps<Theme> = {
    display: "flex",
    alignItems: "center",
    justifyContent: isDrawerOpen ? "start" : "center",
    transition: customTheme.transitionEffect,
  };

  const spacingStyles: SxProps<Theme> = {
    gap: 4,
    paddingY: 2,
    paddingLeft: isDrawerOpen ? 4 : 0,
  };

  return (
    <Box sx={{ ...containerStyles, ...spacingStyles }}>
      {children}
    </Box>
  );

};

export default ModernMenuItem;
