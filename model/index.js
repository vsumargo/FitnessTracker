const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fitnessTracker = new Schema({
    day:{
        type: Date,
        default: Date.now
    },
    exercises:[{
        'type': {
            type: String,
            trim: true,
            lowercase: true,
            required: "Enter a type for the exercise"
        },
        name: {
            type: String,
            lowercase: true,
            required: "Enter a name for the exercise"
        },
        duration:{
            type: Number,
            required: "Enter the duration for the exercise"
        },
        weight:{
            type: Number,
            required: "Enter the weight used for the exercise"
        },
        reps:{
            type: Number,
            required: "Enter the number of repetition per set"
        },
        sets:{
            type: Number,
            required: "Enter the number of sets done for this exercise"
        },
    }]
});

const Workout = mongoose.model("workout", fitnessTracker);

module.exports = {Workout}