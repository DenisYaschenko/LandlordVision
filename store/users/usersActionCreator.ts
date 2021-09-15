import { fetchUserActionTypes } from "./usersTypes";
import { Onboarding, User } from "../../shared/models/user";
import { sortTypes } from "../../shared/models/rootStore";

export const fetchUsersStart = (limit: number, offset: number) => {
  return {
    type: fetchUserActionTypes.FETCH_USERS_START,
    payload: { limit, offset },
  };
};

export const fetchUsersSuccess = (data: {
  users: User[];
  usersCount: number;
}) => {
  return {
    type: fetchUserActionTypes.FETCH_USERS_SUCCESS,
    payload: data,
  };
};

export const fetchUsersError = (error: Error) => {
  return { type: fetchUserActionTypes.FETCH_USERS_ERROR, payload: error };
};

export const increaseUser = () => {
  return { type: fetchUserActionTypes.ID_INCREASING_USER };
};

export const decreaseUser = () => {
  return { type: fetchUserActionTypes.ID_DECREASING_USER };
};

export const firstNameSortUser = (data: {
  sortType: sortTypes;
  reverse: boolean;
}) => {
  return {
    type: fetchUserActionTypes.FIRST_NAME_SORTING_USER,
    payload: data,
  };
};

export const genderSortUser = (data: {
  sortType: sortTypes;
  reverse: boolean;
}) => {
  return {
    type: fetchUserActionTypes.GENDER_SORTING_USER,
    payload: data,
  };
};

export const lastNameSort = (data: {
  sortType: sortTypes;
  reverse: boolean;
}) => {
  return {
    type: fetchUserActionTypes.LAST_NAME_SORTING_USER,
    payload: data,
  };
};

export const emailSort = (data: { sortType: sortTypes; reverse: boolean }) => {
  return { type: fetchUserActionTypes.EMAIL_SORTING_USER, payload: data };
};

export const prescriptionIdSort = (data: {
  sortType: sortTypes;
  reverse: boolean;
}) => {
  return {
    type: fetchUserActionTypes.PRESCRIPTION_ID_SORT_USER,
    payload: data,
  };
};

export const onboardingIdSort = (data: {
  sortType: sortTypes;
  reverse: boolean;
}) => {
  return {
    type: fetchUserActionTypes.ONBOARDING_ID_SORT_USER,
    payload: data,
  };
};
