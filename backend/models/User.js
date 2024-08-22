const {DataTypes} = require("sequelize");
const sequelize = require("../config/db")

const User = sequelize.define("User",{
    username:{
        type:DataTypes.STRING,
        allowNull: false ,
        unique:true
    },
    fullname:{
        type:DataTypes.STRING,
        allowNull: false ,
    },
    email:{
        type:DataTypes.STRING,
        allowNull: false ,
        unique:true
    },
    password : {
        type:DataTypes.STRING,
        allowNull : false
    },
    profilePhoto:{
        type:DataTypes.STRING,
        allowNull:true
    }


})

module.exports = User