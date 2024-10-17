import React from 'react'
import detailImg from "../../../assets/detail.png";
import brandyImg from "../../../assets/Brandy.webp";

const ProductDetailsImg = () => {
  return (
    <div>
      <div className="row d-md-none d-blcok">
        <div className="col-md-6">
          <img src={brandyImg} alt="" className="w-100 my-4" />
        </div>
        <div className="col-md-6">
          <div className=" col-md-6  p-5  text-center">
            <div className=" bg-white">
              <h4>The Captain</h4>
              <p>A comfortable, durable, and versatile cap toe boot handcrafted with the highest quality Tier 1 USA leather and featuring Goodyear welt construction. The Captain is built to last with a premium look that lets the quality of the materials do the talking.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row productImg d-md-block d-none">

        <div className=" col-md-8 col-lg-7 col-xl-5 p-5  text-center">
          <div className="m-5 p-5 bg-white">
            <h4>The Captain</h4>
            <p>A comfortable, durable, and versatile cap toe boot handcrafted with the highest quality Tier 1 USA leather and featuring Goodyear welt construction. The Captain is built to last with a premium look that lets the quality of the materials do the talking.</p>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <img src={detailImg} alt="" className="w-100" />
      </div>
      <hr />
    </div>
  )
}

export default ProductDetailsImg
