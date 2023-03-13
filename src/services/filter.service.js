import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/filters/";

const getAll = () => {
  return axios.get(API_URL);
};

const getOne = (id) => {
  return axios.get(API_URL + id);
};

const create = () => {
  let dataToSend = new FormData();
  dataToSend.append("name", data.name);
  return axios.post(API_URL + id,);
};

const updateOne = (id, data) => {
  let dataToSend = new FormData();
  dataToSend.append("name", data.name);
  return axios.put(API_URL + id);
};

const deleteOne = (id) => {
  return axios.delete(API_URL + id, { headers: authHeader() });
};

const UserService = {
  getAll,
  getOne,
  create,
  updateOne,
  deleteOne,
};

export default UserService;