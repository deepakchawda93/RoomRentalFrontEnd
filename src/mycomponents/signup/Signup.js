import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import welcomepage from "../../images/welcomPage.svg";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "../signup/singup.css";

const Signup = () => {
  var errorMessage;
  let history = useHistory();
  const [ErrorMsg, setErrorMsg] = useState();

  const [isLoader, setLoader] = useState(false);
  const [signUp, setSignUp] = useState({
    Email: "",
    Password: "",
    ConformPassword: "",
    FirstName: "",
    LastName: "",
    role: ""
  });
  const handleChangeLogin = (e) => {
    const { name, value } = e.target;
    setSignUp({ ...signUp, [name]: value });
  };

  const submitSignUp = async (event) => {
    // event.preventDefault();
    try {
      setLoader(true);
      if (
        signUp.Email == "" ||
        signUp.Password == "" ||
        signUp.ConformPassword == "" ||
        signUp.FirstName == "" ||
        signUp.LastName == ""||signUp.role == ""
      ) {
        setLoader(false);
        return toast.error("✔ Plz fill all fields!", { theme: "colored" });
      }

      const responce = await axios.post(
        `${process.env.REACT_APP_Api_Url}/Registration`,
        signUp
      );
      console.log("eroorr", responce);
      if (responce.data.success == true) {
        setLoader(false);
        history.push("/login");
        toast.success(`✔ ${responce.data.msg}`, { theme: "colored" });
      } else {
        setLoader(false);

        setErrorMsg(responce.data.error[0].description);
      }
    } catch (error) {
      setLoader(false);
      toast.error("✔ Something went wrong!", { theme: "colored" });
    }
  };
  return (
    <>
      <section id="signupform" className="d-flex align-items-center">
        <div className="container d-flex justify-content-center">
          <div className="row">
            <div
              className="card card-registration my-4 shadow"
              style={{ maxWidth: "1277px" }}
            >
              <div className="row m-4">
                <div className="col-xl-7 order-md-0 d-flex align-items-center">
                  <img
                    src={welcomepage}
                    alt="Sample photo"
                    className="img-fluid "
                  />
                  {/* "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp" */}
                </div>
                <div className="col-xl-5 order-md-1">
                  <div className="card-body p-md-5 text-black ">
                    <form className="g-3">
                      <h3 className="mb-4 text-uppercase text-center">
                        Create Account
                      </h3>

                      {!ErrorMsg ? (
                        " "
                      ) : (
                        <>
                          <div
                            className="alert alert-danger d-flex align-items-center p-0"
                            role="alert"
                          >
                            <svg
                              className="bi flex-shrink-0 me-2 p-0"
                              width="5"
                              height="5"
                              role="img"
                              aria-label="Danger:"
                            ></svg>
                            <p
                              className="mb-0"
                              style={{
                                textAlign: "center",
                                color: "red",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            ><i className="fas fa-exclamation-triangle fa-1x"> </i> {ErrorMsg} <br />
                              
                            </p>
                          </div>
                        </>
                      )}

                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-outline mb-2">
                            <input
                              type="text"
                              id="form3Example978"
                              name="FirstName"
                              value={signUp.FirstName}
                              onChange={handleChangeLogin}
                              className="form-control form-control-lg"
                              placeholder="FirstName "
                            />
                            <label className="form-label" htmlFor="form3Example978">
                              First name
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-outline mb-2">
                            <input
                              type="lastName"
                              id="form3Example979"
                              name="LastName"
                              value={signUp.LastName}
                              onChange={handleChangeLogin}
                              className="form-control form-control-lg"
                              placeholder="LastName "
                            />
                            <label className="form-label" htmlFor="form3Example979">
                              Last name
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="form-outline mb-2">
                        <input
                          type="email"
                          id="form3Example97"
                          name="Email"
                          value={signUp.Email}
                          onChange={handleChangeLogin}
                          className="form-control form-control-lg"
                          placeholder="Email "
                        />
                        <label className="form-label" htmlFor="form3Example97">
                          Email ID
                        </label>
                      </div>

                      <div className="form-outline mb-2">
                        <input
                          type="password"
                          id="form3Example1m"
                          name="Password"
                          value={signUp.Password}
                          onChange={handleChangeLogin}
                          className="form-control form-control-lg"
                          placeholder="******"
                        />
                        <label className="form-label" htmlFor="form3Example1m1">
                          Password
                        </label>
                      </div>
                      <div className="form-outline mb-2">
                        <input
                          type="password"
                          id="form3Example1m1"
                          name="ConformPassword"
                          value={signUp.ConformPassword}
                          onChange={handleChangeLogin}
                          className="form-control form-control-lg"
                          placeholder="******"
                        />
                        <label className="form-label" htmlFor="form3Example1m1">
                          Conform Password
                        </label>
                      </div>
                     
                      <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
                        <h6 className="mb-0 me-4">User Type: </h6>

                        <div className="form-check form-check-inline mb-0 me-4">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="role"
                            id="UserTypeuser"
                            onChange={handleChangeLogin}
                            value="user"
                          />
                          <label className="form-check-label" htmlFor="UserTypeuser">
                            User
                          </label>
                        </div>

                        <div className="form-check form-check-inline mb-0 me-4">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="role"
                            id="userTypeOwner"
                            onChange={handleChangeLogin}
                            value="owner"
                          />
                          <label className="form-check-label" htmlFor="userTypeOwner">
                            Owner
                          </label>
                        </div>
                      </div>

                      <div className="row g-3">
                        <div className="col-md-6 ">
                          <div className="d-grid">
                            <button
                              type="button"
                              className="btn btn-warning btn-lg"
                              disabled={isLoader}
                              onClick={(event) => {
                                submitSignUp(event);
                              }}
                            >
                              {isLoader ? (
                                <>
                                  <div
                                    className="spinner-border text-dark spinner-border-sm"
                                    role="status"
                                  >
                                    <span className="visually-hidden">
                                      Loading...
                                    </span>
                                  </div>
                                </>
                              ) : (
                                "Sign Up"
                              )}
                            </button>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="d-grid">
                            <NavLink
                              type="button"
                              className="btn btn-outline-warning  btn-lg "
                              to={"/login"}
                            >
                              Sign In
                            </NavLink>
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

export default Signup;

//.......................................bootstrap Registration form
// {
/* <div id="loginForm" className="d-flex align-items-center">
        <div className="container  my-5 d-flex justify-content-center">
          <div className="card shadow" style={{ maxWidth: "600px" }}>
            <div className="row g-0">
              <div className="col-md-4 order-md-1 d-flex align-items-center">
                <img src={loginImg} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8 order-md-0">
                <div className="card-body">
                  <h5 className="card-title text-center">SIGNUP FORM</h5>
                  <form className="row g-3">
                    <div className="col-md-12 ">
                      <label htmlFor="validationDefault02" className="form-label">
                        User Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="validationDefault02"
                        placeholder="Username"
                        required /
                      />
                    </div>
                    <div className="col-md-12 ">
                      <label htmlFor="validationDefault01" className="form-label">
                        Email id
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="validationDefault01"
                        placeholder="Email"
                        required /
                      />
                    </div>

                    <div className="col-md-12 ">
                      <label htmlFor="validationDefault02" className="form-label">
                        Password
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="validationDefault02"
                        placeholder="*********"
                        required /
                      />
                    </div>
                    <div className="col-md-12 ">
                      <label htmlFor="validationDefault02" className="form-label">
                        Conform Password
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="validationDefault02"
                        placeholder="conformpassword"
                        required /
                      />
                    </div>

                    <div className="col-12">
                      <button className="btn btn-primary">SingUp</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */
// ....................materialui......
// <Container maxWidth="xl">
//     <Stack
//       direction="row"
//       justifyContent="center"
//       alignItems="center"
//       spacing={0}
//     >
//       <Card sx={{ minWidth: 275 }}>
//         <CardContent>
//           <Button variant="text">Text</Button>
//           <Button variant="contained">Contained</Button>
//           <Button variant="outlined">Outlined</Button>
//           <div className="spinner-border" role="status">
//             <span className="visually-hidden">Loading...</span>
//           </div>
//         </CardContent>
//       </Card>
//     </Stack>
//   </Container>
// }

// ................bootstrap Registration form.................
