import axios from "axios";

const headers = {
  headers: {
    "x-access-token": localStorage.getItem("token"),
    "content-type": "application/json"
}}

class AdminAppoServices {

  async getAdminServices() {
    console.log("inside admin getServices");
    try {
      const response = await axios
        .get("http://localhost:4000/app/admin/AppoControlers/getAdminServices");
      console.log(response.data.Service);
      return response.data.Service;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }


  async UpdateService(Service) {
    console.log(Service);
    console.log("inside Admin UpdateService");
    try {
      const response = await axios
        .patch("http://localhost:4000/app/admin/AppoControlers/AdminUpdateService/:" + Service._id, Service, headers);
      console.log("deleted Service By Admin");
      return response.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }


async DeleteAllService() {

  console.log("inside Admin DeleteAllService");
  try {
    const response = await axios
      .delete("http://localhost:4000/app/admin/AppoControlers/DeleteAllService");
    console.log("deleted all  Service By Admin");
    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}
}

export default new AdminAppoServices();
