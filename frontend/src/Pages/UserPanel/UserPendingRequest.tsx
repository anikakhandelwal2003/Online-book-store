import { useEffect, useState } from "react"

import './UserCss/UserPendingReq.css'
import { useNavigate } from "react-router-dom";

interface Ireqdetails {
  _id?: string,
  book_id: string,
  book_name: string,
  author: string
}
let z: Boolean = true;
//user pending request waiting for admin approval
export default function Userpendingreq() {
  const navigate = useNavigate();

  const [pendreq, setpendreq] = useState<Ireqdetails[] | undefined>()

  useEffect(() => {
    let ls = localStorage.getItem('login');
    if (ls === 'false') {
      navigate('/userlogin');
    }
    viewpendingrequest();
  }, [pendreq]);

  async function viewpendingrequest() {
    //api for view user pending request 
    await fetch('http://localhost:1000/view/user/request')
      .then((response) => { return response.json() })
      .then((resData) => { console.log(resData); setpendreq(resData.message) })
      .catch(function (error) { console.log(error); });

  }

  //check any request is present or not
  if (pendreq?.length === 0) {
    z = false;
  }

  return (
    <>
      <div className="User_Req">
        <button id="home" onClick={() => { navigate('/userhome') }}>Home</button>
        {z ?
          <table>

            <thead>
              <tr>
                <th>Book_name</th>
                <th>Book_author</th>
              </tr>
            </thead>

            <tbody>
              {pendreq?.map((book) => (
                <tr key={book._id}>
                  <td>{book.book_name}</td>
                  <td>{book.author}</td>
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





