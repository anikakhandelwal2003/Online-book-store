import express,{Request} from 'express'
import { Usersignup } from '../../Model/User/UserSignupSchema';



const app=express()
app.use(express.json());

const usersignupdata=express.Router();

usersignupdata.post("/",async(req:Request,res)=>{
    
    const firstname=req.body.firstname;
    const lastname=req.body.lastname;
    const email=req.body.email;
    const password=req.body.password;


await Usersignup.create({firstname:firstname,lastname:lastname,email:email,password:password}).then((ans)=>{
 console.log(ans);
})
    res.send(
        { message:"success"}
    )
});

export default usersignupdata