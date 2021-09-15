import axios, { AxiosPromise } from "axios";
import authHeader from "./authHeader";

const API_URL = `${process.env.REACT_APP_API_URL}/admin`;

interface IAdminService {
  login: (email: string, password: string) => AxiosPromise;
  getAdmin: () => AxiosPromise;
}

const AdminService: IAdminService = {
  login: (email: string, password: string): AxiosPromise => {
    return axios
      .post(`${API_URL}/login`, {
        email,
        password,
      })
      .then((res) => res.data);
  },
  getAdmin: (): AxiosPromise => {
    return axios
      .get(`${API_URL}/`, { headers: authHeader() })
      .then((res) => res.data);
  },
};

export default AdminService;
