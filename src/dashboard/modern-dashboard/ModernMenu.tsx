import { List, Typography } from "@mui/material";
import { CSSProperties } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { useCustomThemeContext } from "../../contexts/CustomThemeContext";
import { useDashboardContext } from "../../contexts/DashboardContext";
import { DashboardRoute } from "../../models/DashboardRoute";
import { ModernMenuItem } from "./ModernMenuItem";
import "./ModernStyles.css";

export const ModernMenu: React.FC<{}> = () => {

  const { customTheme } = useCustomThemeContext();
  const { isDrawerOpen, dashboardRoutes } = useDashboardContext();

  const itemStyle: CSSProperties = {
    color: "white",
    display: "block",
    textDecoration: "none",
  }

  const activeStyle: CSSProperties = {
    color: "white",
    background: customTheme.primaryGradient,
    borderBottomRightRadius: isDrawerOpen ? 16 : 0,
    borderTopRightRadius: isDrawerOpen ? 16 : 0,
    marginRight: isDrawerOpen ? 16 : 0,
    transition: customTheme.transitionEffect,
  };

  const renderItem = (route: DashboardRoute, index: number) => (
    <NavLink key={index} to={route.path} className={"item"} style={itemStyle} activeStyle={activeStyle}>
      <ModernMenuItem>
        <route.icon sx={{ fill: "text.primary" }} />
        <Typography hidden={!isDrawerOpen}>{route.name}</Typography>
      </ModernMenuItem>
    </NavLink>
  );

  return <List>{dashboardRoutes.map(renderItem)}</List>;

};

export default withRouter(ModernMenu);
