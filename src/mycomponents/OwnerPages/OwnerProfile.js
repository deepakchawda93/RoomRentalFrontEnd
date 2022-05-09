import React from "react";
import { NavLink } from "react-router-dom";
import OwnderProfileImage from "../../images/user2.jpg";
const OwnderProfile = () => {
  return (
    <>
      <section id="signupform" className="d-flex align-items-center">
        <div className="container d-flex justify-content-center">
          <div className="row">
            <div
              className="card card-registration my-4"
              style={{ maxWidth: "1277px" }}
            >
              <div className="row m-4">
                <div className="col-md-4 order-md-0 d-flex ">
                  <div className="card-body  text-black text-center ">
                    <h3 className="mb-4 text-uppercase text-center">
                      Profile Image
                    </h3>
                    <img
                      src={OwnderProfileImage}
                      alt="Sample photo"
                      className="img-fluid"
                      style={{borderRadius : "125px"}}
                    />
                    <p className="fs-4">Ronak Suryavanshi</p>

                    <div className="">
                      <input  type="file" className="btn btn-outline-warning" accept="image/png,image/x-png,image/gif,image/jpeg" id="selectFile" style={{ borderRadius : "20px"}}/>
                      <label className="form-label py-2" htmlFor="selectFile">
                      Select Picture
                        </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-8 order-md-1">
                  <div className="card-body  text-black ">
                    <form className="g-3">
                      <h3 className="mb-4 text-uppercase text-center">
                        Personal Detail
                      </h3>

                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-outline mb-2">
                            <input
                            disabled
                              type="text"
                              id="form3Example978"
                              name="FirstName"
                              value="Ronak"
                              // onChange={handleChangeLogin}
                              className="form-control form-control-lg"
                              
                            />
                            <label className="form-label" htmlFor="form3Example978">
                              First name
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-outline mb-2">
                            <input
                            disabled
                              type="text"
                              id="form3Example979"
                              name="LastName"
                              value="Suryavanshi"
                              // onChange={handleChangeLogin}
                              className="form-control form-control-lg"
                              
                            />
                            <label className="form-label" htmlFor="form3Example979">
                              Last name
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="form-outline mb-2">
                        <input
                         disabled
                          type="email"
                          id="form3Example97"
                          name="Email"
                          value="ronak@gmail.com"
                          // onChange={handleChangeLogin}
                          className="form-control form-control-lg"
                          
                        />
                        <label className="form-label" htmlFor="form3Example97">
                          Email ID
                        </label>
                      </div>

                      <div className="form-outline mb-2">
                        <input
                         disabled
                          type="text"
                          id="form3Example1m"
                          name="Password"
                          value="9630638110"
                          // onChange={handleChangeLogin}
                          className="form-control form-control-lg"
                         
                        />
                        <label className="form-label" htmlFor="form3Example1m1">
                          Phone Number
                        </label>
                      </div>
                      <div className="form-outline mb-2">
                        <input
                         disabled
                          type="text"
                          id="form3Example1m1"
                          name="ConformPassword"
                          value="Shavid nager hanuman mandir"
                          // onChange={handleChangeLogin}
                          className="form-control form-control-lg"
                          
                        />
                        <label className="form-label" htmlFor="form3Example1m1">
                          Address
                        </label>
                      </div>

                      <div className="row g-3">
                        <div className="col-md-12">
                          <div className="d-grid">
                            <button
                              type="button"
                              className="btn btn-warning btn-lg"

                              // onClick={(event) => {
                              //   submitSignUp(event);
                              // }}
                            >
                              Edit Profile
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                {/* */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OwnderProfile;
