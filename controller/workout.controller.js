const db = require('../model');
const Workout = db.workouts;
const parseJwt = require ('./decodeToken')


//create workout
exports.createWorkout = async(req,res) => {

    const token = req.header('auth-token');
    const decodedToken = parseJwt(token);
    const userName = (decodedToken.user.name);

    const workout = await Workout.create ({
        day : req.body.day,
        group : req.body.group,
        exercise : req.body.exercise,
        sets : req.body.sets,
        reps : req.body.reps,
        kg : req.body.kg,
        rest : req.body.rest,
        note : req.body.note,
        user : userName
    }) ;
    try {
        const savedWorkout = await workout.save();
       return res.send(savedWorkout);
       
        
    } catch (error) {
        return res.sendStatus(400).send(error);
    }
}


//get all workout of the user
exports.getAllWorkout = async(req,res) =>{
    const token = req.header('auth-token');
    const decodedToken = parseJwt(token);
    const userName = (decodedToken.user.name);

    const workout = await Workout.findAll({
        where: {
          user : userName
        },
        attributes : {
            exclude : ['user','createdAt', 'updatedAt']
        }
      });try {

        if(workout.length>0)
            return res.send(workout)
        
        return res.send('you dont have any workout, create one!')
        

      } catch (error) {

          return res.sendStatus(400).send(error)
      }
}

//get workout by day
exports.getWorkoutByDay = async(req,res) => {
    const day = req.params.day;

    const token = req.header('auth-token');
    const decodedToken = parseJwt(token);
    const userName = (decodedToken.user.name);

    const workout = await Workout.findAll({
        where: {
            user : userName,
            day : day
          },
          attributes : {
              exclude : ['user','id','createdAt', 'updatedAt']
          }
    });try  {
        if(workout.length === 0) return res.send(`workout not found for ${day}`);

          return res.send(workout)

      } catch (error) {
            return res.sendStatus(400).send(error)
      }

}

//get workout by group
exports.getWorkoutByGroup = async(req,res) =>{

    const group = req.params.group;
    
    const token = req.header('auth-token');
    const decodedToken = parseJwt(token);
    const userName = (decodedToken.user.name);

    const workout = await Workout.findAll({
        where: {
          user : userName,
          group : group
        },
        attributes : {
            exclude : ['user','id','createdAt', 'updatedAt']
        }
      });try  {
        if(workout.length === 0) return res.send(`you dont have workout for ${group}`);

        return res.send(workout)

      } catch (error) {
        return res.sendStatus(400).send(error)
      }
}

//delete all group
exports.deleteGroup = async (req,res) => {
    const group = req.params.group;

    const token = req.header('auth-token');
    const decodedToken = parseJwt(token);
    const userName = (decodedToken.user.name);

    const findGroup = await Workout.findOne({
        where : {
            group : group,
            user : userName
        }
    })
    
    if(!findGroup)
            return res.send("group not found")

    const workout = await Workout.destroy({
        where: {
            user : userName,
            group : group
          },
          
    });try {
        return res.send('workout deleted')
        
    } catch (error) {
        return res.sendStatus(400).send(error)           
    }
}

//delete all workouts
exports.deleteAllWorkouts = async(req,res) => {
    const token = req.header('auth-token');
    const decodedToken = parseJwt(token);
    const userName = (decodedToken.user.name);
    

    const workout = await Workout.destroy({
        where: {
            user : userName,
          },
          
    })
    try {
        return res.send('All workouts was deleted')

    } catch (error) {
        return res.sendStatus(400).send(error)           

    }
}

//delete exercise by id
exports.deleteExercise = async(req,res) => {
    const id = req.params.id 
    const exercise = req.params.exercise
    const day = req.params.day

    const token = req.header('auth-token');
    const decodedToken = parseJwt(token);
    const userName = (decodedToken.user.name);

    const findWorkout = await Workout.findOne({
        where : {
            user : userName,
            day : day,
            exercise : exercise

        }
    })

    if(!findWorkout)
        return res.send("workout not found")

    const workout = await Workout.destroy({
        where: {
            user : userName,
            exercise : exercise,
            day : day 
          },
          
    });try {
        return res.send(`exercise : ${exercise} of ${day} was deleted!`)

    } catch (error) {
        return res.sendStatus(400).send(error)           

    }
    
}

//update exercise by day and exercise
exports.updateExerciseByDay = async (req,res) =>{

    const day = req.params.day
    //const id = req.params.id
    const exercise = req.params.exercise

    const token = req.header('auth-token');
    const decodeToken = parseJwt(token)
    const userName = (decodeToken.user.name)

    const exerciseExist = await Workout.findOne({
        where : {
            exercise : exercise,
            //id : id,
            user : userName,
            day : day
        }
    })

    if(!exerciseExist)
        return res.send('workout not found')
    
        const workout = await Workout.update({
            //exercise : req.body.exercise,
            day : req.body.day,
            sets : req.body.sets,
            reps : req.body.reps,
            kg : req.body.kg,
            rest : req.body.rest,
            note : req.body.note,
        },{
            where : {
                exercise : exercise,
                //id : id,
                day : day,
                user : userName
            }
        }); try {
        
        const workoutUpdated = await Workout.findOne({
            where : {
                exercise : exercise,
                //id : id,
                user : userName
            },
            attributes : {
                exclude : ['user','id','createdAt', 'updatedAt']
            }

        });
            return res.send(workoutUpdated)
        } catch (error) {
            return res.sendStatus(400).send(error)
        }

}