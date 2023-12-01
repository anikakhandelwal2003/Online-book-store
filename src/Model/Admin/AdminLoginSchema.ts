import mongoose from "mongoose";

const adminloginschema=new mongoose.Schema({
    admin_id:
    {
        type:Number,
        require:true
        
    },
    password:
    {
      type:String,
      require:true 
    },
})

const Adminlogin = mongoose.model("Adminlogindata",adminloginschema)
export default Adminlogin