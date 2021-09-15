export interface Profile {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  status: profileStatus | string;
  createdAt: string;
  updatedAt: string;
  birthday: string;
  balance: number;
  businessAddressFirst?: string;
  businessAddressSecond?: string;
  isAuthCompleted: boolean;
  avatarUrl?: string;
  addressId?: number;
  bankAccountId?: number;
  settingsStep?: number;
  approvedPrescriptions?: number;
  declinedPrescriptions?: number;
  pendingPrescriptions?: number;
  inReviewPrescriptions?: number;
}
export interface ProfileAddress {
  address: string;
  billingName: string;
  city: string;
  createdAt?: string;
  id?: number;
  state: string;
  updatedAt?: string;
  zip: number | string;
}
export interface ProfileBankAccount {
  account: string;
  bankName: string;
  createdAt?: string;
  updatedAt?: string;
  id?: number;
  name: string;
  routing: string;
  type: string;
}
export enum profileStatus {
  approved = "approved",
  declined = "declined",
  inReview = "inReview",
  pending = "pending",
}
