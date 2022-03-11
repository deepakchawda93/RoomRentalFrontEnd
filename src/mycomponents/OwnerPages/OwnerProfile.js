import React from "react";
import { NavLink } from "react-router-dom";
import OwnderProfileImage from "../../images/user2.jpg";
const OwnderProfile = () => {
  return (
    <>
      <section id="signupform" className="d-flex align-items-center">
        <div class="container d-flex justify-content-center">
          <div class="row">
            <div
              class="card card-registration my-4"
              style={{ maxWidth: "1277px" }}
            >
              <div class="row m-4">
                <div class="col-md-4 order-md-0 d-flex ">
                  <div class="card-body  text-black text-center ">
                    <h3 class="mb-4 text-uppercase text-center">
                      Profile Image
                    </h3>
                    <img
                      src={OwnderProfileImage}
                      alt="Sample photo"
                      class="img-fluid"
                      style={{borderRadius : "125px"}}
                    />
                    <p className="fs-4">Ronak Suryavanshi</p>

                    <div className="">
                      <input  type="file" class="btn btn-outline-warning" accept="image/png,image/x-png,image/gif,image/jpeg" id="selectFile" style={{ borderRadius : "20px"}}/>
                      <label class="form-label py-2" for="selectFile">
                      Select Picture
                        </label>
                    </div>
                  </div>
                </div>
                <div class="col-md-8 order-md-1">
                  <div class="card-body  text-black ">
                    <form className="g-3">
                      <h3 class="mb-4 text-uppercase text-center">
                        Personal Detail
                      </h3>

                      <div className="row">
                        <div className="col-md-6">
                          <div class="form-outline mb-2">
                            <input
                            disabled
                              type="text"
                              id="form3Example978"
                              name="FirstName"
                              value="Ronak"
                              // onChange={handleChangeLogin}
                              class="form-control form-control-lg"
                              
                            />
                            <label class="form-label" for="form3Example978">
                              First name
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div class="form-outline mb-2">
                            <input
                            disabled
                              type="text"
                              id="form3Example979"
                              name="LastName"
                              value="Suryavanshi"
                              // onChange={handleChangeLogin}
                              class="form-control form-control-lg"
                              
                            />
                            <label class="form-label" for="form3Example979">
                              Last name
                            </label>
                          </div>
                        </div>
                      </div>
                      <div class="form-outline mb-2">
                        <input
                         disabled
                          type="email"
                          id="form3Example97"
                          name="Email"
                          value="ronak@gmail.com"
                          // onChange={handleChangeLogin}
                          class="form-control form-control-lg"
                          
                        />
                        <label class="form-label" for="form3Example97">
                          Email ID
                        </label>
                      </div>

                      <div class="form-outline mb-2">
                        <input
                         disabled
                          type="text"
                          id="form3Example1m"
                          name="Password"
                          value="9630638110"
                          // onChange={handleChangeLogin}
                          class="form-control form-control-lg"
                         
                        />
                        <label class="form-label" for="form3Example1m1">
                          Phone Number
                        </label>
                      </div>
                      <div class="form-outline mb-2">
                        <input
                         disabled
                          type="text"
                          id="form3Example1m1"
                          name="ConformPassword"
                          value="Shavid nager hanuman mandir"
                          // onChange={handleChangeLogin}
                          class="form-control form-control-lg"
                          
                        />
                        <label class="form-label" for="form3Example1m1">
                          Address
                        </label>
                      </div>

                      <div className="row g-3">
                        <div className="col-md-12">
                          <div class="d-grid">
                            <button
                              type="button"
                              class="btn btn-warning btn-lg"

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
