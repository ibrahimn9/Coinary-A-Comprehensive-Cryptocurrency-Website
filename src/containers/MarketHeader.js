import React, { useState, useRef, useEffect } from "react";
import { MarketUpdateTable } from "../components";

import { Box, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { getCoins } from "../services/getCoins";

const MarketHeader = () => {
  const navigate = useNavigate();
  const [coins, setCoins] = useState();

  const fetchData = async () => {
    const res = await getCoins();
    setCoins(res);
  };

  useEffect(() => {
    fetchData()
  }, []);
  return (
    <Box
      sx={{ mt: 4, px: { xs: 2, md: 6, lg: 12 }, overflowX: "hidden" }}
      id="#1"
    >
      <h3 className="title" style={{ marginBottom: "35px" }}>
        Market Update
      </h3>
      <MarketUpdateTable coins={coins?.slice(0, 10)} />
      <span
        className="detail-p mt"
        style={{
          cursor: "pointer",
          color: "#00c4f4",
          right: "10px",
          fontSize: "20px",
        }}
        onClick={() => navigate("/market")}
      >
        See more
      </span>
    </Box>
  );
};

export default MarketHeader;
