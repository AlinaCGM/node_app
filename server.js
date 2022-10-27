const http = require("http");
http
  .get("https://unsplash.com/", (response) => {
    let data = "";
    response.on("data", (chunk) => {
      data += chunk;
    });
    response.on("end", () => {
      console.log(data);
    });
  })
  .on("error", (error) => {
    console.log(error);
  });
