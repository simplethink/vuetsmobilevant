import axios, { AxiosResponse } from "axios";

let fetch = axios.create({
  headers: {
    "content-type": "application/x-www-form-urlencoded",
  },
});
// Add a request interceptor
fetch.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
fetch.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response;
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error);
  }
);
type ResponeType = {
  code: number;
  data: object;
  msg: string;
};

const Api = {
  post(url: string, data: Object) {
    // VUE_APP_API
    return fetch
      .post<any, AxiosResponse<ResponeType, any>, Object>(
        process.env.VUE_APP_BASE_API + url,
        data
      )
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log("网络出错");
        return Promise.reject();
      });
  },
};
export default Api;
