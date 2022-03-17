import React, { useEffect, useState } from "react";
import "../OwnerPages/ownerAccount.css";
import newImage from "../../images/RoomImage.jpg";
import OwnerAddRoomModal from "./OwnerAddRoomModal";
import notFountOwnerImg from "../../images/notFountOwnerDataImg.svg";
import axios from "axios";
const OwnerAllData = () => {
  const OwnerDetailes = JSON.parse(localStorage.getItem("userDetails"));
  const [allOwnerData, setAllOwnerData] = useState();
  const [isLoader, setIsLoader] = useState(false);
  const Userid = OwnerDetailes.userId;
  const token = OwnerDetailes.token;

  useEffect(() => {
    GetOwnerAllData();
  }, []);

  const GetOwnerAllData = async () => {
    try {
      setIsLoader(true);
      const res = await axios.get(
        `https://localhost:44380/getOwnerData/${Userid}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setAllOwnerData(res.data.data);
      setIsLoader(true);
      console.log("res data ", res);
    } catch (error) {
      console.log("error", error.res);
    }
  };

  // const TotalData = Object.keys(allOwnerData).length
  return (
    <>
      <div class="container-fluid px-4">
        <div class="row g-3 my-2 ">
          <div class="col-md-3">
            <div class="p-3 bg-white shadow d-flex justify-content-around align-items-center rounded">
              <div>
                {/* <h3 class="fs-2">{TotalData}</h3> */}
                <p class="fs-5">Total</p>
              </div>
              <i class="fas fa-gift fs-1 primary-text border rounded-full secondary-bg p-3"></i>
            </div>
          </div>

          <div class="col-md-3">
            <div class="p-3 bg-white shadow d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 class="fs-2">4920</h3>
                <p class="fs-5">Pending</p>
              </div>
              <i class="fas fa-chart-line fs-1 primary-text border rounded-full secondary-bg p-3"></i>
            </div>
          </div>

          <div class="col-md-3">
            <div class="p-3 bg-white shadow d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 class="fs-2">3899</h3>
                <p class="fs-5">Success</p>
              </div>
              <i class="fas fa-truck fs-1 primary-text border rounded-full secondary-bg p-3"></i>
            </div>
          </div>
          <div class="col-md-3">
            <div class="p-3 bg-white shadow d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 class="fs-2">25</h3>
                <p class="fs-5">Rejected</p>
              </div>
              <i class="fas fa-hand-holding-usd fs-1 primary-text border rounded-full secondary-bg p-3"></i>
            </div>
          </div>
        </div>
        <div className="shadow p-3 bg-white rounded-3">
          <button
            className="btn btn-success"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Add Room <i class="fa-solid fa-plus"></i>
          </button>
        </div>

        <OwnerAddRoomModal />
        <div className="row gap-5 justify-content-center justify-content-lg-start my-3">
          <h3 class="fs-4 mb-3">All Owner data</h3>
          {isLoader ? (
            <>
              <div className="text-center">
                <div class="spinner-border" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div>Loading.....</div>
              </div>
            </>
          ) : (
            <>
              {allOwnerData && allOwnerData.length !== 0 ? (
                allOwnerData.map((item) => {
                  return (
                    <>
                      <div
                        class="card shadow m-2 p-0 m-2"
                        style={{ width: "20rem" }}
                      >
                        <img
                          src={newImage}
                          class="card-img-top w-100 hover-zoom"
                          style={{ maxHeight: "15rem" }}
                          alt="..."
                        />
                        <div class="card-body">
                          <h5 class="card-title">Price 5000</h5>
                          <p class="card-text">
                            2BHK only for student not for family and live only 3
                            student this is best room for living and
                          </p>
                          <div className="d-grid gap-2 d-md-block">
                            <button
                              type="button"
                              className="btn btn-warning me-2 "
                            >
                              Edit Data
                            </button>
                            <button type="button" class="btn btn-warning me-2">
                              More Details{" "}
                              <i class="fas fa-angle-double-right"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })
              ) : (
                <>
                  <div className="d-flex justify-content-center align-content-center">
                    <div className="text-center  col-lg-4">
                      <img
                        src={notFountOwnerImg}
                        alt=""
                        className="img-fluid"
                      />
                      <h4 className="my-4">Not Found any data</h4>
                    </div>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default OwnerAllData;
