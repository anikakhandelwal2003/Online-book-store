import express,{Request} from 'express'
import AdminAddBook from '../../Model/Admin/AdminAddBookSchema';
import { userissuebookrequest } from '../../Model/User/UserIssueBookRequestSchema';
import { Userissue } from '../../Model/User/UserIssueSchema';


const app=express()
app.use(express.json());

const adminrejectreq=express.Router();


adminrejectreq.post("/",async(req:Request,res)=>{
    
    const id=req.body.id
    let ress;

await AdminAddBook.findOne({title:id}).then((ans)=>{
   if(ans?.isavailable===false)
   {
    userissuebookrequest.findOne({title:id}).then((ressss)=>{
      if(ressss===null)
      {
        Userissue.deleteOne({book_title:id}).then((ress)=>{console.log(res)})  
      }
      else{
        userissuebookrequest.deleteOne({title:id}).then((req)=>{ console.log(req)})
      }
    })
    

   }
   else{
    
   }

    
    
    if(ans!=null)
    {
         ress="true"
    }
    else{
       ress="false"

    }
})
    res.json(
        { message:ress}
    )
    
});


export default adminrejectreq