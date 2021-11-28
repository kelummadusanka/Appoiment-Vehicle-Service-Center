import React, { useState } from "react";
import "./AddYourVehicle.css";
import Footer from "../../Footer";
import { getUser } from "../../../common";
import swal from "sweetalert";
import AddYourVehicleCard from "./AddYourVehicleCard";
import MyAccountNavbar from "../My-Account/MyAccountNavbar";
import VehicleServices from "../../../Services/CustomerServices/VehicleServices";

function AddYourVehicle() {
  const [vehType, setvehType] = useState("");
  const [vehNumber, setvehNumber] = useState("");
  const [vehBrand, setvehBrand] = useState("");
  const [model, setmodel] = useState("");
  const [manufacturedYear, setmanufacturedYear] = useState("");
  const [color, setcolor] = useState("");
  const [image, setimage] = useState("");

  const user = getUser();

  const onSubmit = (e) => {
    e.preventDefault();

    const newVehicle = {
      email:user.email,
      vehType,
      vehNumber,
      vehBrand,
      model,
      image,
      manufacturedYear,
      color
    };

    VehicleServices.CreateVehicle(newVehicle)
      .then((response) => {
        swal("Great!", response.message, "success");
        window.location = "/Myaccount/" + user.username;
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
        className="head_contact_us"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.57), rgba(0, 0, 0, 0.44)),url('/images/add-vehicle.jpg')",
        }}
      >
        <MyAccountNavbar />
        <h1>{user.firstname}, Add Your Vehicle</h1>
      </div>
      <section className="add-your-vehicle">
        <h1>Vehicle type</h1>
        <div className="">
          <div className="AYV-your-vehicle-row">
            <AddYourVehicleCard
              id="AYV-vehicle-col-Radio-1"
              image="/images/jeep.png"
              vehType="Jeep"
              onChange={() => {
                setvehType("Jeep");
                setimage("/images/jeep.png");
              }}
            />
            <AddYourVehicleCard
              id="AYV-vehicle-col-Radio-2"
              image="/images/car.png"
              vehType="Car"
              onChange={() => {
                setvehType("Car");
                setimage("/images/car.png");
              }}
            />
            <AddYourVehicleCard
              id="AYV-vehicle-col-Radio-3"
              image="/images/van.png"
              vehType="Van"
              onChange={() => {
                setvehType("Van");
                setimage("/images/van.png");
              }}
            />
            <AddYourVehicleCard
              id="AYV-vehicle-col-Radio-4"
              image="/images/Bus.png"
              vehType="Bus"
              onChange={() => {
                setvehType("Bus");
                setimage("/images/bus.png");
              }}
            />
            <AddYourVehicleCard
              id="AYV-vehicle-col-Radio-5"
              image="/images/bike.png"
              vehType="Bike"
              onChange={() => {
                setvehType("Bike");
                setimage("/images/bike.png");
              }}
            />
            <AddYourVehicleCard
              id="AYV-vehicle-col-Radio-6"
              image="/images/other-vehicle.png"
              vehType="Other"
              onChange={() => {
                setvehType("Other");
                setimage("/images/other_vehicle.png");
              }}
            />
          </div>
        </div>
      </section>

      <section className="AYV-Vehicle-information">
        <div className="AYV-Vehicle-information-margin">
          <h1>Vehicle information </h1>
          <div className="AYV-Vehicle-information-row">
            <form className="AYA-information-form" onSubmit={onSubmit}>
              <div>
                <h4>VEHICLE NUMBER</h4>
                <input
                  type="text"
                  placeholder="CAR 7677"
                  onChange={(e) => {
                    setvehNumber(e.target.value);
                  }}
                />
              </div>
              <div>
                <h4>BRAND</h4>
                <input
                  type="text"
                  placeholder="TOYOTA"
                  onChange={(e) => setvehBrand(e.target.value)}
                />
              </div>
              <div>
                <h4>MODEL</h4>
                <input
                  type="text"
                  placeholder="PRIUS"
                  onChange={(e) => setmodel(e.target.value)}
                />
              </div>
              <div>
                <h4>MANUFACTURED YEAR</h4>
                <input
                  type="text"
                  placeholder="2021"
                  onChange={(e) => setmanufacturedYear(e.target.value)}
                />
              </div>

              <div>
                <h4>COLOR</h4>
                <input
                  type="text"
                  placeholder="MAROON"
                  onChange={(e) => setcolor(e.target.value)}
                />
              </div>
              <button type="submit" className="Vehicle-Add-btn">
                Add
              </button>
            </form>
          </div>

          <div className="Vehicle-Add-btn-container"></div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default AddYourVehicle;
