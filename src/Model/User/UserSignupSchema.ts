import mongoose from "mongoose";

const usersignupschema=new mongoose.Schema({
    firstname:
    {
        type:String,
    
    },
    lastname:
    {
        type:String,

    },
    email:
    {
        type :String,
        
    },
    password:
    {
      type:String  
        
    },
})

const Usersignup = mongoose.model("usersignupdata",usersignupschema)
export {Usersignup}