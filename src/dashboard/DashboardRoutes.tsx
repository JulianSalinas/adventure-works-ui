import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { DashboardRoute } from "../models/DashboardRoute";

const dashboardRoutes: Array<DashboardRoute> = [
  {
    path: "/dashboard/welcome",
    component: undefined,
    name: "Welcome",
    icon: HomeOutlinedIcon,
    redirect: false,
  },
  {
    path: "/dashboard/settings",
    component: undefined,
    name: "Settings",
    icon: SettingsOutlinedIcon,
    redirect: false,
  },
  {
    path: "/dashboard/about",
    component: undefined,
    name: "About",
    icon: HelpOutlineOutlinedIcon,
    redirect: false,
  },
];

export default dashboardRoutes;
