const express = require('express')
const Workout = require('../models/workoutmodel.js')
const router = express.Router()

//Get all workouts

router.get('/', (req,res) => {
    res.json({msg: 'get all workouts'})   
})

router.get('/:id', (req,res) => {
    res.json({msg: 'get single workout'})   
})


router.post('/', async (req, res) => {
    const {title, load, reps} = req.body

    try{
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)

    } catch (error) {
        res.status(400).json({error: error.message})
    }
})


router.delete('/:id', (req,res) => {
    res.json({msg: 'delete workout'})   
})

router.patch('/:id', (req,res) => {
    res.json({msg: 'update workout'})   
})


module.exports = router