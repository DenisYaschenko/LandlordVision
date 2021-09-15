import React from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { routes } from "../../router";
import { logoutStart } from "../../store/app/appActionCreator";
import styles from "./Header.module.scss";

const Header = ({ title }: { title: string }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <div className={styles.header}>
      <Link to={routes.main} className={`h1 ${styles.title}`}>
        {title}
      </Link>
      <Link className={styles.link} to={`/users/page/1`}>
        User
      </Link>
      <Link className={styles.link} to={routes.profiles}>
        Profiles
      </Link>
      <button
        className={`btn btn-info btn-lg ${styles.logout}`}
        onClick={() => {
          dispatch(logoutStart(history));
        }}
      >
        Log out
      </button>
    </div>
  );
};
export default Header;
