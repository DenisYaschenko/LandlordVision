import { Profile } from "../../shared/models/profile";
import { sortTypes } from "../../shared/models/rootStore";

interface IInitialProfilesState {
  loading: boolean;
  items: Profile[];
  sortType: sortTypes | "";
  error: Error | null;
}
export const initialState: IInitialProfilesState = {
  loading: false,
  items: [],
  sortType: "",
  error: null,
};
