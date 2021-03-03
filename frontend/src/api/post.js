import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

const POST_URL_AUTH = `${BASE_URL}auth/`;

const POST_ORDER = `${BASE_URL}orders`;

const logIn = async (url, user) => {
  try {
    const response = await axios.post(url, user);

    const AUTH_TOKEN = response.data.token;

    axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;

    return response.status;
  } catch (error) {
    console.log(error);
  }
};

const makeOrder = async (url, order) => {
  const response = await axios.post(url, order);

  return response;
};

export { POST_URL_AUTH, POST_ORDER, logIn, makeOrder };
