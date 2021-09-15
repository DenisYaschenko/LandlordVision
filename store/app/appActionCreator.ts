import { Admin } from "../../shared/models/admin";
import { History } from "history";
import { AppActionTypes } from "./appTypes";

export const appInitStart = () => {
  return { type: AppActionTypes.APP_INIT_START };
};

export const appInitSuccess = (user: Admin) => {
  return { type: AppActionTypes.APP_INIT_SUCCESS, payload: user };
};

export const appInitError = (error: Error) => {
  return { type: AppActionTypes.APP_INIT_ERROR, payload: error };
};

export const loginStart = (
  email: string,
  password: string,
  history: History
) => {
  return {
    type: AppActionTypes.AUTH_START,
    payload: { email, password, history },
  };
};

export const loginSuccess = (admin: Admin) => {
  return { type: AppActionTypes.AUTH_SUCCESS, payload: admin };
};

export const loginError = (error: Error) => {
  return { type: AppActionTypes.AUTH_ERROR, payload: error };
};

export const logoutStart = (history: History) => {
  return { type: AppActionTypes.LOGOUT_START, payload: { history } };
};

export const logoutSuccess = () => {
  return { type: AppActionTypes.LOGOUT_SUCCESS };
};

export const logoutError = (error: Error) => {
  return { type: AppActionTypes.LOGOUT_ERROR, payload: error };
};
