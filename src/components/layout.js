import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { textAlign } from "styled-system";



const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
