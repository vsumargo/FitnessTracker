const express = require('express');
const router = express.Router();
const path = require('path');
const db = require(path.join(__dirname,'../model'));

router.get('/api/workouts', (req,res) => {
    db.Workout.aggregate([
        {
            $addFields: {
                totalDuration: {$sum: "$exercises.duration"}
            }
        }
    ])
    .then(workouts => res.json(workouts))
    .catch(err => res.json(err))
})

router.put('/api/workouts/:id', (req,res) => {
    const query = {_id: req.params.id}
    db.Workout.findOneAndUpdate(query, { $push: {exercises: req.body} }, {new:true})
    .then( addedExercise => res.json(addedExercise))
    .catch( err => res.json(err))
})

router.post('/api/workouts', (req,res) => {
    db.Workout.create(req.body)
    .then(addedWorkout => res.json(addedWorkout))
    .catch(err => res.json(err))
})

router.get('/api/workouts/range', (req,res) => {
    db.Workout.find({})
    .then(workouts => res.json(workouts))
    .catch(err => res.json(err))
})

module.exports = router;