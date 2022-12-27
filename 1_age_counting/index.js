// GET request to find those keys as array where age's value is equal to 30 from the API below

const https = require("https");

https.get("https://coderbyte.com/api/challenges/json/age-counting", (res) => {
  //console.log(res);
  let data = "";

  res.on("data", (d) => {
    data += [d];
  });

  res.on("end", () => {
    let parsedData = data
      .split(",")
      .filter((data) => !data.indexOf(" age="))
      .map((data) => data.replace(" age=", ""))
      .map((data) => parseInt(data))
      .filter((data) => {
        return data === 30;
      }).length;
    console.log(parsedData);
  });
  res.on("error", (e) => {
    console.log("error", e);
  });
});
