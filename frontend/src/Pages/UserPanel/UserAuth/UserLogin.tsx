import React from "react";
import '../UserCss/UserLogin.css'
import CommonTextBox from "../../../Components/CommonTextBox";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from "react-router-dom";
import { Loginschema } from "../../../Schema/Schema";





function UserLogin() {
  let responsedata = "false"
  const navigate = useNavigate();
  const { control, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(Loginschema) });

  const onSubmitHandler = async (data: object) => {

    //api for user login verification
    await fetch('http://localhost:1000/userlogin',
     {
         method: "POST",
         headers: 
          {
             Accept: 'application.json',
             'content-type': 'application/json'
          },
         body: JSON.stringify(data)
    })
    .then((response) => {return response.json()})
    .then((resData) => { console.log(resData);responsedata = resData.message;})
    .catch(function (error) { console.log(error);});


   // check against user login api result
    if (responsedata === "true") 
    {
      localStorage.setItem('login', 'true');
      navigate('/userhome')
    }
    else 
    {
      alert("Try again with correct email and password");
    }
    
  }

  return (
    <div className="user_login_form">
    < >
      <div >
      <form onSubmit={handleSubmit(onSubmitHandler)} className="user_login">
       
        <br />
        <h1>Login</h1>
        <hr />
        <CommonTextBox
          name="email"
          control={control}
          type="email"
          error={errors}
          label="Email"
          placeHolder="Enter Email"
        />
        <br />
        <CommonTextBox
          name="password"
          control={control}
          type="password"
          error={errors}
          label="password"
          placeHolder="Enter password"
        />
        <br />
        <button onClick={ () => { console.log("you clicked on the login button") }}  >Login</button>
        <br />
        <br />
        <a href="./userforgetpassword">Forget password</a>
        <p>Don't have any account? <a href="./UserSignup">Sign up</a></p>
        
      </form>
      </div>
      {errors?.name?.message}
      
    </>
    </div>
  )
}
export default UserLogin;


