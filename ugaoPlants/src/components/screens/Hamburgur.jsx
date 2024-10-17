import React from 'react';


const Hamburger = () => {
 

  return (
    <div className="enquiry-btn">
      <div className="enqbtn">
        <a className="btn btn-custom" href="enquiry.html">
          <span><i class="fa-brands fa-whatsapp  h1 text-white"></i></span>
        </a>
        {/* Uncomment the line below if you need the Brochure button */}
        {/* <a className="btn btn-custom" href="images/downloads/DIS-Brochure-2022-23.pdf" target="_blank">
          <span>Brochure</span>
        </a> */}
      </div>
    </div>
  );
};

export default Hamburger;
