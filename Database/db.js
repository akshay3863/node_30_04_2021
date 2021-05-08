const mongoose = require("mongoose");
require("dotenv").config();

mongoose.Promise = global.Promise;

mongoose
  .connect(process.env.DB_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.warn("Connection Competed.");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Issue is ...", err);
    process.exit();
  });