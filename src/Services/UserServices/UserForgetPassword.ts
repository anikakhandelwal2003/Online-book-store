import express,{Request} from 'express'
import { Usersignup } from '../../Model/User/UserSignupSchema';


const app=express()
app.use(express.json());

const userforegetpassword=express.Router();

userforegetpassword.post("/",async(req:Request,res)=>{
    
    
    const email=req.body.email;
    const password=req.body.new_password;
    console.log(email,password);
    
    let ress;

await Usersignup.findOne({email:email}).then((ans)=>{
   
  Usersignup.updateOne({email:email},{$set:{password:password}}).then((respo)=>{
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

export default userforegetpassword