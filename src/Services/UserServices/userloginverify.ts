import express,{Request} from 'express'
import { Usersignup } from '../../Model/User/UserSignupSchema';
import jwt from "jsonwebtoken"


const app=express()
app.use(express.json());

const userloginverify=express.Router();


userloginverify.post("/",async(req:Request,res)=>{
    const email=req.body.email;
    const password=req.body.password;
         
   
    let ress;

await Usersignup.findOne({email:email,password:password}).then((ans)=>{
    
    if(ans!=null)
    {
         ress="true"
        
    }
    else{
       ress="false"

    }
})

    res.send(
        { message:ress,
        }
    )
    
});

export default userloginverify