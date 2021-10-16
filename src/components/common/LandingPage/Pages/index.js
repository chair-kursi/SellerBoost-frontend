import React, { useState } from "react";
import HeroSection from "../Components/HeroSection";
import InfoSection from "../Components/InfoSection";
import Footer from "../Components/Footer";
import {
  homeobjOne,
  homeobjTwo,
  homeobjThree,
} from "../Components/InfoSection/Data";
import Navbar from "../Components/Navbar";
import Services from "../Components/Services";
import Sidebar from "../Components/SideBar";
const Home1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeobjOne} />
      <InfoSection {...homeobjTwo} />

      <Services />
      <InfoSection {...homeobjThree} />
      <Footer />
    </>
  );
};

export default Home1;
