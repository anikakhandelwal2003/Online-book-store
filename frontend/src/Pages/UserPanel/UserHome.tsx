import { useNavigate } from "react-router-dom";
import './UserCss/UserHome.css'
import { useEffect } from "react";



function Home() {

const navigate=useNavigate()

    useEffect(() => {
        let ls= localStorage.getItem('login');
        if (ls === 'false') {
          navigate('/userlogin');
        } else{
          navigate('/userhome');
        }
      },[]);

    return(
        <>
        <div className="User_Home">
         <nav className="navbar">
        <button id="butt1"  onClick={() =>{ navigate('/userviewbook');}}>View Book</button>
        <button id="butt2" onClick={() =>{  navigate('/usermybook')}} >My Book</button>
        <button id="butt3" onClick={() =>{navigate('/userpendingrequest')  }}>Pending request</button>  
        <button id="butt4" onClick={()=>{    localStorage.setItem('login', 'false'); navigate('/')}}>Logout</button>
        </nav>
        <h1>Welcome to user home</h1>
        </div>
        </>
    )
}

export {Home}
