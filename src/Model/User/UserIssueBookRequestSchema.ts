import mongoose from "mongoose";

const userissuebookrequestschema=new mongoose.Schema({
    book_id:{
      type:String
    },
    book_name:{
    type:String
    },
    author:{
      type:String
    }
    
})

const userissuebookrequest = mongoose.model("userissuebookrequest",userissuebookrequestschema)
export {userissuebookrequest}