import {
  Address,
  Onboarding,
  User,
  Prescription,
} from "../../shared/models/user";
interface IInitialUsersState {
  loading: boolean;
  user: User | null;
  onboarding: Onboarding | null;
  prescription: Prescription | null;
  address: Address | null;
  error: Error | null;
}
export const initialState: IInitialUsersState = {
  loading: false,
  user: null,
  onboarding: null,
  prescription: null,
  address: null,
  error: null,
};
