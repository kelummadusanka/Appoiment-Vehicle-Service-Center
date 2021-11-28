import { CalendarComponent } from "@syncfusion/ej2-react-calendars";
import React, { useEffect, useState } from "react";
import "./OnlineBooking.css";
import Footer from "../../Footer";
import { Link } from "react-router-dom";
import SelectYourVehicleCard from "./SelectYourVehicleCard";
import SelectYourServiceCard from "./SelectYourServiceCard";
import { getUser } from "../../../common";
import swal from "sweetalert";
import MyAccountNavbar from "../My-Account/MyAccountNavbar";
import VehicleServices from "../../../Services/CustomerServices/VehicleServices";
import AppoinmentServices from "../../../Services/CustomerServices/AppoinmentServices";
function OnlineBooking() {
  const [myVehicles, setMyVehicles] = useState([]);
  const [vehType, setvehType] = useState("");
  const [vehNumber, setvehNumber] = useState("");
  const [ServiceType, setServiceType] = useState("");
  const [appoDate, setappoDate] = useState("");
  const [appoTime, setappoTime] = useState("");
  const [appoImage, setappoImage] = useState("");
  const [vehId, setvehId] = useState("");
  const user = getUser();
  var id = 0;
  let endDate = new Date();
  endDate.setDate(endDate.getDate() + 14);

  useEffect(() => {
    VehicleServices.getVehicle(user.email).then((response) => {
      setMyVehicles(response.vehicles);
    });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    const newAppoinment = {
      email: user.email,
      vehNumber,
      vehType,
      ServiceType,
      appoDate,
      appoTime,
      appoImage,
      vehId,
    };

    AppoinmentServices.CreateAppoinment(newAppoinment)
      .then((res) => {
        console.log(res);
        if (res.success) {
          swal("Great!", "Booked Successfully", "success");
          window.location = "/Myaccount/" + user.username;
        } 
      })
      .catch((err) => {
        let appoErr= err.message;
        console.log(err);
        if(err.response) appoErr=err.response.data.message
        swal("Oops!", appoErr, "error");

      });
  };

  return (
    <>
      <div
        className="head-OB"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.85)),url('/images/Appointment.jpg')",
        }}
      >
        <MyAccountNavbar />
        <h1>Online Booking</h1>
      </div>
      <section className="Select-Your-Vehicle">
        <h1>
          Select your vehicle
        </h1>

        <div className="Select-Your-Vehicle-row">
          {myVehicles.map((vehicle) => {
            id = id + 1;

            return (
              <SelectYourVehicleCard
                id={"SYV-Radio-" + id}
                image={vehicle.image}
                vehNumber={vehicle.vehNumber}
                onChange={(event) => {
                  setvehNumber(event.target.value);
                  setvehType(vehicle.vehType);
                  setvehId(vehicle._id);
                }}
              />
            );
          })}
        </div>
      </section>
      <section className="Online-booking-service-type">
        <h1>How can help you?</h1>
        <div className="OB-service-type">
          <div className="OB-service-type-row">
            <SelectYourServiceCard
              id="OB-service-type-Radio-1"
              image="/images/full-service.png"
              value="Full service"
              onChange={(event) => {
                setServiceType(event.target.value);
                setappoImage("/images/full-service.png")
              }}
            />
            <SelectYourServiceCard
              id="OB-service-type-Radio-2"
              image="/images/car-engine.png"
              value="Engine repair"
              onChange={(event) => {
                setServiceType(event.target.value);
                setappoImage("/images/car-engine.png")
              }}
            />
            <SelectYourServiceCard
              id="OB-service-type-Radio-3"
              image="/images/car-filter.png"
              value="Filter changinge"
              onChange={(event) => {
                setServiceType(event.target.value);
                setappoImage("/images/car-filter.png")
              }}
            />
            <SelectYourServiceCard
              id="OB-service-type-Radio-4"
              image="/images/battery-service.png"
              value="Battery repaire"
              onChange={(event) => {
                setServiceType(event.target.value);
                setappoImage("/images/battery-service.png")
              }}
            />
            <SelectYourServiceCard
              id="OB-service-type-Radio-5"
              image="/images/other-service.png"
              value="Other"
              onChange={(event) => {
                setServiceType(event.target.value);
                setappoImage("/images/other-service.png")
              }}
            />
          </div>
        </div>
      </section>

      <section className="preffered-time">
        <h1>What is your preffered time?</h1>
        <div className="preffered-time-container">
          <div className="calender-container">
            <h1>Select Date {appoDate}</h1>
            <CalendarComponent
              min={new Date()}
              max={new Date(endDate)}
              className="PT-Calendar"
              onChange={(event) => {
                setappoDate(event.target.value.toLocaleDateString());
              }}
            ></CalendarComponent>
          </div>
          <div className="right-time-container">
            <h1>Select Time {appoTime}</h1>
            <div className="time-container">
              <i className="fa fa-clock-o"></i>
              <div className="Time-Selection-Radio-Gp">
                <input
                  type="radio"
                  name="Time-Selection-Radio"
                  className="Time-Selection-Radio"
                  id="Time-Selection-Radio-1"
                  value="8 AM - 11 AM"
                  onChange={(event) => {
                    setappoTime(event.target.value);
                  }}
                />
                <label
                  for="Time-Selection-Radio-1"
                  className="Time-Selection-Label"
                >
                  8 AM - 11 AM
                </label>
                <input
                  type="radio"
                  name="Time-Selection-Radio"
                  className="Time-Selection-Radio"
                  id="Time-Selection-Radio-2"
                  value="11 AM - 01 PM"
                  onChange={(event) => {
                    setappoTime(event.target.value);
                  }}
                />
                <label
                  for="Time-Selection-Radio-2"
                  className="Time-Selection-Label"
                >
                  11 AM - 01 PM
                </label>
                <input
                  type="radio"
                  name="Time-Selection-Radio"
                  className="Time-Selection-Radio"
                  id="Time-Selection-Radio-3"
                  value="01 PM - 04 PM"
                  onChange={(event) => {
                    setappoTime(event.target.value);
                  }}
                />
                <label
                  for="Time-Selection-Radio-3"
                  className="Time-Selection-Label"
                >
                  01 PM - 04 PM
                </label>
                <input
                  type="radio"
                  name="Time-Selection-Radio"
                  className="Time-Selection-Radio"
                  id="Time-Selection-Radio-4"
                  value="04 AM - 07 PM"
                  onChange={(event) => {
                    setappoTime(event.target.value);
                  }}
                />
                <label
                  for="Time-Selection-Radio-4"
                  className="Time-Selection-Label"
                >
                  04 AM - 07 PM
                </label>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Link to="MyAccount">
        <button className="Final-Reserve-btn" onClick={onSubmit}>
          Reserve Time!
        </button>
      </Link>
      <Footer />
    </>
  );
}

export default OnlineBooking;
