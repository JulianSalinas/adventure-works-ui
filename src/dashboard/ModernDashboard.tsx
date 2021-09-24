import { ExitToAppOutlined } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Avatar, Box, Drawer, IconButton, Theme, Toolbar, Typography } from "@mui/material";
import { SxProps } from "@mui/system";
import { useDashboardContext } from "../contexts/DashboardContext";
import ModernDashboardMenu from "./ModernDashboardMenu";
import './ModernDashboardStyles.css';

const ExitAppButton = () => {

  const { dashboardOptions } = useDashboardContext();

  return (
    <Box className={"item"} sx={{ display: "flex", gap: 4, pl: 3, py: 2 }}>
      <ExitToAppOutlined sx={{ fill: "white"}} />
      <Typography hidden={!dashboardOptions.isDrawerOpen}>{"Exit"}</Typography>
    </Box>
  );

}

const ModernToolbar = () => {

  const { dashboardOptions, setIsDrawerOpen } = useDashboardContext();

  return (
    <Toolbar variant={"regular"} disableGutters={true} sx={{ pl: 2 }}>
      <IconButton sx={{ color: "white" }} onClick={() => setIsDrawerOpen(!dashboardOptions.isDrawerOpen)}>
          <MenuIcon/>
      </IconButton>
    </Toolbar>
  );

}

const ModernAvatar = () => {

  const { dashboardOptions } = useDashboardContext();
  const drawerAvatar = require(`../assets/images/${dashboardOptions.drawerAvatar}`).default;

  const containerStyles: SxProps<Theme> = {
    height: dashboardOptions.isDrawerOpen ? 164 : 36, 
    display: "flex", 
    alignItems: "start", 
    justifyContent: "center", 
    transition: dashboardOptions.customTransition
  }

  const avatarStyles: SxProps<Theme> = {
    width: dashboardOptions.isDrawerOpen ? 128 : 28, 
    height: dashboardOptions.isDrawerOpen ? 128 : 28,
    transition: dashboardOptions.customTransition
  }

  return (
    <Box sx={containerStyles}>
      <Avatar src={drawerAvatar} sx={avatarStyles} />
    </Box>
  );

}

const ModernOptions = () => {

  const { dashboardOptions } = useDashboardContext();

  const containerStyles: SxProps<Theme> = {
    display: "flex", 
    flex: 1, 
    flexDirection: "column", 
    justifyContent: "space-between",
    transition: dashboardOptions.customTransition
  }

  return (
    <Box sx={containerStyles}>
      <ModernDashboardMenu />
      <ExitAppButton />
    </Box>
  );

} 

const ModernDashboard = () => {

  const { dashboardOptions } = useDashboardContext();
  const drawerBackground = require(`../assets/images/${dashboardOptions.drawerBackground}`).default;

  const drawerPaperStyles: SxProps<Theme> = {
    border: "none",
    overflow: "hidden",
    width: dashboardOptions.isDrawerOpen ? dashboardOptions.drawerWidth : 72,
    transition: dashboardOptions.customTransition,
    backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 1)), url(${drawerBackground})`,
  }
  
  return (
    <Box>
      <AppBar position={"fixed"} sx={{ display: { sm: 'none', xs: 'block' } }}>
        <ModernToolbar />
      </AppBar>

      <Drawer variant={"permanent"} PaperProps={{ sx: drawerPaperStyles }} sx={{ display: { sm: 'block', xs: 'none' } }}>
        <ModernToolbar />
        <ModernAvatar />
        <ModernOptions />
      </Drawer>

      <main style={{ flexGrow: 1 }}>
        <div style={{
            // [props.theme.breakpoints.down("sm")]: {
            //     ...props.theme.mixins.toolbar,
            // }
        }} />
        {/* <DashboardRouter/> */}
        {/* <Manager/> */}
      </main>

    </Box>
  );
}

export default ModernDashboard;