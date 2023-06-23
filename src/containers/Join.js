import React, { useRef } from "react";
import { Box, Stack } from "@mui/material";

import images from "../constants/images";
import { BiSearch } from "react-icons/bi";

const Join = () => {

  return (
    <Stack
      direction="row"
      sx={{
        mt: 14,
        px: { xs: 2, md: 6, lg: 12 },
        justifyContent: { xs: "space-between", md: "space-around" },
        alignItems: "center",
      }}
      id="#4"
    >
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <img src={images.signBg} height={280} />
      </Box>
      <Box sx={{ flexBasis: { xs: "80%", md: "30%" } }}>
        <p className="detail-p mb">Start Now</p>
        <h5 className="title mb" style={{ fontWeight: "400" }}>
          Sign up to learn more
        </h5>
        <p className="detail-item mb">
          Unlock a world of possibilities as you create your account and gain
          access to exclusive features, personalized insights, and a wealth of
          resources
        </p>
        <Box
          sx={{
            mt: 4,
            color: "#3858D6",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "white",
            p: 1,
            borderRadius: 4,
          }}
        >
          <BiSearch
            className="icon"
            style={{ fontSize: "42px", cursor: "pointer" }}
          />
          <input className="main-input" placeholder="Enter your email" />
          <button className="primary-btn btn">Subscribes</button>
        </Box>
      </Box>
    </Stack>
  );
};

export default Join;
