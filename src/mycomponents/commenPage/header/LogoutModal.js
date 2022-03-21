import React from "react";
import { Link, useHistory } from "react-router-dom";

const LogoutModal = () => {
  let history = useHistory();
  const Logoutfun = () => {
    localStorage.clear();
    history.push("/");
  };
  return (
    <>
      <div
        class="modal"
        id="exampleModal2"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Are you sure
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body text-center">
              <i
                class="fa-solid fa-circle-exclamation"
                style={{ fontSize: "48px", color: "red" }}
              ></i>
              <h2> You want to Logout</h2>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
              >
                No
              </button>
              <button
                type="button"
                class="btn btn-success"
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
