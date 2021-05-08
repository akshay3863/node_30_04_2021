const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

//Database Connection.
require("./Database/db");

// Port Number
const port = process.env.PORT || 8000;

app.use(cors());

app.use(bodyParser.json());

// Import routs.
const router = require("./api/Routes/routes");
app.use("/api", router);

app.listen(port, () => {
  console.log("Application Hosting on port: " + port);
});
