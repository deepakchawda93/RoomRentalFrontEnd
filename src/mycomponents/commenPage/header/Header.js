import React, { useEffect, useState } from "react";
import "../header/Header.css";
import { Link, useHistory } from "react-router-dom";
import userAccount from "../../../images/userAccountImage.png";

const Header = () => {
  let history = useHistory();
  const [checkLogin, setCheckLogin] = useState(null);

  const [isLogin , setIsLogin] = useState(false)
  // console.log(checkLogin?.role);
  useEffect(() => {
    setCheckLogin(JSON.parse(localStorage.getItem("userDetails")));
    // findRoomRentData();
  }, []);

  const Logoutfun = () => {
    if (window.confirm("Do You want to delete!")) {
      localStorage.clear();
      history.push("/")
    }
  };

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
                        <Link
                          to="/"
                          className="nav-link active"
                          aria-current="page"
                        >
                          Home
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/Contact"
                          className="nav-link active"
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
                              className="nav-link active"
                              aria-current="page"
                            >
                              Login
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              className="nav-link active"
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
                              className="nav-link active"
                              aria-current="page"
                              to="/userWishlist"
                            >
                              Wishlist
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
                              <li><hr class="dropdown-divider"/></li>
                              <li>
                                <Link class="dropdown-item"  to="/userAccount">
                                  <i class="fas fa-user-circle"></i> Account
                                </Link>
                              </li>
                              
                              <li
                                onClick={() => {
                                  Logoutfun();
                                }}
                              >
                                <a class="dropdown-item" href="#">
                                  <i class="fas fa-power-off"></i> Logout
                                </a>
                              </li>
                            </ul>
                          </div>
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
