import React from "react";
import newImage from "../../images/RoomImage.jpg";
import newImage2 from "../../images/RoomImage2.jpg";

const RoomDataCard = () => {
  return (
    <>
      <div className="card p-0" style={{ width: "20rem" }}>
        {/* col-md-6 col-xl-3 col-lg-4 p-0 */}
        <img src={newImage} className="card-img-top w-100 hover-zoom"  style={{ maxHeight : "15rem" }} alt="..." />
        <div className="card-body">
          <h5 className="card-title">Price 5000</h5>
          <p className="card-text">
            2BHK only for student not for family and live only 3 student this is
            best room for living and
          </p>
          <div className="d-grid gap-2 d-md-block">
            <button type="button" className="btn btn-warning me-2 ">
              Add to card 
            </button>
            <button type="button" className="btn btn-warning me-2">
              More Details <i className="fas fa-angle-double-right"></i>
            </button>
          </div>
        </div>
      </div>
      <div
        className="card col-md-6 col-xl-3 col-lg-4 p-0 "
        style={{ width: "20rem" }}
      >
        <img src={newImage2} className="card-img-top col-md-12" style={{ maxHeight : "15rem"}}  alt="..." />
        <div className="card-body">
          <h5 className="card-title">Price 5000</h5>
          <p className="card-text">
          2BHK only for student not for family and live only 3 student this is
            best room for living and 
          </p>
          <div className="d-grid gap-2 d-md-block">
            <button type="button" className="btn btn-warning me-2 ">
              Add to card
            </button>
            <button type="button" className="btn btn-warning">
              More Details <i className="fas fa-angle-double-right"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="card p-0" style={{ width: "20rem" }}>
        {/* col-md-6 col-xl-3 col-lg-4 p-0 */}
        <img src={newImage} className="card-img-top w-100 hover-zoom"  style={{ maxHeight : "15rem" }} alt="..." />
        <div className="card-body">
          <h5 className="card-title">Price 5000</h5>
          <p className="card-text">
            2BHK only for student not for family and live only 3 student this is
            best room for living and
          </p>
          <div className="d-grid gap-2 d-md-block">
            <button type="button" className="btn btn-warning me-2 ">
              Add to card 
            </button>
            <button type="button" className="btn btn-warning me-2">
              More Details <i className="fas fa-angle-double-right"></i>
            </button>
          </div>
        </div>
      </div>
      <div
        className="card col-md-6 col-xl-3 col-lg-4 p-0 "
        style={{ width: "20rem" }}
      >
        <img src={newImage2} className="card-img-top col-md-12" style={{ maxHeight : "15rem"}}  alt="..." />
        <div className="card-body">
          <h5 className="card-title">Price 5000</h5>
          <p className="card-text">
          2BHK only for student not for family and live only 3 student this is
            best room for living and 
          </p>
          <div className="d-grid gap-2 d-md-block">
            <button type="button" className="btn btn-warning me-2 ">
              Add to card
            </button>
            <button type="button" className="btn btn-warning">
              More Details <i className="fas fa-angle-double-right"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="card p-0" style={{ width: "20rem" }}>
        {/* col-md-6 col-xl-3 col-lg-4 p-0 */}
        <img src={newImage} className="card-img-top w-100 hover-zoom"  style={{ maxHeight : "15rem" }} alt="..." />
        <div className="card-body">
          <h5 className="card-title">Price 5000</h5>
          <p className="card-text">
            2BHK only for student not for family and live only 3 student this is
            best room for living and
          </p>
          <div className="d-grid gap-2 d-md-block">
            <button type="button" className="btn btn-warning me-2 ">
              Add to card 
            </button>
            <button type="button" className="btn btn-warning me-2">
              More Details <i className="fas fa-angle-double-right"></i>
            </button>
          </div>
        </div>
      </div>
      <div
        className="card col-md-6 col-xl-3 col-lg-4 p-0 "
        style={{ width: "20rem" }}
      >
        <img src={newImage2} className="card-img-top col-md-12" style={{ maxHeight : "15rem"}}  alt="..." />
        <div className="card-body">
          <h5 className="card-title">Price 5000</h5>
          <p className="card-text">
          2BHK only for student not for family and live only 3 student this is
            best room for living and 
          </p>
          <div className="d-grid gap-2 d-md-block">
            <button type="button" className="btn btn-warning me-2 ">
              Add to card
            </button>
            <button type="button" className="btn btn-warning">
              More Details <i className="fas fa-angle-double-right"></i>
            </button>
          </div>
        </div>
      </div>
      
      
      
    
    </>
  );
};

export default RoomDataCard;
