import express,{Request} from 'express'
import AdminAddBook from '../../Model/Admin/AdminAddBookSchema';



const app=express()
app.use(express.json());

const adminaddbook=express.Router();

adminaddbook.post("/",async(req:Request,res)=>{
    
    const title=req.body.title;
    const author=req.body.author;
    const price=req.body.price;
    


await AdminAddBook.create({title:title,author:author,price:price,isavailable:true}).then((ans)=>{
 console.log(ans);
})
    res.send(
        { message:"success"}
    )
});

export default adminaddbook