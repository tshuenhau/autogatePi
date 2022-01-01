import axios from "axios";

const url = "http://192.168.1.76:5000/unlock/instant";

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
