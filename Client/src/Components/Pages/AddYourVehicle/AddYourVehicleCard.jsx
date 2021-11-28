import React from "react";
import './AddYourVehicle.css';

function AddYourVehicleCard(props) {
  function handleChange(event) {
    if(props.onChange) {props.onChange(event); console.log(props.vehType)}
  }
  return (
    <div className="AYV-vehicle-col">
      <label>
        <input
         onChange={handleChange}
          type="radio"
          id={props.id}
          name="AYV-vehicle-radio-type"
          value={props.vehType}
          className="AYV-vehicle-col-radio"
        />
        <i className="far fa-check-circle fa-2x"></i>
        <div className="AYV-vehicle-col-img">
          <img src={props.image} alt=""></img>
        </div>
        <p>{props.vehType}</p>
      </label>
    </div>
  );
}

export default AddYourVehicleCard;
