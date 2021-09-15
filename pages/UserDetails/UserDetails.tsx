import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header/Header";
import NotFound from "../../components/NotFound/NotFound";
import { RootStore } from "../../shared/models/rootStore";
import { fetchDescriptionStart } from "../../store/currentUser/currentUserActionCreator";
import ProfileDescription from "./components/ProfileDescription/ProfileDecription";
import ProfilePreview from "./components/ProfilePreview/ProfilePreview";
import styles from "./UserDetails.module.scss";

const UserDetails = () => {
  const history = useHistory();
  const userId = +history.location.pathname.split("/")[2];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDescriptionStart(userId));
  }, []);
  const userDescription = useSelector(
    (store: RootStore) => store.userDescription
  );

  return (
    <div className={styles.mainWrapper}>
      <Header title="user Details" />
      <div className={styles.profile}>
        {userDescription.user ? (
          <>
            <ProfilePreview
              user={userDescription.user}
              prescription={userDescription.prescription}
            />
            <ProfileDescription
              user={userDescription.user}
              onboarding={userDescription.onboarding}
              prescription={userDescription.prescription}
              address={userDescription.address}
            />
          </>
        ) : (
          <NotFound title="User Not Found" />
        )}
      </div>
    </div>
  );
};

export default UserDetails;
