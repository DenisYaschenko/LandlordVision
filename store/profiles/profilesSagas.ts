import { all, call, fork, put, take } from "redux-saga/effects";
import { SagaIterator } from "@redux-saga/types";
import { fetchProfileError, fetchProfilesSuccess } from "./profilesActionCreator";
import { fetchProfileActionTypes } from "./profilesTypes";
import ProfileService from "../../api/profileService";

function* fetchProfiles(): SagaIterator {
  while (true) {
    yield take(fetchProfileActionTypes.FETCH_PROFILES_START);
    try {
      const data = yield call(ProfileService.getAll);
      yield put(fetchProfilesSuccess(data));
    } catch (error) {
      yield put(fetchProfileError(error));
    }
  }
}

export default function* root(): SagaIterator {
  yield all([fork(fetchProfiles)]);
}
