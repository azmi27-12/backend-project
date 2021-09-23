module.exports = (sequelize,Sequelize)  => {

    const Workout = sequelize.define( 'workout', {
        day : {
            type : Sequelize.STRING
        },
        group : {
            type : Sequelize.STRING
        },
        exercise : {
            type : Sequelize.STRING
        },
        sets : {
            type : Sequelize.STRING
        },
        reps : {
            type : Sequelize.STRING
        },
        rest : {
            type : Sequelize.STRING
        },
        kg : {
            type : Sequelize.STRING
        },
        note : {
            type : Sequelize.STRING
        },
        user : {
            type : Sequelize.STRING
        }
        
    });

    return Workout;

}