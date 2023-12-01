import express,{Request} from 'express'
import AdminAddBook from '../../Model/Admin/AdminAddBookSchema';
import { userissuebookrequest } from '../../Model/User/UserIssueBookRequestSchema';


const app=express()
app.use(express.json());

const admingetreq=express.Router();

let available:Boolean;
admingetreq.post("/",async(req:Request,res)=>{
    
       
    const id=req.body.id
    let ress;

await AdminAddBook.findOne({_id:id}).then((ans)=>{
    console.log(ans)
   if(ans?.isavailable===false)
   {
     available=false;
    
   }
   else{
    available=true;
    AdminAddBook.updateOne({_id:id},{$set:{isavailable:false}}).then((resq)=>{
        console.log(resq)
    })
    userissuebookrequest.create({book_id:ans?.id,book_name:ans?.title,author:ans?.author})
   }


  
    
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
        issueavailable:available}
    )
    
});


export default admingetreq