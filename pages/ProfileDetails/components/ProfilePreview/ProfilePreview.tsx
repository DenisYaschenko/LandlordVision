import React, { useEffect, useState } from "react";
import ProfileService from "../../../../api/profileService";
import { Profile, profileStatus } from "../../../../shared/models/profile";
import localAvatar from "../../../../assets/images/avatar-placeholder.jpg";
import styles from "./ProfilePreview.module.scss";
import { useHistory } from "react-router-dom";

const ProfilePreview = ({
  profile,
  updateStatus,
}: {
  profile: Profile;
  updateStatus: (id: number, status: profileStatus) => void;
}) => {
  const history = useHistory();
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    if (profile.avatarUrl && profile.avatarUrl !== "null") {
      ProfileService.getProfileAvatar(profile.id).then((res) => {
        setAvatar(URL.createObjectURL(res));
      });
    }
  }, [profile]);
  const navigateToFinance = () => {
    history.push(`/finance/${profile.id}`);
  };

  return (
    <div className={styles.profileView}>
      <h3 className={styles.profileTitle}>Profile</h3>
      <div className={styles.imgWrapper}>
        {avatar ? (
          <img src={avatar} className={styles.avatar} />
        ) : (
          <img src={localAvatar} className={styles.avatar} />
        )}
      </div>
      <h3 className={styles.profileName}>
        {profile.firstName} {profile.lastName}
      </h3>
      <div className={styles.profileActivity}>
        <div className={styles.profileActivityItem}>
          <h3>{profile.approvedPrescriptions}</h3>
          <p>Approved</p>
        </div>
        <div className={styles.profileActivityItem}>
          <h3>{profile.declinedPrescriptions}</h3>
          <p>Declined</p>
        </div>
        <div className={styles.profileActivityItem}>
          <h3>{profile.pendingPrescriptions}</h3>
          <p>Review</p>
        </div>
        <div className={styles.profileActivityItem}>
          <h3>{profile.inReviewPrescriptions}</h3>
          <p>Pending</p>
        </div>
      </div>
      <select
        className={`form-select form-select-lg`}
        aria-label="Default select example"
        value={profile.status}
        onChange={(e) => {
          if (
            e.target.value === profileStatus.approved ||
            e.target.value === profileStatus.declined ||
            e.target.value === profileStatus.inReview ||
            e.target.value === profileStatus.pending
          ) {
            updateStatus(profile.id, e.target.value);
          }
        }}
      >
        <option value={profileStatus.approved}>Approved</option>
        <option value={profileStatus.declined}>Declined</option>
        <option value={profileStatus.inReview}>In Review</option>
        <option value={profileStatus.pending}>Pending</option>
      </select>
      <h3 className={styles.profileTitle}>Additional Information</h3>
      <table className={styles.profileTable}>
        <thead className={styles.profileThead}>
          <tr className={styles.profileTr}>
            <th className={styles.profileTh} scope="col">
              PhoneNumber
            </th>
            <th className={styles.profileTh} scope="col">
              First Address
            </th>
            <th className={styles.profileTh} scope="col">
              Second Address
            </th>
          </tr>
        </thead>
        <tbody className={styles.profileTbody}>
          <tr className={styles.profileTr}>
            <td data-label="Phone" scope="row" className={styles.profileTd}>
              {profile.phone}
            </td>
            <td data-label="Business Address First" className={styles.profileTd}>
              {profile.businessAddressFirst ? profile.businessAddressFirst : "-"}
            </td>
            <td
              data-label="Business Address Second"
              className={styles.profileTd}
            >
              {profile.businessAddressSecond
                ? profile.businessAddressSecond
                : "-"}
            </td>
          </tr>
        </tbody>
      </table>

      <button
        type="button"
        className={`btn btn-info ${styles.manageFinance}`}
        onClick={() => {
          navigateToFinance();
        }}
      >
        Finance Info
      </button>
    </div>
  );
};
export default ProfilePreview;
