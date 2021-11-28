import React, { useEffect, useState } from "react";
import "./MyAccount.css";
import Footer from "../../Footer";
import { Link } from "react-router-dom";
import { getUser, setuserSession } from "../../../common";
import MyVehicleCard from "./MyVehicleCard";
import swal from "sweetalert";
import EditUpcommingService from "./EditUpcommingService";
import dateFormat from "dateformat";
import MyAccountNavbar from "./MyAccountNavbar";
import VehicleServices from "../../../Services/CustomerServices/VehicleServices";
import AppoinmentServices from "../../../Services/CustomerServices/AppoinmentServices";
import FileBase64 from "react-file-base64";
import AuthServices from "../../../Services/CustomerServices/AuthServices";

function MyAccount() {
  const [user, setuser] = useState(getUser());
  const [myVehicles, setMyVehicles] = useState([]);
  const [MyallServices, setMyallServices] = useState([]);
  const [UpcommingServices, setUpcommingServices] = useState([]);
  const [ServiceHistory, setServiceHistory] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [profilePhoto, setprofilePhoto] = useState(user.profilePhoto);
  const [SearchString, setSearchString] = useState("");
  const [upErr, setupErr] = useState("");
  const [vehErr, setvehErr] = useState("");
  const [appErr, setappErr] = useState("");
  const openModal = () => setShowModal((prev) => !prev);

  useEffect(() => {
    VehicleServices.getVehicle(user.email)
      .then((response) => {
        if(response.success) setMyVehicles(response.vehicles);
      })
      .catch((err) => {
        console.log(err.message);
        setvehErr(err.message);
        if (err.response) setvehErr(err.response.data.message);
      });

    AppoinmentServices.getServices(user.email)
      .then((response) => {
        if(response.success){
          const service = response.Service
        setMyallServices(
          []
            .concat(service)
            .sort((a, b) => (a.AddedDate > b.AddedDate ? -1 : 1))
        );
        setUpcommingServices(
          service
            .filter(
              (item) =>
                item.Status === "pending" ||
                (item.Status === "confirm" && item.result === false)
            )
            .sort((a, b) => (a.AddedDate > b.AddedDate ? -1 : 1))
        );
        setServiceHistory(
          service
            .filter((item) => item.Status === "closed" || item.result === true)
            .sort((a, b) => (a.appoDate > b.appoDate ? -1 : 1))
        );
      }})
      .catch((err) => {
        console.log(err.message);
        setappErr(err.message);
        if (err.response) setappErr(err.response.data.message);
      });
  }, []);

  const handleDelete = async (UpcommingServiecee) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this service appoinment!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        setUpcommingServices(
          UpcommingServices.filter(
            (item) => item._id !== UpcommingServiecee._id
          )
        );

        setServiceHistory((ServiceHistory) =>
          ServiceHistory.concat(UpcommingServiecee)
        );
        AppoinmentServices.deleteService(UpcommingServiecee._id).then(
          (response) => {
            if (response.success) {
              swal("Done!", "Deleted Your Appoinment!", "success");
            }
          }
        ).catch((err) => {
          let appoErr= err.message;
          console.log(err);
          if(err.response) appoErr=err.response.data.message
          swal("Oops!", appoErr, "error");
  
        });
      } else {
        swal("Your appoinment is safe!");
      }
    });
  };

  function IsVehicle() {
    if (myVehicles.length === 0) {
      swal({
        title: "No Vehicle Avaliable!",
        text: "Do you want to add vehicle just now?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((redirect) => {
        if (redirect) {
          swal("redirecting to add your vehicle", {
            icon: "success",
          });
          window.location = "/AddYourVehicle/";
        }
      });
    } else {
      window.location = "/OnlineBooking/" + user.username;
    }
  }

  const updateUserProfile = (base64) => {
    setprofilePhoto(base64);
    const updateUser = {
      _id: user._id,
      profilePhoto: base64,
    };

    AuthServices.updateUserProfile(updateUser)
      .then((response) => {
        setuserSession(response.user);
        setuser(getUser());
      })
      .catch((err) => {
        console.log(err.message);
        setupErr(err.message);
        if (err.response) setupErr(err.response.data.message);
      });
  };
  return (
    <>
      <section className="MyAccount-header" style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0, 0.2), rgba(255, 255, 255, 0.3)),url('/images/profile.jpg')",
            backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        borderBottomRightRadius: '50px',
        borderBottomLeftRadius: '50px',
        }}>
        <div className="purple-area"  >
          <MyAccountNavbar />
        </div>

        <div className="Light-purple-area" >
          <div className="profile">
            <div className="profile-photo">
              <img src={profilePhoto} className="profileIcon"></img>
              {/* <i className="far fa-user-circle fa-8x"></i> */}

              <label className="MyfileBase">
                <FileBase64
                  id="file"
                  type="file"
                  multiple={false}
                  onDone={({ base64 }) => {
                    updateUserProfile(base64);
                  }}
                />
              </label>
            </div>
            {upErr && <p className="upErrorPTag">{upErr}</p>}
            <div className="profile-info">
              <table className="profile-info-table">
                <tbody>
                  <tr>
                    <th>Name</th>
                    <td>
                      {user.firstname} {user.lastname}
                    </td>
                  </tr>
                  <tr>
                    <th>Address</th>
                    <td>
                      {user.address1} {user.city}
                    </td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>{user.email}</td>
                  </tr>
                </tbody>
              </table>

              <table className="profile-info-table">
                <tbody>
                  <tr>
                    <th>Member since</th>
                    <td>{dateFormat(user.Date, "mm/dd/yyyy")}</td>
                  </tr>
                  <tr>
                    <th>No. of services</th>
                    <td>15</td>
                  </tr>
                  <tr>
                    <th>Member Type</th>
                    <td>Gold</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <button onClick={IsVehicle} className="Reserve-time-btn">
              Reserve a time!
            </button>
          </div>
        </div>
      </section>

      <section className="MyAccount" >
        <div className="">
          <h1>Your vehicles</h1>
          {vehErr ? (
            <div className="veherrclass">{vehErr}</div>
          ) : (
            <div className="MA-your-vehicle-Full-row">
              <div className="MA-your-vehicle-row">
                {myVehicles.map((vehicle) => {
                  return (
                    <MyVehicleCard services={MyallServices} vehicle={vehicle} setMyVehicles={setMyVehicles} myVehicles={myVehicles}/>
                  );
                })}

                <Link to="/AddYourVehicle" style={{ textDecoration: 'none' }} >
                  <div className="add-vehicle-btn">
                    <i className="fa fa-plus-square-o"></i>
                  </div>
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="MY-Account-upcomming">
        <h1>Upcomming services</h1>
        <div className="MA-upcomming">
          {appErr?
            <div className="veherrclass">{appErr}</div>:
            <table className="MA-upcomming-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Ve. Type</th>
                <th>Ve. Number</th>
                <th>Service Type</th>
                <th>Status</th>
                <th>Edit</th>
              </tr>
            </thead>

            <tbody>
              {UpcommingServices.map((UpcommingServiece) => {
                return (
                  <>
                    {showModal ? (
                      <EditUpcommingService
                        UpcommingServiece={UpcommingServiece}
                        showModal={showModal}
                        setShowModal={setShowModal}
                        handleDelete={handleDelete}
                        setUpcommingServices={setUpcommingServices}
                        UpcommingServices={UpcommingServices}
                      />
                    ) : null}

                    <tr>
                      <td>
                        {dateFormat(UpcommingServiece.appoDate, "mm/dd/yyyy")}
                      </td>
                      <td>{UpcommingServiece.appoTime}</td>
                      <td>{UpcommingServiece.vehType}</td>
                      <td>{UpcommingServiece.vehNumber}</td>
                      <td>{UpcommingServiece.ServiceType}</td>
                      <td>
                        {UpcommingServiece.Status === "pending" ? (
                          <span className="fa-stack pending-icon Pending-Icon1">
                            <i className="far fa-circle fa-stack-2x"></i>
                            <i className="fas fa-ellipsis-h fa-stack-1x"></i>
                          </span>
                        ) : UpcommingServiece.Status === "confirm" ? (
                          <i className="far fa-check-circle fa-2x"></i>
                        ) : (
                          <i class="far fa-times-circle"></i>
                        )}
                      </td>
                      <td>
                        <i
                          className="far fa-trash-alt fa-2x"
                          onClick={() => handleDelete(UpcommingServiece)}
                        ></i>
                        <i
                          className="far fa-edit fa-2x"
                          onClick={() => openModal()}
                        ></i>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        
            }
          </div>
      </section>

      <section className="MY-Account-History">
        <h1>Services history</h1>
        {appErr?<div className="veherrclass">{appErr}</div>:
         <div className="MA-History">
         <div class="search-box">
           <button class="btn-search">
             <i class="fas fa-search"></i>
           </button>
           <input
             type="text"
             class="input-search"
             placeholder="Type to Search..."
             onChange={(e) =>
               setSearchString(e.target.value.trim().toLowerCase())
             }
           />
         </div>
         <table className="MA-history-table">
           <thead>
             <tr>
               <th>Date</th>
               <th>Ve. Type</th>
               <th>Ve. Number</th>
               <th>Service Type</th>
               <th>Service Cost</th>
               <th>description</th>
               <th>Result</th>
             </tr>
           </thead>

           <tbody>
             {ServiceHistory.filter((item) => {
               if (SearchString == "") {
                 return item;
               } else if (
                 item.vehType.toString().toLowerCase().match(SearchString) ||
                 item.vehNumber.toString().toLowerCase().match(SearchString) ||
                 item.ServiceType.toString()
                   .toLowerCase()
                   .match(SearchString) ||
                 item.cost.toString().toLowerCase().match(SearchString) ||
                 item.description
                   .toString()
                   .toLowerCase()
                   .match(SearchString) ||
                 item.result.toString().toLowerCase().match(SearchString) ||
                 item.appoDate.toString().toLowerCase().match(SearchString)
               ) {
                 return item;
               }
             }).map((ServicesHistory, key) => {
               return (
                 <tr key={key}>
                   <td>
                     {dateFormat(ServicesHistory.appoDate, "mm/dd/yyyy")}
                   </td>
                   <td>{ServicesHistory.vehType}</td>
                   <td>{ServicesHistory.vehNumber}</td>
                   <td>{ServicesHistory.ServiceType}</td>
                   <td>{ServicesHistory.cost}</td>
                   <td>
                     {ServicesHistory.description
                       ? ServicesHistory.description
                       : "user cancelled!"}
                   </td>
                   <td>
                     {ServicesHistory.result === true ? (
                       <i className="far fa-check-circle fa-2x"></i>
                     ) : (
                       <i className="far fa-times-circle"></i>
                     )}
                     <i className={ServicesHistory.Result}></i>
                   </td>
                 </tr>
               );
             })}
           </tbody>
         </table>

         <button className="Load-more-btn">Load more</button>
       </div>
     
          }

       </section>
      <Footer />
    </>
  );
}

export default MyAccount;
