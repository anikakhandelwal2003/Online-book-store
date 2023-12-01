import mongoose from "mongoose";

const adminaddbookschema=new mongoose.Schema({
    title:
    {
        type:String,
        require:true
        
    },
    author:
    {
      type:String,
      require:true 
    },
    price:
    {
        type:Number,
        require:true
    },
    isavailable:{
        type:Boolean,
        default:true,
    }
})

const AdminAddBook = mongoose.model("Adminaddbook",adminaddbookschema)
export default AdminAddBook