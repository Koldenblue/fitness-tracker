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

  // ========== Alternative method of setting the total duration, using the reduce() method ===========
  // const { exercises } = data;
  // const totalDuration = exercises.reduce((accum, current) => (accum + current.duration), 0);
  // const newData = Object.assign(data, totalDuration)
  // res.json(newData);


  // gets all workout documents from the workouts collection. Demonstrates alternative try / catch error handling.
  app.get("/api/workouts/range", (req, res) => {
    try {
      db.Workout.find({}, (err, data) => {
        if (err) throw err;
        res.json(data);
      })
    }
    catch (err) {
      console.log(err);
      res.json(err);
    }
  })


  // POST a new workout. Used by exercise.html.
  app.post("/api/workouts", (req, res) => {
    console.log(req.body)
    db.Workout.create(req.body).then((data) => {
      res.json(data);
    }).catch((err) => {
      res.json(err);
    })
  })


  app.put("/api/workouts/:id", (req, res) => {
    // findOne, then updating the document object via the .save() is probably the easiest method
    // this way the docuement can be manipulated using javascript
    // rather than the $push, $set, etc. mongoDB commands
    db.Workout.findOne({_id: req.params.id}, (err, doc) => {
      if (err) throw err;

      // first we push req.body to the exercises array
      doc.exercises.push(req.body)
      // next find the total duration and add it to the document object
      let totalDuration = 0;
      for (let i = 0, j = doc.exercises.length; i < j; i++) {
        totalDuration += doc.exercises[i]["duration"];
      }
      doc.totalDuration = totalDuration

      // the updated document will not actually be saved without the .save() method
      doc.save()
      res.json(doc)
    })
  })
}




    // ======== Extra, for reference: Alternate methods of updating documents ==================
    // As mentioned above, using the .save() method is easiest, but these methods work as well
    //==========================================================================================

    // db.Workout.findOneAndUpdate({ _id: req.params.id }, { $push: {exercises: req.body} }).then((doc) => {
    //   // with this method, the newly updated doc is not logged - console.log will still show the empty array
    //   console.log(doc);
    //   res.json(doc)
    // }).catch((err) => {
    //   console.log(err)
    // })

    // // updated data is not be logged here, either
    // db.Workout.findOneAndUpdate({_id: req.params.id}, {$push: {exercises: req.body}}, (err, data) => {
    //   console.log(data);
    //   // even though we use the .save() method
    //   data.save();
    //   console.log(data)
    //   // Trying to set the totalDuration: 
    //   // const { exercises } = data;
    //   // const totalDuration = exercises.reduce((accum, current) => (accum + current.duration), 0);
    //   // db.Workout.findOneAndUpdate({_id: req.params.id}, {$set: {...data, totalDuration}})
    //   res.json(data);
    // })
      
      
      // // each req.body object added to the doc.exercise array has its own _id
      // // Demonstration: _id field cannot be deleted:
      // delete doc.exercises[doc.exercises.length - 1]['_id']
      // console.log(doc.exercises)
    // })


