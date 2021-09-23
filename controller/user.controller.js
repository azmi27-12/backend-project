const db = require('../model');
const User = db.users;
const { registerValidation , loginValidation } = require('../validation/validation')
const bcrypt = require ('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config();
const parseJwt = require ('./decodeToken');


//register user
exports.register = async(req,res) =>{
    
    //validate data before make user
    const {error} = registerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    //check if the user is alredy in the database
    const emailExist = await User.findOne({
        where : {
            email : req.body.email
        }
    })


    if(emailExist) return res.status(400).send('email already exist');

    //hash the password
    const salt =  await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);


    //create a new user
       const user = await User.create ({
       name : req.body.name,
       email : req.body.email,
       password : hashedPassword
   });
   try{

    res.send(user)
    
   }catch(error){
       res.sendStatus(400).send(error)
   } 

}

// login an generate token

exports.login = async(req,res) => {
    //validate data before make login
    const {error} = loginValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    //check if the user email is in the database
    const user = await User.findOne({
        where : {
            email : req.body.email
        }
    })
    
    if(!user) return res.status(400).send('email not found');

    //password is correct
    
    const validPAss = await bcrypt.compare(req.body.password, user.password)
    if(!validPAss) return res.status(400).send('invalid password');

    //create and assign a token
    const token = jwt.sign({user}, process.env.TOKEN_SECRET, {expiresIn : '1h'})
    res.header('auth-token',token).send('success login , this is the token : ' + token)

 
}

//get all users
exports.getAllUsers = async(req,res) => {
    
    const token = req.header('auth-token');
    const decodedToken = parseJwt(token)
    const roleModerator = (decodedToken.user.moderator);
    

    if(roleModerator === true){
        const user = await User.findAll()

        try{

          return  res.send(user)
        
        }catch(error){

           return res.status(400).send(error)
        }
    }else{
       return res.send('you dont have permission')
    }
}

//delete users by id
exports.deleteUserById = async(req,res) => {
    const id = req.params.id
    
    const token = req.header('auth-token');
    const decodedToken = parseJwt(token)
    const roleModerator = (decodedToken.user.moderator);

    const userExist = await User.findOne({
        where : {
            id : id,
            moderator : 0
        }
    })


    if(roleModerator === true) {
    
        if(userExist){

            const user = await User.destroy({
                where : {
                    id : id,
                    moderator : false
                }
            })
            
           return res.send('user deleted successfully')
        } return res.send('id not found')
    } return res.send('you dont have permission')
}

//update user
exports.updateUserById = async(req,res) => {
    const id = req.params.id

    const token = req.header('auth-token');
    const decodedToken = parseJwt(token)
    const roleModerator = (decodedToken.user.moderator);

    const userExist = await User.findOne({
        where : {
            id : id
        }
    })


    if(roleModerator === true){
        if(userExist){
            
            //find user with email
            const emailExist = await User.findOne({
                where : {
                    email : req.body.email
                }
            })
            
    
            if(emailExist)
                return res.send('email alredy used')

            const salt =  await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(req.body.password, salt);
            


            //update a new user
            const user = await User.update ({
                email : req.body.email,
                name : req.body.name,
                password : hashedPassword
        }, {
            where : {
                id : id
            }
        });try{
            
        const userUpdated = await User.findByPk(id);

        return res.send(userUpdated);
        
        }catch(error){
                return res.sendStatus(400).send(error)
            } 
        }else return res.send('id not found')
    
    } return res.send('you dont have permission')
    

}

//logout user 

exports.logout = async (req,res) => {
    const token = ' '

    res.header('auth-token',token).send('logout')

}
