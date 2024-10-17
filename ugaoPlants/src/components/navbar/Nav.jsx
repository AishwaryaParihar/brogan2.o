// Nav.js
import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/logo.jpg";
import "./nav.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SummaryApi from "../../common/Index";
import { toast } from "react-toastify";
import { setUserDetails } from "../../store/userSlice";
import ROLE from "../../common/Role";
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import Context from "../../context";
import Cart from "../screens/homeComponent02/Cart"; // Import the Cart component

function Nav() {

  useEffect(() => {
    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.map((tooltipTriggerEl) => {
      return new window.bootstrap.Tooltip(tooltipTriggerEl)
    });
  }, []);
  // for backend
  const user = useSelector((state) => state?.user?.user);
  const dispatch = useDispatch();
  const [menuDisplay, setMenuDisplay] = useState(false);
  const context = useContext(Context);
  const [showCart, setShowCart] = useState(false); // State for cart offcanvas
  const navigate = useNavigate();
  const searchInput = useLocation();
  const URLSearch = new URLSearchParams(searchInput?.search);
  const searchQuery = URLSearch.getAll("q");
  const [search, setSearch] = useState(searchQuery);

  const handleLogout = async () => {
    const fetchData = await fetch(SummaryApi.logout_user.url, {
      method: SummaryApi.logout_user.method,
      credentials: "include",
    });

    const data = await fetchData.json();

    if (data.success) {
      toast.success(data.message);
      dispatch(setUserDetails(null));
      navigate("/");
    }
    if (data.error) {
      toast.error(data.message);
    }
  };

  const toggleCartOffcanvas = () => {
    setShowCart(!showCart);
  };
  const handleSearch = (e) => {
    const { value } = e.target;
    setSearch(value);

    if (value) {
      navigate(`/search?q=${value}`);
    } else {
      navigate("/search");
    }
  };
  return (
    <div>
      <section>
        <nav className="navbar bgNav navbar-expand-lg fixed-top " tabIndex="3">
          <div className="container-fluid container-xl py-3 flex-nowrap">
            <button
              className="navbar-toggler border-0"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
              id="navbarToggler"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-start"
              tabIndex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  <img src={logo} alt="" className="logo-img w-25" />
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                  id="togglerClosebtn"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav navbar-nav01 text-uppercase point12px fwbold mt-2">
                  <li className="nav-item ">
                    <Link
                      className="nav-link hover-line nav-font"
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item  ">
                    <Link className="nav-link hover-line nav-font" to="/about">
                      About
                    </Link>
                  </li>
                  <li className="nav-item  dropdown-hover">
                    <a className="nav-link hover-line nav-font" href="#">
                      Shop
                    </a>
                    <ul className="dropdown-menu dropdown-menu01 dropdown-item01">
                      <li>
                        <a className="dropdown-item dropdown-item01 " href="#">
                          <span className="hover-line nav-font">Rugged</span>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item dropdown-item01 " href="#">
                          <span className="hover-line nav-font">Suede</span>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item dropdown-item01 " href="#">
                          <span className="hover-line nav-font">Chelsea</span>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item dropdown-item01 " href="#">
                          <span className="hover-line nav-font">Lace-up</span>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item dropdown-item01 " href="#">
                          <span className="hover-line nav-font">
                            All Styles
                          </span>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item dropdown-item01 " href="#">
                          <span className="hover-line nav-font">Stomper</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link hover-line nav-font" to="/contact-us">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center ">
              <img src={logo} alt="Logo" className="logo-img w-25" />
            </div>
            <div className="d-flex justify-content-end align-items-center ">
              <form className="d-flex  align-items-center me-3  d-lg-block d-none" role="search">
                <div className="search-box  d-flex flex-nowrap ">
                  <input
                    onChange={handleSearch}
                    value={search}
                    className="form-control   p-2 px-3 rounded-5 input-text"
                    type="search"
                    placeholder="Search..."
                    aria-label="Search"
                  />
                  <i className="fa-solid fa-magnifying-glass text-dark"></i>
                </div>
              </form>
              <span
                onClick={() => {
                  setMenuDisplay((preve) => !preve);
                }}
              >

              </span>
              <span>
                {user?._id ? (
                  <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip id="tooltip-top">logout/Register</Tooltip>}
                >
                  <button
                    className="border-0 bg-transparent"
                    onClick={handleLogout}
                  >
                    <i className="fa-regular fa-user fa-lg  px-2 text-dark border-0"></i>
                  </button>
                  </OverlayTrigger>
                ) : (
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip id="tooltip-top">Login/Register</Tooltip>}
                  >
                    <Link to="/signin" data-bs-toggle="tooltip" title="Login/Register">
                      <i className="fa-regular fa-user  px-2 fa-lg text-dark"></i>
                    </Link>
                  </OverlayTrigger>
                )}
              </span>
              {user?._id && (
                <Link to="#" onClick={toggleCartOffcanvas}>
                  <i className="fa-solid fa-cart-shopping fa-lg px-2 text-dark">
                    <sup className="text-white rounded-circle bg-secondary px-1">
                      {context?.cartProductCount}
                    </sup>
                  </i>
                </Link>
              )}
              <span className="position-relative group">
                {user?.role === ROLE.ADMIN && (
                  <span
                    onClick={() => {
                      setMenuDisplay((prev) => !prev);
                    }}
                  >
                    <Link to="#">
                      {/* <i class="fa-solid fa-user-tie"></i> */}
                      <i className="fa-solid fa-user-tie text-dark fa-lg px-2"></i>
                    </Link>
                  </span>
                )}
                {menuDisplay && (
                  <span className="popUPtext">
                    <Link
                      to="/admin-panel/products"
                      className="text-decoration-none text-dark"
                      onClick={() => {
                        setMenuDisplay((prev) => !prev);
                      }}
                    >
                      Admin Panel
                    </Link>
                  </span>
                )}
              </span>
            </div>
          </div>
          <form className="d-flex  align-items-center mx-3 w-100 d-lg-none d-block" role="search">
            <div className="search-box w-100 d-flex flex-nowrap ">
              <input
                onChange={handleSearch}
                value={search}
                className="form-control  p-2 px-5 rounded-5 input-text"
                type="search"
                placeholder="Search..."
                aria-label="Search"
              />
              <i className="fa-solid fa-magnifying-glass text-dark"></i>
            </div>
          </form>
        </nav>
      </section>
      <Cart
        show={showCart}
        toggleOffcanvas={toggleCartOffcanvas}
        context={context}
      />
    </div>
  );
}

export default Nav;
