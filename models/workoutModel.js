const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// schema for the Workout collection
const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    { 
      type: {
        type: String,
        require: "Must enter resistance"
      }
    },
    {
      name: {
        type: String,
        require: "must enter name"
      }
    },
    {
      duration: {
        type: Number
      }
    },
    {
      weight: {
        type: Number
      }
    },
    {
      reps: {
        type: Number
      }
    },
    {
      sets: {
        type: Number
      }
    }
  ]
});

// method totalDuration - for workout.js


// have mongoose model the collection
const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
