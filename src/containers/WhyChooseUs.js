import React, { useRef } from "react";
import { Box, Stack } from "@mui/material";
import { InfoBox } from "../components";

import { AiFillUnlock } from "react-icons/ai";
import { BiMoney } from "react-icons/bi";
import { AiOutlineAntDesign } from "react-icons/ai";
import { PiCurrencyBtcFill } from "react-icons/pi";

const WhyChooseUs = () => {
  const infos = [
    {
      name: "Safe and secure",
      icon: <AiFillUnlock />,
      des: "We prioritize your security and safety, implementing robust measures to protect your sensitive data and assets. Rest easy knowing your information is in trusted hands",
    },
    {
      name: "Good invesment",
      icon: <BiMoney />,
      des: "Our platform offers a gateway to lucrative opportunities, empowering you to make informed choices and maximize returns.",
    },
    {
      name: "Integrated app",
      icon: <AiOutlineAntDesign />,
      des: "Enjoy a unified experience as you effortlessly manage your finances, track investments, access market data, and stay updated with real-time insights.",
    },
    {
      name: "Multi Curency Support",
      icon: <PiCurrencyBtcFill />,
      des: "With built-in currency conversion capabilities, you can effortlessly transact, invest, and diversify across different currencies.",
    },
  ];

  return (
    <Box
      sx={{
        mt: 20,
        px: { xs: 2, md: 6, lg: 12 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      id="#2"
    >
      <h4 className="sub-title">Why Choose Us</h4>
      <h4 className="title mt mb" style={{ fontWeight: "500" }}>
        Safe, guaranteed, and easy to use
      </h4>
      <Stack direction="row" sx={{ mt: 4, flexWrap: "wrap" }}>
        {infos.map((info, index) => (
          <InfoBox key={index} info={info} />
        ))}
      </Stack>
    </Box>
  );
};

export default WhyChooseUs;
