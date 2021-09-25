import { List, Typography } from "@mui/material";
import { CSSProperties } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { useDashboardContext } from "../../contexts/DashboardContext";
import { DashboardRoute } from "../../models/DashboardRoute";
import { ModernMenuItem } from "./ModernMenuItem";
import "./ModernStyles.css";

export const ModernMenu: React.FC<{}> = () => {

  const { dashboardOptions, dashboardRoutes } = useDashboardContext();

  const itemStyle: CSSProperties = {
    color: "white",
    display: "block",
    textDecoration: "none",
  }

  const activeStyle: CSSProperties = {
    background: dashboardOptions.customGradient,
    borderBottomRightRadius: dashboardOptions.isDrawerOpen ? 16 : 0,
    borderTopRightRadius: dashboardOptions.isDrawerOpen ? 16 : 0,
    marginRight: dashboardOptions.isDrawerOpen ? 16 : 0,
    transition: dashboardOptions.customTransition,
  };

  const renderItem = (route: DashboardRoute, index: number) => (
    <NavLink key={index} to={route.path} className={"item"} style={itemStyle} activeStyle={activeStyle}>
      <ModernMenuItem>
        <route.icon sx={{ fill: "white" }} />
        <Typography hidden={!dashboardOptions.isDrawerOpen}>{route.name}</Typography>
      </ModernMenuItem>
    </NavLink>
  );

  return <List>{dashboardRoutes.map(renderItem)}</List>;

};

export default withRouter(ModernMenu);
