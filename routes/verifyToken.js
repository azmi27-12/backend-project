const  parseJwt  = require('../controller/decodeToken');
const jwt = require('jsonwebtoken');

module.exports = function  (req,res, next){
    const token = req.header('auth-token');
    if(!token) return res.status(401).send('Access Denied')

    const decodeToken = parseJwt(token)
    const expiratioToken = decodeToken.exp
    const dateNow = new Date()
    if(expiratioToken < dateNow.getTime()/1000)
    return res.send('expire token, make login')
    else
    try {
        const verified = jwt.verify(token , process.env.TOKEN_SECRET)
        req.user = verified;
        next()
    } catch (error) {
       return res.status(400).send('invalid token'); 
    }
}

