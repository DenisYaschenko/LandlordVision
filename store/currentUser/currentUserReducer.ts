import { initialState } from "./currentUserInitialState";
import {
  FetchDescriptionActionCreator,
  fetchDescriptionActionTypes,
} from "./currentUserTypes";

const UserDescription = (
  state = initialState,
  action: FetchDescriptionActionCreator
) => {
  switch (action.type) {
    case fetchDescriptionActionTypes.FETCH_DESCRIPTION_START: {
      return { ...state, loading: true };
    }
    case fetchDescriptionActionTypes.FETCH_DESCRIPTION_SUCCESS: {
      return {
        ...state,
        loading: false,
        user: action.payload.user,
        onboarding: action.payload.onboarding,
        prescription: action.payload.prescription,
        address: action.payload.address,
      };
    }
    case fetchDescriptionActionTypes.FETCH_DESCRIPTION_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload,
        user: null,
        onboarding: null,
        prescription: null,
        address: null,
      };
    }
    default: {
      return state;
    }
  }
};

export default UserDescription;
