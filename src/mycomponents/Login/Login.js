import { Email, Password } from "@mui/icons-material";
import axios from "axios";
import React, { useState,useEffect } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import {FirebaseLoginFun} from "../FirebaseLogin/FireBaseLogin"

import loginImg from "../../images/loginImg.svg";
import "../Login/login.css";

const Login = ({setCheckLogin}) => {
  let history = useHistory();
  const [ErrorMsg, setErrorMsg] = useState();

  const [isLoader, setLoader] = useState(false);
  const [Login, setLogin] = useState({
    Email: "",
    Password: "",
  });
  const handleChangeLogin = (e) => {
    const { name, value } = e.target;
    setLogin({ ...Login, [name]: value });
  };
  const submitLoign = async (event) => {
    event.preventDefault(); 
    try {
      setLoader(true);
      if (
        Login.Email == "" ||
        Login.Password == "" ||
        Login.ConformPassword == ""
      ) {
        return toast.error("✔ Plz fill all fields!", { theme: "colored" });
      }
      const responce = await axios.post("https://localhost:44380/login", Login);
      console.log("res display", responce);
      if (responce.data.isSuccess == true) {
        setLoader(false);
        if (!responce.data.token) {
          history.push("login");
        }
        localStorage.setItem("token", JSON.stringify(responce.data.token));
        localStorage.setItem("userDetails",JSON.stringify(responce.data)
        );
        toast.success("✔ User Login Successfully!", { theme: "colored" });
        setCheckLogin(null)
        history.push("/");
      } else {
        setLoader(false);
        setErrorMsg(responce.data.errors);
      }
    } catch (error) {
      console.log(error)
      console.log("error", error.responce);
      setLoader(false);
      toast.error("Your server is not responding !", { theme: "colored" });
    }
  };
  return (
    <>
      <div id="loginForm" className="d-flex align-items-center">
        <div className="container d-flex justify-content-center">
          <div className="card cardBorder shadow" style={{ maxWidth: "800px" }}>
            <div className="row g-0">
              <div className="col-md-4 order-md-1 d-flex align-items-center">
                <img src={loginImg} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8 order-md-0">
                <div className="card-body">
                  <h5 className="card-title text-center">LOGIN FORM</h5>
                  {!ErrorMsg ? (
                    " "
                  ) : (
                    <>
                      <div
                        className="alert alert-danger d-flex align-items-center p-1"
                        role="alert"
                      >
                        <svg
                          className="bi flex-shrink-0 me-2"
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
                        >
                          <i className="fas fa-exclamation-triangle "></i>{" "}
                          {ErrorMsg}
                        </p>
                      </div>
                    </>
                  )}
                  <form
                    className="row g-3"
                    onSubmit={(event) => {
                      submitLoign(event);
                      
                    }}
                  >
                    <div className="col-md-12 ">
                      <label htmlFor="validationDefault01" className="form-label">
                        Email id
                      </label>
                      <div className="input-group ">
                        <span className="input-group-text" id="basic-addon1">
                          <i className="fas fa-envelope"></i>
                        </span>

                        <input
                          type="email"
                          className="form-control"
                          name="Email"
                          value={Login.Email}
                          onChange={handleChangeLogin}
                          id="validationDefault01"
                          placeholder="Email"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-md-12 ">
                      <label htmlFor="validationDefault02" className="form-label">
                        Password
                      </label>
                      <div className="input-group ">
                        <span className="input-group-text" id="basic-addon1">
                          <i className="fas fa-lock"></i>
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          name="Password"
                          value={Login.Password}
                          onChange={handleChangeLogin}
                          id="validationDefault02"
                          placeholder="*********"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="invalidCheck2"
                          required
                        />
                        <label className="form-check-label" htmlFor="invalidCheck2">
                          Agree to terms and conditions
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="d-grid ">
                        <button
                          className="btn btn-warning"
                          type="submit"
                          disabled={isLoader}
                        >
                          {isLoader ? (
                            <>
                              <div
                                className="spinner-border text-dark spinner-border-sm"
                                role="status"
                              >
                                <span className="visually-hidden">Loading...</span>
                              </div>
                            </>
                          ) : (
                            "LogIn"
                          )}
                        </button>
                      </div>
                    </div>
                    <p className=" text-center py-2 p-0 m-0">
                      ___________OR___________
                    </p>
                  </form>
                  <div className="row g-3">
                    <div className=" col-md-6 text-center">
                      <div className="d-grid ">
                        <button className="btn btn-danger" type="submit" onClick={()=>{
                          FirebaseLoginFun();
                        }}>
                          <i className="fab fa-google-plus-g "></i> Login with
                          Google+
                        </button>
                      </div>
                    </div>
                    <div className=" col-md-6">
                      <div className="d-grid ">
                        <button className="btn btn-primary" type="submit">
                          <i className="fa fa-facebook fa-fw"></i> Login with
                          Facebook
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
