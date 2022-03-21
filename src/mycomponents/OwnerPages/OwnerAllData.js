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
      setIsLoader(false);
      console.log("res data ", res.data.data);
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
                <h3 class="fs-2">{allOwnerData?.totalCount}</h3>
                <p class="fs-5">Total</p>
              </div>
              <i class="fas fa-gift fs-1 primary-text border rounded-full secondary-bg p-3"></i>
            </div>
          </div>

          <div class="col-md-3">
            <div class="p-3 bg-white shadow d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 class="fs-2">{allOwnerData?.pendingCount}</h3>
                <p class="fs-5">Pending</p>
              </div>
              <i class="fa-regular fa-hourglass fs-1 primary-text border rounded-full secondary-bg p-3"></i>
            </div>
          </div>

          <div class="col-md-3">
            <div class="p-3 bg-white shadow d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 class="fs-2">{allOwnerData?.successCount}</h3>
                <p class="fs-5">Success</p>
              </div>
              <i class="fa-solid fa-clipboard-check fa-3x primary-text border rounded-full secondary-bg p-3 "></i>
            </div>
          </div>
          <div class="col-md-3">
            <div class="p-3 bg-white shadow d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 class="fs-2">{allOwnerData?.rejectedCount}</h3>
                <p class="fs-5">Rejected</p>
              </div>
              <i class="fa-solid fa-ban fs-1 primary-text border rounded-full secondary-bg p-3"></i>
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
              {allOwnerData?.realData && allOwnerData?.realData.length !== 0 ? (
                allOwnerData?.realData.map((item) => {
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
                          <h5 class="card-title">
                            Price :{" "}
                            <i class="fa-solid fa-indian-rupee-sign"></i>
                            {item.price}
                          </h5>
                          <p class="card-text">Address : {item.address}</p>
                          <p class="card-text">City : {item.city}</p>
                          <p class="card-text">
                            NumberOfMambers : {item.numberOfMambers}
                          </p>
                          <p class="card-text ">
                            Status :{" "}
                            <span
                              // className={
                              //   item.ownerDataStatus == "rejected"
                              //     ? "bg-danger text-white px-2 rounded-2"
                              //     : "" || item.ownerDataStatus == "success"
                              //     ? "bg-success  text-white px-2 rounded-2"
                              //     : "" || item.ownerDataStatus == "pending"
                              //     ? "bg-primary text-white px-2 rounded-2"
                              //     : ""
                              // }
                              className={
                                item.ownerDataStatus == "rejected"
                                  ? "bg-danger text-white px-2 rounded-2"
                                  : item.ownerDataStatus == "success"
                                  ? "bg-success  text-white px-2 rounded-2"
                                  : "bg-primary  text-white px-2 rounded-2"
                              }
                            >
                              {item.ownerDataStatus}
                            </span>
                          </p>
                          <div className="d-grid gap-2 d-md-block">
                            <button
                              type="button"
                              className="btn btn-warning me-2 "
                            >
                              Edit Data
                            </button>
                            <button type="button" class="btn btn-warning me-2">
                              More Details
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
                  <div className="d-flex justify-content-center align-content-center mb-3">
                    <div className="text-center  col-lg-4">
                      <img
                        src={notFountOwnerImg}
                        alt=""
                        className="img-fluid"
                      />
                      <h4 className="my-4">Not Found any data</h4>
                      <button
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        class="btn btn-outline-info"
                      >
                        Add new Data <i class="fa-solid fa-plus"></i>
                      </button>
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
