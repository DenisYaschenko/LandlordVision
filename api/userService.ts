import axios, { AxiosPromise } from "axios";
import authHeader from "./authHeader";

const API_URL = `${process.env.REACT_APP_API_URL}/user`;

interface IUserService {
  getAll: (from: number, to: number) => AxiosPromise;
  getUserDescription: (userId: number) => AxiosPromise;
  getUserAvatar: (userId: number) => AxiosPromise;
}

const UserService: IUserService = {
  getAll: (from: number, to: number): AxiosPromise => {
    return axios
      .get(`${API_URL}/all/${from}/${to}`, { headers: authHeader() })
      .then((res) => res.data);
  },
  getUserDescription: (userId: number): AxiosPromise => {
    return axios
      .get(`${API_URL}/description/${userId}`, { headers: authHeader() })
      .then((res) => res.data);
  },
  getUserAvatar(userId) {
    return axios
      .get(`${API_URL}/avatar/${userId}`, {
        headers: authHeader(),
        responseType: "blob",
      })
      .then((response) => response.data);
  },
};

export default UserService;
