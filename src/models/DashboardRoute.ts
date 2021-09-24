import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { NavigationRoute } from "./NavigationRoute";

export interface DashboardRoute extends NavigationRoute {
  redirect: boolean;
  name: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string; }
}