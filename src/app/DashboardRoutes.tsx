import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { DashboardRoute } from "../models/DashboardRoute";
import SettingsView from '../views/settings/SettingsView';

const dashboardRoutes: Array<DashboardRoute> = [
  {
    path: "/dashboard/welcome",
    component: undefined,
    name: "Welcome",
    icon: HomeOutlinedIcon,
    redirect: false,
  },
  {
    path: "/dashboard/customers",
    component: undefined,
    name: "Customers",
    icon: PeopleOutlineIcon,
    redirect: false,
  },
  {
    path: "/dashboard/products",
    component: undefined,
    name: "Products",
    icon: LocalMallOutlinedIcon,
    redirect: false,
  },
  {
    path: "/dashboard/settings",
    component: SettingsView,
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
