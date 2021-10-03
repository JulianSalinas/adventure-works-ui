import { ExitToAppOutlined } from "@mui/icons-material";
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Avatar, Box, Drawer, IconButton, Theme, Toolbar, Typography } from "@mui/material";
import { SxProps } from "@mui/system";
import Header from "../../components/Header";
import { useCustomThemeContext } from "../../contexts/CustomThemeContext";
import { useDashboardContext } from "../../contexts/DashboardContext";
import { DashboardSwitch } from "../DashboardSwitch";
import { ModernMenu } from "./ModernMenu";
import { ModernMenuItem } from "./ModernMenuItem";


const ModernExitButton = () => {

  const { isDrawerOpen } = useDashboardContext();

  return (
    <ModernMenuItem>
      <ExitToAppOutlined sx={{ fill: "white" }} />
      <Typography hidden={!isDrawerOpen} sx={{ color: "white" }}>{"Exit"}</Typography>
    </ModernMenuItem>
  );

};

const ModernDrawerButton = () => {

  const { isDrawerOpen, setIsDrawerOpen } = useDashboardContext();

  return (
    <ModernMenuItem>
      <Box onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
        <MenuIcon sx={{ fill: "white" }}/>
      </Box>
    </ModernMenuItem>
  );

};

const ModernToolbar = () => {

  const { isDrawerOpen, setIsDrawerOpen } = useDashboardContext();

  return (
    <Toolbar variant={"regular"} disableGutters={true} sx={{ pl: 2 }}>
      <IconButton sx={{ color: "white" }} onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
        <MenuIcon/>
      </IconButton>
    </Toolbar>
  );

}

const ModernAvatar = () => {

  const { customTheme } = useCustomThemeContext();
  const { isDrawerOpen } = useDashboardContext();
  const drawerAvatar = require(`../../assets/images/${customTheme.drawerAvatar}`).default;

  const containerStyles: SxProps<Theme> = {
    display: "flex", 
    alignItems: "center", 
    justifyContent: "center", 
    height: isDrawerOpen ? 196 : 36, 
    transition: customTheme.transitionEffect
  }

  const avatarStyles: SxProps<Theme> = {
    height: isDrawerOpen ? 128 : 28,
    width: isDrawerOpen ? 128 : 28, 
    transition: customTheme.transitionEffect
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

  const { customTheme } = useCustomThemeContext();
  const { isDrawerOpen } = useDashboardContext();
  const drawerBackground = require(`../../assets/images/${customTheme.drawerBackground}`).default;

  const drawerStyles: SxProps<Theme> = {
    transition: customTheme.transitionEffect,
    width: {
      xs: isDrawerOpen ? "100%" : 0,
      sm: isDrawerOpen ? customTheme.drawerWidth : 72,
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
          { customTheme.drawerAvatar ? <ModernAvatar /> : <Box /> }
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