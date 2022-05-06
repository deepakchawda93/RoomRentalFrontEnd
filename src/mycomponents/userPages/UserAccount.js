import React from "react";
import { Link } from "react-router-dom";
import UserAccountImage from "../../images/ProfessionalImgGirl.jpg";

const UserAccount = () => {
  return (
    <>
      <div id="UserAccountPage">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2 shadow ">
              <div className="bg-white">
                <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom">
                  <img
                    src={UserAccountImage}
                    alt="UserAccountImage"
                    className="rounded-circle text-center border-dark img-fluid"
                    style={{ border: "3px solid black" }}
                  />
                </div>
                <div className="list-group list-group-flush my-3">
                  <Link
                    to=""
                    className="list-group-item list-group-item-action bg-transparent second-text active"
                  >
                    <i className="fas fa-tachometer-alt me-2"></i>Dashboard
                  </Link>
                  <Link
                    to="/Owner/profile"
                    className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
                  >
                    <i className="far fa-id-badge"></i> Profile
                  </Link>
                  <Link
                    to="/user/wishlist"
                    className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
                  >
                    <i className="fas fa-cart-plus"></i> Wishlist
                  </Link>

                  <Link
                    to=""
                    className="list-group-item list-group-item-action bg-transparent text-danger fw-bold"
                  >
                    <i className="fas fa-power-off me-2"></i>Logout
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-10">
            {/* <Route exact path="/userAccount">
          <UserAccount />
        </Route> */}
              
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserAccount;
