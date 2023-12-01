import React from "react";
import '../AdminCSS/AdminForgetPassword.css'
import CommonTextBox from "../../../Components/CommonTextBox";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { Adminforgetschema } from "../../../Schema/Schema";





function Adminforgetpassword() {

  const { control, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(Adminforgetschema) });
  const navigate = useNavigate()

  const onSubmitHandler = async (data: object) => {

    //api for forget password for user
    await fetch('http://localhost:1000/adminlogin/forgetpassword', 
    {
      method: "POST",
      headers:
      {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((response) => { return response.json() })
      .then((resData) => { console.log(resData)  })
      .catch(function (error) { console.log(error) });

      alert("Password Change Successfully!");
      navigate('/adminlogin');

  }


  return (
    <div className="admin_forget_form">
    < >

      <form onSubmit={handleSubmit(onSubmitHandler)} className="admin_forget">
        <br />
        <h1>Forget Password</h1>
        <hr />
        <CommonTextBox
          name="admin_id"
          control={control}
          type="number"
          error={errors}
          label="Admin_id"
          placeHolder="Enter Admin Id"
        />
        <br />
        <CommonTextBox
          name="new_password"
          control={control}
          type="password"
          error={errors}
          label="New Password"
          placeHolder="Enter new password"
        />
        <br />
        <button onClick={() => { console.log("you clicked on the change password button") } }  >Change Password</button>
        <br />
        <br />
        <a href="./adminlogin">Login now?</a>
      </form>

      {errors?.name?.message}

    </>
    </div>
  )
}
export default Adminforgetpassword;


