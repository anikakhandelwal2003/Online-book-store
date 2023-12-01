import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/UserPanel/UserAuth/UserLogin';
import Signup from './Pages/UserPanel/UserAuth/UserSignup';
import LibLogin from './Pages/AdminPanel/AdminAuth/AdminLogin';
import {Home} from './Pages/UserPanel/UserHome';
import Error from './Pages/Error';
import Main from './Pages/Main';
import Addbook from './Pages/AdminPanel/AdminAddBook';
import {AdminHome} from './Pages/AdminPanel/AdminHome';
import AdminViewbook from './Pages/AdminPanel/AdminViewBook';
import Userforgetpassword from './Pages/UserPanel/UserAuth/UserForgetPassword';
import Userpendingreq from './Pages/UserPanel/UserPendingRequest';
import UserMyBook from './Pages/UserPanel/UserMyBook';
import Adminforgetpassword from './Pages/AdminPanel/AdminAuth/AdminForgetPassword';
import UserViewbookdata from './Pages/UserPanel/UserViewBookData';
import AdminViewuserreq from './Pages/AdminPanel/AdminViewUserReq';
import AdminViewuserlist from './Pages/AdminPanel/AdminViewUserList';
import { Protected } from './Pages/UserPrivate';
import { AProtected } from './Pages/Adminprivate';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
        <Route path ='/' element={<Main/>}></Route>
        <Route path='/*' element={<Error/>}></Route>


       <Route path='/usersignup' element={<Signup/>}></Route>
       <Route path='/userlogin' element={<Login/>}></Route>
       <Route path='/userforgetpassword' element={<Userforgetpassword/>}></Route>
       <Route path='/userhome' element={ <Protected Component={ Home } /> }></Route>
       <Route path='/usermybook' element={ <Protected Component={ UserMyBook } /> }></Route>
       <Route path='/userpendingrequest'element={ <Protected Component={ Userpendingreq } /> }></Route>
       <Route path='/userviewbook' element={ <Protected Component={ UserViewbookdata } /> }></Route>


       <Route path='/adminlogin' element={<LibLogin/>}></Route>
       <Route path='/adminhome' element={ <AProtected Component={ AdminHome } /> }></Route>
       <Route path='/adminaddbook'element={ <AProtected Component={ Addbook } /> }></Route>
       <Route path='/adminviewbook' element={ <AProtected Component={ AdminViewbook } /> }></Route>
       <Route path='/adminforgetpassword' element={<Adminforgetpassword/>}></Route>
       <Route path='/adminviewuserissuerequest' element={ <AProtected Component={ AdminViewuserreq } /> }></Route>
       <Route path ='/adminviewuserlist' element={ <AProtected Component={ AdminViewuserlist } /> }></Route>
      
       
      </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
