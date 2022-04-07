const fs = require("fs");
const axios = require("axios").default;

export const getTotal = (info) => {
  axios({
    method: "get",
    url: "/",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    baseURL: "http://gestforce.com.br:4003/access/accessAll",
    data: data,
  });
};
