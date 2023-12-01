import React from "react";
import '../UserCss/UserSignup.css'
import CommonTextBox from "../../../Components/CommonTextBox"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from "react-router-dom";
import { SignUpschema } from "../../../Schema/Schema";



function UserSignup()
 {
    const navigate=useNavigate()
    const { control, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(SignUpschema) });

    const onSubmitHandler = async(data:object) =>
    {
        console.log(data)
        alert("Signup Successfully!")

        //api for store user signup data in store
        await fetch('http://localhost:1000/usersignup', 
        {
            method:"POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(data)
        })
          .then(function (response) { console.log(response); })
          .catch(function (error) { console.log(error);});

        navigate({ pathname:'/userlogin' })

    };

    return (
        <div className="user_signup_form">
        <>
            <form onSubmit={handleSubmit(onSubmitHandler)} className="user_signup">
                <br />
                <h1>Sign Up</h1>
                
                <hr />
                <br />
                <CommonTextBox
                    name="firstname"
                    control={control}
                    type="text"
                    error={errors}
                    label="First Name"
                    placeHolder="First Name"
                />
                <br />
                <CommonTextBox
                    name="lastname"
                    control={control}
                    type="text"
                    error={errors}
                    label="Last Name"
                    placeHolder="Last Name"
                />
                <br />
                <CommonTextBox
                    name="email"
                    control={control}
                    type="email"
                    error={errors}
                    label="Email"
                    placeHolder="Email"
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
                <p>By creating an account you agree to our <a href="/term" >Terms & Privacy</a>.</p>
                <button onClick={() => console.log("You clicked on the signup button!")}>Sign Up</button>
                <h5>Already have an account<a href="/userlogin">Login now</a></h5>
               
               
            </form>
           {errors?.name?.message}
        </>
        </div>
    )
}
export default UserSignup;