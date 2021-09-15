import { all, call, fork, put, select, take } from "redux-saga/effects";
import { SagaIterator } from "@redux-saga/types";
import { fetchDescriptionActionTypes } from "./currentUserTypes";
import UserService from "../../api/userService";
import {
  fetchDescriptionError,
  fetchDescriptionSuccess,
} from "./currentUserActionCreator";

function* fetchUserDescriptionById(): SagaIterator {
  while (true) {
    const { payload: id } = yield take(
      fetchDescriptionActionTypes.FETCH_DESCRIPTION_START
    );
    try {
      const data = yield call(UserService.getUserDescription, id);
      yield put(fetchDescriptionSuccess(data));
    } catch (error) {
      yield put(fetchDescriptionError(error));
    }
  }
}

export default function* root(): SagaIterator {
  yield all([fork(fetchUserDescriptionById)]);
}
