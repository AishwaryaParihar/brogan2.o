import React, { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SummaryApi from "../../../common/Index";
// import SeedsHero from "../SeedsComponents/SeedsHero";
import { Badge } from "react-bootstrap";
import "./productDetails.css";
import displayINRCurrency from "../../../helper/displayCurrency";
import shipping from "../../../assets/shipping.avif";
import gr from "../../../assets/GuaranteedReturn.avif";
import expertG from "../../../assets/expertguidence.webp";
import ProductAccordian from "./ProductAccordian";
import SocialMedia from "./SocialMedia";
import FAQ from "./FAQ";
import CategoryWiseProductDisplay from "./CategoryWiseProductDisplay";
import addToCart from "../../../helper/addToCart";
import Context from "../../../context/index";
import ProductDetailsImg from "./ProductDetailsImg";
import { useDispatch, useSelector } from 'react-redux';
import { incremented, decremented } from '../../../store/CounterSlice';

const ProductDetails = () => {
  const [data, setData] = useState({
    productName: " ",
    brandName: " ",
    category: " ",
    productImage: [],
    description: "",
    price: " ",
    sellingPrice: " ",
    availablesizes: [],
    unavailablesizes: [],
    color:""
  });
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const productImageListLoading = new Array(4).fill(null);
  const [activeImage, setActiveImage] = useState("");
  const [count, setCount] = useState(1);
  const dispatch = useDispatch()
  const countProduct=useSelector((state) => state.counter.value)

const handleIncrement = () => {
  dispatch(incremented());
};

const handleDecrement = () => {
  dispatch(decremented());
};
  // const [zoomImageCoordinate, setZoomImageCoordinate] = useState({
  //   x: 0,
  //   y: 0,
  // });
  // select size
  const [selectedSize, setSelectedSize] = useState(""); // Default selected size

  const sizes = [6, 7, 8, 9, 10, 11, 12];

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };
  // size chart table
  const sizetable = [
    { size: 6, cm: "24.6cm" },
    { size: 7, cm: "25.4cm" },
    { size: 8, cm: "26.2cm" },
    { size: 9, cm: "27.1cm" },
    { size: 10, cm: "27.9cm" },
    { size: 11, cm: "28.8cm" },
    { size: 12, cm: "29.6cm" },
    { size: 13, cm: "30.5cm" },
  ];
  // const [zoomImage, setZoomImage] = useState(false);

  const { fetchUserAddToCart } = useContext(Context);

  const navigate = useNavigate();

  const fetchProductDetails = async () => {
    setLoading(true);
    const response = await fetch(SummaryApi.productDetails.url, {
      method: SummaryApi.productDetails.method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        productId: params?.id,
      }),
    });
    const dataReponse = await response.json();
    setLoading(false);
    setData(dataReponse?.data);
    setActiveImage(dataReponse?.data?.productImage[0]);
  };

  console.log("data", data);

  useEffect(() => {
    fetchProductDetails();
  }, [params]);

  const handleMouseEnterProduct = (imageURL) => {
    setActiveImage(imageURL);
  };

  // const handleZoomImage = useCallback(
  //   (e) => {
  //     setZoomImage(true);
  //     const { left, top, width, height } = e.target.getBoundingClientRect();
  //     console.log("coordinate", left, top, width, height);

  //     const x = (e.clientX - left) / width;
  //     const y = (e.clientY - top) / height;

  //     setZoomImageCoordinate({
  //       x,
  //       y,
  //     });
  //   },
  //   [zoomImageCoordinate]
  // );

  // const handleLeaveImageZoom = () => {
  //   setZoomImage(false);
  // };

  const handleAddToCart = async (e, id) => {
    await addToCart(e, id, selectedSize, countProduct);
    fetchUserAddToCart();
  };

  const handleBuyProduct = async (e, id) => {
    await addToCart(e, id);
    fetchUserAddToCart();
    navigate("/cart");
  };

  return (
    <>
      {/* <SeedsHero /> */}
      <div className="container-fluid p-5 mt-5">
        <div className="row pt-5">
          {/* product image  */}
          <div className="col-md-6 ">
            <div className="main-img-container">
              <img
                src={activeImage}
                alt=""
                className="img-fluid w-100 h-100 border"
              />
            </div>
            <div className="d-flex gap-2 justify-content-center">
              {loading ? (
                <div className="">
                  {productImageListLoading.map((el, index) => (
                    <div className="" key={+index}>
                      loading...
                    </div>
                  ))}
                </div>
              ) : (
                <div className="d-flex gap-2 justify-content-center mt-4">
                  {data?.productImage?.map((imgURL, index) => (
                    <div className="" key={imgURL}>
                      <div className="">
                        <img
                          src={imgURL}
                          alt=""
                          className="productDetailsImg img-fluid pointerClass"
                          onMouseEnter={() => handleMouseEnterProduct(imgURL)}
                          onClick={() => handleMouseEnterProduct(imgURL)}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          {/* product details  */}
          <div className="col-md-6 ">
            <h2> {data?.productName} </h2>
            <p className="h6 lh-lg">
              <i className="fas fa-star text-warning"></i>{" "}
              <i className="fas fa-star text-warning"></i>{" "}
              <i className="fas fa-star text-warning"></i>{" "}
              <i className="fas fa-star text-warning"></i>{" "}
              <i className="fas fa-star text-warning"></i> 4.8
            </p>
            <p className="textprimary fs-5">
              {" "}
              <del className="text-secondary fs-6">
                {displayINRCurrency(data?.price)}
              </del>{" "}
              {displayINRCurrency(data?.sellingPrice)}{" "}
              <Badge
                bg="warning"
                text="dark"
                className="rounded-0 text-success fs-6"
              >
                Sale{" "}
              </Badge>
            </p>
            <p className="fs-5">{data?.description}</p>

            {/* select size  */}
            <p className="">
              {" "}
              <strong>Size: </strong>
              Order ½ size smaller than you wear in sneakers. Find my size
            </p>
            <div className="d-flex flex-wrap pb-3">
              {data.availablesizes.map((size) => (
                <div key={size} className="option-value">
                  <input
                    type="radio"
                    name="Size"
                    className={`option-value-input hidden-radio ${
                      data.unavailablesizes.includes(size) ? "bg-secondary" : "bg-white"
                    }`}
                    id={`mens-legend-chelsea-boot-black-matte-Size-${size}`}
                    value={size}
                    checked={selectedSize === size.toString()}
                    onChange={() => handleSizeChange(size.toString())}
                  />
                  <label
                    htmlFor={`mens-legend-chelsea-boot-black-matte-Size-${size}`}
                    className={`option-value-name ${
                      selectedSize === size.toString() ? "selected" : ""
                    }`}
                  >
                    <span className="option-value-inner">{size}</span>
                  </label>
                </div>
              ))}
            </div>

            {data.color && <div className="d-flex align-items-center d-inline-block gap-2">
              <div className="fs-5 font-weight-bold">Color</div>
              <div className="rounded-circle" style={{width: "20px", height: "20px", backgroundColor: `${data.color}`}}></div>
            </div>}

            {/* number of product  */}
            <div className="buy-product">
              <div className="count-product ">
                <button
                  className="btn minus border-0"
                  onClick={() => dispatch(decremented())}
                >
                  <span className="minus-circle">
                    <span className="minus-sign">-</span>
                  </span>
                </button>
                {/* <input
                  type="text"
                  aria-label="First name"
                  className="text-center noOfProduct border-0"
                  value={count}
                  onChange={(e) => setCount(parseInt(e.target.value))}
                /> */}
                <span>{countProduct}</span>
                <button
                  className="btn plus border-0"
                 
                  onClick={() => dispatch(incremented())}
                >
                  <span className="plus-circle">
                    <span className="plus-sign">+</span>
                  </span>
                </button>
                <button
                  className="btn bg-color btn-primary text-white text-uppercase add-cart-btn py-3"
                  onClick={(e) => handleAddToCart(e, data?._id)}
                >
                  {" "}
                  Add to cart{" "}
                </button>
              </div>

              {/* size chart table  */}
              <div className="overflow-auto py-3">
                <h5>Size chart</h5>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Size</th>
                      {sizetable.map((item) => (
                        <th key={item.size}>{item.size}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="fw-bold">CMS</td>
                      {sizetable.map((item) => (
                        <td key={item.size}>{item.cm}</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <ProductDetailsImg />
      </div>

      {data.category && (
        <CategoryWiseProductDisplay
          category={data.category}
          heading={"Customers also bought"}
        />
      )}
      {/* <FAQ /> */}
    </>
  );
};

export default ProductDetails;
