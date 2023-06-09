const db = require("../database");
const {DataTypes} = require("sequelize");

const Psicologos = db.define("Psicologos", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING,
        
    },
    email:{
        type: DataTypes.STRING
    },
    senha:{
        type: DataTypes.STRING
    },
    cpf:{
        type: DataTypes.STRING
    }, 
    createdAt:{
        type: DataTypes.DATE
    }, 
    updatedAt:{
        type: DataTypes.DATE
    },    

}, {
    tableName: "psicologos",
    timestamps: true,
});

module.exports= Psicologos;
