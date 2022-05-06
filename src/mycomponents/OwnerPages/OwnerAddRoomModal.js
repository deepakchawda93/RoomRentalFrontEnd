import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import "../OwnerPages/ownerAccount.css";
import PreviewRoomImg from "../../images/PreviewRoom.svg";
import newImage from "../../images/RoomImage.jpg";

const OwnerAddRoomModal = () => {
  const [previewRoomImage, setPreviewRoomImage] = useState(newImage);
  let history = useHistory();
  const [ErrorMsg, setErrorMsg] = useState();

  const [isLoader, setLoader] = useState(false);
  const [OwnnerData, setOwnerData] = useState({
    Price: "",
    NumberOfMamber: "",
    State: "",
    ZipCode: "",
    Colony: "",
    City: "",
    Address: "",
  });
  const handleChangeOwnerData = (e) => {
    const { name, value } = e.target;
    setOwnerData({ ...OwnnerData, [name]: value });
  };
  const AddOwnerData = async (event) => {
    event.preventDefault();
    try {
      if (
        OwnnerData.Price == "" ||
        OwnnerData.NumberOfMamber == "" ||
        OwnnerData.State == "" ||
        OwnnerData.ZipCode == "" ||
        OwnnerData.Colony == "" ||
        OwnnerData.City == "" ||
        OwnnerData.Address == ""
      ) {
        return toast.error("✔ Plz fill all fields!", { theme: "colored" });
      }
      setLoader(true);
      const responce = await axios.post(
        "https://localhost:44380/AddOwnerData",
        OwnnerData
      );
      setOwnerData({
        Price: "",
        NumberOfMamber: "",
        State: "",
        ZipCode: "",
        Colony: "",
        City: "",
        Address: "",
      })
      setLoader(true);
      console.log("res display", responce);
      // if (responce.data.isSuccess == true) {
      //   setLoader(false);
      //   if (!responce.data.token) {
      //     history.push("login");
      //   }
      //   localStorage.setItem("token", JSON.stringify(responce.data.token));
      //   localStorage.setItem(
      //     "userDetails",
      //     JSON.stringify(responce.data)
      //   );
      //   toast.success("✔ User Login Successfully!", { theme: "colored" });
      //   history.push("/");
      //   localStorage.setItem("isLogin" ,true)

      // } else {
      //   setLoader(false);
      //   setErrorMsg(responce.data.errors);
      // }
    } catch (error) {
      console.log("error", error.responce);
      setLoader(false);
      toast.error("something went wrong !", { theme: "colored" });
    }
  };

  return (
    <>
      <div
        className="modal "
        id="exampleModal"
        // tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered  modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add new Item
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body ">
              <div className="row align-items-center">
                <div className="col-md-5">
                  {previewRoomImage ? (
                    <>
                      <div className="my-4">
                        <h5 className=" text-center">Pre view</h5>
                        <img
                          src={previewRoomImage}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="my-4">
                        <img
                          src={PreviewRoomImg}
                          alt=""
                          className="img-fluid "
                        />
                      </div>
                    </>
                  )}
                </div>
                <div className="col-md-7">
                  <form className="g-3">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-outline mb-2">
                          <input
                            type="number"
                            id="form3Example978"
                            name="Price"
                            className="form-control form-control-lg"
                            placeholder="Enter Price"
                            value={OwnnerData.Price}
                            onChange={handleChangeOwnerData}
                          />
                          <label className="form-label" for="form3Example978">
                            Price
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-outline">
                          <input
                            type="number"
                            id="form3Example97"
                            name="NumberOfMamber"
                            value={OwnnerData.NumberOfMamber}
                            onChange={handleChangeOwnerData}
                            className="form-control form-control-lg"
                            placeholder="mambers "
                            min={6}
                            max={1}
                          />
                          <label className="form-label" for="form3Example97">
                            Number of mambers
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="form-outline">
                      <input
                        type="text"
                        id="form3Example97"
                        name="State"
                        onChange={handleChangeOwnerData}
                        value={OwnnerData.State}
                        className="form-control form-control-lg"
                        placeholder="state"
                      />
                      <label className="form-label" for="form3Example97">
                        State
                      </label>
                    </div>
                    <div className="form-outline">
                      <input
                        type="number"
                        id="form3Example97"
                        name="ZipCode"
                        onChange={handleChangeOwnerData}
                        className="form-control form-control-lg"
                        placeholder="zip code"
                        value={OwnnerData.ZipCode}
                      />
                      <label className="form-label" for="form3Example97">
                        Zip code
                      </label>
                    </div>
                    <div className="form-outline">
                      <input
                        type="email"
                        id="form3Example97"
                        name="Colony"
                        onChange={handleChangeOwnerData}
                        value={OwnnerData.Colony}
                        className="form-control form-control-lg"
                        placeholder="colony"
                      />
                      <label className="form-label" for="form3Example97">
                        Colony
                      </label>
                    </div>
                    <div className="form-outline">
                      <input
                        type="email"
                        id="form3Example97"
                        name="City"
                        onChange={handleChangeOwnerData}
                        value={OwnnerData.City}
                        className="form-control form-control-lg"
                        placeholder="city"
                      />
                      <label className="form-label" for="form3Example97">
                        City
                      </label>
                    </div>

                    <div className="form-outline mb-2">
                      <input
                        type="text"
                        id="form3Example978"
                        name="Address"
                        onChange={handleChangeOwnerData}
                        value={OwnnerData.Address}
                        className="form-control form-control-lg"
                        placeholder="address"
                      />
                      <label className="form-label" for="form3Example978">
                        Address
                      </label>
                    </div>
                    <div className="form-outline">
                      <input
                        type="file"
                        id="form3Example97"
                        // name="Email"
                        className="form-control form-control-lg"
                        placeholder="image"
                      />
                      <label className="form-label" for="form3Example97">
                        Image
                      </label>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="modal-footer border-top-0">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" disabled={isLoader} 
               onClick={(event) => {
                      AddOwnerData(event);
                    }}>
                {isLoader ? (
                  <>
                    <div
                      className="spinner-border text-dark spinner-border-sm"
                      role="status"
                    >
                      <span className="visually-hidden">Loading...</span>
                      
                    </div> Loading....
                  </>
                ) : (
                  <>
                    Add <i className="fa-solid fa-plus"></i>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OwnerAddRoomModal;
