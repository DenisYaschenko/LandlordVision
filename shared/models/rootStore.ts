import { Admin } from "./admin";
import { Profile, ProfileAddress, ProfileBankAccount } from "./profile";
import { Address, Onboarding, User, Prescription } from "./user";

export interface RootStore {
  app: {
    loading: boolean;
    isLoggedIn: boolean;
    user: Admin;
    error: Error | null;
  };
  profiles: {
    error: Error | null;
    loading: boolean;
    items: Profile[];
    profilesCount: number;
  };
  users: {
    error: Error | null;
    loading: boolean;
    items: User[];
    sortType: sortTypes | "";
    usersCount: number;
  };
  userDescription: {
    loading: boolean;
    user: User;
    onboarding: Onboarding;
    prescription: Prescription;
    address: Address;
    errors: Error | null;
  };
  profileDescription: {
    loading: boolean;
    profile: Profile;
    address: ProfileAddress;
    bankAccount: ProfileBankAccount;
    errors: Error | null;
  };
}

export enum sortTypes {
  INCREASE = "increase",
  DECREASE = "decrease",
  FIRST_NAME_INCREASE = "firstNameIncrease",
  FIRST_NAME_DECREASE = "firstNameDecrease",
  GENDER_INCREASE = "genderIncrease",
  GENDER_DECREASE = "genderDecrease",
  LAST_NAME_INCREASE = "lastNameIncrease",
  LAST_NAME_DECREASE = "lastNameDecrease",
  EMAIL_INCREASE = "emailIncrease",
  EMAIL_DECREASE = "emailDecrease",
  ONBOARDING_ID_INCREASE = "onboardingIdIncrease",
  ONBOARDING_ID_DECREASE = "onboardingIdDecrease",
  PRESCRIPTION_ID_INCREASE = "prescriptionIdIncrease",
  PRESCRIPTION_ID_DECREASE = "prescriptionIdDecrease",
}
