import React, { useEffect, useState } from "react";
import { Box, Stack } from "@mui/material";
import { useParams } from "react-router-dom";

import { NavBar, Footer } from "../components";
import images from "../constants/images";
import { getCoinById } from "../services/getCoinById";

import animationData from "../assests/loading.json";

import Lottie from "lottie-react";

const CurrencyDetail = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();

  const fetchData = async () => {
    const res = await getCoinById(id);
    setCoin(res);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchData()
  }, []);

  if (!coin)
    return (
      <>
        <NavBar />
        <Box sx={{  width: "120px", height: "120px", margin: "auto", mt: 20, }}>
          <Lottie animationData={animationData} loop={true} />
        </Box>
      </>
    );

  return (
    <Box>
      <NavBar />
      <Box sx={{ mt: 14, px: { xs: 2, md: 6, lg: 12 } }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          sx={{ alignItems: "center" }}
        >
          <Box
            sx={{
              textAlign: "center",
              borderRight: { md: "3px solid white" },
              borderBottom: { xs: "3px solid white", md: "none" },
              p: 4,
            }}
          >
            <img src={coin?.iconUrl} height={80} />
            <h5 className="title mb">{coin?.name}</h5>
            <p className="detail-p" style={{ fontSize: "18px" }}>
              Rank: #{coin?.rank}
            </p>
          </Box>
          <Box sx={{ p: 4 }}>
            <Stack
              direction={{ xs: "column", md: "row" }}
              sx={{ justifyContent: "space-between", alignItems: "center" }}
            >
              <Box>
                <span className="med-cat-title mr">24h Change: </span>
                <span className="sub-title">{coin?.change}%</span>
              </Box>
              <Box sx={{ mt: { xs: 2, md: 0 } }}>
                <span className="med-cat-title mr">Price: </span>
                <span className="sub-title">
                  ${parseInt(coin?.price).toFixed(2)}
                </span>
              </Box>
              <Box sx={{ mt: { xs: 2, md: 0 } }}>
                <span className="med-cat-title mr">Symbol: </span>
                <span className="sub-title">{coin?.symbol}</span>
              </Box>
            </Stack>
            <Box
              sx={{ mt: 4, maxHeight: "300px", overflowY: "scroll" }}
              className="scroll-y"
            >
              <p className="detail-p">{coin?.description}</p>
            </Box>
          </Box>
        </Stack>
      </Box>
      <Footer />
    </Box>
  );
};

export default CurrencyDetail;
