import { ExitToAppOutlined } from "@mui/icons-material";
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Avatar, Box, Drawer, IconButton, Theme, Toolbar, Typography } from "@mui/material";
import { SxProps } from "@mui/system";
import { useDashboardContext } from "../contexts/DashboardContext";
import SettingsView from "../views/settings/SettingsView";
import { ModernDashboardItem, ModernDashboardMenu } from "./ModernDashboardMenu";
import './ModernDashboardStyles.css';


const ModernExitButton = () => {

  const { dashboardOptions } = useDashboardContext();

  return (
    <ModernDashboardItem>
      <ExitToAppOutlined sx={{ fill: "white" }} />
      <Typography hidden={!dashboardOptions.isDrawerOpen}>{"Exit"}</Typography>
    </ModernDashboardItem>
  );

};

const ModernDrawerButton = () => {

  const { dashboardOptions, setIsDrawerOpen } = useDashboardContext();

  return (
    <ModernDashboardItem>
      <Box onClick={() => setIsDrawerOpen(!dashboardOptions.isDrawerOpen)}>
        <MenuIcon sx={{ fill: "white" }}/>
      </Box>
    </ModernDashboardItem>
  );

};

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
    height: dashboardOptions.isDrawerOpen ? 196 : 36, 
    display: "flex", 
    alignItems: "center", 
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

  const containerStyles: SxProps<Theme> = {
    height: "100%",
    display: "flex", 
    flexDirection: "column", 
    justifyContent: "space-between",
  }

  return (
    <Box sx={containerStyles}>
      <ModernDashboardMenu />
      <ModernExitButton />
    </Box>
  );

} 

const ModernDashboard = () => {

  const { dashboardOptions } = useDashboardContext();
  const drawerBackground = require(`../assets/images/${dashboardOptions.drawerBackground}`).default;

  const drawerStyles: SxProps<Theme> = {
    transition: dashboardOptions.customTransition,
    width: {
      xs: dashboardOptions.isDrawerOpen ? "100%" : 0,
      sm: dashboardOptions.isDrawerOpen ? dashboardOptions.drawerWidth : 72,
    }
  };

  const drawerContainerStyles: SxProps<Theme> = {
    // display: { sm: "flex", xs: "none" }, 
    flexShrink: 0,
    ...drawerStyles
  };

  const drawerPaperStyles: SxProps<Theme> = {
    backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 1)), url(${drawerBackground})`,
    border: "none",
    overflowX: "hidden",
    ...drawerStyles,
  };
  
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>

      <AppBar position={"fixed"} sx={{ display: { sm: 'none', xs: 'block' } }}>
        <ModernToolbar />
      </AppBar>

      <Box component="nav" sx={ drawerContainerStyles }>
        <Drawer variant={"permanent"} PaperProps={{ sx: drawerPaperStyles }}>
          <ModernDrawerButton />
          <ModernAvatar />
          <ModernOptions />
        </Drawer>
      </Box>

      <Box component="main" sx={{ flexGrow: 1, backgroundColor: "red" }}>
        <SettingsView />
      </Box>

    </Box>
  );
}

export default ModernDashboard;