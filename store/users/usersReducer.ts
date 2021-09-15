import { sortTypes } from "../../shared/models/rootStore";
import { initialState } from "./usersInitialState";
import { FetchUserActionCreator, fetchUserActionTypes } from "./UsersTypes";

const users = (state = initialState, action: FetchUserActionCreator) => {
  switch (action.type) {
    case fetchUserActionTypes.FETCH_USERS_START: {
      return { ...state, loading: true };
    }
    case fetchUserActionTypes.FETCH_USERS_SUCCESS: {
      return {
        ...state,
        loading: false,
        items: action.payload.users,
        usersCount: action.payload.usersCount,
      };
    }
    case fetchUserActionTypes.FETCH_USERS_ERROR: {
      return { ...state, loading: false, error: action.payload };
    }
    case fetchUserActionTypes.ID_INCREASING_USER: {
      return {
        ...state,
        sortType: sortTypes.DECREASE,
        items: state.items.sort(function (a, b) {
          return b.id - a.id;
        }),
      };
    }
    case fetchUserActionTypes.ID_DECREASING_USER: {
      return {
        ...state,
        sortType: sortTypes.INCREASE,
        items: state.items.sort(function (a, b) {
          return a.id - b.id;
        }),
      };
    }
    case fetchUserActionTypes.FIRST_NAME_SORTING_USER: {
      if (action.payload.reverse) {
        return {
          ...state,
          sortType: sortTypes.FIRST_NAME_INCREASE,
          items: state.items.sort((a, b) => {
            if (a.firstName && b.firstName) {
              var nameA = a.firstName.toUpperCase();
              var nameB = b.firstName.toUpperCase();
              if (nameA < nameB) {
                return -1;
              }
              if (nameA > nameB) {
                return 1;
              }
              return 0;
            } else if (a.firstName && !b.firstName) {
              return -1;
            } else {
              return 1;
            }
          }),
        };
      } else {
        return {
          ...state,
          sortType: sortTypes.FIRST_NAME_DECREASE,
          items: state.items.sort((a, b) => {
            if (a.firstName && b.firstName) {
              var nameB = b.firstName.toUpperCase();
              var nameA = a.firstName.toUpperCase();
              if (nameA < nameB) {
                return 1;
              }
              if (nameA > nameB) {
                return -1;
              }
              return 0;
            } else if (b.firstName && !a.firstName) {
              return -1;
            } else {
              return 1;
            }
          }),
        };
      }
    }
    case fetchUserActionTypes.GENDER_SORTING_USER: {
      if (action.payload.reverse) {
        return {
          ...state,
          sortType: sortTypes.GENDER_DECREASE,
          items: state.items.sort((a, b) => {
            if (a.gender && b.gender) {
              var nameB = b.gender.toUpperCase();
              var nameA = a.gender.toUpperCase();
              if (nameA < nameB) {
                return 1;
              }
              if (nameA > nameB) {
                return -1;
              }
              return 0;
            } else if (b.gender && !a.gender) {
              return -1;
            } else {
              return 1;
            }
          }),
        };
      } else {
        return {
          ...state,
          sortType: sortTypes.GENDER_INCREASE,
          items: state.items.sort((a, b) => {
            if (a.gender && b.gender) {
              var nameA = a.gender.toUpperCase();
              var nameB = b.gender.toUpperCase();
              if (nameA < nameB) {
                return -1;
              }
              if (nameA > nameB) {
                return 1;
              }
              return 0;
            } else if (a.gender && !b.gender) {
              return -1;
            } else {
              return 1;
            }
          }),
        };
      }
    }
    case fetchUserActionTypes.LAST_NAME_SORTING_USER: {
      if (action.payload.reverse) {
        return {
          ...state,
          sortType: sortTypes.LAST_NAME_INCREASE,
          items: state.items.sort((a, b) => {
            if (a.lastName && b.lastName) {
              var nameB = b.lastName.toUpperCase();
              var nameA = a.lastName.toUpperCase();
              if (nameA < nameB) {
                return 1;
              }
              if (nameA > nameB) {
                return -1;
              }
              return 0;
            } else if (b.lastName && !a.lastName) {
              return -1;
            } else {
              return 1;
            }
          }),
        };
      } else {
        return {
          ...state,
          sortType: sortTypes.LAST_NAME_DECREASE,
          items: state.items.sort((a, b) => {
            if (a.lastName && b.lastName) {
              var nameA = a.lastName.toUpperCase();
              var nameB = b.lastName.toUpperCase();
              if (nameA < nameB) {
                return -1;
              }
              if (nameA > nameB) {
                return 1;
              }
              return 0;
            } else if (a.lastName && !b.lastName) {
              return -1;
            } else {
              return 1;
            }
          }),
        };
      }
    }

    case fetchUserActionTypes.EMAIL_SORTING_USER: {
      if (action.payload.reverse) {
        return {
          ...state,
          sortType: sortTypes.EMAIL_DECREASE,
          items: state.items.sort((a, b) => {
            return b.email.localeCompare(a.email);
          }),
        };
      } else {
        return {
          ...state,
          sortType: sortTypes.EMAIL_INCREASE,
          items: state.items.sort((a, b) => {
            return a.email.localeCompare(b.email);
          }),
        };
      }
    }
    case fetchUserActionTypes.PRESCRIPTION_ID_SORT_USER: {
      if (action.payload.reverse) {
        return {
          ...state,
          sortType: sortTypes.PRESCRIPTION_ID_INCREASE,
          items: state.items.sort((a, b) => {
            if (a.prescriptionId && b.prescriptionId) {
              var nameB = b.prescriptionId;
              var nameA = a.prescriptionId;
              if (nameA < nameB) {
                return 1;
              }
              if (nameA > nameB) {
                return -1;
              }
              return 0;
            } else if (b.prescriptionId && !a.prescriptionId) {
              return -1;
            } else {
              return 1;
            }
          }),
        };
      } else {
        return {
          ...state,
          sortType: sortTypes.PRESCRIPTION_ID_DECREASE,
          items: state.items.sort((a, b) => {
            if (a.prescriptionId && b.prescriptionId) {
              var nameA = a.prescriptionId;
              var nameB = b.prescriptionId;
              if (nameA < nameB) {
                return -1;
              }
              if (nameA > nameB) {
                return 1;
              }
              return 0;
            } else if (a.prescriptionId && !b.prescriptionId) {
              return -1;
            } else {
              return 1;
            }
          }),
        };
      }
    }
    case fetchUserActionTypes.ONBOARDING_ID_SORT_USER: {
      if (action.payload.reverse) {
        return {
          ...state,
          sortType: sortTypes.ONBOARDING_ID_INCREASE,
          items: state.items.sort((a, b) => {
            if (a.onboardingId && b.onboardingId) {
              var nameB = b.onboardingId;
              var nameA = a.onboardingId;
              if (nameA < nameB) {
                return 1;
              }
              if (nameA > nameB) {
                return -1;
              }
              return 0;
            } else if (b.onboardingId && !a.onboardingId) {
              return -1;
            } else {
              return 1;
            }
          }),
        };
      } else {
        return {
          ...state,
          sortType: sortTypes.ONBOARDING_ID_DECREASE,
          items: state.items.sort((a, b) => {
            if (a.onboardingId && b.onboardingId) {
              var nameA = a.onboardingId;
              var nameB = b.onboardingId;
              if (nameA < nameB) {
                return -1;
              }
              if (nameA > nameB) {
                return 1;
              }
              return 0;
            } else if (a.onboardingId && !b.onboardingId) {
              return -1;
            } else {
              return 1;
            }
          }),
        };
      }
    }
    default: {
      return state;
    }
  }
};

export default users;
