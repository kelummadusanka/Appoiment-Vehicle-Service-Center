import React from 'react'
import './OnlineBooking.css';

function SelectYourServiceCard(props) {
    function handleChange(event) {
        if(props.onChange) {props.onChange(event)}
      }
    return (
       
        <div className="OB-service-type-col" for={props.id}>
        <label>

            <input onChange={handleChange} type="radio" id={props.id} name="OB-service-type" value={props.value}
                className="OB-service-type-radio " />
            <i className="far fa-check-circle fa-2x"></i>
            <div className="test"></div>
            <div className="OB-service-type-col-img">
                <img src={props.image} alt=''></img>
            </div>
            <p>{props.value}</p>
        </label>
    </div>
    )
}

export default SelectYourServiceCard
