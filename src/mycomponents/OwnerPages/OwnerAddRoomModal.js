import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import "../OwnerPages/ownerAccount.css";
import PreviewRoomImg from "../../images/PreviewRoom.svg";
import newImage from "../../images/RoomImage.jpg";

const OwnerAddRoomModal = ({ GetOwnerAllData }) => {
  const OwnerDetailes = JSON.parse(localStorage.getItem("userDetails"));
  const token = OwnerDetailes.token;
  const [previewRoomImage, setPreviewRoomImage] = useState();
  let history = useHistory();
  const [ErrorMsg, setErrorMsg] = useState();
  const [ImgTypeValid, setImgTypeValid] = useState({
    ImageName: "",
  });
  const [ErrorMsgImage, setErrorMsgImage] = useState("");
  const [isLoader, setLoader] = useState(false);
  const [OwnnerData, setOwnerData] = useState({
    Price: "",
    NumberOfMambers: "",
    State: "",
    ZipCode: "",
    Colony: "",
    City: "",
    Address: "",
    ImageFile: "",
  });
  const handleChangeOwnerData = (e) => {
    const { name, value } = e.target;
    setOwnerData({ ...OwnnerData, [name]: value });
  };
  const uploadFile = (e) => {
    const { name, value } = e.target;
    setImgTypeValid({ ...ImgTypeValid, [name]: value });

    if (e.target.files[0] != undefined) {
      setErrorMsgImage("");
      if (
        e.target.files[0].type == "image/gif" ||
        e.target.files[0].type == "image/jpeg" ||
        e.target.files[0].type == "image/png"
      ) {
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onloadend = () => {
          // console.log("reader result", reader.result);
          setPreviewRoomImage(reader.result);
          // setOwnerData({ ...OwnnerData, ["Image"]: reader.result });
          setOwnerData({ ...OwnnerData, ["ImageFile"]: e.target.files[0] });
        };
      } else {
        setPreviewRoomImage(undefined);
        setImgTypeValid({ ImageName: "" });
        setErrorMsgImage("File type not supported");
      }
    } else {
      setPreviewRoomImage(undefined);
    }
  };

  const AddOwnerData = async (event) => {
    OwnnerData.UserId = OwnerDetailes.userId;
    //  console.log("model values", OwnnerData);
    event.preventDefault();
    try {
      if (
        !OwnnerData.Price ||
        !OwnnerData.NumberOfMambers ||
        !OwnnerData.State ||
        !OwnnerData.ZipCode ||
        !OwnnerData.Colony ||
        !OwnnerData.City ||
        !OwnnerData.Address
        // !OwnnerData.ImageFile
      ) {
        return toast.error("✔ Plz fill all fields!", { theme: "colored" });
      }
      setLoader(true);

      const responce = await axios.post(
        `https://localhost:5001/AddOwnerData`,
        OwnnerData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // const responce = await fetch(`https://localhost:5001/AddOwnerData`, {
      //   method: "POST",
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
      //   body: OwnnerData,
      // })
      //   .then((response) => {
      //     return response.json();
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
      console.log(responce.data)
      if (responce.data.success == true) {
        console.log("add response", responce);
        setLoader(false);
        setOwnerData({
          Price: "",
          NumberOfMambers: "",
          State: "",
          ZipCode: "",
          Colony: "",
          City: "",
          Address: "",
        });
        GetOwnerAllData();
        // toast.success(`${}✔`, { theme: "colored" });
      }
    } catch (error) {
      console.log("error", error.responce);
      setLoader(false);
      toast.error("something went wrong !", { theme: "colored" });
    }
  };

  return (
    <>
      <div
        class="modal"
        id="staticBackdrop"
        data-bs-backdrop="static"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
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
                disabled={isLoader}
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
                    {ErrorMsgImage}
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
                          <label
                            className="form-label"
                            htmlFor="form3Example978"
                          >
                            Price<span className="text-danger">*</span>
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-outline">
                          <input
                            type="number"
                            id="form3Example97"
                            name="NumberOfMambers"
                            value={OwnnerData.NumberOfMambers}
                            onChange={handleChangeOwnerData}
                            className="form-control form-control-lg"
                            placeholder="mambers"
                            min={6}
                            max={1}
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example97"
                          >
                            Number of mambers
                            <span className="text-danger">*</span>
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
                      <label className="form-label" htmlFor="form3Example97">
                        State<span className="text-danger">*</span>
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
                      <label className="form-label" htmlFor="form3Example97">
                        Zip code<span className="text-danger">*</span>
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
                      <label className="form-label" htmlFor="form3Example97">
                        Colony<span className="text-danger">*</span>
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
                      <label className="form-label" htmlFor="form3Example97">
                        City<span className="text-danger">*</span>
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
                      <label className="form-label" htmlFor="form3Example978">
                        Address<span className="text-danger">*</span>
                      </label>
                    </div>
                    <div className="form-outline">
                      {ErrorMsgImage != null && (
                        <>
                          <span className=" text-center text-danger">
                            {ErrorMsgImage}
                          </span>
                        </>
                      )}
                      <input
                        type="file"
                        id="form3Example97"
                        onChange={uploadFile}
                        name="ImageName"
                        value={ImgTypeValid.ImageName}
                        accept="image/png, image/gif, image/jpeg"
                        className="form-control form-control-lg"
                        placeholder="image"
                      />
                      <label className="form-label" htmlFor="form3Example97">
                        Image<span className="text-danger">*</span>
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
                disabled={isLoader}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                //data-bs-dismiss="modal"
                disabled={isLoader}
                onClick={(event) => {
                  AddOwnerData(event);
                }}
              >
                {isLoader ? (
                  <>
                    <div
                      className="spinner-border text-dark spinner-border-sm"
                      role="status"
                    >
                      <span className="visually-hidden">Loading...</span>
                    </div>{" "}
                    Loading....
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
