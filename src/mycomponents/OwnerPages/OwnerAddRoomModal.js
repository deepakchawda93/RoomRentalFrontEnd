import React, { useEffect, useState } from "react";
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
  // const [ImgTypeValid, setImgTypeValid] = useState({
  //   ImageName: "",
  // });
  const [ErrorMsg, setErrorMsg] = useState({});
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
    ImageName: "",
  });
  const handleChangeOwnerData = (e) => {
    const { name, value } = e.target;
    setOwnerData({ ...OwnnerData, [name]: value });
    if (!Object.keys(ErrorMsg).length == 0 && !value.trim().length == 0) {
      setErrorMsg({ ...ErrorMsg, [name]: true });
    }
  };
  // there is a two option to update modal value at a run time
  // useEffect(() => {
  //   if (!Object.keys(ErrorMsg).length == 0) {
  //     console.log("insite useEffect", OwnnerData);
  //     validate();
  //   }
  // }, [OwnnerData]);
  const validate = () => {
    // debugger
    let temp = {};
    temp.Price =
      OwnnerData.Price == "" || OwnnerData.Price.trim().length == 0
        ? false
        : true;
    temp.NumberOfMambers =
      OwnnerData.NumberOfMambers == "" ||
      OwnnerData.NumberOfMambers.trim().length == 0
        ? false
        : true;
    temp.State =
      OwnnerData.State == "" || OwnnerData.State.trim().length == 0
        ? false
        : true;
    temp.ZipCode =
      OwnnerData.ZipCode == "" || OwnnerData.ZipCode.trim().length == 0
        ? false
        : true;
    temp.Colony =
      OwnnerData.Colony == "" || OwnnerData.Colony.trim().length == 0
        ? false
        : true;
    temp.City =
      OwnnerData.City == "" || OwnnerData.City.trim().length == 0
        ? false
        : true;
    temp.Address =
      OwnnerData.Address == "" || OwnnerData.Address.trim().length == 0
        ? false
        : true;
    temp.ImageName =
      OwnnerData.ImageName == "" || OwnnerData.ImageName.trim().length == 0
        ? false
        : true;
    setErrorMsg(temp);
    return Object.values(temp).every((x) => x == true);
  };

  // Upload image
  const uploadFile = (e) => {
    const { name, value } = e.target;
    setOwnerData({ ...OwnnerData, [name]: value });
    if (!Object.keys(ErrorMsg).length == 0) {
      setErrorMsg({ ...ErrorMsg, [name]: true });
    }
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
          setPreviewRoomImage(reader.result);
          setOwnerData({
            ...OwnnerData,
            [name]: value,
            ["ImageFile"]: e.target.files[0],
          });
        };
      } else {
        setPreviewRoomImage(undefined);
        setOwnerData({ ImageName: "" });
        setErrorMsgImage("File type not supported");
      }
    } else {
      setPreviewRoomImage(undefined);
      // setErrorMsg({...ErrorMsg, [name]:false})
    }
  };
  const AddOwnerData = async (event) => {
    if (validate()) {
      const FormTypeData = new FormData();
      FormTypeData.append("Price", OwnnerData.Price);
      FormTypeData.append("NumberOfMambers", OwnnerData.NumberOfMambers);
      FormTypeData.append("State", OwnnerData.State);
      FormTypeData.append("ZipCode", OwnnerData.ZipCode);
      FormTypeData.append("Colony", OwnnerData.Colony);
      FormTypeData.append("City", OwnnerData.City);
      FormTypeData.append("Address", OwnnerData.Address);
      FormTypeData.append("ImageFile", OwnnerData.ImageFile);
      FormTypeData.append("Image", OwnnerData.ImageName);
      FormTypeData.append("UserId", OwnerDetailes.userId);
      event.preventDefault();
      setErrorMsg({});
      try {
        setLoader(true);
        const responce = await axios.post(
          `${process.env.REACT_APP_Api_Url}/AddOwnerData`,
          FormTypeData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        // const responce = await fetch(`${Api_Url}/AddOwnerData`, {
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
        console.log(responce.data);
        if (responce.data.success == true) {
          setLoader(false);
          setOwnerData({
            Price: "",
            NumberOfMambers: "",
            State: "",
            ZipCode: "",
            Colony: "",
            City: "",
            Address: "",
            ImageName: "",
            ImageFile: null,
          });
          // setImgTypeValid({
          //   ImageName: "",
          // });
          setPreviewRoomImage(undefined);
          toast.success(`${responce.data.msg}✔`, { theme: "colored" });
          GetOwnerAllData();
        }
      } catch (error) {
        console.log("error", error.responce);
        setLoader(false);
        toast.error("something went wrong !", { theme: "colored" });
      }
    }
  };
  // run time adding  class
  const applyErrorClass = (field) =>
    field in ErrorMsg && ErrorMsg[field] == false ? " invalid-field" : "";

  const clearModalData = () => {
    setOwnerData({
      Price: "",
      NumberOfMambers: "",
      State: "",
      ZipCode: "",
      Colony: "",
      City: "",
      Address: "",
      ImageName: "",
      ImageFile: null,
    });
    setPreviewRoomImage(undefined);
    setErrorMsg({});
    // if (!Object.keys(ErrorMsg).length == 0) {
    //   console.log("come in site", ErrorMsg);
    //   setErrorMsg({
    //     Price: true,
    //     NumberOfMambers: true,
    //     State: true,
    //     ZipCode: true,
    //     Colony: true,
    //     City: true,
    //     Address: true,
    //     ImageName: true,
    //   });
    // }
   
  };
  console.log(Object.values(OwnnerData).every((x) => x != ""))
  return (
    <>
      <div
        className="modal fade"
        id="OwnerAddDataModal"
        data-bs-backdrop="static"
        tabIndex="-1"
        role="dialog"
        // aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add new Item
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => {
                  clearModalData();
                }}
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
                  <form
                    className="g-3"
                    // onSubmit={(event) => {
                    //    AddOwnerData(event);
                    //   }}
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-outline ">
                          <label
                            className="form-label"
                            htmlFor="form3Example972"
                          >
                            Price<span className="text-danger">*</span>
                          </label>
                          <input
                            type="number"
                            id="form3Example971"
                            name="Price"
                            placeholder="Enter Price"
                            value={OwnnerData.Price}
                            className={
                              "form-control form-control-lg" +
                              applyErrorClass("Price")
                            }
                            onChange={handleChangeOwnerData}
                          />
                          {ErrorMsg.Price == false && (
                            <>
                              <span className="text-center text-danger txtEnd">
                                Required
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-outline">
                          <label
                            className="form-label"
                            htmlFor="form3Example974"
                          >
                            Number of members
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            type="number"
                            id="form3Example973"
                            name="NumberOfMambers"
                            value={OwnnerData.NumberOfMambers}
                            onChange={handleChangeOwnerData}
                            className={
                              "form-control form-control-lg" +
                              applyErrorClass("NumberOfMambers")
                            }
                            placeholder="mambers"
                            min={6}
                            max={1}
                          />
                          {ErrorMsg.NumberOfMambers == false && (
                            <>
                              <span className=" text-center text-danger txtEnd">
                                Required
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="form-outline">
                      <label className="form-label" htmlFor="form3Example976">
                        State<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="form3Example975"
                        name="State"
                        onChange={handleChangeOwnerData}
                        value={OwnnerData.State}
                        className={
                          "form-control form-control-lg" +
                          applyErrorClass("State")
                        }
                        placeholder="state"
                      />
                      {ErrorMsg.State == false && (
                        <>
                          <span className=" text-center text-danger txtEnd">
                            Required
                          </span>
                        </>
                      )}
                    </div>
                    <div className="form-outline">
                      <label className="form-label" htmlFor="form3Example978">
                        Zip code<span className="text-danger">*</span>
                      </label>
                      <input
                        type="number"
                        id="form3Example977"
                        name="ZipCode"
                        onChange={handleChangeOwnerData}
                        className={
                          "form-control form-control-lg" +
                          applyErrorClass("ZipCode")
                        }
                        placeholder="zip code"
                        value={OwnnerData.ZipCode}
                      />
                      {ErrorMsg.ZipCode == false && (
                        <>
                          <span className=" text-center text-danger txtEnd">
                            Required
                          </span>
                        </>
                      )}
                    </div>
                    <div className="form-outline">
                      <label className="form-label" htmlFor="form3Example980">
                        Colony<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="form3Example979"
                        name="Colony"
                        onChange={handleChangeOwnerData}
                        value={OwnnerData.Colony}
                        className={
                          "form-control form-control-lg" +
                          applyErrorClass("Colony")
                        }
                        placeholder="colony"
                      />
                      {ErrorMsg.Colony == false && (
                        <>
                          <span className=" text-center text-danger txtEnd">
                            Required
                          </span>
                        </>
                      )}
                    </div>
                    <div className="form-outline">
                      <label className="form-label" htmlFor="form3Example982">
                        City<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="form3Example981"
                        name="City"
                        onChange={handleChangeOwnerData}
                        value={OwnnerData.City}
                        className={
                          "form-control form-control-lg" +
                          applyErrorClass("City")
                        }
                        placeholder="city"
                      />
                      {ErrorMsg.City == false && (
                        <>
                          <span className=" text-center text-danger txtEnd">
                            Required
                          </span>
                        </>
                      )}
                    </div>

                    <div className="form-outline">
                      <label className="form-label" htmlFor="form3Example984">
                        Address<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="form3Example983"
                        name="Address"
                        onChange={handleChangeOwnerData}
                        value={OwnnerData.Address}
                        className={
                          "form-control form-control-lg" +
                          applyErrorClass("Address")
                        }
                        placeholder="address"
                      />
                      {ErrorMsg.Address == false && (
                        <>
                          <span className=" text-center text-danger txtEnd">
                            Required
                          </span>
                        </>
                      )}
                    </div>
                    <div className="form-outline">
                      <label className="form-label" htmlFor="form3Example986">
                        Image<span className="text-danger">*</span>
                      </label>
                      <input
                        type="file"
                        id="form3Example985"
                        onChange={uploadFile}
                        name="ImageName"
                        value={OwnnerData.ImageName}
                        accept="image/png, image/gif, image/jpeg"
                        className={
                          "form-control form-control-lg" +
                          applyErrorClass("ImageName")
                        }
                        placeholder="image"
                      />
                      {ErrorMsg.ImageName == false && (
                        <>
                          <span className=" text-center text-danger txtEnd">
                            Required
                          </span>
                        </>
                      )}
                      {ErrorMsgImage != null && (
                        <>
                          <span className=" text-center text-danger txtEnd">
                            {ErrorMsgImage}
                          </span>
                        </>
                      )}
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
                onClick={() => {
                  clearModalData();
                }}
                disabled={isLoader}
              >
                Close
              </button>

              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss={
                  Object.values(OwnnerData).every((x) => x != "")
                    ? "modal"
                    : " "
                }
                onClick={(event) => {
                  AddOwnerData(event);
                }}
                //data-bs-dismiss=""
                disabled={isLoader}
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
