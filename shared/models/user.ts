export interface User {
  id: number;
  firstName: string;
  lastName: string;
  birthday: string;
  gender: string;
  prescriptionId: number;
  phone: string;
  about: string | null;
  avatarUrl: string | null;
  onboardingId: number;
  email: string;
  customerId: string;
  resetPasswordToken: null | string;
  resetPasswordSentAt: null | string;
  lastPasswordChangedAt: null | string;
  createdAt: string;
  updatedAt: string;
}
export interface Onboarding {
  addressId: number | null;
  createdAt: string;
  updatedAt: string;
  creditCardId: string | null;
  id: number;
  passportId: number | null;
  signing: string;
  state: string;
  step: number;
  termsAndCondition: boolean;
  userId: number;
}
export interface Prescription {
  additionalInformation: string;
  createdAt: string;
  diagnosedSchizophrenia: boolean;
  profileId: number;
  experiencedHallucinations: boolean;
  expirationDate: string | null;
  id: number;
  isNew: boolean;
  medicalHistory: string;
  otherMedication: boolean;
  reason: string | null;
  registrationNumber: string;
  startDate: string | null;
  status: string;
  totalPrice: null | number;
  updatedAt: string;
}
export interface Address {
  address: string | null;
  billingName: string | null;
  city: string | null;
  createdAt: string;
  updatedAt: string;
  id: number;
  state: string;
  zip: number | null;
}
