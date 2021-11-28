import axios from "axios";
const headers = {
  headers: {
    "x-access-token": localStorage.getItem("token"),
    "content-type": "application/json",
  },
};

class VehicleService {
  CreateVehicle(newVehicle) {
    return axios
      .post(
        "http://localhost:4000/app/customer/vehicle/addMyVehicle",
        newVehicle,
        headers
      )
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        console.log(err);
        throw err
      });
  }

  getVehicle(email) {
    return axios
      .post(
        "http://localhost:4000/app/customer/vehicle/getMyVehicles",
        { email },
        headers
      )
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        console.log(err);
        throw err
      });
  }

  updateVehicle(updatedVehicle) {
    console.log("inside updateVehicle");
    return axios
      .patch(
        "http://localhost:4000/app/customer/vehicle/addMyVehicle/" +
          updatedVehicle._id,
        updatedVehicle,
        headers
      )
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        console.log(err);
        throw err
      });
  }

  DeleteVehicle(_id) {
    console.log("inside deleteVehicle");

    return axios
      .delete(
        `http://localhost:4000/app/customer/vehicle/addMyVehicle/${_id}`,
        {headers: {
          'Content-Type': 'application/json',
          "x-access-token": localStorage.getItem("token"),
        },
        params: { _id: _id }
         
          
        },
       
      )
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        console.log(err);
        throw err
      });
  }
}

export default new VehicleService();
