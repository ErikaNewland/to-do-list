const Sequelize = require('Sequelize');
const db = require('./_db')


const Todo=db.define(todo, {
    task: {
        type: Sequelize.STRING,
        allowNull: false,
        notEmpty: true
    },
    due: {
        type: Sequelize.DATE,
    },
    assingnedTo: {    //this will initially be left null but will be implemented when new users are implented
        type: Sequelize.STRING
    }, 
    workOnNext: {
        type: Sequelize.DATE //sequelize date with time- default set from HTML to set time to 8am.  Will have to think about how to display time if in any way at first
    },
    priorityRating: {
        type: Seque.ENUM(1,2,3,4,5)
    }, 
    notes: {
        type: Sequelize.TEXT
    }
},{})



module.exports= Todo