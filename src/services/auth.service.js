import axios from "axios";

const API_URL = "https://healthy-thinking.onrender.com/api/users/";

const register = (user) => {
  return axios.post(API_URL + "signup", user);
};

const login = (user) => {
  return axios
    .post(
      API_URL + "signin",
      {
        withCredentials: true,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      },
      {
        auth: {
          username: user.email,
          password: user.password,
        },
      }
    )
    .then((response) => {
      if (response.data.access_token) {
        localStorage.setItem("token", response.data.access_token);
        localStorage.setItem("userId", response.data.user.id);
      }
      // return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const logout = () => {
  localStorage.removeItem("userId");
  localStorage.removeItem("token");
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
