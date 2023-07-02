const express = require("express");
require("dotenv").config();
const app = express();
const controller = require("./controller");

app.get("/signedUrl", controller);

app.listen(process.env.PORT, () => {
  console.log(`server runnning on port ${process.env.PORT}`);
});
