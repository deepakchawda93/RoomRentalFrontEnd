import React from "react";
import "../OwnerPages/ownerAccount.css"

const OwnerAddRoomModal = () => {
  return (
    <>
      <div
        class="modal"
        id="exampleModal"
        // tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
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
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
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
