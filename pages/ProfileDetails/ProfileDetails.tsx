import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header/Header";
import NotFound from "../../components/NotFound/NotFound";
import { profileStatus } from "../../shared/models/profile";
import { RootStore } from "../../shared/models/rootStore";
import {
  fetchDescriptionProfileStart,
  updateProfileStatusStart,
} from "../../store/currentProfile/currentProfileActionCreator";
import ProfileDescription from "./components/ProfileDescription/ProfileDecription";
import ProfilePreview from "./components/ProfilePreview/ProfilePreview";
import styles from "./ProfileDetails.module.scss";

const ProfileDetails = () => {
  const profileDescription = useSelector(
    (store: RootStore) => store.profileDescription
  );
  const history = useHistory();
  const profileId = +history.location.pathname.split("/")[2];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDescriptionProfileStart(profileId));
  }, []);

  const updateStatus = (id: number, status: profileStatus) => {
    switch (status) {
      case profileStatus.approved:
        dispatch(updateProfileStatusStart(profileId, profileStatus.approved));
        break;
      case profileStatus.declined:
        dispatch(updateProfileStatusStart(profileId, profileStatus.declined));
        break;
      case profileStatus.inReview:
        dispatch(updateProfileStatusStart(profileId, profileStatus.inReview));
        break;
      case profileStatus.pending:
        dispatch(updateProfileStatusStart(profileId, profileStatus.pending));
        break;
      default:
        break;
    }
  };

  return (
    <div className={styles.mainWrapper}>
      <Header title="profile Details" />
      <div className={styles.profile}>
        {profileDescription.profile ? (
          <>
            <ProfilePreview
              profile={profileDescription.profile}
              updateStatus={updateStatus}
            />
            <ProfileDescription
              profile={profileDescription.profile}
              address={profileDescription.address}
              bankAccount={profileDescription.bankAccount}
              updateStatus={updateStatus}
            />
          </>
        ) : (
          <NotFound title="Profile Not Found" />
        )}
      </div>
    </div>
  );
};

export default ProfileDetails;
