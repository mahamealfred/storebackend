const UserModel=require("../models/userModel.js")
class userController{

static addNewUser(req,res){
    const {name,email,phoneNumber}=req.body
UserModel.addUser(name,email,phoneNumber,(err,result)=>{
  if(err) return res.status(500).json({error:err.message})
    res.status(201).json(result)
})
}


//function to get all user
static getUsers(req,res){
  
UserModel.getAllUser((err,results)=>{
    if(err) return res.status(500).json({error:err.message})
        res.json(results)
})
}

}

module.exports =userController