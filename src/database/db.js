const mysql=require("mysql2")
require('dotenv').config()
const dbConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"",
    database: process.env.DATABASENAME
})

//connect to mysql
dbConnection.connect((err)=>{
    if(err){
        console.log("Error while connecting to Mysql:",err.stack)
        return
    }
    console.log("Connected as id" + dbConnection.threadId)
})

module.exports =dbConnection;