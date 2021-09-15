import React from "react";
import moment from "moment";
import {
  Address,
  Onboarding,
  User,
  Prescription,
} from "../../../../shared/models/user";
import styles from "./ProfileDescription.module.scss";

const ProfileDescription = ({
  user,
  onboarding,
  prescription,
  address,
}: {
  user: User;
  onboarding: Onboarding;
  prescription: Prescription;
  address: Address;
}) => {
  return (
    <div className={styles.editProfile}>
      <div className={styles.form}>
        {onboarding ? (
          <div className={styles.basicInfo}>
            <div className={styles.basicInfoHeader}>
              <h3 className={styles.title}>Onboarding</h3>
            </div>
            <div className={styles.basicInfoNav}>
              <div className={styles.inputWrapper}>
                <span className={styles.inputLabelActive}>Onboarding Id</span>
                <div>{onboarding.id ? onboarding.id : "-"}</div>
              </div>

              <div className={styles.inputWrapper}>
                <span className={styles.inputLabelActive}>Address Id</span>
                <div>{onboarding.addressId ? onboarding.addressId : "-"}</div>
              </div>
              <div className={styles.inputWrapper}>
                <span className={styles.inputLabelActive}>Credit card Id</span>
                <div>
                  {onboarding.creditCardId ? onboarding.creditCardId : "-"}
                </div>
              </div>
              <div className={styles.inputWrapper}>
                <span className={styles.inputLabelActive}>Passport Id</span>
                <div>{onboarding.passportId ? onboarding.passportId : "-"}</div>
              </div>
              <div className={styles.inputWrapper}>
                <span className={styles.inputLabelActive}>Signing</span>
                <div>{onboarding.signing ? onboarding.signing : "-"}</div>
              </div>
              <div className={styles.inputWrapper}>
                <span className={styles.inputLabelActive}>State</span>
                <div>{onboarding.state ? onboarding.state : "-"}</div>
              </div>
              <div className={styles.inputWrapper}>
                <span className={styles.inputLabelActive}>Step</span>
                <div>{onboarding.step ? onboarding.step : ""}</div>
              </div>
              <div className={styles.inputWrapper}>
                <span className={styles.inputLabelActive}>
                  Terms And Conditions
                </span>
                <div>
                  {onboarding.termsAndCondition
                    ? `${onboarding.termsAndCondition}`
                    : "-"}
                </div>
              </div>
              <div className={styles.inputWrapper}>
                <span className={styles.inputLabelActive}>User Id</span>
                <div>{onboarding.userId ? onboarding.userId : "-"}</div>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.inputWrapperError}>
            <span className={styles.inputLabelActiveError}>
              This user has no onboarding
            </span>
          </div>
        )}
        {prescription ? (
          <div className={styles.prescription}>
            <div className={styles.prescriptionHeader}>
              <h3 className={styles.title}>Prescription</h3>
              {prescription.status === "inReview" ? (
                <h1 className={styles.review}>in Review</h1>
              ) : (
                <></>
              )}
              {prescription.status === "pending" ? (
                <h1 className={styles.pending}>Pending</h1>
              ) : (
                <></>
              )}
              {prescription.status === "approved" ? (
                <h1 className={styles.approved}>Approved</h1>
              ) : (
                <></>
              )}
              {prescription.status === "declined" ? (
                <h1 className={styles.declined}>Declined</h1>
              ) : (
                <></>
              )}
            </div>
            <div className={styles.inputWrapper}>
              <span className={styles.inputLabelActive}>Prescription Id</span>
              <div>{prescription.id ? prescription.id : "-"}</div>
            </div>
            <div className={styles.inputWrapper}>
              <span className={styles.inputLabelActive}>
                Diagnosed Schizophrenia
              </span>
              <div>
                {prescription.diagnosedSchizophrenia
                  ? `${prescription.diagnosedSchizophrenia}`
                  : "-"}
              </div>
            </div>
            <div className={styles.inputWrapper}>
              <span className={styles.inputLabelActive}>
                Experienced Hallucinations
              </span>
              <div>
                {prescription.experiencedHallucinations
                  ? `${prescription.experiencedHallucinations}`
                  : "-"}
              </div>
            </div>
            <div className={styles.inputWrapper}>
              <span className={styles.inputLabelActive}>Medical History</span>
              <div>
                {prescription.medicalHistory
                  ? prescription.medicalHistory
                  : "-"}
              </div>
            </div>
            <div className={styles.inputWrapper}>
              <span className={styles.inputLabelActive}>Other Medication</span>
              <div>
                {prescription.experiencedHallucinations
                  ? `${prescription.experiencedHallucinations}`
                  : "-"}
              </div>
            </div>
            <div className={styles.inputWrapper}>
              <span className={styles.inputLabelActive}>
                Reason of declining
              </span>
              <div>{prescription.reason ? prescription.reason : "-"}</div>
            </div>
            <div className={styles.inputWrapper}>
              <span className={styles.inputLabelActive}>
                Registration Number
              </span>
              <div>
                {prescription.registrationNumber
                  ? prescription.registrationNumber
                  : "-"}
              </div>
            </div>
            <div className={styles.inputWrapper}>
              <span className={styles.inputLabelActive}>
                Start Date of licence
              </span>
              <div>
                {prescription.startDate
                  ? moment(new Date(prescription.startDate)).format(
                      "DD/MM/YYYY"
                    )
                  : "-"}
              </div>
            </div>
            <div className={styles.inputWrapper}>
              <span className={styles.inputLabelActive}>
                Expiration Date of licence
              </span>
              <div>
                {prescription.expirationDate
                  ? moment(new Date(prescription.expirationDate)).format(
                      "DD/MM/YYYY"
                    )
                  : "-"}
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.inputWrapperError}>
            <span className={styles.inputLabelActiveError}>
              This user has no prescription
            </span>
          </div>
        )}
        {address ? (
          <div className={styles.prescription}>
            <div className={styles.prescriptionHeader}>
              <h3 className={styles.title}>Address</h3>
            </div>
            <div className={styles.inputWrapper}>
              <span className={styles.inputLabelActive}>Address Id</span>
              <div>{address.id ? address.id : "-"}</div>
            </div>
            <div className={styles.inputWrapper}>
              <span className={styles.inputLabelActive}>Billing Name</span>
              <div>{address.billingName ? `${address.billingName}` : "-"}</div>
            </div>
            <div className={styles.inputWrapper}>
              <span className={styles.inputLabelActive}>City</span>
              <div>{address.city ? `${address.city}` : "-"}</div>
            </div>
            <div className={styles.inputWrapper}>
              <span className={styles.inputLabelActive}>Billing State</span>
              <div>{address.state ? address.state : "-"}</div>
            </div>
            <div className={styles.inputWrapper}>
              <span className={styles.inputLabelActive}>Zip</span>
              <div>{address.zip ? `${address.zip}` : "-"}</div>
            </div>
          </div>
        ) : (
          <div className={styles.inputWrapperError}>
            <span className={styles.inputLabelActiveError}>
              This user has no Address
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
export default ProfileDescription;
