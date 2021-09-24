import { createContext, useContext } from "react";
import { UserIdentity } from "../models/UserIdentity";

export const defaultUserIdentity: UserIdentity = {
  allowPhoto: true,
  username: "Julian Salinas",
  email: "july12sali@gmail.com",
  userid: "J5oUpZO7EbT2ChY0whwwmTpRl7w1",
};

export type UserIdentityContextType = {
  userIdentity: UserIdentity;
  setUserIdentity: (user: UserIdentity) => void;
};

export const UserIdentityContext = createContext<UserIdentityContextType>({
  userIdentity: defaultUserIdentity,
  setUserIdentity: (_) => console.warn("No setUserIdentity function was provided"),
});
export const useUserIdentityContext = () => useContext(UserIdentityContext);
