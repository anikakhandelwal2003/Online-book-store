import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import './AdminCSS/AdminViewUserReq.css'


interface Ireqdetails{
  _id?: string,
  book_id:string,
  book_name:string,
  author:string
}


let z: Boolean = true;
export default  function AdminViewuserreq() {

  const navigate=useNavigate();

  const[reqdetails,setreqdetails]=useState<Ireqdetails[] | undefined>()

  useEffect(()=>{
    let ls= localStorage.getItem('Alogin');
    if (ls === 'false') {
      navigate('/adminlogin');
    } 
    issuereq();
  },)

  async function issuereq()
  {
      //api for view user request for issue book
      await fetch('http://localhost:1000/view/user/request')
      .then((response)=> { return response.json()})
      .then((resData)=>{ setreqdetails(resData.message)})
      .catch(function (error) {console.log(error);});
  }


//Api for Accept user issue book request
  async function successissuebook(data: any)
   {
      await fetch('http://localhost:1000/user/issue/request/accept', 
      {
      method: "POST",
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ id: data })
      })
      .then((response) => { return response.json() })
      .then((resData) => { console.log(resData); })
      .catch(function (error) { console.log(error); });

      alert("Book Issued Successfully!");
  }


//api for Reject user issue book request  
  async function rejectissuerequest(data: any) 
  {
    await fetch('http://localhost:1000/user/issue/request/reject',
    {
      method: "POST",
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ id: data })
    })
      .then((response) => { return response.json() })
      .then((resData) => { console.log(resData); })
      .catch(function (error) { console.log(error); });

    alert("Issue request rejected")

  }

  //Check any user issue book request is present or not? 
  if (reqdetails?.length === 0) {
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
                <th>Book_id</th>
                <th>Book_name</th>
                <th>Book_author</th>
                <th>Accept</th>
                <th>Reject</th>
              </tr>

            </thead>

            <tbody>
              {reqdetails?.map((book) => (

                <tr key={book._id}>
                  <td>{book.book_id}</td>
                  <td>{book.book_name}</td>
                  <td>{book.author}</td>
                  <td><button onClick={() => { successissuebook(book.book_name) }}>Accept</button></td>
                  <td> <button onClick={() => { rejectissuerequest(book.book_name) }}>Reject</button></td>
                </tr>
              ))}
            </tbody>
            
          </table> :
          <h1>No Request Available</h1>
         } 
      </div>

    </>
  )
}





