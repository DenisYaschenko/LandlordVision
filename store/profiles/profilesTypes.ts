import { Profile } from "../../shared/models/profile";

export enum fetchProfileActionTypes {
  FETCH_PROFILES_START = "FETCH__PROFILE_START",
  FETCH_PROFILES_SUCCESS = "FETCH_PROFILES_SUCCESS",
  FETCH_PROFILES_ERROR = "FETCH_PROFILES_ERROR ",
  ID_DECREASING_PROFILE = "ID_DECREASING_PROFILE",
  ID_INCREASING_PROFILE = "ID_INCREASING_PROFILE",
}

export interface fetchProfilesStartAction {
  type: typeof fetchProfileActionTypes.FETCH_PROFILES_START;
}
export interface fetchProfileSuccessAction {
  type: typeof fetchProfileActionTypes.FETCH_PROFILES_SUCCESS;
  payload: { profiles: Profile[] };
}
export interface fetchProfileErrorAction {
  type: typeof fetchProfileActionTypes.FETCH_PROFILES_ERROR;
  payload: Error;
}
export interface increaseProfiles {
  type: typeof fetchProfileActionTypes.ID_INCREASING_PROFILE;
}
export interface decreaseProfiles {
  type: typeof fetchProfileActionTypes.ID_DECREASING_PROFILE;
}

export type FetchProfileActionCreator =
  | fetchProfilesStartAction
  | fetchProfileSuccessAction
  | fetchProfileErrorAction
  | increaseProfiles
  | decreaseProfiles;
