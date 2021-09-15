import { useHistory } from "react-router";
import { User } from "../../../../shared/models/user";
import styles from "./UserItem.module.scss";

const UserItem = ({ user }: { user: User }) => {
  const history = useHistory();
  const navigateToItem = (id: number) => {
    history.push(`/users/${id}`);
  };
  return (
    <tr onClick={() => navigateToItem(user.id)} className={styles.userTr}>
      <td scope="row" data-label="user Id" className={styles.userTd}>
        {user.id}
      </td>
      <td data-label="Gender" className={styles.userTd}>
        {user.gender ? user.gender : "-"}
      </td>
      <td data-label="First Name" className={styles.userTd}>
        {user.firstName ? user.firstName : "-"}
      </td>
      <td data-label="Last Name" className={styles.userTd}>
        {user.lastName ? user.lastName : "-"}
      </td>
      <td data-label="Email" className={styles.userTd}>
        {user.email ? user.email : "-"}
      </td>
      <td data-label="Prescription Id" className={styles.userTd}>
        {user.prescriptionId ? user.prescriptionId : "-"}
      </td>
      <td data-label="Onboarding Id" className={styles.userTd}>
        {user.onboardingId ? user.onboardingId : "-"}
      </td>
    </tr>
  );
};

export default UserItem;
