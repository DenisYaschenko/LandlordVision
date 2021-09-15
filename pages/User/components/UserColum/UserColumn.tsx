import { sortTypes } from "../../../../shared/models/rootStore";
import arrow from "../../../../assets/images/arrow.svg";
import styles from "./UserColumn.module.scss";

const UserColum = ({
  title,
  sortType,
  setSortType,
  sortForCurrentIncrease,
  sortForCurrentDecrease,
}: {
  title: string;
  sortType: sortTypes | string;
  setSortType: React.Dispatch<React.SetStateAction<string>>;
  sortForCurrentIncrease: string;
  sortForCurrentDecrease: string;
}) => {
  return (
    <th scope="col" className={`${styles.idColumn} ${styles.userTh}`}>
      {title}
      <img
        onClick={() => {
          if (sortType === "" || sortType === sortForCurrentDecrease) {
            setSortType(sortForCurrentIncrease);
          } else {
            setSortType(sortForCurrentDecrease);
          }
        }}
        src={arrow}
        className={`${styles.sortImg} ${
          sortType === sortForCurrentIncrease ? styles.increase : ""
        } ${sortType === sortForCurrentDecrease ? styles.decrease : ""}`}
      />
    </th>
  );
};

export default UserColum;
