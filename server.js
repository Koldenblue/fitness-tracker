const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

// for logging routing requests
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// In this line, mongoose will connect to the env mongoDB process
// OR
// it will connect to the database entitled "workout" on the local host
// Important - the workout database will not appear in Robo3T until there is data in the database!
// This is why the seed file is useful!
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
 });


// Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
