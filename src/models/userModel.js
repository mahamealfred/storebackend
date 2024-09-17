const dbConnection=require("../database/db.js");

const excuteQuery=(sql,values, callback)=>{
    dbConnection.query(sql, values, (err,results)=>{
        if(err){
            console.log("Error Message:",err)
            return
        }
        callback(null,results)
    })
}

const addUser=(name,email,phoneNumber, callback)=>{
    const sql='INSERT INTO users (name, email, phoneNumber) VALUES (?, ?, ?)';
    excuteQuery(sql,[name, email, phoneNumber],(err,results)=>{
        if(err) return callback(err, null);
        callback(null,{id:results.insertId, name, email, phoneNumber})
    })
}

const getAllUser=(callback)=>{
    const sql='SELECT * FROM users';
    excuteQuery(sql,[],callback);
}


module.exports ={addUser,getAllUser}
