import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../Navbar.css";
import swal from "sweetalert";
import { getUser, removeUserSession } from "../../../common";

function MyAccountNavbar() {
  const MyAccount = "/MyAccount/" + getUser().username;
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  const logOut = () => {
    swal({
      title: "Are You going to Log Out?",
      text: " Are you you sure?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((DoLogout) => {
      if (DoLogout) {
        window.location = "/";
        removeUserSession();
        
      }
    });
  };
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src="/images/logo_white.png"></img>
            SLmotor
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to={MyAccount}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                My Account
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/OurService"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                OUR SERVICES
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/ContactUs"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                CONTACT US
              </Link>
            </li>

            <li className="nav-item">
              <Link
                // to="/"
                className="nav-links"
                onClick={logOut}
              >
                <i class="fas fa-sign-out-alt"></i>
              </Link>
            </li>
          </ul>
          {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default MyAccountNavbar;
