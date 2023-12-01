import React from "react";
import '../UserCss/UserForgetPassword.css'
import CommonTextBox from "../../../Components/CommonTextBox";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Userforgetschema } from "../../../Schema/Schema";




function Userforgetpassword() {

  const { control, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(Userforgetschema) });

  const onSubmitHandler = async (data: object) => {

    //api for forget password for user
    await fetch('http://localhost:1000/userlogin/forgetpassword', 
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

  }

  return (
    <div className="user_forget_form">
    < >

      <form onSubmit={handleSubmit(onSubmitHandler)} className="user_forget">
        <br />
        <h1>Forget Password</h1>
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
          name="new_password"
          control={control}
          type="password"
          error={errors}
          label="New Password"
          placeHolder="Enter new password"
        />
        <br />
        <button onClick={() => { console.log("you clicked on the change password button") }}  >Change Password</button>
        <br />
        <br />
        <a href="./userlogin">Login now?</a>
        <p>Don't have any account? <a href="./UserSignup">Sign up</a></p>
      </form>

      {errors?.name?.message}

    </>
    </div>
  )
}
export default Userforgetpassword;


