import { useEffect, useState } from "react";
import './UserCss/UserViewBook.css'
import { useNavigate } from "react-router-dom";



interface Ibookdetails {
  _id?: string,
  title: string,
  author: string,
  price: number
}

let avail: Boolean;
export default function UserViewbookdata() {

  const navigate = useNavigate();


  const [bookdetails, setbookdetails] = useState<Ibookdetails[] | undefined>()

  useEffect(() => {
    let ls = localStorage.getItem('login');
    if (ls === 'false') {
      navigate('/userlogin');
    }
    Viewbookdata();
  }, [bookdetails]);

  async function Viewbookdata() {
    //api for view books at userpanel
    await fetch('http://localhost:1000/viewbook')
      .then((response) => { return response.json() })
      .then((resData) => { console.log(resData); setbookdetails(resData.message) })
      .catch(function (error) { console.log(error); });


  }

  async function issuebook(data: any) {

    //api for send the request to issue the book
    await fetch('http://localhost:1000/user/issue/request/sent', {
      method: "POST",
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ id: data })
    })
      .then((response) => { return response.json() })
      .then((resData) => { console.log(resData); avail = resData.issueavailable })
      .catch(function (error) { console.log(error); });

    if (avail === true) {
      alert("Request send successfully!");
    }
    else {
      alert("Book not available")
    }
  }


  async function cancelbook(data: any) {

    //api for cancel book issue request 
    await fetch('http://localhost:1000/user/issue/request/delete', {
      method: "POST",
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ id: data })
    })
      .then((response) => { return response.json() })
      .then((resData) => { console.log(resData); avail = resData.deleteavailable })
      .catch(function (error) { console.log(error); });

    if (avail === true) {
      alert("Issue request not found!");
    }
    else {
      alert("Issue request cancel successfully!")
    }
  }

  return (
    <>
      <div className="User_view_Book">

        <button id="home" onClick={() => { navigate('/userhome') }}>Home</button>
        <table >
          <thead>
            <tr>
              <th>Title </th>
              <th>Author</th>
              <th>Price</th>
              <th>Issue</th>
              <th>Cancel</th>
            </tr>
          </thead>


          {bookdetails?.map((book) => (
            <tr key={book._id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.price}</td>
              <td><button id="b1" onClick={() => { issuebook(book._id); }}>Issue Book</button></td>
              <td><button id="b2" onClick={() => { cancelbook(book.title) }}>Cancel</button></td>
            </tr>
          ))}

        </table>

      </div>
    </>
  )
}





