import { Admin } from "../../shared/models/admin";
export enum AppActionTypes {
  APP_INIT_START = "APP_INIT_START",
  APP_INIT_SUCCESS = "APP_INIT_SUCCESS",
  APP_INIT_ERROR = "APP_INIT_ERROR ",
  AUTH_START = "AUTH_START",
  AUTH_SUCCESS = "AUTH_SUCCESS",
  AUTH_ERROR = "AUTH_ERROR ",
  LOGOUT_START = "LOGOUT_START",
  LOGOUT_SUCCESS = "LOGOUT_SUCCESS",
  LOGOUT_ERROR = "LOGOUT_ERROR ",
}

export interface appInitStartAction {
  type: typeof AppActionTypes.APP_INIT_START;
  payload: History;
}
export interface appInitSuccessAction {
  type: typeof AppActionTypes.APP_INIT_SUCCESS;
  payload: Admin;
}
export interface appInitErrorAction {
  type: typeof AppActionTypes.APP_INIT_ERROR;
  payload: Error;
}

export interface AppState {
  loading: boolean;
  isLoggedIn: boolean;
  error: Error | null;
}

export interface loginStartAction {
  type: typeof AppActionTypes.AUTH_START;
  payload: { email: string; password: string; history: History };
}
export interface loginSuccessAction {
  type: typeof AppActionTypes.AUTH_SUCCESS;
  payload: Admin;
}
export interface loginErrorAction {
  type: typeof AppActionTypes.AUTH_ERROR;
  payload: Error;
}

export interface logoutStartAction {
  type: typeof AppActionTypes.LOGOUT_START;
  payload: { history: History };
}
export interface logoutSuccessAction {
  type: typeof AppActionTypes.LOGOUT_SUCCESS;
}
export interface logoutErrorAction {
  type: typeof AppActionTypes.LOGOUT_ERROR;
  payload: Error;
}

export type AppActionCreatorTypes =
  | appInitStartAction
  | appInitSuccessAction
  | appInitErrorAction
  | loginStartAction
  | loginSuccessAction
  | loginErrorAction
  | logoutStartAction
  | logoutSuccessAction
  | logoutErrorAction;
