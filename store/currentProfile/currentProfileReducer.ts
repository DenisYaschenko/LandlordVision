import { initialState } from "./currentProfileInitialState";
import {
  FetchDescriptionProfileActionCreator,
  fetchDescriptionProfileActionTypes,
  updateProfileStatusActionCreator,
  updateProfileStatusActionTypes,
} from "./currentProfileTypes";

export const currentProfile = (
  state = initialState,
  action: FetchDescriptionProfileActionCreator | updateProfileStatusActionCreator
) => {
  switch (action.type) {
    case fetchDescriptionProfileActionTypes.FETCH_DESCRIPTION_PROFILE_START: {
      return { ...state, loading: true };
    }
    case fetchDescriptionProfileActionTypes.FETCH_DESCRIPTION_PROFILE_SUCCESS: {
      return {
        ...state,
        loading: false,
        profile: action.payload.profile,
        address: action.payload.address,
        bankAccount: action.payload.bankAccount,
      };
    }
    case fetchDescriptionProfileActionTypes.FETCH_DESCRIPTION_PROFILE_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload,
        profile: null,
        address: null,
        bankAccount: null,
      };
    }

    case updateProfileStatusActionTypes.UPDATE_PROFILE_STATUS_START: {
      return { ...state, loading: true };
    }
    case updateProfileStatusActionTypes.UPDATE_PROFILE_STATUS_SUCCESS: {
      return {
        ...state,
        loading: false,
        profile: { ...state.profile, status: action.payload.status },
      };
    }
    case updateProfileStatusActionTypes.UPDATE_PROFILE_STATUS_ERROR: {
      return { ...state, loading: false, error: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default currentProfile;
