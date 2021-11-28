import React, { useState } from "react";
import "./MyAccount.css";
import VehicleCardPro from "./VehicleCardPro";

function MyVehicleCard(props) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <>
      <div  className="MA-your-vehicle-col" onClick={openModal}>
        <div className="MA-your-vehicle-col-img">
          <img src={props.vehicle.image} alt=""></img>
        </div>

        <p>{props.vehicle.vehNumber}</p>
      </div>
      <VehicleCardPro
        services={props.services}
        vehicle={props.vehicle}
        showModal={showModal}
        setShowModal={setShowModal}
        setMyVehicles={props.setMyVehicles}
        myVehicles={props.myVehicles}
      />
    </>
  );
}

export default MyVehicleCard;
