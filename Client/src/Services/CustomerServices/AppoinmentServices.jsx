import axios from "axios";

const headers = {
  headers: {
    "x-access-token": localStorage.getItem("token"),
    "content-type": "application/json"
}}

class AppoinmentServices {
  CreateAppoinment(newAppoinment) {
    console.log("inside CreateAppoinment");
    return axios
      .post("http://localhost:4000/app/customer/service/addService", newAppoinment,headers)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  }

  getServices(email) {
    console.log("inside getServices");
    return axios
      .post("http://localhost:4000/app/customer/service/getService", { email })
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  }
  updateService(updatedService) {
    console.log("inside updateServiceFromVehicle");
    return axios
      .patch(
        "http://localhost:4000/app/customer/service/updateService/" +
        updatedService._id,
        updatedService,headers
      )
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  }

  updateServiceFromVehicle(updatedVehicle) {
    console.log("inside updateServiceFromVehicle");
    return axios
      .patch(
        "http://localhost:4000/app/customer/service/updateServiceFromVehicle/" +
          updatedVehicle.vehNumber,
        updatedVehicle,headers
      )
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  }

  deleteService(_id) {
    console.log("inside deleteService");
    return axios
      .patch("http://localhost:4000/app/customer/service/addService/" + _id, { _id },headers)
      .then((response) => {
        console.log("deleted Service");
        return response.data;
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  }
}

export default new AppoinmentServices();
