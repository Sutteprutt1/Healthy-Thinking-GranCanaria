import axios from "axios";
import authHeader from "./auth.header.js";

const API_URL = "https://healthy-thinking.onrender.com/api/suscriptions/";

const getAll = () => {
  return axios.get(API_URL);
};

const getOne = (id) => {
  return axios.get(API_URL + id);
};

const findActivitiesByUserId = (id) => {
  return axios.get(API_URL + 'filterByUserId/' + id);
};

const create = (data) => {
  const config = {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }
  };

  const dataToSend = new URLSearchParams();
  dataToSend.append('start_time', data.start_time);
  dataToSend.append('end_time', data.end_time);
  dataToSend.append('activityId', data.activityId);
  dataToSend.append('userId', data.userId);

  return axios.post(API_URL, dataToSend.toString(), config);
};

const updateOne = (id, data) => {
  let dataToSend = new FormData();
  dataToSend.append("start_time", data.start_time);
  dataToSend.append("end_time", data.end_time);
  dataToSend.append("activityId", data.activityId);
  dataToSend.append("userId", data.userId);
  return axios.post(API_URL + id, {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8', dataToSend }
  })
};

const deleteOne = (id) => {
  return axios.delete(API_URL + id, { headers: authHeader() });
};

const SuscriptionService = {
  getAll,
  getOne,
  findActivitiesByUserId,
  create,
  updateOne,
  deleteOne,
};

export default SuscriptionService;