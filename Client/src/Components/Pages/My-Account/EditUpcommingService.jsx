import React, { useState } from "react";
import "./EditUpcommingService.css";
import swal from "sweetalert";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dateFormat from "dateformat";
import AppoinmentServices from "../../../Services/CustomerServices/AppoinmentServices";

function EditUpcommingService({
  UpcommingServiece,
  setShowModal,
  handleDelete,
  setUpcommingServices,
  UpcommingServices
}) {
  const [appoDate, setappoDate] = useState(
    new Date(UpcommingServiece.appoDate)
  );
  const [appoImage, setappoImage] = useState(UpcommingServiece.appoImage);
  const [appoTime, setappoTime] = useState(UpcommingServiece.appoTime);
  const [ServiceType, setServiceType] = useState(UpcommingServiece.ServiceType);

  async function updateServiceHandler(e) {
    console.log("called the updateServiceHandler");
    e.preventDefault();
    
    const updatedService = {
      _id: UpcommingServiece._id,
      appoDate: appoDate,
      appoTime: appoTime,
      ServiceType: ServiceType,
    };
    setUpcommingServices(UpcommingServices.map(el => el._id == UpcommingServiece._id ? {...el,appoDate: appoDate,
      appoTime: appoTime, ServiceType: ServiceType} : el))

    await AppoinmentServices.updateService(updatedService)
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
  }

  return (
    <div className="background">
      <div className="ServieceEditWrapper">
        <div className="vehicleTitleContainer">
          <h1 className="ServieceTitle">Service Appoinment</h1>

          <i
            className="fas fa-times"
            onClick={() => setShowModal((prev) => !prev)}
          ></i>
        </div>
        <div className="ServieceContainer">
          <div className="ServieceShow">
            <div className="ServieceShowTop">
              <img
                src={UpcommingServiece.appoImage}
                alt=""
                className="ServieceUpdateImg"
              />
              <div className="ServieceShowTopTitle">
                <span className="ServieceShowUsername">Appoinment</span>
                <span className="ServieceShowUserTitle">
                  Service Type: {UpcommingServiece.ServiceType}
                </span>
              </div>
            </div>
            <div className="ServieceShowBottom">
              <span className="ServieceShowTitle">Appoinment Details</span>
              <div className="ServieceShowInfo">
                <i className="far fa-calendar-alt"></i>
                <span className="ServieceDetailTitle">Appoinment Date</span>
                <span className="ServieceDetail">
                  {dateFormat(UpcommingServiece.appoDate, "mm/dd/yyyy")}
                </span>
              </div>
              <div className="ServieceShowInfo">
                <i className="fas fa-car"></i>
                <span className="ServieceDetailTitle ">Appoinment Time</span>
                <span className="ServieceDetail">
                  {UpcommingServiece.appoTime}
                </span>
              </div>
              <span className="ServieceShowTitle">Vehicle Details</span>
              <div className="ServieceShowInfo">
                <i className="fas fa-sort-numeric-down"></i>
                <span className="ServieceDetailTitle">Vehicle Number</span>
                <span className="ServieceDetail">
                  {UpcommingServiece.vehNumber}
                </span>
              </div>
              <div className="ServieceShowInfo">
                <i className="fab fa-modx"></i>
                <span className="ServieceDetailTitle">Vehicle Type</span>
                <span className="ServieceDetail">
                  {UpcommingServiece.vehType}
                </span>
              </div>
              <div className="ServieceShowInfo">
                <i className="far fa-calendar-alt"></i>
                <span className="ServieceDetailTitle">Status</span>
                <span className="ServieceDetail">
                  {UpcommingServiece.Status}
                </span>
              </div>
              <div className="ServieceShowInfo">
                <i className="fas fa-palette"></i>
                <span className="ServieceDetailTitle">Added Date</span>
                <span className="ServieceDetail">
                  {dateFormat(UpcommingServiece.AddedDate, "mm/dd/yyyy")}
                </span>
              </div>
            </div>

            <div className="ServieceDeleteButton">
              <button className="ServieceDeleteBtn" onClick={() => handleDelete(UpcommingServiece)}>
                Delete
              </button>
            </div>
          </div>
          <div className="ServieceUpdate">
            <span className="ServieceUpdateTitle">Edit</span>
            <form className="ServieceUpdateForm">
              <div className="ServieceUpdateLeft">
                <div className="ServieceUpdateItem">
                  <label>Service Type</label>
                  <select
                    onChange={(e) => {
                      setServiceType(e.target.value);
                      setappoImage("/images/"+e.target.value)
                    }}
                    className="ServieceUpdateInput"
                    name="vehType"
                    id="vehType"
                  >
                    <option value="Jeep">Full service</option>
                    <option value="Engine repair">Engine repair</option>
                    <option value="Filter changinge">Filter changinge</option>
                    <option value="Battery repaire">Battery repaire</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="ServieceUpdateItem">
                  <label>Select Time</label>
                  <select
                    onChange={(e) => {
                      setappoTime(e.target.value);
                    }}
                    className="ServieceUpdateInput"
                    name="vehType"
                    id="vehType"
                  >
                    <option value="8 AM - 11 AM">8 AM - 11 AM</option>
                    <option value="11 AM - 01 PM">11 AM - 01 PM</option>
                    <option value="01 PM - 04 PM">01 PM - 04 PM</option>
                    <option value="04 AM - 07 PM">04 PM - 07 PM</option>
                  </select>
                </div>
                <div className="Calender ServieceUpdateItem">
                  <label>Select Date</label>
                  <DatePicker
                    className="ServieceUpdateInput"
                    selected={appoDate}
                    maxDate={appoDate}
                    maxTime={appoDate}
                    onChange={(date) => setappoDate(date) + "Z"}
                  />
                </div>
                <button
                  onClick={updateServiceHandler}
                  className="ServieceUpdateItem ServieceUpdateButton"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditUpcommingService;
