import { Onboarding, User } from "../../shared/models/user";
import { sortTypes } from "../../shared/models/rootStore";

export enum fetchUserActionTypes {
  FETCH_USERS_START = "FETCH_USERS_START",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_ERROR = "FETCH_USERS_ERROR ",
  ID_INCREASING_USER = "ID_INCREASING_USER",
  ID_DECREASING_USER = "ID_DECREASING_USER",
  FIRST_NAME_SORTING_USER = "FIRST_NAME_SORTING_USER",
  GENDER_SORTING_USER = "GENDER_SORTING_USER",
  LAST_NAME_SORTING_USER = "LAST_NAME_SORTING_USER",
  EMAIL_SORTING_USER = "EMAIL_SORTING_USER",
  ONBOARDING_ID_SORT_USER = "ONBOARDING_ID_SORT_USER",
  PRESCRIPTION_ID_SORT_USER = "PRESCRIPTION_ID_SORT_USER",
}

export interface fetchDUserStartAction {
  type: typeof fetchUserActionTypes.FETCH_USERS_START;
  payload: { from: number; to: number };
}
export interface fetchUserSuccessAction {
  type: typeof fetchUserActionTypes.FETCH_USERS_SUCCESS;
  payload: { users: User[]; usersCount: number };
}
export interface fetchUserErrorAction {
  type: typeof fetchUserActionTypes.FETCH_USERS_ERROR;
  payload: Error;
}

export interface increaseUser {
  type: typeof fetchUserActionTypes.ID_INCREASING_USER;
  payload: sortTypes;
}

export interface decreaseUser {
  type: typeof fetchUserActionTypes.ID_DECREASING_USER;
  payload: sortTypes;
}
export interface decreaseUser {
  type: typeof fetchUserActionTypes.ID_DECREASING_USER;
  payload: sortTypes;
}
export interface firstNameSortUser {
  type: typeof fetchUserActionTypes.FIRST_NAME_SORTING_USER;
  payload: { sortTypes: sortTypes; reverse: boolean };
}
export interface genderSortUser {
  type: typeof fetchUserActionTypes.GENDER_SORTING_USER;
  payload: { sortTypes: sortTypes; reverse: boolean };
}
export interface lastNameSortUser {
  type: typeof fetchUserActionTypes.LAST_NAME_SORTING_USER;
  payload: { sortTypes: sortTypes; reverse: boolean };
}
export interface emailSortUser {
  type: typeof fetchUserActionTypes.EMAIL_SORTING_USER;
  payload: { sortTypes: sortTypes; reverse: boolean };
}
export interface prescriptionIdSortUser {
  type: typeof fetchUserActionTypes.PRESCRIPTION_ID_SORT_USER;
  payload: { sortTypes: sortTypes; reverse: boolean };
}
export interface onboardingIdSortUser {
  type: typeof fetchUserActionTypes.ONBOARDING_ID_SORT_USER;
  payload: { sortTypes: sortTypes; reverse: boolean };
}

export type FetchUserActionCreator =
  | fetchDUserStartAction
  | fetchUserSuccessAction
  | fetchUserErrorAction
  | increaseUser
  | decreaseUser
  | firstNameSortUser
  | genderSortUser
  | lastNameSortUser
  | emailSortUser
  | prescriptionIdSortUser
  | onboardingIdSortUser;
