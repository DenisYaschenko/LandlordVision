import { initialState } from "./appInitialState";
import { AppActionCreatorTypes, AppActionTypes } from "./appTypes";

const app = (state = initialState, action: AppActionCreatorTypes) => {
  switch (action.type) {
    case AppActionTypes.APP_INIT_START: {
      return { ...state, loading: true };
    }
    case AppActionTypes.APP_INIT_SUCCESS: {
      return {
        ...state,
        loading: false,
        isLoggedIn: true,
        user: action.payload,
      };
    }
    case AppActionTypes.APP_INIT_ERROR: {
      return { ...state, loading: false, error: action.payload };
    }
    case AppActionTypes.AUTH_START: {
      return { ...state, loading: true };
    }
    case AppActionTypes.AUTH_SUCCESS: {
      return {
        ...state,
        loading: false,
        isLoggedIn: true,
        admin: action.payload,
      };
    }
    case AppActionTypes.AUTH_ERROR: {
      return {
        ...state,
        loading: false,
        isLoggedIn: false,
        errors: action.payload,
      };
    }
    case AppActionTypes.LOGOUT_START: {
      return { ...state, loading: true };
    }
    case AppActionTypes.LOGOUT_SUCCESS: {
      return { ...state, loading: false, isLoggedIn: false, admin: {} };
    }
    case AppActionTypes.LOGOUT_ERROR: {
      return {
        ...state,
        loading: false,
        isLoggedIn: true,
        errors: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default app;
