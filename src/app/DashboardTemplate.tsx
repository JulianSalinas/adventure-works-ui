import { useState } from "react";
import { DashboardContext, defaultDashboardOptions } from "../contexts/DashboardContext";
import dashboardRoutes from "./DashboardRoutes";

const DashboardTemplate = () => {

  const [dashboardOptions, setDashboardOptions] = useState(defaultDashboardOptions);
  const type = dashboardOptions.dashboardType;

  // Removes file's extension to match its type
  const file = type[0].toUpperCase() + type.slice(1, type.length);  
  const Component = require(`./${type}-dashboard/${file}Dashboard`).default;

  function setIsDrawerOpen(isDrawerOpen: boolean) {
    dashboardOptions.isDrawerOpen = isDrawerOpen;
    setDashboardOptions({ ...dashboardOptions });
  }
  
  return (
    <DashboardContext.Provider value={{ dashboardOptions, dashboardRoutes, setDashboardOptions, setIsDrawerOpen }}>
      <Component />
    </DashboardContext.Provider>
  );
  
};

export default DashboardTemplate;
