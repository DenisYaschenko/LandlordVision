import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { getUserExtendsByPage } from "../../helpers/utils";
import { User } from "../../shared/models/user";
import { RootStore, sortTypes } from "../../shared/models/rootStore";
import {
  decreaseUser,
  fetchUsersStart,
  firstNameSortUser,
  genderSortUser,
  increaseUser,
  lastNameSort,
  emailSort,
  prescriptionIdSort,
  onboardingIdSort,
} from "../../store/users/usersActionCreator";
import styles from "./User.module.scss";
import UserItem from "./components/UserItem/UserItem";
import UserColum from "./components/UserColum/UserColumn";

const Users = () => {
  const dispatch = useDispatch();
  const store = useSelector((store: RootStore) => store);
  const [selectSortType, setSelectSortType] = useState("");
  const history = useHistory();
  const currentPage = +history.location.pathname.split("/")[3];
  const [sortType, setSortType] = useState("");

  useEffect(() => {
    const { limit, offset } = getUserExtendsByPage(currentPage);
    dispatch(fetchUsersStart(limit, offset));
  }, [currentPage]);

  useEffect(() => {
    switch (sortType) {
      case sortTypes.INCREASE:
        dispatch(increaseUser());
        break;
      case sortTypes.DECREASE:
        dispatch(decreaseUser());
        break;
      case sortTypes.FIRST_NAME_INCREASE:
        dispatch(
          firstNameSortUser({
            sortType: sortTypes.FIRST_NAME_INCREASE,
            reverse: false,
          })
        );
        break;
      case sortTypes.FIRST_NAME_DECREASE:
        dispatch(
          firstNameSortUser({
            sortType: sortTypes.FIRST_NAME_DECREASE,
            reverse: true,
          })
        );
        break;
      case sortTypes.GENDER_INCREASE:
        dispatch(
          genderSortUser({
            sortType: sortTypes.GENDER_INCREASE,
            reverse: true,
          })
        );
        break;
      case sortTypes.GENDER_DECREASE:
        dispatch(
          genderSortUser({
            sortType: sortTypes.GENDER_DECREASE,
            reverse: false,
          })
        );
        break;
      case sortTypes.LAST_NAME_INCREASE:
        dispatch(
          lastNameSort({
            sortType: sortTypes.LAST_NAME_INCREASE,
            reverse: true,
          })
        );
        break;
      case sortTypes.LAST_NAME_DECREASE:
        dispatch(
          lastNameSort({
            sortType: sortTypes.LAST_NAME_DECREASE,
            reverse: false,
          })
        );
        break;
      case sortTypes.EMAIL_INCREASE:
        dispatch(
          emailSort({
            sortType: sortTypes.EMAIL_INCREASE,
            reverse: true,
          })
        );
        break;
      case sortTypes.EMAIL_DECREASE:
        dispatch(
          emailSort({
            sortType: sortTypes.EMAIL_DECREASE,
            reverse: false,
          })
        );
        break;
      case sortTypes.PRESCRIPTION_ID_INCREASE:
        dispatch(
          prescriptionIdSort({
            sortType: sortTypes.PRESCRIPTION_ID_INCREASE,
            reverse: true,
          })
        );
        break;
      case sortTypes.PRESCRIPTION_ID_DECREASE:
        dispatch(
          prescriptionIdSort({
            sortType: sortTypes.PRESCRIPTION_ID_DECREASE,
            reverse: false,
          })
        );
        break;
      case sortTypes.ONBOARDING_ID_INCREASE:
        dispatch(
          onboardingIdSort({
            sortType: sortTypes.ONBOARDING_ID_INCREASE,
            reverse: true,
          })
        );
        break;
      case sortTypes.ONBOARDING_ID_DECREASE:
        dispatch(
          onboardingIdSort({
            sortType: sortTypes.ONBOARDING_ID_DECREASE,
            reverse: false,
          })
        );
        break;
      default:
        break;
    }
  }, [sortType]);

  return (
    <div className={styles.mainWrapper}>
      <Header title="User Page" />
      <div className={styles.selectSortTypeWrapper}>
        <select
          className={styles.sortTypeSelect}
          aria-label="Default select example"
          onChange={(e) => {
            setSelectSortType(e.target.value);
          }}
        >
          <option>Select sort type...</option>
          <option value="decrease">Id increase</option>
          <option value="increase">Id decrease</option>
          <option value="firstNameDecrease">
            First Name alphabet increase
          </option>
          <option value="firstNameIncrease">
            First Name alphabet decrease
          </option>
          <option value="lastNameIncrease">Last Name alphabet decrease</option>
          <option value="lastNameDecrease">Last Name alphabet increase</option>
          <option value="emailDecrease">Email alphabet increase</option>
          <option value="emailIncrease">Email alphabet decrease</option>
          <option value="genderIncrease">Gender alphabet decrease</option>
          <option value="genderDecrease">Gender alphabet increase</option>
          <option value="prescriptionIdDecrease">
            Prescription Id increase
          </option>
          <option value="prescriptionIdIncrease">
            Prescription Id decrease
          </option>
          <option value="onboardingIdDecrease">Onboarding Id increase</option>
          <option value="onboardingIdIncrease">Onboarding Id decrease</option>
        </select>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => {
            setSortType(selectSortType);
          }}
        >
          Apply
        </button>
      </div>
      <table className={styles.userTable}>
        <thead className={styles.userThead}>
          <tr className={styles.userTr}>
            <UserColum
              title="ID"
              sortType={sortType}
              sortForCurrentIncrease={`${sortTypes.INCREASE}`}
              sortForCurrentDecrease={`${sortTypes.DECREASE}`}
              setSortType={setSortType}
            />
            <UserColum
              title="Gender"
              sortType={sortType}
              sortForCurrentIncrease={`${sortTypes.GENDER_INCREASE}`}
              sortForCurrentDecrease={`${sortTypes.GENDER_DECREASE}`}
              setSortType={setSortType}
            />
            <UserColum
              title="First Name"
              sortType={sortType}
              sortForCurrentIncrease={`${sortTypes.FIRST_NAME_INCREASE}`}
              sortForCurrentDecrease={`${sortTypes.FIRST_NAME_DECREASE}`}
              setSortType={setSortType}
            />

            <UserColum
              title="Last Name"
              sortType={sortType}
              sortForCurrentIncrease={`${sortTypes.LAST_NAME_INCREASE}`}
              sortForCurrentDecrease={`${sortTypes.LAST_NAME_DECREASE}`}
              setSortType={setSortType}
            />
            <UserColum
              title="Email"
              sortType={sortType}
              sortForCurrentIncrease={`${sortTypes.EMAIL_INCREASE}`}
              sortForCurrentDecrease={`${sortTypes.EMAIL_DECREASE}`}
              setSortType={setSortType}
            />
            <UserColum
              title="Prescription Id"
              sortType={sortType}
              sortForCurrentIncrease={`${sortTypes.PRESCRIPTION_ID_INCREASE}`}
              sortForCurrentDecrease={`${sortTypes.PRESCRIPTION_ID_DECREASE}`}
              setSortType={setSortType}
            />
            <UserColum
              title="Onboarding Id"
              sortType={sortType}
              sortForCurrentIncrease={`${sortTypes.ONBOARDING_ID_INCREASE}`}
              sortForCurrentDecrease={`${sortTypes.ONBOARDING_ID_DECREASE}`}
              setSortType={setSortType}
            />
          </tr>
        </thead>
        <tbody className={styles.userTbody}>
          {store.users.items.map((item: User) => {
            return <UserItem user={item} key={item.id} />;
          })}
        </tbody>
      </table>
      <Footer
        itemCount={store.users.usersCount}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Users;
