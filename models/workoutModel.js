const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// schema for the Workout collection
const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  type: {
    type: String,
    require: true
  },
  name: {
    type: String,
    require: true
  },
  duration: {
    type: Number,
    require: true
  },
  weight: {
    type: Number
  },
  reps: {
    type: Number
  },
  sets: {
    type: Number
  }

});

// method totalDuration - for workout.js


// have mongoose model the collection
const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
