import {
  Profile,
  ProfileAddress,
  ProfileBankAccount,
} from "../../shared/models/profile";

export enum fetchDescriptionProfileActionTypes {
  FETCH_DESCRIPTION_PROFILE_START = "FETCH_DESCRIPTION_PROFILE_START",
  FETCH_DESCRIPTION_PROFILE_SUCCESS = "FETCH_DESCRIPTION_PROFILE_SUCCESS",
  FETCH_DESCRIPTION_PROFILE_ERROR = "FETCH_DESCRIPTION_PROFILE_ERROR ",
}

export interface fetchDescriptionProfileStartAction {
  type: typeof fetchDescriptionProfileActionTypes.FETCH_DESCRIPTION_PROFILE_START;
  payload: { id: number };
}
export interface fetchDescriptionProfileActionSuccess {
  type: typeof fetchDescriptionProfileActionTypes.FETCH_DESCRIPTION_PROFILE_SUCCESS;
  payload: {
    profile: Profile;
    address: ProfileAddress;
    bankAccount: ProfileBankAccount;
  };
}
export interface fetchDescriptionProfileActionError {
  type: typeof fetchDescriptionProfileActionTypes.FETCH_DESCRIPTION_PROFILE_ERROR;
  payload: Error;
}

export type FetchDescriptionProfileActionCreator =
  | fetchDescriptionProfileStartAction
  | fetchDescriptionProfileActionSuccess
  | fetchDescriptionProfileActionError;

export enum updateProfileStatusActionTypes {
  UPDATE_PROFILE_STATUS_START = "UPDATE_PROFILE_STATUS_START",
  UPDATE_PROFILE_STATUS_SUCCESS = "UPDATE_PROFILE_STATUS_SUCCESS",
  UPDATE_PROFILE_STATUS_ERROR = "UPDATE_PROFILE_STATUS_ERROR",
}

export interface updateProfileStatusStartAction {
  type: typeof updateProfileStatusActionTypes.UPDATE_PROFILE_STATUS_START;
  payload: { id: number };
}
export interface updateProfileStatusActionSuccess {
  type: typeof updateProfileStatusActionTypes.UPDATE_PROFILE_STATUS_SUCCESS;
  payload: Profile;
}
export interface updateProfileStatusActionError {
  type: typeof updateProfileStatusActionTypes.UPDATE_PROFILE_STATUS_ERROR;
  payload: Error;
}

export type updateProfileStatusActionCreator =
  | updateProfileStatusStartAction
  | updateProfileStatusActionSuccess
  | updateProfileStatusActionError;
