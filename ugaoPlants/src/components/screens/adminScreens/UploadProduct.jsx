import React, { useState } from "react";
import "../adminScreens/Admin.css";
import ProductCategory from "../../../helper/ProductCategory";
import UploadImage from "../../../helper/UploadImage";
import DisplayImage from "./DisplayImage";
import SummaryApi from "../../../common/Index";
import { toast } from "react-toastify";
import ProductSize from "./product-size";

export const UploadProduct = ({ onClose, fetchData }) => {
  const [data, setData] = useState({
    productName: "",
    brandName: "",
    category: "",
    productImage: [],
    availablesizes: [],
    unavailablesizes: [],
    description: "",
    price: "",
    sellingPrice: "",
    weight: "",
    // Size: "",
    smallBigSize: "",
    color: "",
    productFeatures: "",
  });

  const [openFullScreenImage, setOpenFullScreenImage] = useState(false);

  const [fullScreenImage, setFullScreenImage] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleProductSize = (e) => {
    const { value } = e.target;
    console.log(value)
    setData((prev) => {
      return {
        ...prev,
        availablesizes: [...prev.availablesizes, value],
      };
    });

    console.log(data)
  };

  const handleUploadProduct = async (e) => {
    const file = e.target.files[0];
    const uploadImageCloudinary = await UploadImage(file);

    setData((preve) => {
      return {
        ...preve,
        productImage: [...preve.productImage, uploadImageCloudinary.url],
      };
    });
  };

  const handleDeleteProductImage = async (index) => {
    console.log("imageIndex", index);

    const newProductImage = [...data.productImage];
    newProductImage.splice(index, 1);
    setData((preve) => {
      return {
        ...preve,
        productImage: [...newProductImage],
      };
    });
  };

  //  upload product

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);

    const response = await fetch(SummaryApi.uploadProduct.url, {
      method: SummaryApi.uploadProduct.method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();
    if (responseData.success) {
      toast.success(responseData?.message);
      onClose();
      fetchData();
    }

    if (responseData.error) {
      toast.error(responseData?.message);
    }
  };

  return (
    <div className="position-fixed   uploadopacity top-0 start-0 bottom-0 end-0 d-flex justify-content-center align-items-center ">
      <div className=" p-3 rounded uplaod-product">
        <div className=" d-flex justify-content-between">
          <h3 className="fw-bold ">Upload Product</h3>
          <i
            className="fa-solid fa-xmark fs-3 pointerClass"
            onClick={onClose}
          ></i>
        </div>
        <form
          action=""
          className="row p-4 gap-2 fw-bolder pb-4"
          onSubmit={handleSubmit}
        >
          <label className="" htmlFor="productName">
            {" "}
            Product Name :
          </label>
          <input
            type="text"
            id="productName"
            placeholder="Enter Product  Name"
            name="productName"
            value={data.productName}
            onChange={handleOnChange}
            className="p-2 m-2 rounded-3 bg-light border border-light upload-product-inputs"
            required
          />

          <label htmlFor="brandName"> Brand Name :</label>
          <input
            type="text"
            id="brandName"
            placeholder="Enter Brand  Name"
            name="brandName"
            value={data.brandName}
            onChange={handleOnChange}
            className="p-2 m-2 rounded-3 bg-light border border-light"
            required
          />

          <label htmlFor="category"> Category</label>
          <select
            required
            onChange={handleOnChange}
            name="category"
            id="category"
            value={data.category}
            className="p-2 m-2 rounded-3 bg-light border border-light"
          >
            <option value={""}>Select Category</option>

            {ProductCategory.map((el, index) => {
              return (
                <option value={el.value} key={el.value + index}>
                  {el.label}
                </option>
              );
            })}
          </select>

          <label htmlFor="productImage"> Product Image :</label>
          <label htmlFor="uploadImageInput">
            <div className=" bg-light rounded input-img d-flex justify-content-center align-items-center pointerClass">
              <div className="text-center">
                <i class="fa-solid fa-cloud-arrow-up fa-2xl text-secondary"></i>
                <p className="fw-normal text-secondary pt-2">
                  {" "}
                  Upload Product Image
                </p>
                <input
                  className="d-none"
                  type="file"
                  id="uploadImageInput"
                  onChange={handleUploadProduct}
                />
              </div>
            </div>
          </label>
          <div className="">
            {data?.productImage[0] ? (
              <div className="d-flex flex-wrap align-items-center gap-2">
                {data.productImage.map((el, index) => {
                  return (
                    <div className="position-relative small-img-box ">
                      <img
                        src={el}
                        alt={el}
                        width={103.5}
                        height={103.5}
                        className="bg-light border pointerClass"
                        onClick={() => {
                          setOpenFullScreenImage(true);
                          setFullScreenImage(el);
                        }}
                      />
                      <div
                        className="pointerClass position-absolute bottom-0 end-0 p-1 px-2 bg-danger text-white rounded-5 delete-icon"
                        onClick={() => handleDeleteProductImage(index)}
                      >
                        <i class="fa-solid fa-trash"></i>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="text-success fw-normal ">
                *Please Upload product image
              </p>
            )}
          </div>

          <label htmlFor="price"> Price :</label>
          <input
            type="number"
            id="price"
            placeholder="Enter Product price"
            name="price"
            value={data.price}
            onChange={handleOnChange}
            className="p-2 m-2 rounded-3 bg-light border border-light"
            required
          />

          <label htmlFor="sellingPrice"> Selling Price :</label>
          <input
            type="number"
            id="sellingPrice"
            placeholder="Enter Product Selling Price"
            name="sellingPrice"
            value={data.sellingPrice}
            onChange={handleOnChange}
            className="p-2 m-2 rounded-3 bg-light border border-light"
            required
          />

          {/* NEW ADDED */}

          <label htmlFor="weight"> Weight :</label>
          <input
            type="number"
            id="weight"
            placeholder="Enter Product weight "
            name="weight"
            value={data.weight}
            onChange={handleOnChange}
            className="p-2 m-2 rounded-3 bg-light border border-light"
            required
          />

          <label htmlFor="smallBigSize">small and Big Size Size :</label>
          <input
            type="text"
            id="smallBigSize"
            placeholder="smallest size you have available  "
            name="smallBigSize"
            value={data.smallBigSize}
            onChange={handleOnChange}
            className="p-2 m-2 rounded-3 bg-light border border-light"
            required
          />

          <div className="">
            <label htmlFor="smallBigSize">Choose Available Sizes:</label>

            <div className="d-flex gap-2">
              {new Array(7).fill(0).map((_, i) => (
                <ProductSize size={String(i + 6)} handleProductSize={handleProductSize} />
              ))}
            </div>
          </div>

          {/* <label htmlFor="biggestSize"> Size :</label>
          <input
            type="number"
            id="biggestSize"
            placeholder="biggest size you have available  "
            name="biggestSize"
            value={data.biggestSize}
            onChange={handleOnChange}
            className="p-2 m-2 rounded-3 bg-light border border-light"
            required
          />
 */}

          <label htmlFor="color"> Color :</label>
          <input
            type="text"
            id="color"
            placeholder="Enter color in hex or RGB"
            name="color"
            value={data.color}
            onChange={handleOnChange}
            className="p-2 m-2 rounded-3 bg-light border border-light"
            required
          />

          <label htmlFor="features"> Features :</label>
          <input
            type="text"
            id="features"
            placeholder="Enter Product color "
            name="features"
            value={data.features}
            onChange={handleOnChange}
            className="p-2 m-2 rounded-3 bg-light border border-light"
            required
          />

          {/* NEW ADDED */}

          <label htmlFor="description"> Description :</label>
          <textarea
            type="text"
            id="description"
            placeholder="Enter Product Description"
            name="description"
            value={data.description}
            onChange={handleOnChange}
            rows={4}
            className="p-2 m-2 rounded-3 bg-light border border-light "
          />

          <button className="btn btn-success ms-2">Uplaad Product</button>
        </form>
      </div>

      {/* display image full screen */}

      {openFullScreenImage && (
        <DisplayImage
          onClose={() => setOpenFullScreenImage(false)}
          imgUrl={fullScreenImage}
        />
      )}
    </div>
  );
};
