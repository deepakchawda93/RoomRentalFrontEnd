import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import newImage from "../../../images/RoomImage.jpg";
import newImage2 from "../../../images/RoomImage2.jpg";
import flate from "../../../images/flateImage.jpeg";

const CarouselDesign = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <>
      <h2>Our Best Features</h2>
      <div className="App">
        <Carousel breakPoints={breakPoints}>
          <div className="card m-3" >
            <img
              src={newImage}
              className="card-img-top img-fluid"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Single Room</h5>
              <p className="card-text">
                Some quick example 
              </p>
            </div>
          </div>
          <div className="card m-3" >
            <img
              src={newImage}
              className="card-img-top img-fluid"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Double Room</h5>
              <p className="card-text">
                Some quick example 
              </p>
            </div>
          </div>
          <div className="card m-3" >
            <img
              src={newImage}
              className="card-img-top img-fluid"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Flate</h5>
              <p className="card-text">
                Some quick example 
              </p>
            </div>
          </div>
          <div className="card m-3" >
            <img
              src={newImage}
              className="card-img-top img-fluid"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">2BHk Room</h5>
              <p className="card-text">
                Some quick example 
              </p>
            </div>
          </div>
          <div className="card m-3" >
            <img
              src={newImage}
              className="card-img-top img-fluid"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">1BHK Room</h5>
              <p className="card-text">
                Some quick example 
              </p>
            </div>
          </div>
            
        </Carousel>
      </div>
    </>
  );
};

export default CarouselDesign;

{
  /* <div className="card" style={{ Width: "18rem;" }}>
<img
  src={newImage}
  className="card-img-top"
  style={{ maxHeight: "15rem" }}
  alt="..."
/>
<div className="card-body">
  <h5 className="card-title">Card title5</h5>
  <p className="card-text">
    Some quick example text to build on the card title and make up
    the bulk of the card's content.
  </p>
  <a href="#" className="btn btn-primary">
    Go somewhere
  </a>
</div>
</div> */
}
