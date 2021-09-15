import { History } from "history";
import { routes } from "../router";

export const isLogin = () => {
  if (localStorage.getItem("user")) {
    return true;
  }
  return false;
};

export const logout = (history: History) => {
  localStorage.removeItem("user");
  history.push(routes.login);
};
