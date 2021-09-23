module.exports = (sequelize, Sequelize) => {

    const User = sequelize.define("user", {
    
    name: {
        type: Sequelize.STRING,
        required : true,
        min : 4, 
        max : 255
    },
    
    email: {
        type: Sequelize.STRING,
        required : true,
        max : 255,
        min : 6

    },
    
    password: {
        type: Sequelize.STRING,
        required : true,
        max : 1024,
        min : 6
    },


    moderator : {
        type : Sequelize.BOOLEAN,
        defaultValue : false
    }
    
    });
    
    
    return User;
    
    };