const express=require("express")
const router=express.Router()
const userController=require('../controllers/userController.js')

router.post('/new-user',userController.addNewUser)
router.get('/all-user',userController.getUsers)

module.exports=router