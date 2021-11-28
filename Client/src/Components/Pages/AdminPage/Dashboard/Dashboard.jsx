import React from "react";
import "./Dashboard.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import Topbar from "../TopBar/Topbar";
import PendingService from "../DashboardService/PendingService";

function Dashboard() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <SideBar />

        <div className="container2">
          <PendingService />
        </div>
      </div>
    </Router>
  );
}

export default Dashboard;
