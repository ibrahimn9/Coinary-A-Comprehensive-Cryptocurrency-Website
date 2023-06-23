import React from "react";
import { Box } from "@mui/material";

import images from "../constants/images";

const InfoBox = ({ info }) => {
  return (
    <Box
      sx={{
        border: "2px solid #353535",
        width: "300px",
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        py: 4,
        px: 2,
        mr: 2,
        mt: 1,
        alignItems: "start",
      }}
    >
      <Box
        sx={{
          color: "#00c4f4",
          fontSize: "36px",
          width: "55px",
          height: "55px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50%",
          background: "#151C24",
          border: "1px solid #353535",
          mb: 2,
        }}
      >
        {info.icon}
      </Box>
      <h4 className="med-cat-title mb">{info.name}</h4>
      <p className="detail-item">{info.des}</p>
    </Box>
  );
};

export default InfoBox;
