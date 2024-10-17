import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Nav from "../navbar/Nav";
import Hamburger from "../screens/Hamburgur";

const UserProvider = () => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <Outlet />
    
      <footer>
        <Hamburger/>
        <Footer />
      </footer>
    </>
  );
};

export default UserProvider;
