import express,{Request} from 'express'
import AdminAddBook from '../../Model/Admin/AdminAddBookSchema';



const app=express()
app.use(express.json());

let respon:any;
const viewbookdata=express.Router();

viewbookdata.get("/",async(req:Request,res)=>{

await AdminAddBook.find({}).then((ans)=>{
 
 respon=ans;
})
    res.send(
        { message:respon}
    )
});

export default viewbookdata