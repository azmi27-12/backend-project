const router = require('express').Router();
const user = require ('../controller/user.controller')
const verifyToken = require('./verifyToken')


//register new user
router.post('/register', user.register)

// login 
router.post('/login', user.login)

//get all user
router.get('/allusers', verifyToken, user.getAllUsers)

//delete user with id
router.delete('/delete/:id' , verifyToken, user.deleteUserById)

//update user by id
router.put('/update/:id' , verifyToken, user.updateUserById)

//logout
router.get('/logout' , verifyToken , user.logout)
module.exports = router;