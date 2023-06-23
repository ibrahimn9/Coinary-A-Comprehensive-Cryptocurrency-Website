import React, { useEffect, useState } from "react";
import { Box, Stack } from "@mui/material";

import { getCoins } from "../services/getCoins";

import { NavBar, MarketUpdateTable, Footer } from "../components";

const Market = () => {
  const [coins, setCoins] = useState();

  const fetchData = async () => {
    const res = await getCoins();
    setCoins(res);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchData()
  }, []);
  return (
    <Box>
      <NavBar />
      <Box sx={{ mt: 14, px: { xs: 2, md: 6, lg: 12 } }}>
        <h3 className="title" style={{ marginBottom: "35px" }}>
          Market Update
        </h3>
        <MarketUpdateTable coins={coins} />
      </Box>
      <Footer />
    </Box>
  );
};

export default Market;
