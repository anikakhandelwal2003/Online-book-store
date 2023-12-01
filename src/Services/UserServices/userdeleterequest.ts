import express,{Request} from 'express'
import AdminAddBook from '../../Model/Admin/AdminAddBookSchema';
import { userissuebookrequest } from '../../Model/User/UserIssueBookRequestSchema';
import { Userissue } from '../../Model/User/UserIssueSchema';


const app=express()
app.use(express.json());

const userdeletereq=express.Router();

let available:Boolean;
userdeletereq.post("/",async(req:Request,res)=>{
    
       
    const id=req.body.id
    let ress;

await AdminAddBook.findOne({title:id}).then((ans)=>{
    console.log(ans)
   if(ans?.isavailable===false)
   {
     available=false;
     AdminAddBook.updateOne({title:id},{$set:{isavailable:true}}).then((resq)=>{
        console.log(resq)
    })
    Userissue.deleteOne({book_title:id}).then((respon)=>{console.log(respon)});
   }
   else{
    available=true;
   }

userissuebookrequest.deleteOne({book_id:id}).then((del)=>{console.log(del)})
  
    
    if(ans!=null)
    {
         ress=true;
    }
    else{
       ress=false

    }
})
    res.json(
        { message:ress,
        deleteavailable:available}
    )
    
});


export default userdeletereq