import { useDashboardContext } from "../contexts/DashboardContext";

const DashboardTemplate = () => {

  const { dashboardOptions } = useDashboardContext();
  const type = dashboardOptions.dashboardType;

  // Removes file's extension to match its type
  const file = type[0].toUpperCase() + type.slice(1, type.length);  
  const Component = require(`./${file}Dashboard`).default;

  return <Component />;
  
};

export default DashboardTemplate;
