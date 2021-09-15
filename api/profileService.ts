import axios, { AxiosPromise } from "axios";
import { profileStatus } from "../shared/models/profile";
import authHeader from "./authHeader";

const API_URL = `${process.env.REACT_APP_API_URL}/profile`;

interface IProfileService {
  getAll: () => AxiosPromise;
  getProfileDescription: (id: number) => AxiosPromise;
  updateStatus: (id: number, status: profileStatus) => AxiosPromise;
  getProfileAvatar: (profileId: number) => AxiosPromise;
  getProfileTransactions: (profileId: number) => AxiosPromise;
  getProfileFinance: (profileId: number) => AxiosPromise;
  createWithdrewTransaction: (profileId: number, amount: number) => AxiosPromise;
}

const ProfileService: IProfileService = {
  getAll: (): AxiosPromise => {
    return axios
      .get(`${API_URL}/all`, { headers: authHeader() })
      .then((res) => res.data);
  },
  getProfileDescription: (id: number): AxiosPromise => {
    return axios
      .get(`${API_URL}/description/${id}`, { headers: authHeader() })
      .then((res) => res.data);
  },
  updateStatus: (id: number, status: string): AxiosPromise => {
    return axios
      .post(`${API_URL}/status/${id}`, { status }, { headers: authHeader() })
      .then((res) => res.data);
  },
  getProfileAvatar(profileId) {
    return axios
      .get(`${API_URL}/avatar/${profileId}`, {
        headers: authHeader(),
        responseType: "blob",
      })
      .then((response) => response.data);
  },
  getProfileTransactions(profileId) {
    return axios
      .get(`${API_URL}/transactions/${profileId}`, { headers: authHeader() })
      .then((res) => res.data);
  },
  getProfileFinance(profileId) {
    return axios
      .get(`${API_URL}/transactions/counts/${profileId}`, {
        headers: authHeader(),
      })
      .then((res) => res.data);
  },
  createWithdrewTransaction: (
    profileId: number,
    amount: number
  ): AxiosPromise => {
    return axios
      .post(
        `${API_URL}/transactions/withdrew/${profileId}`,
        { amount },
        { headers: authHeader() }
      )
      .then((res) => res.data);
  },
};

export default ProfileService;
