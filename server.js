const express=require("express")
const bodyParser=require("body-parser")
const dbConnection=require("./src/database/db.js")
const router=require("./src/routes")
require('dotenv').config();

const app= express()
const port=process.env.PORT || 4000




app.use(express.json())
app.use(router)
app.listen(port,()=>{
    dbConnection
    console.log("Serve is running on http://localhost:"+port)
})