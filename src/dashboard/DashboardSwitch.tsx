import { Route, Switch } from "react-router";
import { useDashboardContext } from "../contexts/DashboardContext";

export const DashboardSwitch = () => {

  const { dashboardRoutes } = useDashboardContext();

  return (
    <Switch>
      {dashboardRoutes.map((prop, key) => (
        <Route key={key} path={prop.path} component={prop.component} />
      ))}
    </Switch>
  );
};

export default DashboardSwitch;
