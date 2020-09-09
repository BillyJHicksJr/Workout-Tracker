const mongoose = require('mongoose');
const { static } = require('express');

const Schema = mongoose.Schema;
const workoutSchema = new Schema({
    day: {
        type: Date,
        
    },
    exercises: [{
        type: {
            type: String
        },
        name: {
            type: String
        },
        duration: {
            type: Number
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },
    }]
});

workoutSchema.virtual("totalDuration").get(function() {
    return this.exercises.reduce((total, exercise) => {
      return total + exercise.duration;
    }, 0);
  });



const Workout = mongoose.model('workout', workoutSchema);
module.exports = Workout

