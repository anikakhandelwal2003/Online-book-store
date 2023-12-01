import React from "react";
import '../AdminCSS/AdminLogin.css'
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from '@hookform/resolvers/yup';
import CommonTextBox from "../../../Components/CommonTextBox";
import { Adminloginschema } from "../../../Schema/Schema";




function LibLogin() {
    let responsedata = "false"
    const navigate = useNavigate();
    const { control, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(Adminloginschema) });

    const onSubmitHandler = async (data: object) => {

        //api for admin login detail verification
        await fetch('http://localhost:1000/adminlogin',
         {
            method: "POST",
            headers: 
            {
               Accept: 'application.json',
              'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }) 
        .then((response) => { return response.json()})
        .then((resData) => { console.log(resData);responsedata = resData.message })
        .catch(function (error) {console.log(error)});

        //check against api result
        if (responsedata === "true") 
        {
            localStorage.setItem('Alogin', 'true');
            navigate('/adminhome')
        }
        else 
        {
            alert("Try again with correct id and password");
        }
    }

    return (
        <div  className="Admin_login_form">
        <>
            <div>
            <form onSubmit={handleSubmit(onSubmitHandler)} className="Admin_login">

                <br />
                    <h1>Admin Login</h1>
                    <hr />
                <br />
                <CommonTextBox
                    name="Admin_id"
                    control={control}
                    type="number"
                    error={errors}
                    label="Admin_Id"
                    placeHolder="Admin Id"
                />
                <br />
                <CommonTextBox
                    name="password"
                    control={control}
                    type="password"
                    error={errors}
                    label="password"
                    placeHolder="password"
                />
                <br />
                <button onClick={() => { console.log("you clicked on the admin login button") }}>Login</button>
                <br />
                <a href="/adminforgetpassword">Forget password</a>

            </form>
            </div>
            {errors?.name?.message}
        </>
        </div>
    )
}
export default LibLogin;


