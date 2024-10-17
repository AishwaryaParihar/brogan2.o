import React, { useEffect, useState } from "react";
import { UploadProduct } from "./UploadProduct";
import SummaryApi from "../../../common/Index";
import AdminProductCard from "./AdminProductCard";

// import Card from "react-bootstrap/Card";

// import Badge from "react-bootstrap/Badge";
// import { AdminProductCard } from "./AdminProductCard";



function Products() {
  const [openUploadProduct, setOpenUploadProduct] = useState(false);
  const [allProduct, setAllProduct] = useState([]);

  const fetchAllProduct = async () => {
    const response = await fetch(SummaryApi.allProduct.url);
    const dataResponse = await response.json();

   console.log('product',dataResponse)

    setAllProduct(dataResponse?.data || []);
  };
  useEffect(() => {
    fetchAllProduct();
  }, []);
  return (
    <>
      <div className="bg-white shadow d-flex justify-content-between align-items-center p-3 mt-2">
        <h2 className="fw-bolder ps-3">Product</h2>
        <button
          className="btn bg-success text-white fw-bolder rounded-5"
          onClick={() => setOpenUploadProduct(true)}
        >
          Upload Products
        </button>
      </div>


      <div className="d-flex gap-3 align-items-center  flex-wrap all-product-box scrollbar-none m-3">
        {
          allProduct.map((product,index)=> {
            return(
              <AdminProductCard  data={product} key={index+"allProduct"} fetchdata={fetchAllProduct}/>
 
            )
          })
        }
      </div>




      {/* upload product component */}
      {openUploadProduct && (
        <UploadProduct onClose={() => setOpenUploadProduct(false)}  fetchData={fetchAllProduct}/>
      )}
    </>
  );
}

export default Products;
