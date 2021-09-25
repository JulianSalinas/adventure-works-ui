import { Box } from "@mui/material";
import { SxProps, Theme } from "@mui/system";
import { useDashboardContext } from "../../contexts/DashboardContext";
import "./ModernStyles.css";

export const ModernMenuItem: React.FunctionComponent<{}> = ({ children }) => {

  const { dashboardOptions } = useDashboardContext();

  const containerStyles: SxProps<Theme> = {
    display: "flex",
    alignItems: "center",
    justifyContent: dashboardOptions.isDrawerOpen ? "start" : "center",
    transition: dashboardOptions.customTransition,
  };

  const spacingStyles: SxProps<Theme> = {
    gap: 4,
    paddingY: 2,
    paddingLeft: dashboardOptions.isDrawerOpen ? 4 : 0,
  };

  return (
    <Box sx={{ ...containerStyles, ...spacingStyles }}>
      {children}
    </Box>
  );

};

export default ModernMenuItem;
