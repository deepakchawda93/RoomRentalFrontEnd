import React, { useEffect, useState } from "react";
import "../header/Header.css";
import { Link, useHistory } from "react-router-dom";
import userAccount from "../../../images/userAccountImage.png";
import LogoutModal from "./LogoutModal";

const Header = () => {
  let history = useHistory();
  const [checkLogin, setCheckLogin] = useState(null);

  const [isLogin, setIsLogin] = useState(false);
  // console.log(checkLogin?.role);
  useEffect(() => {
    setCheckLogin(JSON.parse(localStorage.getItem("userDetails")));
    // findRoomRentData();
  }, []);

 

  return (
    <>
      <section id="nav_bar">
        <div className="container-fluid">
          <div className="row">
            <div className=" col-lg-11  col-sm-11  mx-auto ">
              <nav className="navbar navbar-light navbar-expand-lg">
                <div className="container-fluid">
                  <Link className="navbar-brand" to="/">
                    <img
                      className="SiteLogo"
                      src="https://thumbs.dreamstime.com/b/room-rent-sign-isolated-white-background-simple-vector-logo-room-rent-sign-isolated-white-background-221788015.jpg"
                      alt="site logo"
                      srcset=""
                    />
                  </Link>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <Link to="/" className="nav-link" aria-current="page">
                          Home
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/Contact"
                          className="nav-link "
                          aria-current="page"
                        >
                          Contact
                        </Link>
                      </li>
                      {checkLogin == null && (
                        <>
                          <li className="nav-item">
                            <Link
                              to="/login"
                              className="nav-link "
                              aria-current="page"
                            >
                              Login
                            </Link>
                          </li>

                          <li className="">
                            {/* nav-item */}
                            <Link
                              className="btn btn-outline-success"
                              aria-current="page"
                              to="/signup"
                            >
                              Sign up
                            </Link>
                          </li>
                        </>
                      )}
                      {checkLogin?.role == "user" && (
                        <>
                          <li className="nav-item">
                            <Link
                              className="nav-link "
                              aria-current="page"
                              to="/userWishlist"
                            >
                              Wishlist
                            </Link>
                          </li>
                        </>
                      )}
                      {checkLogin?.role == "owner" && (
                        <>
                          <li className="nav-item">
                            <Link
                              className="nav-link"
                              aria-current="page"
                              to="/OwnerAccount"
                            >
                              Add Room
                            </Link>
                          </li>
                        </>
                      )}
                    </ul>
                    <form class="d-flex ms-auto">
                      {checkLogin !== null ? (
                        <>
                          <div className="dropdown">
                            Hi {checkLogin.userData[1]}
                            {checkLogin.imageUrl ? (
                              <> "user image orignal uploaded"</>
                            ) : (
                              <>
                                <img
                                  class="btn  dropdown-toggle UserAccount"
                                  type="button"
                                  id="dropdownMenuButton1"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                  src={userAccount}
                                  alt="UserAccount"
                                  srcset=""
                                />
                              </>
                            )}
                            <ul
                              class="dropdown-menu dropdown-menu-dark dropdown-menu-lg-end"
                              aria-labelledby="dropdownMenuButton1"
                            >
                              <li>
                                <p class="dropdown-item-text">
                                  {/* <i class="fas fa-envelope"></i> */}
                                  {checkLogin.userData[0]}
                                </p>
                              </li>
                              <li>
                                <hr class="dropdown-divider" />
                              </li>
                              <li>
                                {checkLogin?.role == "user" ? (
                                  <>
                                    <Link
                                      class="dropdown-item"
                                      to="/userAccount"
                                    >
                                      <i class="fas fa-user-circle"></i> Account
                                    </Link>
                                  </>
                                ) : (
                                  <>
                                    <Link
                                      class="dropdown-item"
                                      to="/OwnerAccount"
                                    >
                                      <i class="fas fa-user-circle"></i> Account
                                    </Link>
                                  </>
                                )}
                              </li>

                              <li>
                                <a
                                  class="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModal2"
                                >
                                  <i class="fas fa-power-off"></i> Logout
                                </a>
                              </li>
                            </ul>
                          </div>
                         <LogoutModal/>
                        </>
                      ) : (
                        <>
                          <input
                            class="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                          />
                          <button
                            class="btn btn-outline-success btn_border"
                            type="submit"
                          >
                            <i class="fa fa-search" aria-hidden="true"></i>
                            Search
                          </button>
                        </>
                      )}
                    </form>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
