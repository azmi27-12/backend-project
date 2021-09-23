const router = require('express').Router();
const verifyToken = require('./verifyToken')

//require controller
const workout = require ('../controller/workout.controller')

//create workout 
router.post('/create', verifyToken, workout.createWorkout)

//get all workout
router.get('/allworkouts', verifyToken , workout.getAllWorkout)

//get workout by day
router.get('/get/day/:day' , verifyToken , workout.getWorkoutByDay)

//get workout by group
router.get('/get/group/:group' , verifyToken, workout.getWorkoutByGroup)

//delete group
router.delete ('/delete/group/:group', verifyToken , workout.deleteGroup)

//delete exercise by id
router.delete('/delete/exercise/:day/:exercise', verifyToken, workout.deleteExercise)

//delete all workouts of the logged user
router.delete('/delete/all' , verifyToken , workout.deleteAllWorkouts)

//update workouut by day and exercise
router.put('/update/:day/:exercise',verifyToken , workout.updateExerciseByDay)

module.exports = router;