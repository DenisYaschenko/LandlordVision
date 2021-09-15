import { fetchDescriptionActionTypes } from "./current/UserTypes";
import {
  Address,
  Onboarding,
  User,
  Prescription,
} from "../../shared/models/user";

export const fetchDescriptionStart = (id: number) => {
  return {
    type: fetchDescriptionActionTypes.FETCH_DESCRIPTION_START,
    payload: id,
  };
};

export const fetchDescriptionSuccess = (data: {
  user: User;
  onboarding: Onboarding;
  prescription: Prescription;
  address: Address;
}) => {
  return {
    type: fetchDescriptionActionTypes.FETCH_DESCRIPTION_SUCCESS,
    payload: data,
  };
};

export const fetchDescriptionError = (error: Error) => {
  return {
    type: fetchDescriptionActionTypes.FETCH_DESCRIPTION_ERROR,
    payload: error,
  };
};
