import axios from "axios";

const url = "http://116.15.19.109:5152/unlock/instant";

export const instant = () =>
  axios
    .post(url, {
      time: new Date(Date.now()).toLocaleString("en-UK", {
        // can change to en-US
        timeZone: "Singapore",
      }),
    })
    .then(function (res) {
      console.log(res);
    });
