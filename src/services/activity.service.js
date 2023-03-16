import axios from "axios";
import authHeader from "./auth.header.js";

const API_URL = "http://" + window.location.hostname + ":8081/api/activities/";

const getAll = () => {
  return axios.get(API_URL);
};

const getOne = (id) => {
  return axios.get(API_URL + id);
};

const create = (data) => {
  let dataToSend = new FormData();
  dataToSend.append("name", data.name);
  dataToSend.append("location", data.location);
  dataToSend.append("description", data.description);
  dataToSend.append("paid", data.paid);
  dataToSend.append("time", data.time);
  dataToSend.append("filename", data.filename);
  return axios.post(API_URL);
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

const ActivityService = {
  getAll,
  getOne,
  create,
  updateOne,
  deleteOne,
};

export default ActivityService;