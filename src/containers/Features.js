import React, { useRef } from "react";
import { Box, Stack } from "@mui/material";

import images from "../constants/images";

import { InfoBox } from "../components";

import { RiAccountCircleFill } from "react-icons/ri";
import { PiShootingStarLight } from "react-icons/pi";
import { SlLike } from "react-icons/sl";
import { SiLivechat } from "react-icons/si";

const Features = () => {

  return (
    <Box
      sx={{ px: { xs: 2, md: 6, lg: 12 }, mt: 14, overflow: "hidden" }}
      id="#3"
    >
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <p className="sub-title mb">Our Features</p>
        <h5 className="title" style={{ fontWeight: "400" }}>
          All you need is here
        </h5>
      </Box>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        sx={{ mt: 8, alignItems: "center", justifyContent: "center" }}
      >
        <Box>
          <InfoBox
            info={{
              name: "Free trial Account",
              icon: <RiAccountCircleFill />,
              des: "Sign up today and enjoy a risk-free opportunity to explore all the features and benefits our platform has to offer.",
            }}
          />
          <InfoBox
            info={{
              name: "Affordable",
              icon: <SlLike />,
              des: "Our affordable options provide cost-effective solutions without compromising on functionality or reliability.",
            }}
          />
        </Box>
        <Box sx={{ display: { xs: "none", md: "block" }, flexBasis: "10%" }}>
          <img src={images.btcBg} height={350} />
        </Box>
        <Box>
          <InfoBox
            info={{
              name: "Guide by Experts",
              icon: <PiShootingStarLight />,
              des: "Our platform is backed by a team of experienced professionals who are dedicated to providing you with reliable and insightful advice.",
            }}
          />
          <InfoBox
            info={{
              name: "24/7 Live Support",
              icon: <SiLivechat />,
              des: "Our dedicated support team is available around the clock to assist you with any inquiries, technical issues, or concerns you may have.",
            }}
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default Features;
