import axios from "axios";

class AdminAuthService {
  CreateAdmin(registered) {
    return axios
      .post("http://localhost:4000/app/admin/auth/signup", registered)
      .then((response) => {
        console.log(response);
        return response.data;
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  }
  getAdmin(login) {
    return axios
      .post("http://localhost:4000/app/admin/auth//adminSignIn", login)
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

}

export default new AdminAuthService();
