import React, { useEffect } from "react";
import './AdminCSS/AdminAddBook.css'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import CommonTextBox from "../../Components/CommonTextBox";
import { Addbookschema } from "../../Schema/Schema";
import { useNavigate } from "react-router-dom";



function Addbook() {
    const navigate=useNavigate();

    useEffect(() => {
      let ls= localStorage.getItem('Alogin');
      if (ls === 'false') {
        navigate('/adminlogin');
      } else{
        navigate('/adminaddbook');
      }
    },[]);

    const { control, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(Addbookschema) });

    const onSubmitHandler = async (data: object) => {

        alert("addbook successfully!");

        //api for add new book
        await fetch('http://localhost:1000/adminaddbook', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(function (response) { console.log(response) })
            .catch(function (error) { console.log(error) });


    }

    return (
        <div className="Add_Book_form">
        <>
        <button id="add" onClick={()=>{navigate('/adminhome')} }>Home</button>
            <form onSubmit={handleSubmit(onSubmitHandler)} className="Add_Book">
                <br />
                <h1>Add Book </h1>
                <hr />
                <CommonTextBox
                    name="title"
                    control={control}
                    type="string"
                    error={errors}
                    label="Title"
                    placeHolder="Enter Book Title"
                />
                <br />
                <CommonTextBox
                    name="author"
                    control={control}
                    type="string"
                    error={errors}
                    label="Author"
                    placeHolder="Enter Book Author Name"
                />
                <br />
                <CommonTextBox
                    name="price"
                    control={control}
                    type="number"
                    error={errors}
                    label="Price"
                    placeHolder="Enter price"
                />
                <br />
                <button onClick={() => console.log("you clicked on the add book button")}>Add Book</button>
                <p>Go To Home?<a href="/adminhome">Home</a></p>

            </form>
            {errors?.name?.message}
        </>
        </div>
    )
}
export default Addbook;


