import React, { useEffect, useRef } from "react";

import { Box, Stack } from "@mui/material";

import { NavBar, Footer } from "../components";

import Header from "../containers/Header";
import MarketHeader from "../containers/MarketHeader";
import WhyChooseUs from "../containers/WhyChooseUs";
import Vision from "../containers/Vision";
import Features from "../containers/Features";
import Join from "../containers/Join";

const Home = () => {
  useEffect(() => {
  }, []);
  
  
  
  
  return (
    <Box sx={{ height: "auto" }}>
      <NavBar />
      <Header />
      <MarketHeader />
      <WhyChooseUs />
      <Vision />
      <Features />
      <Join />
      <Footer />
    </Box>
  );
};

export default Home;
