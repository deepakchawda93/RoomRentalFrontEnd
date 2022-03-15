import React, { useState } from "react";
import "../OwnerPages/ownerAccount.css";
import PreviewRoomImg from "../../images/PreviewRoom.svg";

const OwnerAddRoomModal = () => {
  const [previewRoomImage, setPreviewRoomImage] = useState();
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
                      <img src="" alt="" className="img-fluid" />
                    </>
                  ) : (
                    <>
                    <div className="">
                    <img src={PreviewRoomImg} alt="" className="img-fluid " />

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
                          type="text"
                          id="form3Example978"
                          name="FirstName"
                          class="form-control form-control-lg"
                          placeholder="address "
                        />
                        <label class="form-label" for="form3Example978">
                          Address
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div class="form-outline mb-2">
                        <input
                          type="text"
                          id="form3Example978"
                          name="FirstName"
                          
                          class="form-control form-control-lg"
                          placeholder="FirstName "
                        />
                        <label class="form-label" for="form3Example978">
                         Price
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="form-outline">
                        <input
                          type="email"
                          id="form3Example97"
                          name="Email"
                       
                          class="form-control form-control-lg"
                          placeholder="Email "
                        />
                        <label class="form-label" for="form3Example97">
                          Zip code
                        </label>
                      </div>
                  <div class="form-outline">
                        <input
                          type="email"
                          id="form3Example97"
                          name="Email"
                       
                          class="form-control form-control-lg"
                          placeholder="Email "
                        />
                        <label class="form-label" for="form3Example97">
                          Colony
                        </label>
                      </div>
                  <div class="form-outline">
                        <input
                          type="email"
                          id="form3Example97"
                          name="Email"
                       
                          class="form-control form-control-lg"
                          placeholder="Email "
                        />
                        <label class="form-label" for="form3Example97">
                         City
                        </label>
                      </div>
                  <div class="form-outline">
                        <input
                          type="email"
                          id="form3Example97"
                          name="Email"
                       
                          class="form-control form-control-lg"
                          placeholder="Email "
                        />
                        <label class="form-label" for="form3Example97">
                          State 
                        </label>
                      </div>
                  <div class="form-outline">
                        <input
                          type="file"
                          id="form3Example97"
                          name="Email"
                       
                          class="form-control form-control-lg"
                          placeholder="image "
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
              <button type="button" class="btn btn-primary">
                Add <i class="fa-solid fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OwnerAddRoomModal;
