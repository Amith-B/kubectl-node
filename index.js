const express = require("express");
const random = require("random-string-generator");

const app = express();

const PORT = 3000;

const randomStr = random(10);

app.get("/", (req, res) => {
  res.json({
    v: 2,
    message: `Message from node app, unique app code: ${randomStr}`,
  });
});

app.listen(PORT, () => console.log(`App listening on port: ${PORT}`));
