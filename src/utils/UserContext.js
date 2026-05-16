import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "Default User",
  age: 26,
});

export default UserContext;
