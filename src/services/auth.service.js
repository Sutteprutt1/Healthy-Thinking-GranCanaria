import axios from "axios";

const API_URL = "http://localhost:8081/api/users/";

const register = (username, email, password, location) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
    location
  });
};

const login = (user) => {

  return axios
    .post(API_URL + "signin", {
      withCredentials: true,
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    }, {
      auth: {
        username: user.email,
        password: user.password
      }
    })
    .then((response) => {
      if (response.data.access_token) {
        localStorage.setItem('token', response.data.access_token)
        localStorage.setItem('userId', response.data.user.id)
      }
      // return response.data;
    }).catch(err => {
      console.log(err);
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;