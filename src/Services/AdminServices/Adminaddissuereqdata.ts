import express,{Request} from 'express'
import AdminAddBook from '../../Model/Admin/AdminAddBookSchema';
import { Userissue } from '../../Model/User/UserIssueSchema';
import { userissuebookrequest } from '../../Model/User/UserIssueBookRequestSchema';


const app=express()
app.use(express.json());

const adminaddissuereqdata=express.Router();


adminaddissuereqdata.post("/",async(req:Request,res)=>{
    
    let date=new Date();
    console.log("NNNNNNN",date);
    const id=req.body.id
    let ress;

await AdminAddBook.findOne({title:id}).then((ans)=>{
   
Userissue.create({book_title:id,available:true,issue_date:date,end_date:new Date(date.getTime() + (15 * 24 * 60 * 60 * 1000))})
userissuebookrequest.deleteOne({title:id}).then((req)=>{
    console.log(req)
})
    
    
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


export default adminaddissuereqdata