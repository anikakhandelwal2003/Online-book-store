import express,{Request} from 'express'
import { userissuebookrequest } from '../../Model/User/UserIssueBookRequestSchema';



const app=express()
app.use(express.json());

let respon:any;
const adminviewrequest=express.Router();

adminviewrequest.get("/",async(req:Request,res)=>{

await userissuebookrequest.find({}).then((ans)=>{
 
 respon=ans;
})
    res.send(
        { message:respon}
    )
});

export default adminviewrequest