import React from "react";
import animationData from "../assests/main.json";

import Lottie from "lottie-react";
import { Box, Stack, Typography } from "@mui/material";

import images from "../constants/images";

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: { md: "space-between" },
        px: { xs: 2, md: 6, lg: 12 },
        overflow: "hidden",
      }}
      id="#0"
    >
      <Box
        sx={{
          mt: { xs: 10, md: 20 },
          flexBasis: { xs: "80%", md: "45%" },
        }}
      >
        <Typography
          variant="h2"
          className="title"
          sx={{
            fontSize: { xs: "38px", md: "58px" },
            fontFamily: "Outfit",
            fontWeight: "700",
          }}
        >
          TRACK AND TRADE{" "}
          <span className="header-title">CRYPTO CURRENCIES</span>
        </Typography>
        <p
          className="detail-item mt"
          style={{ fontSize: "18px", marginLeft: "5px" }}
        >
          Stay Ahead of the Market: Track and Trade Crypto Currencies.
        </p>
        <Box
          sx={{
            mt: 6,
            display: "flex",
            alignItems: "center",
            flexBasis: "100%",
          }}
        >
          <button className="primary-btn btn mr" style={{ fontSize: "22px" }}>
            Get Started
          </button>
          <button className="outlined-btn btn" style={{ fontSize: "22px" }}>
            Download App
          </button>
        </Box>
      </Box>
      <Box
        sx={{
          flexBasis: { md: "50%", lg: "40%" },
          display: { xs: "none", md: "block" },
          mt: { md: 8, lg: 4 },
        }}
      >
        <Lottie animationData={animationData} loop={true} />
      </Box>
    </Box>
  );
};

export default Header;
