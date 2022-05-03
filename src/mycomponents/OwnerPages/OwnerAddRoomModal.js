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
      setLoader(true);
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
        class="modal "
        id="exampleModal"
        // tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered  modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Add new Item
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body ">
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
                        <div class="form-outline mb-2">
                          <input
                            type="number"
                            id="form3Example978"
                            name="Price"
                            class="form-control form-control-lg"
                            placeholder="Enter Price"
                            value={OwnnerData.Price}
                            onChange={handleChangeOwnerData}
                          />
                          <label class="form-label" for="form3Example978">
                            Price
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div class="form-outline">
                          <input
                            type="number"
                            id="form3Example97"
                            name="NumberOfMamber"
                            value={OwnnerData.NumberOfMamber}
                            onChange={handleChangeOwnerData}
                            class="form-control form-control-lg"
                            placeholder="mambers "
                            min={6}
                            max={1}
                          />
                          <label class="form-label" for="form3Example97">
                            Number of mambers
                          </label>
                        </div>
                      </div>
                    </div>

                    <div class="form-outline">
                      <input
                        type="text"
                        id="form3Example97"
                        name="State"
                        onChange={handleChangeOwnerData}
                        value={OwnnerData.State}
                        class="form-control form-control-lg"
                        placeholder="state"
                      />
                      <label class="form-label" for="form3Example97">
                        State
                      </label>
                    </div>
                    <div class="form-outline">
                      <input
                        type="number"
                        id="form3Example97"
                        name="ZipCode"
                        onChange={handleChangeOwnerData}
                        class="form-control form-control-lg"
                        placeholder="zip code"
                        value={OwnnerData.ZipCode}
                      />
                      <label class="form-label" for="form3Example97">
                        Zip code
                      </label>
                    </div>
                    <div class="form-outline">
                      <input
                        type="email"
                        id="form3Example97"
                        name="Colony"
                        onChange={handleChangeOwnerData}
                        value={OwnnerData.Colony}
                        class="form-control form-control-lg"
                        placeholder="colony"
                      />
                      <label class="form-label" for="form3Example97">
                        Colony
                      </label>
                    </div>
                    <div class="form-outline">
                      <input
                        type="email"
                        id="form3Example97"
                        name="City"
                        onChange={handleChangeOwnerData}
                        value={OwnnerData.City}
                        class="form-control form-control-lg"
                        placeholder="city"
                      />
                      <label class="form-label" for="form3Example97">
                        City
                      </label>
                    </div>

                    <div class="form-outline mb-2">
                      <input
                        type="text"
                        id="form3Example978"
                        name="Address"
                        onChange={handleChangeOwnerData}
                        value={OwnnerData.Address}
                        class="form-control form-control-lg"
                        placeholder="address"
                      />
                      <label class="form-label" for="form3Example978">
                        Address
                      </label>
                    </div>
                    <div class="form-outline">
                      <input
                        type="file"
                        id="form3Example97"
                        // name="Email"
                        class="form-control form-control-lg"
                        placeholder="image"
                      />
                      <label class="form-label" for="form3Example97">
                        Image
                      </label>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="modal-footer border-top-0">
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary" disabled={isLoader} 
               onClick={(event) => {
                      AddOwnerData(event);
                    }}>
                {isLoader ? (
                  <>
                    <div
                      class="spinner-border text-dark spinner-border-sm"
                      role="status"
                    >
                      <span class="visually-hidden">Loading...</span>
                      
                    </div> Loading....
                  </>
                ) : (
                  <>
                    Add <i class="fa-solid fa-plus"></i>
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
