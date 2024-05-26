const express = require("express");
const random = require("random-string-generator");
const os = require("os");

const app = express();

const PORT = 3000;

const randomStr = random(10);

app.get("/", (req, res) => {
  console.log("get request");
  res.json({
    v: 3,
    message: `Message from node app from host: ${os.hostname()}, unique app code: ${randomStr}`,
  });
});

app.get("/ping", (req, res) => {
  console.log("ping request");
  res.send(`${os.hostname()}`);
});

app.listen(PORT, () => console.log(`App listening on port: ${PORT}`));
