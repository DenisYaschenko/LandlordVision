import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { Admin } from "../../src/shared/models/admin";
import { Profile } from "../shared/models/profile";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
interface IInitialRootState {
  app: {
    isLoggedIn: boolean;
    loading: boolean;
    user: Admin | {};
    error: Error | null;
  };
  profile: {
    error: Error | null;
    loading: boolean;
    items: Profile[];
  };
}
const initialState: IInitialRootState = {
  app: {
    loading: false,
    isLoggedIn: false,
    user: {},
    error: null,
  },
  profile: {
    loading: false,
    items: [],
    error: null,
  },
};

const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

export default store;
