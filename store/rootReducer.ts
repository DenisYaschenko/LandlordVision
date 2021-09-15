import { combineReducers } from "redux";
import app from "./app/appReducer";
import profiles from "./profiles/profilesReducer";
import users from "./users/usersReducer";
import userDescription from "./currentUser/currentUserReducer";
import profileDescription from "./currentProfile/currentProfileReducer";

const rootReducer = combineReducers({
  app,
  profiles,
  users,
  userDescription,
  profileDescription,
});

export default rootReducer;
