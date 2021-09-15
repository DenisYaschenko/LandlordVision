import React, { useEffect, useState } from "react";
import localAvatar from "../../../../assets/images/avatar-placeholder.jpg";
import styles from "./ProfilePreview.module.scss";
import moment from "moment";
import { User, Prescription } from "../../../../shared/models/user";
import UserService from "../../../../api/userService";

const ProfilePreview = ({
  user,
  prescription,
}: {
  user: User;
  prescription: Prescription;
}) => {
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    if (user.avatarUrl && user.avatarUrl !== "null") {
      UserService.getUserAvatar(user.id).then((res) => {
        setAvatar(URL.createObjectURL(res));
      });
    }
  }, []);

  return (
    <div className={styles.profileView}>
      <h3 className={styles.profileTitle}>User</h3>
      <div className={styles.imgWrapper}>
        {avatar ? (
          <img src={avatar} className={styles.avatar} />
        ) : (
          <img src={localAvatar} className={styles.avatar} />
        )}
      </div>
      <h3 className={styles.profileName}>
        {user.firstName} {user.lastName}
      </h3>

      <div className={styles.profileActivity}>
        <div className={styles.profileActivityItem}>
          <h3>{user.prescriptionId ? user.prescriptionId : "-"}</h3>
          <p>Prescription Id</p>
        </div>
        <div className={styles.profileActivityItem}>
          <h3>{user.onboardingId ? user.onboardingId : "-"}</h3>
          <p>Onboarding Id</p>
        </div>
        <div className={styles.profileActivityItem}>
          <h3>{user.id ? user.id : "-"}</h3>
          <p>User ID</p>
        </div>
      </div>
      <h3 className={styles.profileTitle}>Additional Information</h3>
      <p>
        {prescription && prescription.additionalInformation
          ? prescription.additionalInformation
          : "-"}
      </p>

      <table className={styles.userTable}>
        <thead className={styles.userThead}>
          <tr className={styles.userTr}>
            <td className={styles.userTd} scope="col">
              Phone
            </td>
            <th className={styles.userTd} scope="col">
              Email
            </th>
            <th className={styles.userTd} scope="col">
              Birthday
            </th>
          </tr>
        </thead>
        <tbody className={styles.userTbody}>
          <tr className={styles.userTr}>
            <td data-label="Phone" className={styles.userTd} scope="row">
              {user.phone ? user.phone : "-"}
            </td>
            <td data-label="Email" className={styles.userTd}>
              {user.email ? user.email : "-"}
            </td>
            <td data-label="Birthday" className={styles.userTd}>
              {user.birthday
                ? moment(new Date(user.birthday)).format("DD/MM/YYYY")
                : "-"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default ProfilePreview;
