import { User } from "../../shared/models/user";
import { sortTypes } from "../../shared/models/rootStore";

interface IInitialUsersState {
  loading: boolean;
  items: User[];
  sortType: sortTypes | "";
  usersCount: number;
  error: Error | null;
}
export const initialState: IInitialUsersState = {
  loading: false,
  items: [],
  usersCount: 0,
  sortType: "",
  error: null,
};
