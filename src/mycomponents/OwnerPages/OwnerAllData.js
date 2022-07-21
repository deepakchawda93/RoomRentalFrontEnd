import React, { useEffect, useState } from "react";
import "../OwnerPages/ownerAccount.css";
import { Link } from "react-router-dom";
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
        `https://localhost:5001/getOwnerData/${Userid}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setAllOwnerData(res.data.data);
      setIsLoader(false);
      // console.log("res data ",res);
    } catch (error) {
      console.log("error", error.res);
    }
  };

  // const TotalData = Object.keys(allOwnerData).length
  return (
    <>
      <div className="container-fluid px-4">
        <div className="row g-3 my-2 ">
          <div className="col-md-3">
            <div className="p-3 bg-white shadow d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">{allOwnerData?.totalCount}</h3>
                <p className="fs-5">Total</p>
              </div>
              <i className="fas fa-gift fs-1 primary-text border rounded-full secondary-bg p-3"></i>
            </div>
          </div>

          <div className="col-md-3">
            <Link to="/OwnerAccount/pendingData" className="list-group-item list-group-item-action p-3 bg-white shadow d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">{allOwnerData?.pendingCount}</h3>
                <p className="fs-5">Pending</p>
              </div>
              <i className="fa-regular fa-hourglass fs-1 primary-text border rounded-full secondary-bg p-3"></i>
            </Link>
          </div>

          <div className="col-md-3">
            <Link to="/OwnerAccount/successData" className="list-group-item list-group-item-action p-3 bg-white shadow d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">{allOwnerData?.successCount}</h3>
                <p className="fs-5">Success</p>
              </div>
              <i className="fa-solid fa-clipboard-check fa-3x primary-text border rounded-full secondary-bg p-3 "></i>
            </Link>
          </div>
          <div className="col-md-3">
            <Link to="/OwnerAccount/rejectedData" className="list-group-item list-group-item-action p-3 bg-white shadow d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">{allOwnerData?.rejectedCount}</h3>
                <p className="fs-5">Rejected</p>
              </div>
              <i className="fa-solid fa-ban fs-1 primary-text border rounded-full secondary-bg p-3"></i>
            </Link>
          </div>
        </div>
        <div className="shadow p-3 bg-white rounded-3">
          <button
            className="btn btn-success"
            data-bs-toggle="modal"
             data-bs-target="#staticBackdrop"
          >
            Add Room <i className="fa-solid fa-plus"></i>
          </button>
        </div>

        <OwnerAddRoomModal  GetOwnerAllData={GetOwnerAllData}/>

        <div className="row gap-5 justify-content-center justify-content-lg-start my-3">
          <h3 className="fs-4 mb-3">All Owner data</h3>
          {isLoader ? (
            <>
              <div className="text-center">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <div>Loading.....</div>
              </div>
            </>
          ) : (
            <>
              {allOwnerData?.allOwnerData && allOwnerData?.allOwnerData.length !== 0 ? (
                allOwnerData?.allOwnerData.map((item) => {
                  return (
                    <>
                      <div
                        className="card shadow m-2 p-0 m-2"
                        style={{ width: "20rem" }}
                      >
                        <img
                          src={newImage}
                          className="card-img-top w-100 hover-zoom"
                          style={{ maxHeight: "15rem" }}
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title">
                            Price :{" "}
                            <i className="fa-solid fa-indian-rupee-sign"></i>
                            {item.price}
                          </h5>
                          <p className="card-text">Address : {item.address}</p>
                          <p className="card-text">City : {item.city}</p>
                          <p className="card-text">
                            NumberOfMambers : {item.numberOfMambers}
                          </p>
                          <p className="card-text ">
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
                            <button type="button" className="btn btn-warning me-2">
                              More Details
                              <i className="fas fa-angle-double-right"></i>
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
                    <div className="text-center col-lg-3">
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
                        className="btn btn-outline-info"
                      >
                        Add new Data <i className="fa-solid fa-plus"></i>
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
