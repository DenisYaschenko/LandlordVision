import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isLogin } from "./helpers/auth";
import { Router } from "./router";
import { RootStore } from "./shared/models/rootStore";
import { appInitStart } from "./store/app/appActionCreator";

const App = () => {
  const dispatch = useDispatch();
  const store = useSelector((state: RootStore) => state);
  useEffect(() => {
    if (isLogin() && !store.app.isLoggedIn) {
      dispatch(appInitStart());
    }
  }, []);

  return (
    <>
      <Router />
    </>
  );
};

export default App;
