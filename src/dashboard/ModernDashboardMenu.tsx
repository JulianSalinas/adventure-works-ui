import { List, ListItem, ListItemIcon, Typography } from "@mui/material";
import { CSSProperties } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { useDashboardContext } from "../contexts/DashboardContext";
import { DashboardRoute } from "../models/DashboardRoute";
import "./ModernDashboardStyles.css";

const MenuItem: React.FC<{ route: DashboardRoute }> = (props) => {

  const { dashboardOptions } = useDashboardContext();

  return (
    <ListItem>
      <ListItemIcon>
        <props.route.icon sx={{ fill: "white"}} />
      </ListItemIcon>
      <Typography hidden={!dashboardOptions.isDrawerOpen}>{props.route.name}</Typography>
    </ListItem>
  );

};

const MenuList = () => {

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
      <MenuItem route={route} />
    </NavLink>
  );

  return <List> {dashboardRoutes.map(renderItem)} </List>;
};

export default withRouter(MenuList);
