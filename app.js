const express = require ('express');
require ('./config/config.js')
require('dotenv').config()

//import routes
const authROute = require('./routes/auth');
const loggedRoute = require('./routes/logged')

const app = express()

const db = require("./model");
db.sequelize.sync();

app.use(express.json());


//Routes
app.use('/api/user', authROute);
app.use('/api/logged', loggedRoute);


app.listen(process.env.PORT, ()=>{
    console.log('server up and running')
})
