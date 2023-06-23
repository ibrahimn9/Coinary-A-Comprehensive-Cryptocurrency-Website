import React from "react";
import { Box, Stack } from "@mui/material";
import images from "../constants/images";

const Vision = () => {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      sx={{ mt: 14, px: { xs: 2, md: 6, lg: 12 }, }}
    >
      <Box sx={{ mb: { xs: 4, md: 0 } }}>
        <p className="sub-title">Our vision</p>
        <h3 className="title mt" style={{ fontWeight: "500" }}>
          Users from all over the world
        </h3>
        <p className="detail-item mt mb" style={{ fontSize: "18px" }}>
          Empowering individuals to embrace the future of finance through
          innovative technology and comprehensive insights.
        </p>
        <Stack direction="row" sx={{ flexWrap: "wrap" }}>
          <Box sx={{ mr: 2 }}>
            <h5 className="title">32K+</h5>
            <p className="detail-item">Poeple Joined</p>
          </Box>
          <Box sx={{ mr: 2 }}>
            <h5 className="title">250+</h5>
            <p className="detail-item">VIP Users</p>
          </Box>
          <Box sx={{ mr: 2 }}>
            <h5 className="title">87+</h5>
            <p className="detail-item">Big Company</p>
          </Box>
        </Stack>
      </Box>
      <img src={images.vision} height={300} />
    </Stack>
  );
};

export default Vision;
