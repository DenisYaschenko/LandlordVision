import React from "react";
import {
  Profile,
  ProfileAddress,
  ProfileBankAccount,
  profileStatus,
} from "../../../../shared/models/profile";
import styles from "./ProfileDescription.module.scss";

const ProfileDescription = ({
  profile,
  address,
  bankAccount,
  updateStatus,
}: {
  profile: Profile;
  address: ProfileAddress;
  bankAccount: ProfileBankAccount;
  updateStatus: (id: number, status: profileStatus) => void;
}) => {
  return (
    <div className={styles.editProfile}>
      <div className={styles.form}>
        <div className={styles.basicInfo}>
          <div className={styles.basicInfoHeader}>
            <h3 className={styles.title}>Address</h3>
            {profile.status === "inReview" ? (
              <>
                <button
                  type="button"
                  className={`btn btn-success ${styles.successButton}`}
                  onClick={() => updateStatus(profile.id, profileStatus.approved)}
                >
                  Approve
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => updateStatus(profile.id, profileStatus.declined)}
                >
                  Decline
                </button>
              </>
            ) : (
              <></>
            )}
          </div>
          {address ? (
            <div className={styles.basicInfoNav}>
              <div className={styles.inputWrapper}>
                <span className={styles.inputLabelActive}>Address</span>
                <div>{address.address}</div>
              </div>

              <div className={styles.inputWrapper}>
                <span className={styles.inputLabelActive}>Billing Name</span>
                <div>{address.billingName}</div>
              </div>
              <div className={styles.inputWrapper}>
                <span className={styles.inputLabelActive}>City</span>
                <div>{address.city}</div>
              </div>
              <div className={styles.inputWrapper}>
                <span className={styles.inputLabelActive}>State</span>
                <div>{address.state}</div>
              </div>
              <div className={styles.inputWrapper}>
                <span className={styles.inputLabelActive}>Zip</span>
                <div>{address.zip}</div>
              </div>
            </div>
          ) : (
            <>
              <div className={styles.inputWrapperError}>
                <span className={styles.inputLabelActiveError}>
                  This profile has no address
                </span>
              </div>
            </>
          )}
        </div>
        {bankAccount ? (
          <div className={styles.about}>
            <h3 className={styles.title}>Bank Account</h3>
            <div className={styles.inputWrapper}>
              <span className={styles.inputLabelActive}>Account</span>
              <div>{bankAccount.account ? bankAccount.account : "-"}</div>
            </div>
            <div className={styles.inputWrapper}>
              <span className={styles.inputLabelActive}>Bank Name</span>
              <div>{bankAccount.bankName ? bankAccount.bankName : "-"}</div>
            </div>

            <div className={styles.inputWrapper}>
              <span className={styles.inputLabelActive}>Name</span>
              <div>{bankAccount.name ? bankAccount.name : "-"}</div>
            </div>

            <div className={styles.inputWrapper}>
              <span className={styles.inputLabelActive}>Routing</span>
              <div>{bankAccount.routing ? bankAccount.routing : "-"}</div>
            </div>
            <div className={styles.inputWrapper}>
              <span className={styles.inputLabelActive}>Type</span>
              <div>{bankAccount.type ? bankAccount.type : "-"}</div>
            </div>
          </div>
        ) : (
          <>
            <div className={styles.inputWrapperError}>
              <span className={styles.inputLabelActiveError}>
                This profile has no Bank Account
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default ProfileDescription;
