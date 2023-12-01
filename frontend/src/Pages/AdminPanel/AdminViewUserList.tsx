import { useState, useEffect } from "react"
import './AdminCSS/AdminViewuserlist.css'
import { useNavigate } from "react-router-dom";


interface Iuserlist{
  firstname:string,
  lastname:string,
  email:string
}


let z: Boolean = true;
export default  function AdminViewuserlist() {

  const navigate=useNavigate();

  const[userList,setuserlist]=useState<Iuserlist[] | undefined>()

  useEffect(()=>{
    let ls= localStorage.getItem('Alogin');       
    if (ls === 'false') {
      navigate('/adminlogin');
    } 
    issuereq();
  },[userList])

  async function issuereq()
  {
      //api for view user list
      await fetch('http://localhost:1000/view/user/list')
      .then((response)=> { return response.json()})
      .then((resData)=>{ setuserlist(resData.message)})
      .catch(function (error) {console.log(error);});
  }

 
  async function deleteuserprofile(data: String) 
  {
   console.log(data)
    await fetch('http://localhost:1000/user/profile/delete',
    {     
      method: "POST",
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ email:data })
    })
      .then((response) => { return response.json() })
      .then((resData) => { console.log(resData); })
      .catch(function (error) { console.log(error); });

    alert("delete successfully")

  }


  //Check any user  present or not? 
  if (userList?.length === 0) {
    z = false;
  }
  

  return (
    <>
    
      <div className="User_Req">
      <button id="home" onClick={()=>{navigate('/adminhome')}}>Home</button>
        {z ?
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email </th>
                <th>Delete</th>
              </tr>

            </thead>

            <tbody>
              {userList?.map((user) => (

                <tr>
                  <td>{user.firstname}</td>
                  <td>{user.lastname}</td>
                  <td>{user.email}</td>
                  <td><button onClick={()=>{deleteuserprofile(user.email)}}>Delete</button></td>
                </tr>
              ))}
            </tbody>
            
          </table> :
          <h1>No Users Available</h1>
         } 
      </div>

    </>
  )
}   