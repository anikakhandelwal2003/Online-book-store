import express,{Request} from 'express'
import { userissuebookrequest } from '../../Model/User/UserIssueBookRequestSchema';
import { Usersignup } from '../../Model/User/UserSignupSchema';



const app=express()
app.use(express.json());

let respon:any;
const adminviewuserlist=express.Router();

adminviewuserlist.get("/",async(req:Request,res)=>{

await Usersignup.find({}).then((ans)=>{
 
 respon=ans;
})
    res.send(
        { message:respon}
    )
});

export default adminviewuserlist