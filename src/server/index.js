const path = require("path");
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("dist"));

const testResponse = require("./testapi.js");

const meaningCloudApiKey = process.env.MEANINGCLOUD_API_KEY;
const meaningCloudApiUrl = "https://api.meaningcloud.com/sentiment-2.1";
let userInput = [];

app.get("/", function (req, res) {
  //res.sendFile('dist/index.html')
  res.sendFile(path.resolve("src/client/views/index.html"));
});

app.get("/test", function (req, res) {
  res.send(testResponse);
});
// POST Route

app.post("/api/analyze", async (req, res) => {
  console.log("from 8001", req, res);

  const userInput = req.body.url;
  console.log(`Received URL: ${userInput}`);

  const apiRequestUrl = `${meaningCloudApiUrl}?key=${meaningCloudApiKey}&url=${userInput}&lang=en`;

  const response = await axios.get(apiRequestUrl);
  const analysisData = response.data;

  console.log(analysisData);
  res.json(analysisData);
});

const port = 8001;
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
