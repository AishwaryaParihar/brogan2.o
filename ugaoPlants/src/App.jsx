import { Route, Routes, Outlet } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import img from "./assets/PPC.jpg";
import Footer from "./components/footer/Footer";
import Nav from "./components/navbar/Nav";
import Home from "./components/screens/Home";
import SignIn from "./components/screens/SignIn";
import SeedsHero from "./components/screens/homeComponent02/SeedsHero";
import SignUp from "./components/screens/SignUp";
import { useEffect, useState } from "react";
import SummaryApi from "./common/Index";
import Context from "./context";
import { useDispatch } from "react-redux";
import { setUserDetails } from "./store/userSlice";
import Adminpanel from "./components/screens/Adminpanel";
import AllUsers from "./components/screens/adminScreens/AllUsers";
import UserProvider from "./components/providers/user-provider";
// import Product from "./components/screens/adminScreens/Products";
import Products from "./components/screens/adminScreens/Products";

import ActivityLog from "./components/screens/adminScreens/ActivityLog";
import CategoryProduct from "./components/screens/homeComponent02/CategoryProduct";
import ProductDetails from "./components/screens/homeComponent02/ProductDetails";
import Cart from "./components/screens/homeComponent02/Cart";
import SearchProduct from "./components/screens/homeComponent02/SearchProduct";
import { Breadcrumb } from "react-bootstrap";
import About from "./components/screens/About";
import Contactus from "./components/screens/Contactus";
// import Payment from "./components/screens/product/payment";
// import Payment from "./components/screens/Payment";
import { Privacy } from "./components/screens/Privacy";
import { Refund } from "./components/screens/Refund";
import TermsAndConditions from "./components/screens/TermsAndConditions";
import { CancelProces } from "./components/screens/CancelProces";
import { ShipmentPolicy } from "./components/screens/ShipmentPolicy";
import Payment from "./components/screens/Payment";
import UploadAboutImage from "./components/screens/adminScreens/UploadAboutImage";


function App() {
  const dispatch = useDispatch();
  const [cartProductCount, setCartProductCount] = useState(0);
  
  const fetchUserDetails = async () => {
    const dataResponse = await fetch(SummaryApi.current_user.url, {
      method: SummaryApi.current_user.method,
      credentials: "include",
    });

    const dataApi = await dataResponse.json();

    if (dataApi.success) {
      dispatch(setUserDetails(dataApi.data));
    }
  };
  const fetchUserAddtoCart = async () => {
    const dataResponse = await fetch(SummaryApi.addToCartProductCount.url, {
      method: SummaryApi.addToCartProductCount.method,
      credentials: "include",
    });

    const dataApi = await dataResponse.json();
    setCartProductCount(dataApi?.data?.count);
  };
  useEffect(() => {
    // user details
    fetchUserDetails();
    fetchUserAddtoCart();
  }, []);
  return (
    <>
      <Context.Provider
        value={{
          fetchUserDetails, //user detail fetch
          cartProductCount, //current use add to cartproduct count
          fetchUserAddtoCart,
        }}
      >
        <ToastContainer position="top-center" />

        {/* <header>
          <Nav />
        </header> */}

        <main>
          <Routes>
            <Route path="/" element={<UserProvider />}>
              <Route path="/" element={<Home />} />
              <Route path="/seeds" element={<SeedsHero />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact-us" element={<Contactus />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/product-category" element={<CategoryProduct />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/search" element={<SearchProduct />} />
              <Route path="/buy" element={<Payment />} />
              <Route path="/cart" element={<Cart/>} />
              <Route path="/search" element={<SearchProduct/>} />
              <Route path="/payment" element={<Payment/>}/>
              <Route path="/privacy" element={<Privacy/>}/>
              <Route path="/refund" element={<Refund/>}/>
              <Route path="/terms-conditions" element={<TermsAndConditions/>}/>
              <Route path="/cancel-policy" element={<CancelProces/>}/>
              <Route path="/shipment-policy" element={<ShipmentPolicy/>}/>

            </Route>
            <Route path="/admin-panel" element={<Adminpanel />}>
              <Route path="alluser" element={<AllUsers />}></Route>
              <Route path="products" element={<Products />}></Route>
              <Route path="uploadAboutImage" element={<UploadAboutImage />}></Route>
              <Route path="activitylog" element={<ActivityLog />}></Route>
            </Route>
          </Routes>
        </main>
        {/* <footer>
          <Footer />
        </footer> */}
      </Context.Provider>
    </>
  );
}

export default App;
