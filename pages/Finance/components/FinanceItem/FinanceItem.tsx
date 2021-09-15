import { Transaction } from "../../../../shared/models/transaction";
import styles from "./FinanceItem.module.scss";

const FinanceItem = ({ transaction }: { transaction: Transaction }) => {
  return (
    <tr className={styles.financeTr}>
      <td data-label="Transaction Id" scope="row" className={styles.financeTd}>
        {transaction.id}
      </td>
      <td data-label="Amount" className={styles.financeTd}>
        {transaction.priceForProfile / 100}
      </td>
      <td data-label="Status" className={styles.financeTd}>
        {transaction.status}
      </td>
      <td data-label="Profile Id" className={styles.financeTd}>
        {transaction.profileId}
      </td>
      <td data-label="User Id" className={styles.financeTd}>
        {transaction.userId}
      </td>
    </tr>
  );
};
export default FinanceItem;
