import mongoose from "mongoose";

const userissueschema=new mongoose.Schema({
    book_title:{
      type:String
    },
    available:
    {
      type:Boolean,
      require:true  ,
      default:false
        
    },
    issue_date:{
      type:Date
    },
    end_date:{
      type:Date
    }
})

const Userissue = mongoose.model("userissuebookdata",userissueschema)
export {Userissue}