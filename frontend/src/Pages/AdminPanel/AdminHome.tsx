import {  useNavigate } from "react-router-dom";
import './AdminCSS/AdminHome.css'
import { useEffect } from "react";




function AdminHome() {
                          
    const navigate=useNavigate();

    useEffect(() => {
        let ls= localStorage.getItem('Alogin');
        if (ls === 'false') {
          navigate('/adminlogin');
        } else{
          navigate('/adminhome');
        }
      },[]);

    return(
        <>
        <div className="Admin_Home">
        <nav className="navbar">
        <button id="butt1"  onClick={() =>{ navigate('/adminviewuserissuerequest');   }}>Issue Request</button>
        <button id="butt2" onClick={() =>{ navigate('/adminaddbook')}}>Add Book</button>
        <button id="butt3"  onClick={() =>{ navigate('/adminviewbook')}}>View Book</button>
        <button id ="butt5" onClick={()=>{  navigate('/adminviewuserlist')}}>User List</button>
        <button id="butt4" onClick={()=>{  localStorage.setItem('Alogin', 'false');  navigate('/')}}>Logout</button>
      
        </nav>
        
        <h1>welcome to admin home</h1>
        </div>
        </>
    )
}

export{AdminHome}