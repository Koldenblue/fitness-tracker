const Workout = require("../models/workoutModel")

module.exports = function(app) {

  // route to get all data
  app.get("/api/workouts", (req, res) => {
    Workout.find({}).then((data) => {
      res.json(data);
    }).catch((err) => {
      res.json(err);
    })
  })

  app.get("/api/workouts/range", (req, res) => {
    res.status(200).end();
  })

  // post a new workout. Used by exercise.html.
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



}