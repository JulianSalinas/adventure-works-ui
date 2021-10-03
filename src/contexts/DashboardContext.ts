import { createContext, useContext } from "react";
import dashboardRoutes from "../dashboard/DashboardRoutes";
import { DashboardRoute } from "../models/DashboardRoute";

export type DashboardContextType = {
  dashboardRoutes: Array<DashboardRoute>;
  isDrawerOpen: boolean;
  setIsDrawerOpen: (state: boolean) => void; 
};

export const DashboardContext = createContext<DashboardContextType>({
  dashboardRoutes: dashboardRoutes,
  isDrawerOpen: false,
  setIsDrawerOpen: (_) => console.warn("No setDrawerState function was provided")
});
export const useDashboardContext = () => useContext(DashboardContext);
