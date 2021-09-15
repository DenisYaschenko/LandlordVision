import {
  Address,
  Onboarding,
  User,
  Prescription,
} from "../../shared/models/user";

export enum fetchDescriptionActionTypes {
  FETCH_DESCRIPTION_START = "FETCH_DESCRIPTION_START",
  FETCH_DESCRIPTION_SUCCESS = "FETCH_DESCRIPTION_SUCCESS",
  FETCH_DESCRIPTION_ERROR = "FETCH_DESCRIPTION_ERROR ",
}

export interface fetchDescriptionStartAction {
  type: typeof fetchDescriptionActionTypes.FETCH_DESCRIPTION_START;
  payload: { id: number };
}
export interface fetchDescriptionActionSuccess {
  type: typeof fetchDescriptionActionTypes.FETCH_DESCRIPTION_SUCCESS;
  payload: {
    user: User;
    onboarding: Onboarding;
    prescription: Prescription;
    address: Address;
  };
}
export interface fetchDescriptionActionError {
  type: typeof fetchDescriptionActionTypes.FETCH_DESCRIPTION_ERROR;
  payload: Error;
}

export type FetchDescriptionActionCreator =
  | fetchDescriptionStartAction
  | fetchDescriptionActionSuccess
  | fetchDescriptionActionError;
