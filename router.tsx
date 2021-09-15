import { useSelector } from "react-redux";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import Login from "./components/Login/Login";
import { isLogin } from "./helpers/auth";
import ProfileDetails from "./pages/ProfileDetails/ProfileDetails";
import Profiles from "./pages/Profiles/Profiles";
import Finance from "./pages/Finance/Finance";
import Main from "./pages/Main/Main";
import User from "./pages/User/User";
import UserDetails from "./pages/UserDetails/UserDetails";
import { RootStore } from "./shared/models/rootStore";

export const routes = {
  login: "/login",
  main: "/",
  users: "/users/page/:pageNumber",
  userDetails: "/users/:id",
  profiles: "/profiles",
  profileDetails: "/profiles/:id",
  profileFinance: "/finance/:profileId",
};

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin() ? <Component {...props} /> : <Redirect to={routes.login} />
      }
    />
  );
};

const PublicRoute = ({ component: Component, restricted, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin() ? <Redirect to={routes.main} /> : <Component {...props} />
      }
    />
  );
};

export const Router = () => {
  const app = useSelector((store: RootStore) => store.app);
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute path={routes.main} component={Main} exact />
        <PublicRoute path={routes.login} component={Login} exact />
        <PrivateRoute path={routes.users} component={User} exact />
        <PrivateRoute path={routes.profiles} component={Profiles} exact />
        <PrivateRoute path={routes.userDetails} component={UserDetails} />
        <PrivateRoute
          path={routes.profileDetails}
          component={ProfileDetails}
          exact
        />
        <PrivateRoute path={routes.profileFinance} component={Finance} exact />
      </Switch>
    </BrowserRouter>
  );
};
