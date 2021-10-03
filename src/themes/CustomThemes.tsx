import CustomTheme from "../models/CustomTheme";

export const defaultCustomTheme: CustomTheme = {
  themeName: "Sylvia",
  primaryColor: "#FF4B2B",
  primaryGradient: "linear-gradient(to right, #FF4B2B, #FF416C)",
  drawerWidth: 280,
  drawerBackground: "img-reimu.jpg",
  transitionEffect: "all 0.3s",
  dashboardType: "modern"
};

export const customThemes: Array<CustomTheme> = [
  {
    themeName: "Sylvia",
    primaryColor: "#FF4B2B",
    primaryGradient: "linear-gradient(to right, #FF4B2B, #FF416C)",
    drawerWidth: 280,
    drawerBackground: "img-reimu.jpg",
    transitionEffect: "all 0.3s",
    dashboardType: "modern"
  },
  {
    themeName: "Azure Lane",
    primaryColor: "rgba(238,174,202,1)",
    primaryGradient: "linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
    drawerAvatar: "img-avatar-ganyu.jpg",
    drawerWidth: 280,
    drawerBackground: "img-ganyu.jpeg",
    transitionEffect: "all 0.3s",
    dashboardType: "modern"
  },
  {
    themeName: "Lush",
    primaryColor: "#56ab2f",
    primaryGradient: "linear-gradient(to right, #56ab2f, #a8e063)",
    drawerWidth: 280,
    drawerBackground: "img-material.png",
    transitionEffect: "all 0.3s",
    dashboardType: "modern"
  },
  {
    themeName: "Master Card",
    primaryColor: "#eea849",
    primaryGradient: "linear-gradient(to right, #eea849, #f46b45)",
    drawerWidth: 280,
    drawerBackground: "img-touhou.jpg",
    transitionEffect: "all 0.3s",
    dashboardType: "modern"
  }
];

export default customThemes;