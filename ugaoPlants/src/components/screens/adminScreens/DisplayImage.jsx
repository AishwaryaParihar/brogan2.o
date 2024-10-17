import React from "react";

const DisplayImage = ({ imgUrl, onClose }) => {
  return (
    <div className="position-fixed bottom-0 top-0 start-0 end-0 d-flex justify-content-center align-items-center">
      <div className="bg-white shadow-lg rounded displayimgBox  ">
     <div className="text-end">  
        <i
          className="fa-solid fa-xmark fs-3 pointerClass p-2"
          onClick={onClose}
        ></i></div>
     <div className="d-flex justify-content-center align-items-center">
        <div className="d-flex justify-content-center p-4 displayimg ">
          <img src={imgUrl} alt="yoyo" className=" img-fluid" />
        </div>
     </div>
      </div>
    </div>
  );
};

export default DisplayImage;
