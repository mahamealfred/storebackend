const express=require("express")
const router=express.Router()
const userRoutes=require('./user.routes.js') 

router.use('/users',userRoutes)

module.exports=router