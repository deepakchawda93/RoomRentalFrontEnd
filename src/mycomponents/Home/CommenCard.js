import React from "react";
 

const CommenCard = ({element}) => {
 
  return (
    <>
      <div className="col-md-4 offer">
        <img src={element.url} alt="demo" className="img-fluid service_img" />
        <h4>{element.CardTitle}</h4>
        <p>{element.CardContant}
        </p>

      </div>
    </>
  );
};

export default CommenCard;
