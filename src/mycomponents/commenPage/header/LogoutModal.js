import React from "react";
import { Link, useHistory } from "react-router-dom";

const LogoutModal = ({setCheckLogin1}) => {
  let history = useHistory();
  const Logoutfun = () => {
    localStorage.clear();
    setCheckLogin1("hii")
    history.push("/");
  };
  return (
    <>
      <div
        className="modal"
        id="exampleModal2"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Are you sure
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center">
              <i
                className="fa-solid fa-circle-exclamation"
                style={{ fontSize: "48px", color: "red" }}
              ></i>
              <h2> You want to Logout</h2>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                No
              </button>
              <button
                type="button"
                className="btn btn-success"
                data-bs-dismiss="modal"
                onClick={() => {
                  Logoutfun();
                }}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogoutModal;
