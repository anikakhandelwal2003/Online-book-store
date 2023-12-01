import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import './UserCss/Usermybook.css'


interface Ireqdetails {
  _id?: string,
  book_title: string,
  issue_date: string,
  end_date: string
}
let z: Boolean = true;
//user issued book data
export default function UserMyBook() {
  const navigate = useNavigate();


  const [mybook, setmybook] = useState<Ireqdetails[] | undefined>()

  useEffect(() => {
    let ls = localStorage.getItem('login');
    if (ls === 'false') {
      navigate('/userlogin');
    }
    viewmybook();
  }, [mybook])

  async function viewmybook() {
    //api for view user issued request 
    await fetch('http://localhost:1000/view/user/issued/book')
      .then((response) => { return response.json() })
      .then((resData) => { console.log(resData); setmybook(resData.message) })
      .catch(function (error) { console.log(error); });


  }


  //check any request is present or not
  if (mybook?.length === 0) {
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
                <th>Issue Date</th>
                <th>End Date</th>
              </tr>
            </thead>

            <tbody>
              {mybook?.map((book) => (
                <tr key={book._id}>
                  <td>{book.book_title}</td>
                  <td>{book.issue_date}</td>
                  <td>{book.end_date}</td>
                </tr>
              ))}
            </tbody>

          </table> :

          <h1>No Book Available</h1>
        }
      </div>

    </>
  )
}





