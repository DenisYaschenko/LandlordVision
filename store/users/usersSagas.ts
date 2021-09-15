import { all, call, fork, put, take } from "redux-saga/effects";
import { SagaIterator } from "@redux-saga/types";
import {
  fetchUsersSuccess,
  fetchUsersError,
} from "./usersActionCreator";
import { fetchUserActionTypes } from "./usersTypes";
import UserService from "../../api/userService";

function* fetchUser(): SagaIterator {
  while (true) {
    const {
      payload: { limit, offset },
    } = yield take(fetchUserActionTypes.FETCH_USERS_START);
    try {
      const data = yield call(UserService.getAll, limit, offset);
      yield put(fetchUsersSuccess(data));
    } catch (error) {
      yield put(fetchUsersError(error));
    }
  }
}

export default function* root(): SagaIterator {
  yield all([fork(fetchUser)]);
}
