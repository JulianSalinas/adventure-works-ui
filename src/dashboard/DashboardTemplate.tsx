import { useState } from "react";
import { useCustomThemeContext } from "../contexts/CustomThemeContext";
import { DashboardContext } from "../contexts/DashboardContext";
import dashboardRoutes from "./DashboardRoutes";

const DashboardTemplate = () => {

  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const { customTheme } = useCustomThemeContext();
  const type = customTheme.dashboardType;

  // Removes file's extension to match its type
  const file = type[0].toUpperCase() + type.slice(1, type.length);  
  const Component = require(`./${type}-dashboard/${file}Dashboard`).default;
  
  return (
    <DashboardContext.Provider value={{ dashboardRoutes, isDrawerOpen, setIsDrawerOpen }}>
      <Component />
    </DashboardContext.Provider>
  );
  
};

export default DashboardTemplate;
