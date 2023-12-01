import express,{Request} from 'express'
import Adminlogin from '../../Model/Admin/AdminLoginSchema';


const app=express()
app.use(express.json());

const adminloginverify=express.Router();

adminloginverify.post("/",async(req:Request,res)=>{
    
    const id=req.body.Admin_id;
    const password=req.body.password;
    let ress;

const adminDetails =  await Adminlogin.findOne({admin_id:id,password:password}).then((ans)=>{
   
    console.log("ansssssss",ans);
    
    if(ans!=null)
    {
         ress="true"
    }
    else{
       ress="false"

    }
})
    res.send(
        { message:ress}
    )
    return adminDetails
});

export default adminloginverify