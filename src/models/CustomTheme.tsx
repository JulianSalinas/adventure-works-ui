import { DashboardType } from "../themes/DashboardTypes";

export interface CustomTheme {
  themeName: string, 
  primaryColor: string,
  primaryGradient?: string,
  drawerWidth: number,
  drawerAvatar?: string,
  drawerBackground?: string,
  transitionEffect?: string,
  dashboardType: DashboardType
}

export default CustomTheme;