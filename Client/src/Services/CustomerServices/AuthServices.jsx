import axios from "axios";

class AuthService {
  CreateUser(registered) {
    return axios
      .post("http://localhost:4000/app/customer/auth/signup", registered)
      .then((response) => {
        console.log(response);
        return response.data;
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  }
  getUser(login) {
    return axios
      .post("http://localhost:4000/app/customer/auth/signIn", login)
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", response.data.token);
        return response.data;
      })
      .catch((err) => {
        console.log(err.message);
        throw err;
      });
  }

  updateUserProfile(updateUser) {
    return axios
      .patch(
        "http://localhost:4000/app/customer/auth/upadateUserProfile",
        updateUser,{
          headers: {
            "x-access-token": localStorage.getItem("token"),
            "content-type": "application/json"
        }}
      )
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  }

}

export default new AuthService();
