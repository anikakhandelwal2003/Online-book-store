import {  useState, useEffect } from "react";
import './AdminCSS/AdminViewBook.css'
import { useNavigate } from "react-router-dom";


interface Iviewbook{
    _id?: string,
    title:string,
    author:string,
    price:number
  }
  

// view all book present in store at admin panel
export default function AdminViewbook() {

    const navigate=useNavigate();

  
  

const[adminview,setadminview]=useState<Iviewbook[] | undefined>();

useEffect(()=>{
    let ls= localStorage.getItem('Alogin');
    if (ls === 'false') {
      navigate('/adminlogin');
    } 
    viewbook();
  },[adminview])

    async function viewbook()
   {
        //api for view books at admin panel
        await fetch('http://localhost:1000/viewbook')
        .then((response)=> {return response.json() })
        .then((resData)=>{ console.log(resData);setadminview(resData.message);})
        .catch(function (error) {console.log(error);});

    }

    return (

        <>
            <div className="Admin_View_book">
            <button id="home" onClick={()=>{navigate('/adminhome')}}>Home</button>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {adminview?.map((book) => (
                            <tr key={book._id}>
                                <td>{book.title}</td>
                                <td>{book.author}</td>
                                <td>{book.price}</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </>
    
    )
}





