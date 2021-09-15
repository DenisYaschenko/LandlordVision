import {
  Profile,
  ProfileAddress,
  ProfileBankAccount,
} from "../../shared/models/profile";
import {
  fetchDescriptionProfileActionTypes,
  updateProfileStatusActionTypes,
} from "./currentProfileTypes";

export const fetchDescriptionProfileStart = (id: number) => {
  return {
    type: fetchDescriptionProfileActionTypes.FETCH_DESCRIPTION_PROFILE_START,
    payload: id,
  };
};

export const fetchDescriptionProfileSuccess = (data: {
  profile: Profile;
  address: ProfileAddress;
  bankAccount: ProfileBankAccount;
}) => {
  return {
    type: fetchDescriptionProfileActionTypes.FETCH_DESCRIPTION_PROFILE_SUCCESS,
    payload: data,
  };
};

export const fetchDescriptionProfileError = (error: Error) => {
  return {
    type: fetchDescriptionProfileActionTypes.FETCH_DESCRIPTION_PROFILE_ERROR,
    payload: error,
  };
};

export const updateProfileStatusStart = (id: number, profileStatus: string) => {
  return {
    type: updateProfileStatusActionTypes.UPDATE_PROFILE_STATUS_START,
    payload: { id, profileStatus },
  };
};

export const updateProfileStatusSuccess = (profile: Profile) => {
  return {
    type: updateProfileStatusActionTypes.UPDATE_PROFILE_STATUS_SUCCESS,
    payload: profile,
  };
};

export const updateProfileStatusError = (error: Error) => {
  return {
    type: updateProfileStatusActionTypes.UPDATE_PROFILE_STATUS_ERROR,
    payload: error,
  };
};
