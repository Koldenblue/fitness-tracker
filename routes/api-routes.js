let db = require("../models");

module.exports = function(app) {

  // route to get all data. Workouts are sorted so that the latest workout
  // is last in the array
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({}).sort({day:1}).then((data) => {
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
    console.log(req.body)
    db.Workout.create(req.body).then((data) => {
      res.json(data);
    }).catch((err) => {
      res.json(err);
    })
  })

  app.put("/api/workouts/:id", (req, res) => {
    let userId = req.params.id
    console.log(req.body)
    // console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAA")
    let doc = db.Workout.findOne({_id: userId}, (err, doc) => {
      if (err) throw err;
      doc.exercise.push(req.body)
      doc.save()
      console.log(doc)
      res.json(doc)

      // doing it this way, each req.body object added to the doc has its own _id
      // _id cannot be deleted:
      // delete doc.exercise[doc.exercise.length - 1]['_id']
      // console.log(doc.exercise[doc.exercise.length - 1])
      // console.log("======================")
    })
    // db.Workout.updateOne({_id: userId}, req.body, (err, data) => {
    //   console.log(data);
    //   res.json(data);
    // })
  })
}

