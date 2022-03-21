import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import { useState } from "react";

import "../OwnerPages/ownerAccount.css";
import UserAccountImage from "../../images/ProfessionalImgGirl.jpg";
import OwnerProfile from "../OwnerPages/OwnerProfile";
import OwnerAllData from "./OwnerAllData";
import OwnerPendingData from "../OwnerPages/OwnerPendingData";
import OwnerSuccessData from "../OwnerPages/OwnerSuccessData";
const OwnerAccount = () => {
  let history = useHistory();
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };


  return (
    <>
      <div class={isActive ? "d-flex toggled" : "d-flex"} id="ownerAccount">
        {/*......site bare........ */}
        <div class="bg-blackNew" id="sidebar-wrapper">
          <div class="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom ">
            <i class="fas fa-house-user me-2"></i>
            Owner HOME
          </div>
          <div class="list-group list-group-flush my-3">
            <Link
              to="/OwnerAccount"
              class="list-group-item list-group-item-action bg-transparent second-text active"
            >
              <i class="fas fa-tachometer-alt me-2"></i> Owner Dashboard
            </Link>
            <Link
              to="/OwnerAccount/profile"
              class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
            >
              <i class="far fa-id-badge"></i> Profile
            </Link>
            <Link
              to="/OwnerAccount/pendingData"
              class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
            >
              <i class="fas fa-cart-plus"></i> Pending Data
            </Link>
            <Link
              to="/OwnerAccount/successData"
              class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
            >
              <i class="fas fa-cart-plus"></i> Success Data
            </Link>
            <Link
               data-bs-toggle="modal"
               data-bs-target="#exampleModal2"
              class="list-group-item list-group-item-action bg-transparent text-danger fw-bold"
            >
              <i class="fas fa-power-off me-2"></i>Logout
            </Link>
          </div>
        </div>

        <div id="page-content-wrapper">
          <nav class="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4 bg-blackNew">
            <div class="d-flex align-items-center" onClick={toggleClass}>
              <i
                class="fas fa-align-left primary-text fs-4 me-3"
                id="menu-toggleBtn"
              ></i>
              <h2 class="fs-2 m-0">Dashboard</h2>
            </div>
          </nav>
          <hr class="dropdown-divider" />
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
          </Switch>
        </div>
      </div>
    </>
  );
};

export default OwnerAccount;
