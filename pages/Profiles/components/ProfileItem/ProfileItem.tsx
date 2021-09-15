import { useHistory } from "react-router-dom";
import { Profile } from "../../../../shared/models/profile";
import styles from "./ProfileItem.module.scss";

const ProfileItem = ({ profile }: { profile: Profile }) => {
  const history = useHistory();
  const navigateToItem = (id: number) => {
    history.push(`/profiles/${id}`);
  };

  return (
    <tr onClick={() => navigateToItem(profile.id)} className={styles.profileTr}>
      <td scope="row" className={styles.profileTd} data-label="Profile Id">
        {profile.id ? profile.id : "-"}
      </td>
      <td data-label="First Name" className={styles.profileTd}>
        {profile.firstName ? profile.firstName : "-"}
      </td>
      <td data-label="Last Name" className={styles.profileTd}>
        {profile.lastName ? profile.lastName : "-"}
      </td>
      <td data-label="Email" className={styles.profileTd}>
        {profile.email ? profile.email : "-"}
      </td>
      <td data-label="Status" className={styles.profileTd}>
        {profile.status ? profile.status : "-"}
      </td>
    </tr>
  );
};
export default ProfileItem;
