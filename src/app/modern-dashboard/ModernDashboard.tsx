import { ExitToAppOutlined } from "@mui/icons-material";
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Avatar, Box, Drawer, IconButton, Theme, Toolbar, Typography } from "@mui/material";
import { SxProps } from "@mui/system";
import { useDashboardContext } from "../../contexts/DashboardContext";
import { DashboardSwitch } from "../DashboardSwitch";
import { ModernMenuItem } from "./ModernMenuItem";
import { ModernMenu } from "./ModernMenu";
import Header from "../../components/Header";


const ModernExitButton = () => {

  const { dashboardOptions } = useDashboardContext();

  return (
    <ModernMenuItem>
      <ExitToAppOutlined sx={{ fill: "white" }} />
      <Typography hidden={!dashboardOptions.isDrawerOpen} sx={{ color: "white" }}>{"Exit"}</Typography>
    </ModernMenuItem>
  );

};

const ModernDrawerButton = () => {

  const { dashboardOptions, setIsDrawerOpen } = useDashboardContext();

  return (
    <ModernMenuItem>
      <Box onClick={() => setIsDrawerOpen(!dashboardOptions.isDrawerOpen)}>
        <MenuIcon sx={{ fill: "white" }}/>
      </Box>
    </ModernMenuItem>
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
  const drawerAvatar = require(`../../assets/images/${dashboardOptions.drawerAvatar}`).default;

  const containerStyles: SxProps<Theme> = {
    display: "flex", 
    alignItems: "center", 
    justifyContent: "center", 
    height: dashboardOptions.isDrawerOpen ? 196 : 36, 
    transition: dashboardOptions.customTransition
  }

  const avatarStyles: SxProps<Theme> = {
    height: dashboardOptions.isDrawerOpen ? 128 : 28,
    width: dashboardOptions.isDrawerOpen ? 128 : 28, 
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
      <ModernMenu />
      <ModernExitButton />
    </Box>
  );

} 

const ModernDashboard = () => {

  const { dashboardOptions } = useDashboardContext();
  const drawerBackground = require(`../../assets/images/${dashboardOptions.drawerBackground}`).default;

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
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    border: "none",
    borderWidth: 0,
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
          { dashboardOptions.drawerAvatar ? <ModernAvatar /> : <Box /> }
          <ModernOptions />
        </Drawer>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <Header />
        <Box component="main" sx={{ px: 8 }}>
          <DashboardSwitch />
        </Box>
      </Box>

    </Box>
  );
}

export default ModernDashboard;