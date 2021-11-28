import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import swal from "sweetalert";
import { setuserSession } from "../../../common";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../../ValidationShemas/ValidationShemas";
import AuthServices from "../../../Services/CustomerServices/AuthServices";

function Login() {
  const [error, seterror] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  function onSubmit(data) {
    //data.preventDefault();
    const login = {
      username: data.Username,
      password: data.Password,
    };
    AuthServices.getUser(login)
      .then((response) => {
        console.log(response);
        if (response.success) {
          setuserSession(response.user);
          console.log("got a valid user");
          swal("Well Done!", "Successfully Authenticated", "success");
          const user = response.user.username;
          window.location = "/Myaccount/" + user;
        }
      })
      .catch((err) => {
        console.log(err.message);
        seterror(err.message);
        if (err.response) seterror(err.response.data.message);
      });
  }

  return (
    <section className="Login">
      <div className="Login-Container">
        <img src="/images/sign.png" className="backgroundImage" alt=""></img>
        <div className="Login-Form-Container">
          <Link to="./">
            <i className="fa fa-times"></i>
          </Link>

          <div className="Login-image-container">
            <img src="/images/logo_black.png" alt=""></img>
          </div>
          <h2>Sign In</h2>
          <form className="Login-form" onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("Username")}
              type="Text"
              placeholder="Username"
              className="TextField"
            ></input>
            <p className="errorMessage">{errors.Username?.message}</p>
            <input
              {...register("Password")}
              type="Password"
              placeholder="Password"
              className="TextField"
            ></input>
            <p className="errorMessage">{errors.Password?.message}</p>
            <input type="submit" value="Login" className="signIn-btn"></input>
          </form>
          {error && <p className="ErrorPTag">{error}</p>}
          <Link to="./Admin/AdminLogin" style={{ textDecoration: 'none' }} >
          <span>Login as Admin</span>
          </Link>
          
          <Link to="./SignUP" style={{ textDecoration: 'none' }} >
            <span>Not a member yet?</span>
          </Link>
        </div>
       
      </div>
    </section>
  );
}
export default Login;
