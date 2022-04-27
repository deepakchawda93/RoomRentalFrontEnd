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
        "https://localhost:44380/Registration",
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
        <div class="container d-flex justify-content-center">
          <div class="row">
            <div
              class="card card-registration my-4 shadow"
              style={{ maxWidth: "1277px" }}
            >
              <div class="row m-4">
                <div class="col-xl-7 order-md-0 d-flex align-items-center">
                  <img
                    src={welcomepage}
                    alt="Sample photo"
                    class="img-fluid "
                  />
                  {/* "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp" */}
                </div>
                <div class="col-xl-5 order-md-1">
                  <div class="card-body p-md-5 text-black ">
                    <form className="g-3">
                      <h3 class="mb-4 text-uppercase text-center">
                        Create Account
                      </h3>

                      {!ErrorMsg ? (
                        " "
                      ) : (
                        <>
                          <div
                            class="alert alert-danger d-flex align-items-center p-0"
                            role="alert"
                          >
                            <svg
                              class="bi flex-shrink-0 me-2 p-0"
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
                            ><i class="fas fa-exclamation-triangle fa-1x"> </i> {ErrorMsg} <br />
                              
                            </p>
                          </div>
                        </>
                      )}

                      <div className="row">
                        <div className="col-md-6">
                          <div class="form-outline mb-2">
                            <input
                              type="text"
                              id="form3Example978"
                              name="FirstName"
                              value={signUp.FirstName}
                              onChange={handleChangeLogin}
                              class="form-control form-control-lg"
                              placeholder="FirstName "
                            />
                            <label class="form-label" for="form3Example978">
                              First name
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div class="form-outline mb-2">
                            <input
                              type="lastName"
                              id="form3Example979"
                              name="LastName"
                              value={signUp.LastName}
                              onChange={handleChangeLogin}
                              class="form-control form-control-lg"
                              placeholder="LastName "
                            />
                            <label class="form-label" for="form3Example979">
                              Last name
                            </label>
                          </div>
                        </div>
                      </div>
                      <div class="form-outline mb-2">
                        <input
                          type="email"
                          id="form3Example97"
                          name="Email"
                          value={signUp.Email}
                          onChange={handleChangeLogin}
                          class="form-control form-control-lg"
                          placeholder="Email "
                        />
                        <label class="form-label" for="form3Example97">
                          Email ID
                        </label>
                      </div>

                      <div class="form-outline mb-2">
                        <input
                          type="password"
                          id="form3Example1m"
                          name="Password"
                          value={signUp.Password}
                          onChange={handleChangeLogin}
                          class="form-control form-control-lg"
                          placeholder="******"
                        />
                        <label class="form-label" for="form3Example1m1">
                          Password
                        </label>
                      </div>
                      <div class="form-outline mb-2">
                        <input
                          type="password"
                          id="form3Example1m1"
                          name="ConformPassword"
                          value={signUp.ConformPassword}
                          onChange={handleChangeLogin}
                          class="form-control form-control-lg"
                          placeholder="******"
                        />
                        <label class="form-label" for="form3Example1m1">
                          Conform Password
                        </label>
                      </div>
                     
                      <div class="d-md-flex justify-content-start align-items-center mb-4 py-2">
                        <h6 class="mb-0 me-4">User Type: </h6>

                        <div class="form-check form-check-inline mb-0 me-4">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="role"
                            id="UserTypeuser"
                            onChange={handleChangeLogin}
                            value="user"
                          />
                          <label class="form-check-label" for="UserTypeuser">
                            User
                          </label>
                        </div>

                        <div class="form-check form-check-inline mb-0 me-4">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="role"
                            id="userTypeOwner"
                            onChange={handleChangeLogin}
                            value="owner"
                          />
                          <label class="form-check-label" for="userTypeOwner">
                            Owner
                          </label>
                        </div>
                      </div>

                      <div className="row g-3">
                        <div className="col-md-6 ">
                          <div class="d-grid">
                            <button
                              type="button"
                              class="btn btn-warning btn-lg"
                              disabled={isLoader}
                              onClick={(event) => {
                                submitSignUp(event);
                              }}
                            >
                              {isLoader ? (
                                <>
                                  <div
                                    class="spinner-border text-dark spinner-border-sm"
                                    role="status"
                                  >
                                    <span class="visually-hidden">
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
                          <div class="d-grid">
                            <NavLink
                              type="button"
                              class="btn btn-outline-warning  btn-lg "
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
          <div class="card shadow" style={{ maxWidth: "600px" }}>
            <div class="row g-0">
              <div class="col-md-4 order-md-1 d-flex align-items-center">
                <img src={loginImg} class="img-fluid rounded-start" alt="..." />
              </div>
              <div class="col-md-8 order-md-0">
                <div class="card-body">
                  <h5 class="card-title text-center">SIGNUP FORM</h5>
                  <form class="row g-3">
                    <div class="col-md-12 ">
                      <label for="validationDefault02" class="form-label">
                        User Name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="validationDefault02"
                        placeholder="Username"
                        required /
                      />
                    </div>
                    <div class="col-md-12 ">
                      <label for="validationDefault01" class="form-label">
                        Email id
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="validationDefault01"
                        placeholder="Email"
                        required /
                      />
                    </div>

                    <div class="col-md-12 ">
                      <label for="validationDefault02" class="form-label">
                        Password
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="validationDefault02"
                        placeholder="*********"
                        required /
                      />
                    </div>
                    <div class="col-md-12 ">
                      <label for="validationDefault02" class="form-label">
                        Conform Password
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="validationDefault02"
                        placeholder="conformpassword"
                        required /
                      />
                    </div>

                    <div class="col-12">
                      <button class="btn btn-primary">SingUp</button>
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
//           <div class="spinner-border" role="status">
//             <span class="visually-hidden">Loading...</span>
//           </div>
//         </CardContent>
//       </Card>
//     </Stack>
//   </Container>
// }

// ................bootstrap Registration form.................
