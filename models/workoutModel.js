const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// schema for the Workout collection
const workoutSchema = new Schema({
  day: {
    // this requires a Number instead of a date?
    type: Date,
    default: new Date()
  },
  exercises: [{
    type: {
      type: String,
      require: true,
      default: ""
    },
    name: {
      type: String,
      require: true,
      default: ""
    },
    distance: Number,
    duration: {
      type: Number,
      require: true,
      default: 0
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
  }],
  // need to add in a totalDuration field to the schema!!
  totalDuration: Number
});

// method totalDuration - for workout.js
workoutSchema.methods.setTotalDuration = function() {
  this.totalDuration = 0;
  for (let i = 0, j = this.exercises.length; i < j; i++) {
    this.totalDuration += this.exercises[i]["duration"];
  }
  return this.totalDuration;
}

// have mongoose model the collection
const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
