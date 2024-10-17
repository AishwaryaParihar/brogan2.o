import React, { useState } from "react";
import AdminEditProduct from "./AdminEditProduct";
import displayINRCurrency from "../../../helper/displayCurrency";

const AdminProductCard = ({ data, fetchdata }) => {
  const [editProduct, setEditProduct] = useState(false);

  return (
    <div className="admin-product-card  bg-light p-2">
      <div className="text-center">
        <img
          className="adminProductCardImage"
          src={data?.productImage[0]}
          width={150}
          height={150}
          alt=""
        />
        <h6 className="mt-1 adminProductHeading">{data?.productName}</h6>
        <div className="">
          <p className="fw-bold">
            {
              displayINRCurrency(data.sellingPrice)

            }
          
          </p>
          <div className="editAdminButton text-end" >
            <i class="fa-solid fa-pen bg-success p-2  rounded-circle text-white pointerClass" onClick={() => setEditProduct(true)}></i>
          </div>
        </div>
      </div>

      {editProduct && (
        <AdminEditProduct
          productData={data}
          onClose={() => setEditProduct(false)}
          fetchdata={fetchdata}
        />
      )}
    </div>
  );
};

export default AdminProductCard;
