import { all, call, fork, put, take } from "redux-saga/effects";
import { SagaIterator } from "@redux-saga/types";
import ProfileService from "../../api/profileService";
import {
  fetchDescriptionProfileActionTypes,
  updateProfileStatusActionTypes,
} from "./currentProfileTypes";
import {
  fetchDescriptionProfileError,
  fetchDescriptionProfileSuccess,
  updateProfileStatusSuccess,
  updateProfileStatusError,
} from "./currentProfileActionCreator";

function* fetchUserDescriptionById(): SagaIterator {
  while (true) {
    const { payload: id } = yield take(
      fetchDescriptionProfileActionTypes.FETCH_DESCRIPTION_PROFILE_START
    );
    try {
      const data = yield call(ProfileService.getProfileDescription, id);
      yield put(fetchDescriptionProfileSuccess(data));
    } catch (error) {
      yield put(fetchDescriptionProfileError(error));
    }
  }
}

function* updateProfileStatus(): SagaIterator {
  while (true) {
    const {
      payload: { id, profileStatus },
    } = yield take(updateProfileStatusActionTypes.UPDATE_PROFILE_STATUS_START);
    try {
      const data = yield call(ProfileService.updateStatus, id, profileStatus);
      yield put(updateProfileStatusSuccess(data));
    } catch (error) {
      yield put(updateProfileStatusError(error));
    }
  }
}

export default function* root(): SagaIterator {
  yield all([fork(fetchUserDescriptionById), fork(updateProfileStatus)]);
}
