import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8081/api/users/";

const getAll = () => {
  return axios.get(API_URL);
};

const getOne = (id) => {
  return axios.get(API_URL + id, { headers: authHeader() });
};

const updateOne = (id, data) => {
  let dataToSend = new FormData();
  dataToSend.append("username", data.username);
  dataToSend.append("email", data.email);
  dataToSend.append("password", data.password);
  dataToSend.append("location", data.location);
  data.filename
    ? dataToSend.append("filename", data.filename)
    : dataToSend.append("filename", "");
  return axios.put(API_URL + id, { headers: authHeader() });
};

const deleteOne = (id) => {
  return axios.delete(API_URL + id, { headers: authHeader() });
};

const UserService = {
  getAll,
  getOne,
  updateOne,
  deleteOne,
};

export default UserService;
