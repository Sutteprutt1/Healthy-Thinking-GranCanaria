import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/activities/";

const getAll = () => {
  return axios.get(API_URL);
};

const getOne = (id) => {
  return axios.get(API_URL + id);
};

const create = () => {
  let dataToSend = new FormData();
  dataToSend.append("name", data.name);
  dataToSend.append("location", data.location);
  dataToSend.append("description", data.description);
  dataToSend.append("paid", data.paid);
  dataToSend.append("time", data.time);
  dataToSend.append("filename", data.filename);
  return axios.post(API_URL + id,);
};

const updateOne = (id, data) => {
  let dataToSend = new FormData();
  dataToSend.append("name", data.name);
  dataToSend.append("location", data.location);
  dataToSend.append("description", data.description);
  dataToSend.append("paid", data.paid);
  dataToSend.append("time", data.time);
  data.filename ? dataToSend.append("filename", data.filename) : dataToSend.append("filename", "") ;
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