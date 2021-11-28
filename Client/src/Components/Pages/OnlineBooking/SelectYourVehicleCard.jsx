import React from "react";
import './OnlineBooking.css';

function SelectYourVehicleCard(props) {
  function handleChange(event) {
    if(props.onChange) {props.onChange(event)}
  }
  return (
    <div className="Select-Your-Vehicle-col" for={ props.id }>
      <label>
        <input
          type="radio"
          id={props.id}
          name="Select-Your-Vehicle"
          value={ props.vehNumber }
          className="Select-Your-Vehicle-type-radio "
          onChange={handleChange}
        />
        <i className="far fa-check-circle fa-2x"></i>
        <div className="Select-Your-Vehicle-col-fake-div"></div>
        <div className="Select-Your-Vehicle-col-img">
          <img src={props.image} alt=""></img>
        </div>
        <p>{props.vehNumber}</p>
      </label>
    </div>
  );
}

export default SelectYourVehicleCard;
