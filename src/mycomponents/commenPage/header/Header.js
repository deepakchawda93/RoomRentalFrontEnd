import React,{useEffect,useState} from "react";
import "../header/Header.css";
import { Link ,useHistory } from "react-router-dom";
const Header = () => {
  let history = useHistory();
  const[checkLogin,setCheckLogin]= useState(null)
  useEffect(()=>{
    setCheckLogin (JSON.parse(localStorage.getItem("userDetails")))
    // findRoomRentData();
  },[])
  return (
    <>
      <section id="nav_bar">
        <div className=" container-fluid">
          <div className="row">
            <div className=" col-lg-11  col-sm-11  mx-auto">
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
                          to="/about"
                          className="nav-link active"
                          aria-current="page"
                        >
                          About
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
                    </ul>
                    <form class="d-flex ms-auto">
                      {checkLogin==null?<>
                        <input
                        class="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                      <button
                        class="btn btn-outline-success btn_border"
                        type="submit"
                      ><i class="fa fa-search" aria-hidden="true"></i>Search
                      </button>

                      </>:<>user name</>}
                    
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
