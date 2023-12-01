import express,{Request} from 'express';
import { Usersignup } from '../../Model/User/UserSignupSchema';



const app=express()
app.use(express.json());

let respon:any;
const admindeleteuserprofile=express.Router();

admindeleteuserprofile.post("/",async(req:Request,res)=>{
 const email=req.body.email
await Usersignup.deleteOne({email:email}).then((ans)=>{
 respon=ans;
})
    res.send(
        { message:respon}
    )
});

export default admindeleteuserprofile