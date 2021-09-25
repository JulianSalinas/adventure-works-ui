export interface NavigationRoute {
  path: string;
  component?: () => JSX.Element;
}