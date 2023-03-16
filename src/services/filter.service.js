import axios from "axios";
import authHeader from "./auth.header.js";

const API_URL = "https://healthy-thinking.onrender.com//api/filters/";

const getAll = () => {
  return axios.get(API_URL);
};

const getOne = (id) => {
  return axios.get(API_URL + id);
};

const create = (data) => {
  let dataToSend = new URLSearchParams();
  dataToSend.append("name", data.name);
  return axios.post(API_URL, {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8', dataToSend }
  })
};

const updateOne = (id, data) => {
  let dataToSend = new URLSearchParams();
  dataToSend.append("name", data.name);
  return axios.post(API_URL + id, {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8', dataToSend }
  })
};

const deleteOne = (id) => {
  return axios.delete(API_URL + id, { headers: authHeader() });
};

const FilterService = {
  getAll,
  getOne,
  create,
  updateOne,
  deleteOne,
};

export default FilterService;