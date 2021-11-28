import React, { useEffect, useState } from "react";
import "./VehicleCard.css";
import FileBase64 from "react-file-base64";
import swal from "sweetalert";
import dateFormat from "dateformat";
import VehicleServices from "../../../Services/CustomerServices/VehicleServices";
import AppoinmentServices from "../../../Services/CustomerServices/AppoinmentServices";

function VehicleCard({ services, vehicle, setShowModal,setMyVehicles,myVehicles }) {
  const [shortServices, setshortServices] = useState(services);
  const [vehType, setvehType] = useState(vehicle.vehType);
  const [vehBrand, setvehBrand] = useState(vehicle.vehBrand);
  const [model, setmodel] = useState(vehicle.model);
  const [manufacturedYear, setmanufacturedYear] = useState(
    vehicle.manufacturedYear
  );
  const [color, setcolor] = useState(vehicle.color);
  const [image, setimage] = useState(vehicle.image);
  const [startST, setstartST] = useState(0);
  const [endST, setendST] = useState(4);

  const updateHandler = async (e) => {
    console.log("call the updateHandler");
    e.preventDefault();

    const updatedVehicle = {
      vehNumber: vehicle.vehNumber,
      _id: vehicle._id,
      vehType,
      vehBrand,
      model,
      image,
      manufacturedYear,
      color,
    };

    await VehicleServices.updateVehicle(updatedVehicle)
      .then((response) => {

        setMyVehicles(myVehicles.map(el => el._id == vehicle._id ? {...el,
          vehType,
          vehBrand,
          model,
          image,
          manufacturedYear,
          color,} : el))
        swal("Great!", response.message, "success");
      })
      .catch((err) => {
        console.log(err);
        let Err= err.message;
        if(err.response) Err=err.response.data.message
        swal("Oops!", Err, "error");

      });

    await AppoinmentServices.updateServiceFromVehicle(updatedVehicle)
      .then((response) => {
        swal("Great!", response.message, "success");
      })
      .catch((err) => {
        console.log(err);
        let Err= err.message;
        if(err.response) Err=err.response.data.message
        swal("Oops!", Err, "error");

      });

    // window.location.reload(false);
  };

  const deleteHandler = async (e) => {
    e.preventDefault();
    console.log("inside deleteHandler");
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this vehicle",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        console.log(`inside deleteHandler and to axios` + vehicle._id);
        VehicleServices.DeleteVehicle(vehicle._id)
          .then((response) => {
            console.log(response);

            setMyVehicles(
              myVehicles.filter(
                (item) => item._id !== vehicle._id
              )
            );
            setShowModal((prev) => !prev);
            swal("Done!", response.message, "success");
            // window.location.reload(false);
          })
          .catch((err) => {
            console.log(err);
            let Err= err.message;
            if(err.response) Err=err.response.data.message
            swal("Oops!", Err, "error");
    
          });
      } else {
        swal("Your vehicle is safe!");
      }
    });
  };


  useEffect(() => {
    setshortServices(
      services.filter((item) => item.vehNumber === vehicle.vehNumber)
    );
  }, []);

  return (
    <div className="background" >
      <div className="VehicleEditWrapper">
        <div className="vehicleTitleContainer">
          <h1 className="VehicleTitle">Vehicle Profile</h1>

          <i
            class="fas fa-times"
            onClick={() => setShowModal((prev) => !prev)}
          ></i>
        </div>
        <div className="VehicleContainer">
          <div className="VehicleShow">
            <div className="VehicleShowTop">
              <img src={vehicle.image} alt="" className="VehicleUpdateImg" />
              <div className="VehicleShowTopTitle">
                <span className="VehicleShowUsername">{vehicle.vehNumber}</span>
                <span className="VehicleShowUserTitle">{vehicle.vehType}</span>
              </div>
            </div>
            <div className="VehicleShowBottom">
              <span className="VehicleShowTitle">Vehicle Details</span>
              <div className="VehicleShowInfo">
                <i className="fas fa-sort-numeric-down"></i>
                <span className="VehicleDetailTitle">Vehicle Number</span>
                <span className="VehicleDetail">{vehicle.vehNumber}</span>
              </div>
              <div className="VehicleShowInfo">
                <i className="fas fa-car"></i>
                <span className="VehicleDetailTitle ">Vehicle Type</span>
                <span className="VehicleDetail">{vehicle.vehType}</span>
              </div>
              <span className="VehicleShowTitle">Other Details</span>
              <div className="VehicleShowInfo">
                <i className="fab fa-accusoft"></i>
                <span className="VehicleDetailTitle">Brand</span>
                <span className="VehicleDetail">{vehicle.vehBrand}</span>
              </div>
              <div className="VehicleShowInfo">
                <i className="fab fa-modx"></i>
                <span className="VehicleDetailTitle">Model</span>
                <span className="VehicleDetail">{vehicle.model}</span>
              </div>
              <div className="VehicleShowInfo">
                <i className="far fa-calendar-alt"></i>
                <span className="VehicleDetailTitle">Manufac. Year</span>
                <span className="VehicleDetail">
                  {vehicle.manufacturedYear}
                </span>
              </div>
              <div className="VehicleShowInfo">
                <i className="fas fa-palette"></i>
                <span className="VehicleDetailTitle">Color</span>
                <span className="VehicleDetail">{vehicle.color}</span>
              </div>
            </div>

            <div className="VehicleDeleteButton">
              <button className="VehicleDeleteBtn" onClick={deleteHandler}>
                Delete
              </button>
            </div>
          </div>
          <div className="VehicleUpdate">
            <span className="VehicleUpdateTitle">Edit</span>
            <form className="VehicleUpdateForm">
              <div className="VehicleUpdateLeft">
                <div className="VehicleUpdateItem">
                  <label>Vehicle Type</label>
                  <select
                    onChange={(e) => {
                      setvehType(e.target.value);
                      setimage("/images/"+e.target.value+".png");
                    }}
                    className="VehicleUpdateInput"
                    name="vehType"
                    id="vehType"
                  >
                    <option value="Jeep">Jeep</option>
                    <option value="Car">Car</option>
                    <option value="Van">Van</option>
                    <option value="Bus">Bus</option>
                    <option value="Bike">Bike</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="VehicleUpdateItem">
                  <label>Brand</label>
                  <input
                    type="text"
                    placeholder={vehicle.vehBrand}
                    className="VehicleUpdateInput"
                    onChange={(e) => {
                      setvehBrand(e.target.value);
                    }}
                  />
                </div>
                <div className="VehicleUpdateItem">
                  <label>Model</label>
                  <input
                    type="text"
                    placeholder={vehicle.model}
                    className="VehicleUpdateInput"
                    onChange={(e) => {
                      setmodel(e.target.value);
                    }}
                  />
                </div>
                <div className="VehicleUpdateItem">
                  <label>Manufacturd Year</label>
                  <input
                    type="text"
                    placeholder={vehicle.manufacturedYear}
                    className="VehicleUpdateInput"
                    onChange={(e) => {
                      setmanufacturedYear(e.target.value);
                    }}
                  />
                </div>
                <div className="VehicleUpdateItem">
                  <label>Color</label>
                  <input
                    type="text"
                    placeholder={vehicle.color}
                    className="VehicleUpdateInput"
                    onChange={(e) => {
                      setcolor(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="VehicleUpdateRight">
                <div className="VehicleUpdateUpload">
                  <img
                    className="VehicleUpdateImg"
                    src={image}
                    alt=""
                  />

                  <label className = "uploadContainer">
                    <label className = "uploadIcon">
                      <i className="fas fa-upload"></i>
                    </label>
                    <label className = "fileBase">
                      <FileBase64
                        id="file"
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) => setimage(base64)}
                      />
                    </label>
                  </label>

                </div>
                <button onClick={updateHandler} className="VehicleUpdateButton">
                  Update
                </button>
              </div>
            </form>
          </div>
          <div className="VehicleUpdate">
            <span className="VehicleUpdateTitle">Service Summery</span>
            <div className="MA-upcomming">
              <table className="Short-table">
                <thead>
                  <tr className="btn-grad">
                    <th>Date</th>
                    <th>Service</th>
                    <th>Result</th>
                  </tr>
                </thead>

                <tbody>
                  {shortServices.slice(startST,endST).map((UpcommingServiece) => {
                    return (
                      <tr className="btn-grad">
                        <td>
                          {dateFormat(UpcommingServiece.appoDate, "mm/dd")}
                        </td>
                        <td>{UpcommingServiece.ServiceType}</td>
                        <td>
                          {UpcommingServiece.Status === "pending" ? (
                            <span className="fa-stack pending-icon Pending-Icon1">
                              <i className="far fa-circle fa-stack-2x"></i>
                              <i className="fas fa-ellipsis-h fa-stack-1x"></i>
                            </span>
                          ) : UpcommingServiece.Status === "confirm" ? (
                            <i className="far fa-check-circle fa-2x shorticon"></i>
                          ) : (
                            <i className="far fa-times-circle"></i>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <button onClick={()=>{setstartST(startST+1);setendST(endST+1)}} className="STMoreButton">
                  More
                </button>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default VehicleCard;
