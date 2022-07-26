import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import { useState } from "react";

import "../OwnerPages/ownerAccount.css";
import UserAccountImage from "../../images/ProfessionalImgGirl.jpg";
import OwnerProfile from "../OwnerPages/OwnerProfile";
import OwnerAllData from "./OwnerAllData";
import OwnerPendingData from "../OwnerPages/OwnerPendingData";
import OwnerSuccessData from "./OwnerSuccessData";
import OwnerRejectedData from "./OwnerRejectedData";
const OwnerAccount = () => {
  let history = useHistory();
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };


  return (
    <>
      <div className={isActive ? "d-flex toggled" : "d-flex"} id="ownerAccount">
        {/*......site bare........ */}
        <div className="bg-blackNew" id="sidebar-wrapper">
          <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom ">
            <i className="fas fa-house-user me-2"></i>
            Owner HOME
          </div>
          <div className="list-group list-group-flush my-3">
            <Link
              to="/OwnerAccount"
              className="list-group-item list-group-item-action bg-transparent second-text active"
            >
              <i className="fas fa-tachometer-alt me-2"></i> Owner Dashboard
            </Link>
            <Link
              to="/OwnerAccount/profile"
              className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
            >
              <i className="far fa-id-badge"></i> Profile
            </Link>
            <Link
              to="/OwnerAccount/pendingData"
              className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
            >
              <i className="fas fa-cart-plus"></i> Pending Data
            </Link>
            <Link
              to="/OwnerAccount/successData"
              className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
            >
              <i className="fas fa-cart-plus"></i> Success Data
            </Link>
            <Link
              to="/OwnerAccount/rejectedData"
              className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
            >
              <i className="fas fa-cart-plus"></i> Rejected Data
            </Link>
            <Link
            to=""
               data-bs-toggle="modal"
               data-bs-target="#exampleModal2"
              className="list-group-item list-group-item-action bg-transparent text-danger fw-bold"
            >
              <i className="fas fa-power-off me-2"></i>Logout
            </Link>
          </div>
        </div>

        <div id="page-content-wrapper">
          <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4 bg-blackNew">
            <div className="d-flex align-items-center" onClick={toggleClass}>
              <i
                className="fas fa-align-left primary-text fs-4 me-3"
                id="menu-toggleBtn"
              ></i>
              <h2 className="fs-2 m-0">Dashboard</h2>
            </div>
          </nav>
          <hr className="dropdown-divider" />
          <Switch>
            <Route exact path="/OwnerAccount">
              <OwnerAllData />
            </Route>
            <Route exact path="/OwnerAccount/profile">
              <OwnerProfile />
            </Route>
            <Route exact path="/OwnerAccount/pendingData">
              <OwnerPendingData />
            </Route>
            <Route exact path="/OwnerAccount/successData">
              <OwnerSuccessData />
            </Route>
            <Route exact path="/OwnerAccount/rejectedData">
              <OwnerRejectedData />
            </Route>
          </Switch>
        </div>
      </div>
    </>
  );
};

export default OwnerAccount;
