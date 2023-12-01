import express,{Request} from 'express'
import Adminlogin from '../../Model/Admin/AdminLoginSchema';


const app=express()
app.use(express.json());

const adminforegetpassword=express.Router();

adminforegetpassword.post("/",async(req:Request,res)=>{
    
    
    const admin_id=req.body.admin_id;
    const password=req.body.new_password;
    console.log(admin_id,password);
    
    let ress;

await Adminlogin.findOne({admin_id:admin_id}).then((ans)=>{
   
  Adminlogin.updateOne({admin_id:admin_id},{$set:{password:password}}).then((respo)=>{
    console.log(respo)
  })  
    
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
    
});

export default adminforegetpassword