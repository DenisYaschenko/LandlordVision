import { fetchProfileActionTypes } from "./profilesTypes";
import { Profile } from "../../shared/models/profile";

export const fetchProfilesStart = () => {
  return {
    type: fetchProfileActionTypes.FETCH_PROFILES_START,
  };
};

export const fetchProfilesSuccess = (data: { profiles: Profile[] }) => {
  return {
    type: fetchProfileActionTypes.FETCH_PROFILES_SUCCESS,
    payload: data,
  };
};

export const fetchProfileError = (error: Error) => {
  return { type: fetchProfileActionTypes.FETCH_PROFILES_ERROR, payload: error };
};

export const increaseProfile = () => {
  return { type: fetchProfileActionTypes.ID_INCREASING_PROFILE };
};

export const decreaseProfile = () => {
  return { type: fetchProfileActionTypes.ID_DECREASING_PROFILE };
};
