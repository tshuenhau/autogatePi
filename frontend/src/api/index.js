import axios from "axios";

const url = "http://116.15.19.109:5152";

export const instant = () =>
  axios
    .post(url + "/unlock/instant", {
      time: new Date(Date.now()).toLocaleString("en-UK", {
        // can change to en-US
        timeZone: "Singapore",
      }),
    })
    .then(function (res) {
      console.log(res);
    });

export const checkAuth = () => {
  const savedPassword = localStorage.getItem("savedPassword");
  return axios
    .get(url + "/authentication/isLoggedIn", {
      params: { password: savedPassword },
    })
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};
