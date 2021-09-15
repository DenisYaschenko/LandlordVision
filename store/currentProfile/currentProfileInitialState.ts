import { ProfileAddress, ProfileBankAccount } from "../../shared/models/profile";
import { User } from "../../shared/models/user";

interface IInitialUsersState {
  loading: boolean;
  profile: User | null;
  address: ProfileAddress | null;
  bankAccount: ProfileBankAccount | null;
  error: Error | null;
}
export const initialState: IInitialUsersState = {
  loading: false,
  profile: null,
  address: null,
  bankAccount: null,
  error: null,
};
