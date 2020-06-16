/* eslint-disable no-unused-vars */
import axios from "axios";

import Notify from "./Notification";

const CancelToken = axios.CancelToken;
export const source = CancelToken.source();

const HttpRequest = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL_API,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  // timeout: 10000,
  transformRequest: [
    function (data, headers) {
      /**
       * compatible for formData
       */
      if (headers["Content-Type"] === "multipart/form-data") {
        let formData = new FormData();
        for (const key in data) {
          formData.append(key, data[key]);
        }
        return formData;
      } else {
        return JSON.stringify(data);
      }
    },
  ],
  transformResponse: [
    (data) => {
      return data;
    },
  ],
  cancelToken: source.token,
});

/**
 *
 * Any request to use this service (HttpRequest)
 * In this method we can review response
 *
 * @method  interceptors.response
 * @param {response}
 * @returns {object}
 */

HttpRequest.interceptors.response.use(
  function (response) {
    const { status, data } = response;

    // console.log('HttpRequest > response', response);

    // check refresh token if exsit replace to previuse token

    // handle global Error

    // validateStatus and show message from server

    return response;
  },
  function (error) {
    //TODO: send Error to app monitoring (like : sentary)

    const { status, data } = error.response;

    // validateStatus and show message from server
    if (status >= 400 && status <= 599) {
      data.message !== "" && Notify(data).error();
    }

    return Promise.reject(error);
  }
);

export default HttpRequest;
