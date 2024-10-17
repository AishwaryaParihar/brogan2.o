// Cart.jsx
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Context from "../../../context";
import SummaryApi from "../../../common/Index";
import "./cart.css";
import displayINRCurrency from "../../../helper/displayCurrency";
import { useDispatch, useSelector } from 'react-redux';
import { incremented, decremented } from '../../../store/CounterSlice';

const Cart = ({ show, toggleOffcanvas, context }) => {
  const [count, setCount] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const context2 = useContext(Context);
  const loadingCart = new Array(4).fill(null);
  const dispatch = useDispatch()
  const countProduct=useSelector((state) => state.counter.value)

 

  const fetchData = async () => {
    const response = await fetch(SummaryApi.addToCartProductView.url, {
      method: SummaryApi.addToCartProductView.method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
    });

    const responseData = await response.json();

    if (responseData.success) {
      setData(responseData.data);
    }
  };

  const handleLoading = async () => {
    await fetchData();
  };

  useEffect(() => {
    setLoading(true);
    handleLoading();
    setLoading(false);
  }, []);

  // const increaseQty = async (id, qty) => {
  //   const response = await fetch(SummaryApi.updateCartProduct.url, {
  //     method: SummaryApi.updateCartProduct.method,
  //     credentials: "include",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       _id: id,
  //       quantity: qty + 1,
  //     }),
  //   });

  //   const responseData = await response.json();

  //   if (responseData.success) {
  //     fetchData();
  //   }
  // };

  // const decraseQty = async (id, qty) => {
  //   if (qty >= 2) {
  //     const response = await fetch(SummaryApi.updateCartProduct.url, {
  //       method: SummaryApi.updateCartProduct.method,
  //       credentials: "include",
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         _id: id,
  //         quantity: qty - 1,
  //       }),
  //     });

  //     const responseData = await response.json();

  //     if (responseData.success) {
  //       fetchData();
  //     }
  //   }
  // };

  const increaseQty = async (id) => {
    dispatch(incremented(id))
    const response = await fetch(SummaryApi.updateCartProduct.url, {
      method: SummaryApi.updateCartProduct.method,
      credentials: "include",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ _id: id, quantity: countProduct + 1 }),
    })
    const responseData = await response.json()
    if (responseData.success) {
      fetchData()
    }
  }
  
  const decraseQty = async (id) => {
    if (countProduct >= 2) {
      dispatch(decremented(id))
      const response = await fetch(SummaryApi.updateCartProduct.url, {
        method: SummaryApi.updateCartProduct.method,
        credentials: "include",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ _id: id, quantity: countProduct - 1 }),
      })
      const responseData = await response.json()
      if (responseData.success) {
        fetchData()
      }
    }
  }
  

  const deleteCartProduct = async (id) => {
    const response = await fetch(SummaryApi.deleteCartProduct.url, {
      method: SummaryApi.deleteCartProduct.method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        _id: id,
      }),
    });

    const responseData = await response.json();

    if (responseData.success) {
      fetchData();
      context2.fetchUserAddToCart();
    }
  };

  const totalQty = data.reduce(
    (previousValue, currentValue) => previousValue + currentValue.quantity,
    0
  );
  const totalPrice = data.reduce(
    (preve, curr) => preve + curr.quantity * curr?.productId?.sellingPrice,
    0
  );
  return (
    <>
      <div
        className={`offcanvas offcanvas-end ${show ? "show" : ""}`}
        tabIndex="-1"
        style={{ visibility: show ? "visible" : "hidden" }}
      >
        <div className="offcanvas-header">
          <h6 className="offcanvas-title">
            Checkout Products
            {/* YOU ARE <span className="text-purple"> ₹701 </span> AWAY FROM A{" "}
            <span className="text-purple">15% OFF ON ORDERS ABOVE ₹2999</span> */}
          </h6>
          <button
            type="button"
            className="btn-close text-reset"
            onClick={toggleOffcanvas}
          ></button>
        </div>
        <div className="offcanvas-body">
          <p>Cart Product Count: {context?.cartProductCount}</p>

          <div className="">
            {loading
              ? loadingCart.map((el, index) => {
                  return (
                    <div key={el + "Add to cart loading"+index}>loading....</div>
                  );
                })
              : data.map((product, index) => {
                  return (
                    <div
                      className="d-flex"
                      key={product?._id + "Add to cart loading"}
                    >
                      <div className="m-2">
                        <img
                          className="img-fluid cart-img"
                          src={product?.productId?.productImage[0]}
                          alt=""
                        />
                      </div>
                      <div className="">
                        <div className="d-flex justify-content-between">
                          <div>{product?.productId?.productName}</div>


                          {/* delete product */}
                          <div className="text-end" onClick={()=>deleteCartProduct(product?._id)}>
                            <i class="fa-solid fa-trash"></i>
                          </div>

                        </div>

                        <div className="text-secondary">size : {product?.size}</div>
                        <div className="text-secondary">
                          category : {product?.productId?.category}
                        </div>
                        <div className="d-flex justify-content-between">
                        <div className="count-product my-3 ">
                          <button
                            className="btn minus border-0"
                            // onClick={() => handleDecrement(product?._id)}
                            onClick={()=>decraseQty(product?._id,product?.quantity)} 
                          >
                            <span className="minus-circle">
                              <span className="minus-sign">-</span>
                            </span>
                          </button>
                          <span>
                            {product?.quantity}
                             </span>
                          <button
                            className="btn plus border-0"
                            // onClick={() => handleIncrement(product?._id)}
                            onClick={()=>increaseQty(product?._id,product?.quantity)} 
                          >
                            <span className="plus-circle">
                              <span className="plus-sign">+</span>
                            </span>
                          </button>
                        </div>
                        <div className="text-end">
                          
                              {displayINRCurrency(product?.productId?.sellingPrice)}
                            </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
          </div>
          {/* total product */}

          <div className="my-5">
            {loading ? (
              <div className=""> total </div>
            ) : (
             <div className="d-grid">
               <div className="text-center py-2 bg-color"><Link className="nolink text-white " to="/payment"> CHECKOUT - {displayINRCurrency(totalPrice)} </Link> </div>
             </div>
            )}
          </div>

          {/* <Link to="/cart" onClick={toggleOffcanvas}>Go to Cart Page</Link> */}
        </div>
      </div>
      {show && (
        <div
          className="offcanvas-backdrop fade show"
          onClick={toggleOffcanvas}
        ></div>
      )}
    </>
  );
};

export default Cart;
