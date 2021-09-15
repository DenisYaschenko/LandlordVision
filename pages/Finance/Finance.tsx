import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import ProfileService from "../../api/profileService";
import Header from "../../components/Header/Header";
import { Transaction } from "../../shared/models/transaction";
import { useComponentVisible } from "../../utils";
import FinanceItem from "./components/FinanceItem/FinanceItem";
import styles from "./Finance.module.scss";
import close from "../../assets/images/cancel.svg";

const Finance = () => {
  const history = useHistory();
  const [withdrewInputValue, setWithdrewInputValue] = useState("");
  const [transactions, setTransactions] = useState([]);
  const profileId = +history.location.pathname.split("/")[2];
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);
  const [profileInfo, setProfileInfo] = useState({
    firstName: "",
    lastName: "",
  });
  const [bankAccount, setBankAccount] = useState({
    account: "",
    bankName: "",
    name: "",
    routing: "",
    type: "",
  });
  const [financeResp, setFinanceResp] = useState({
    total: 0,
    profileEarned: 0,
    profileWithdrew: 0,
  });
  const [finance, setFinance] = useState({
    total: 0,
    profileEarned: 0,
    profileWithdrew: 0,
  });

  useEffect(() => {
    ProfileService.getProfileTransactions(profileId).then((res: any) => {
      if (res) {
        setTransactions(res);
      }
    });
    ProfileService.getProfileDescription(profileId).then((res: any) => {
      if (res && res.bankAccount) {
        setBankAccount(res.bankAccount);
      }

      setProfileInfo({
        firstName: res.profile.firstName,
        lastName: res.profile.lastName,
      });
    });
    ProfileService.getProfileFinance(profileId).then((res: any) => {
      if (res) {
        setFinanceResp(res);
      }
    });
  }, []);

  useEffect(() => {
    setFinance({
      total: financeResp.total,
      profileEarned: financeResp.profileEarned,
      profileWithdrew: financeResp.profileWithdrew,
    });
  }, [financeResp]);
  return (
    <div className={styles.mainWrapper}>
      <Header title="Finance Page" />
      <div className={styles.navbar}>
        <div className={styles.about}>
          <h3 className={styles.title}>
            Bank Account for{" "}
            <strong>
              {" "}
              {profileInfo.firstName} {profileInfo.lastName}{" "}
            </strong>
          </h3>
          <div className={styles.inputWrapper}>
            <span className={styles.inputLabelActive}>Account</span>
            <div>{bankAccount.account}</div>
          </div>
          <div className={styles.inputWrapper}>
            <span className={styles.inputLabelActive}>Bank Name</span>
            <div>{bankAccount.bankName}</div>
          </div>

          <div className={styles.inputWrapper}>
            <span className={styles.inputLabelActive}>Name</span>
            <div>{bankAccount.name}</div>
          </div>

          <div className={styles.inputWrapper}>
            <span className={styles.inputLabelActive}>Routing</span>
            <div>{bankAccount.routing}</div>
          </div>
          <div className={styles.inputWrapper}>
            <span className={styles.inputLabelActive}>Type</span>
            <div>{bankAccount.type}</div>
          </div>
        </div>

        <div className={styles.withdrawWrapper}>
          <div className={styles.withdrewNavbar}>
            <h1>Finance Info</h1>
            {+withdrewInputValue <= finance.profileEarned &&
            finance.profileEarned !== 0 ? (
              <button
                type="button"
                className="btn btn-success"
                onClick={() => {
                  setIsComponentVisible(true);
                }}
              >
                Withdraw
              </button>
            ) : (
              <button
                type="button"
                disabled={true}
                className={`btn btn-success ${styles.disabled}`}
                onClick={() => {
                  setIsComponentVisible(true);
                }}
              >
                Withdraw
              </button>
            )}
          </div>
          <table className={styles.financeTable}>
            <thead className={styles.financeThead}>
              <tr className={styles.financeTr}>
                <td scope="col" className={styles.financeTd}>
                  Total
                </td>
                <td scope="col" className={styles.financeTd}>
                  Profile Earned
                </td>
                <td scope="col" className={styles.financeTd}>
                  Profile Withdrew
                </td>
              </tr>
            </thead>
            <tbody className={styles.financeTbody}>
              <tr className={styles.financeTr}>
                <td
                  data-label="In Progress"
                  scope="row"
                  className={styles.financeTd}
                >
                  {finance.total}
                </td>
                <td data-label="Withdrew" className={styles.financeTd}>
                  {finance.profileEarned}
                </td>
                <td data-label="Allowed" className={styles.financeTd}>
                  {finance.profileWithdrew}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <h2 className={styles.historyTitle}>Transaction History</h2>
      <table className={styles.financeTable}>
        <thead className={styles.financeThead}>
          <tr className={styles.financeTr}>
            <td
              data-label="Profile Id"
              className={styles.financeTd}
              scope="col"
            >
              Id
            </td>
            <td data-label="Amount" className={styles.financeTd} scope="col">
              Amount
            </td>
            <td data-label="Status" className={styles.financeTd} scope="col">
              Status
            </td>
            <td
              data-label="Profile Id"
              className={styles.financeTd}
              scope="col"
            >
              Profile Id
            </td>
            <td data-label="User Id" className={styles.financeTd} scope="col">
              User Id
            </td>
          </tr>
        </thead>
        <tbody className={styles.financeTbody}>
          {transactions.map((item: Transaction) => {
            return <FinanceItem transaction={item} key={item.id} />;
          })}
        </tbody>
      </table>
      {isComponentVisible ? (
        <>
          <div className={styles.withdrewPopup} ref={ref}>
            <div
              className={styles.withdrewBG}
              onClick={() => {
                setIsComponentVisible(false);
              }}
            />
            <div className={styles.withdrewNavbarPopup}>
              <img
                src={close}
                className={styles.closePopup}
                onClick={() => {
                  setIsComponentVisible(false);
                }}
              />
              <label>Write count of withdraw</label>
              <input
                type="number"
                value={withdrewInputValue}
                onChange={(e) => {
                  setWithdrewInputValue(e.target.value);
                }}
              />
              {+withdrewInputValue <= finance.profileEarned &&
              withdrewInputValue &&
              +withdrewInputValue !== 0 ? (
                <button
                  type="button"
                  className={`btn btn-success ${styles.btnSuccessActive}`}
                  onClick={() => {
                    ProfileService.createWithdrewTransaction(
                      profileId,
                      +withdrewInputValue
                    ).then((res) => {
                      setFinanceResp({
                        ...financeResp,
                        profileWithdrew:
                          financeResp.profileWithdrew + +withdrewInputValue,
                        profileEarned:
                          financeResp.profileEarned - +withdrewInputValue,
                      });
                    });
                    setIsComponentVisible(false);
                  }}
                >
                  Withdraw
                </button>
              ) : (
                <button
                  type="button"
                  disabled={true}
                  className={`btn btn-success ${styles.btnSuccessDisabled}`}
                  onClick={() => {
                    setIsComponentVisible(false);
                  }}
                >
                  Withdraw
                </button>
              )}
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Finance;
