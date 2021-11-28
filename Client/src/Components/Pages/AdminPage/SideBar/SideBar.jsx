import React from "react";
import swal from "sweetalert";
import "./SideBar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  CheckCircleOutline,
  Timer,
  ThumbUpAlt,
  HighlightOff,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import AdminAppoServices from "../../../../Services/AdminServices/AdminAppoServices";
const DeleteAllServicee = () => {
  console.log("inside delete all frontend");
  swal({
    title: "Are You going to Delete All Appoinemts?",
    text: " Are you you sure?",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((ok) => {
    if (ok) {
      AdminAppoServices.DeleteAllService()
        .then((service) => {
          swal("Well Done!", "Delted All Appoiments", "success");
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  });
};

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Appoinmets</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <Timer className="sidebarIcon" />
              Pending Appoiment
            </li>
            <li className="sidebarListItem">
              <CheckCircleOutline className="sidebarIcon" />
              Approved Appoinment
            </li>
            <li className="sidebarListItem">
              <ThumbUpAlt className="sidebarIcon" />
              Finshed Appoinment
            </li>
            <li className="sidebarListItem">
              <HighlightOff className="sidebarIcon" />
              Rejected Appoinment
            </li>
          </ul>
          <button
            className="clearButton"
            style={{ marginLeft: "-5px" }}
            onClick={() => DeleteAllServicee()}
          >
            Clear All Appoiment
          </button>
        </div>
      </div>
      <div className="sidebarMenu">
        <h3 className="sidebarTitle">Users</h3>
        <ul className="sidebarList">
          <Link to="/" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              All
            </li>
          </Link>
          <li className="sidebarListItem">
            <Timeline className="sidebarIcon" />
            New Users
          </li>
        </ul>
        <button className="clearButton">Clear All users</button>
      </div>

      <div className="sidebarMenu">
        <h3 className="sidebarTitle">Vehicles</h3>
        <ul className="sidebarList">
          <Link to="/" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              All
            </li>
          </Link>
        </ul>
        <button className="clearButton">Clear All Vehicles</button>
      </div>
    </div>
  );
}

export default SideBar;
