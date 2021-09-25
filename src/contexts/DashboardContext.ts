import { createContext, useContext } from "react";
import { DashboardOptions } from "../models/DashboardOptions";
import { DashboardRoute } from "../models/DashboardRoute";
import dashboardRoutes from "../app/DashboardRoutes";

export const defaultDashboardOptions: DashboardOptions = {
  isDrawerOpen: false,
  drawerWidth: 280,
  dashboardType: "modern",
  drawerAvatar: "img-avatar-ganyu.jpg",
  drawerBackground: "img-reimu.jpg",
  customGradient: "linear-gradient(to right, #FF4B2B, #FF416C)",
  //customGradient: "linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
  customTransition: "all 0.3s",
};

export type DashboardContextType = {
  dashboardRoutes: Array<DashboardRoute>;
  dashboardOptions: DashboardOptions;
  setDashboardOptions: (options: DashboardOptions) => void;
  setIsDrawerOpen: (state: boolean) => void; 
};

export const DashboardContext = createContext<DashboardContextType>({
  dashboardRoutes: dashboardRoutes,
  dashboardOptions: defaultDashboardOptions,
  setDashboardOptions: (_) => console.warn("No setDashboard function was provided"),
  setIsDrawerOpen: (_) => console.warn("No setDrawerState function was provided")
});
export const useDashboardContext = () => useContext(DashboardContext);
