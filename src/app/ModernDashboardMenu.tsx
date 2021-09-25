import { Box, List, Typography } from "@mui/material";
import { SxProps, Theme } from "@mui/system";
import { CSSProperties } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { useDashboardContext } from "../contexts/DashboardContext";
import { DashboardRoute } from "../models/DashboardRoute";
import "./ModernDashboardStyles.css";

export const ModernDashboardItem: React.FunctionComponent<{}> = ({ children }) => {

  const { dashboardOptions } = useDashboardContext();

  const justifyContent = dashboardOptions.isDrawerOpen ? "start" : "center";

  const containerStyles: SxProps<Theme> = {
    display: "flex",
    alignItems: "center",
    justifyContent: justifyContent,
    gap: 4,
    paddingY: 2,
    paddingLeft: dashboardOptions.isDrawerOpen ? 4 : 0,
    transition: dashboardOptions.customTransition,
  };

  return (
    <Box className={"item-active"} sx={containerStyles}>
      {children}
    </Box>
  );

};

export const ModernDashboardNavItem: React.FC<{ route: DashboardRoute }> = (props) => {

  const { dashboardOptions } = useDashboardContext();

  return (
    <ModernDashboardItem>
      <props.route.icon sx={{ fill: "white"}} />
      <Typography hidden={!dashboardOptions.isDrawerOpen}>{ props.route.name }</Typography>
    </ModernDashboardItem>
  );
};

export const ModernDashboardMenu = () => {

  const { dashboardOptions, dashboardRoutes } = useDashboardContext();

  const activeStyle: CSSProperties = {
    background: dashboardOptions.customGradient,
    marginRight: dashboardOptions.isDrawerOpen ? 16 : 0,
    borderTopRightRadius: dashboardOptions.isDrawerOpen ? 16 : 0,
    borderBottomRightRadius: dashboardOptions.isDrawerOpen ? 16 : 0,
    transition: "all 0.5s"
  };

  const renderItem = (route: DashboardRoute, index: number) => (
    <NavLink key={index} to={route.path} className={"item"} activeClassName={"item-active"} activeStyle={activeStyle}>
      <ModernDashboardNavItem route={route} />
    </NavLink>
  );

  return <List>{dashboardRoutes.map(renderItem)}</List>;
};

export default withRouter(ModernDashboardMenu);
