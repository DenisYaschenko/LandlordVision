import { all, call, fork, put, take } from "redux-saga/effects";
import { SagaIterator } from "@redux-saga/types";
import { AppActionTypes } from "./appTypes";
import AdminService from "../../api/adminService";
import { routes } from "../../router";
import { logout } from "../../helpers/auth";
import {
  appInitSuccess,
  appInitError,
  loginError,
  loginSuccess,
  logoutSuccess,
  logoutError,
} from "./appActionCreator";

function* appInit(): SagaIterator {
  while (true) {
    yield take(AppActionTypes.APP_INIT_START);
    try {
      const data = yield call(AdminService.getAdmin);
      const { user } = data;
      yield put(appInitSuccess(user));
    } catch (error) {
      yield put(appInitError(error));
    }
  }
}

function* userLogin(): SagaIterator {
  while (true) {
    const {
      payload: { email, password, history },
    } = yield take(AppActionTypes.AUTH_START);
    try {
      const data = yield call(AdminService.login, email, password);
      const { user, accessToken, refreshToken } = data;
      yield put(loginSuccess(user));
      localStorage.setItem(
        "user",
        JSON.stringify({ user, accessToken, refreshToken })
      );

      yield history.push(routes.main);
    } catch (error) {
      yield put(loginError(error));
    }
  }
}

function* userLogout(): SagaIterator {
  while (true) {
    const {
      payload: { history },
    } = yield take(AppActionTypes.LOGOUT_START);
    try {
      logout(history);
      yield put(logoutSuccess());
    } catch (error) {
      yield put(logoutError(error));
    }
  }
}

export default function* root(): SagaIterator {
  yield all([fork(userLogin), fork(appInit), fork(userLogout)]);
}
