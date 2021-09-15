import { all, fork } from "redux-saga/effects";
import app from "./app/appSagas";
import profiles from "./profiles/profilesSagas";
import users from "./users/usersSagas";
import currentUser from "./currentUser/currentUserSagas";
import currentProfile from "./currentProfile/currentProfileSagas";

export default function* rootSaga() {
  yield all([
    fork(app),
    fork(profiles),
    fork(users),
    fork(currentUser),
    fork(currentProfile),
  ]);
}
