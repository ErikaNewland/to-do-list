//this page won't get used until I learn more about authentication and sign in

const Sequelize = require('sequelize')
const db = require('./_db');

const User=db.define('user', {
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    firstName: {
        type: Seqeulize.STRING,
        allowNull: false
    }
}, {})

module.exports=User
//export model