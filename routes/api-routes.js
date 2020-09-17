const Workout = require("../models/workout")

module.exports = function(app) {
  app.get("/api/workouts", (req, res) => {
    Workout.find({}).then((data) => {
      res.json(data);
    }).catch((err) => {
      res.json(err);
    })
  })

  app.post("/api/workouts", (req, res) => {
    Workout.create(req.body).then((data) => {
      res.json(data);
    }).catch((err) => {
      res.json(err);
    })
  })

  app.put("/api/workouts/:id", (req, res) => {
    
    console.log(req.params.id)
    res.status(200).end();
  })

  app.get("/api/workouts/range", (req, res) => {
    res.status(200).end();
  })

}