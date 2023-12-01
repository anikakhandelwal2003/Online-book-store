import express,{Request} from 'express'
import { Userissue } from '../../Model/User/UserIssueSchema';




const app=express()
app.use(express.json());

let respon:any;
const usermybook=express.Router();

usermybook.get("/",async(req:Request,res)=>{
let d=new Date();

await Userissue.find({},{}).then((ans)=>{  
 respon=ans;
})
    res.send(
        { message:respon}
    )
});

export default usermybook