import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import { RootStore } from "../../shared/models/rootStore";
import {
  fetchProfilesStart,
  increaseProfile,
  decreaseProfile,
} from "../../store/profiles/profilesActionCreator";
import ProfileItem from "./components/ProfileItem/ProfileItem";
import arrow from "../../assets/images/arrow.svg";
import styles from "./Profiles.module.scss";

const Profiles = () => {
  const store = useSelector((store: RootStore) => store);
  const dispatch = useDispatch();
  const [increase, setIncrease] = useState(false);
  const [selectedSortType, setSelectedSortType] = useState("");

  useEffect(() => {
    dispatch(fetchProfilesStart());
  }, []);

  useEffect(() => {
    if (increase) {
      dispatch(increaseProfile());
    } else {
      dispatch(decreaseProfile());
    }
  }, [increase]);

  const sortItemsById = () => {
    setIncrease(!increase);
  };

  return (
    <div className={styles.mainWrapper}>
      <Header title="All profiles" />
      <div className={styles.selectSortTypeWrapper}>
        <select
          className={styles.sortTypeSelect}
          aria-label="Default select example"
          onChange={(e) => {
            setSelectedSortType(e.target.value);
          }}
        >
          <option>Select sort type...</option>
          <option value="decrease">Id increase</option>
          <option value="increase">Id decrease</option>
        </select>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => {
            if (selectedSortType === "increase") {
              setIncrease(false);
            } else {
              setIncrease(true);
            }
          }}
        >
          Apply
        </button>
      </div>
      <table className={styles.profileTable}>
        <thead className={styles.profileThead}>
          <tr className={styles.profileTr}>
            <th scope="col" className={`${styles.idColumn} ${styles.profileTh}`}>
              Id{" "}
              <img
                onClick={() => sortItemsById()}
                src={arrow}
                className={`${styles.sortImg} ${
                  increase ? styles.increase : styles.decrease
                }`}
              />
            </th>
            <th className={styles.profileTh} scope="col">
              First Name
            </th>
            <th className={styles.profileTh} scope="col">
              Last Name
            </th>
            <th className={styles.profileTh} scope="col">
              Email
            </th>
            <th className={styles.profileTh} scope="col">
              Status
            </th>
          </tr>
        </thead>
        <tbody className={styles.profileTbody}>
          {store.profiles.items.map((item) => {
            return <ProfileItem profile={item} key={item.id} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Profiles;
