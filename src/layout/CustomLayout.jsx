// src/Layout.jsx
import React from "react";
import { useLocation, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Layout = () => {
  const location = useLocation();
  const hideLayoutOnPaths = ["/signin", "/register"];
  const shouldHideLayout = hideLayoutOnPaths.includes(location.pathname);

  return (
    <>
      {!shouldHideLayout && <Navbar />}
      <Outlet />
      {!shouldHideLayout && <Footer />}
    </>
  );
};

export default Layout;
