import React from "react";
import Cta from "./Cta";
import Footer from "./Footer";
import Header from "./Header";
import HowTo from "./HowTo";
import Navbar from "./Navbar";
import Usage from "./Usage";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <HowTo />
      <Usage />
      <Cta />
      <Footer />
    </>
  );
};

export default Home;
