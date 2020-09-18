const path = require("path");

// send the html files at the appropriate routes
module.exports = function(app) {
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  })

  app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"))
  })

  app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
  })

}