import { sortTypes } from "../../shared/models/rootStore";
import { initialState } from "./profilesInitialState";
import {
  FetchProfilesActionCreator,
  fetchProfilesActionTypes,
} from "./profilesTypes";

const profiles = (state = initialState, action: FetchProfilesActionCreator) => {
  switch (action.type) {
    case fetchProfilesActionTypes.FETCH_PROFILES_START: {
      return { ...state, loading: true };
    }
    case fetchProfilesActionTypes.FETCH_PROFILES_SUCCESS: {
      return { ...state, loading: false, items: action.payload.profiles };
    }
    case fetchProfilesActionTypes.FETCH_PROFILES_ERROR: {
      return { ...state, loading: false, error: action.payload };
    }
    case fetchProfilesActionTypes.ID_INCREASING_PROFILE: {
      return {
        ...state,
        sortType: sortTypes.INCREASE,
        items: state.items.sort(function (a, b) {
          return b.id - a.id;
        }),
      };
    }
    case fetchProfilesActionTypes.ID_DECREASING_PROFILE: {
      return {
        ...state,
        sortType: sortTypes.DECREASE,
        items: state.items.sort(function (a, b) {
          return a.id - b.id;
        }),
      };
    }
    default: {
      return state;
    }
  }
};

export default profiles;
