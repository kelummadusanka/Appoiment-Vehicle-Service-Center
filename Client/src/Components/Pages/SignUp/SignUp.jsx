import React,{useState} from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
import swal from "sweetalert";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "../../../ValidationShemas/ValidationShemas";
import AuthServices from "../../../Services/CustomerServices/AuthServices";

function SignUp() {
  const [err, seterr] = useState("")
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });
  function onSubmit(data) {
    const registered = {
      firstname: data.firstname,
      lastname: data.lastname,
      address1: data.address1,
      city: data.city,
      username: data.username.toLowerCase(),
      email: data.email,
      password: data.password,
    };

   AuthServices.CreateUser(registered)
      .then((response) => {
        swal("Well Done!", "Create a Account Successfully", "success");
        window.location = "/login";
      })
      .catch((err) => {
        console.log(err.message);
        seterr(err.message);
        if (err.response) seterr(err.response.data.message);
      });

    
  }

  return (
    <section className="SignUp">
      <div className="SignUp-Container">
        <img
          src="/images/Signup-Background.png"
          className="backgroundImage"
          alt=""
        ></img>
        <div className="SignUp-Form-Container">
          <Link to="./Login">
            <i className="fa fa-times"></i>
          </Link>

          <div className="SignUp-image-container">
            <img src="/images/logo_black.png" alt=""></img>
          </div>
          <h2>Sign Up</h2>
          <form className="SignUp-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="SignUp-User-Detail">
              <div className="inputAndLabale">
                <input
                  {...register("firstname")}
                  type="Text"
                  placeholder="First Name"
                  className="SignUp-TextField"
                ></input>
                <label className="errorMessage">
                  {errors.firstname?.message}
                </label>
              </div>

              <div className="inputAndLabale">
                <input
                  {...register("lastname")}
                  type="Text"
                  placeholder="Last Name"
                  className="SignUp-TextField"
                ></input>
                <label className="errorMessage">
                  {errors.lastname?.message}
                </label>
              </div>
            </div>

            <div className="SignUp-User-Detail">
              <div className="inputAndLabale">
                <input
                  {...register("address1")}
                  type="Text"
                  placeholder="Adress Line 1"
                  className="SignUp-TextField"
                ></input>
                <label className="errorMessage">
                  {errors.address1?.message}
                </label>
              </div>

              <div className="inputAndLabale">
                <input
                  {...register("city")}
                  type="Text"
                  placeholder="City"
                  className="SignUp-TextField"
                ></input>
                <label className="errorMessage">{errors.city?.message}</label>
              </div>
            </div>

            <div className="SignUp-User-Detail">
              <div className="inputAndLabale">
                <input
                  {...register("username")}
                  type="Text"
                  placeholder="Username"
                  className="SignUp-TextField"
                ></input>
                <label className="errorMessage">
                  {errors.username?.message}
                </label>
              </div>

              <div className="inputAndLabale">
                <input
                  {...register("email")}
                  type="Email"
                  placeholder="Email"
                  className="SignUp-TextField"
                ></input>
                <label className="errorMessage">{errors.email?.message}</label>
              </div>
            </div>
            <div className="SignUp-User-Detail">
              <div className="inputAndLabale">
                <input
                  {...register("password")}
                  type="Password"
                  placeholder="Password"
                  className="SignUp-TextField"
                ></input>
                <label className="errorMessage">
                  {errors.password?.message}
                </label>
              </div>

              <div className="inputAndLabale">
                <input
                  {...register("passwordConfirmation")}
                  type="Password"
                  placeholder="Comfirm Password"
                  className="SignUp-TextField"
                ></input>
                <label className="errorMessage">{errors.passwordConfirmation?.message}</label>
              </div>
            </div>
            <label for="signup-checkbox" className="signup-input-label">
              <input
                // {...register("Checkbox")}
                type="checkbox"
                id="signup-checkbox"
                className="signup-input-checkbox"
              ></input>
              I agree with terms of use and privacy
            </label>

            <input type="submit" value="SignUp" className="signUp-btn"></input>
          </form>
          {err&&<label className="errorMessage">
                  {err}
                </label>}
        </div>
      </div>
    </section>
  );
}

export default SignUp;
