import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AdminLogin.css";
import swal from "sweetalert";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../../../ValidationShemas/ValidationShemas";
import AdminAuthServices from "../../../../Services/AdminServices/AdminAuthServices";

function AdminLogin() {
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
    AdminAuthServices.getAdmin(login)
      .then((response) => {
        console.log(response);
        if (response.success) {
          console.log("got a valid Admin");
          swal("Well Done!", "Successfully Authenticated", "success");

          window.location = "/Admin/Dashboard";
        }
      })
      .catch((err) => {
        console.log(err.message);
        seterror(err.message);
        if (err.response) seterror(err.response.data.message);
      });
  }

  return (
    <section className="AdminLogin">
      <div className="AdminLogin-Container">
        
        <img src="/images/adminphoto.png" className="AdminBackgroundImage" alt=""></img>
        <div className="AdminLogin-Form-Container">
          <Link to="./">
            <i className="fa fa-times"></i>
          </Link>

          <div className="AdminLogin-image-container">
            <img src="/images/logo_white.png" alt=""></img>
          </div>
          <h2>Admin Sign In</h2>
          <form className="AdminLogin-form" onSubmit={handleSubmit(onSubmit)}>
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
            <input type="submit" value="Login" className="AdminSignIn-btn"></input>
          </form>
          {error && <p className="ErrorPTag">{error}</p>}
        </div>
       
      </div>
    </section>
  );
}
export default AdminLogin;
