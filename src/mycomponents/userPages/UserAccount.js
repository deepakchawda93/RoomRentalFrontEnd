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
              <div class="bg-white">
                <div class="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom">
                  <img
                    src={UserAccountImage}
                    alt="UserAccountImage"
                    className="rounded-circle text-center border-dark img-fluid"
                    style={{ border: "3px solid black" }}
                  />
                </div>
                <div class="list-group list-group-flush my-3">
                  <Link
                    to=""
                    class="list-group-item list-group-item-action bg-transparent second-text active"
                  >
                    <i class="fas fa-tachometer-alt me-2"></i>Dashboard
                  </Link>
                  <Link
                    to="/Owner/profile"
                    class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
                  >
                    <i class="far fa-id-badge"></i> Profile
                  </Link>
                  <Link
                    to="/user/wishlist"
                    class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
                  >
                    <i class="fas fa-cart-plus"></i> Wishlist
                  </Link>

                  <Link
                    to=""
                    class="list-group-item list-group-item-action bg-transparent text-danger fw-bold"
                  >
                    <i class="fas fa-power-off me-2"></i>Logout
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
