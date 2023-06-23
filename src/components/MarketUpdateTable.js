import React from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

import animationData from "../assests/loading.json";

import Lottie from "lottie-react";

const MarketUpdateTable = ({ coins }) => {
  const navigate = useNavigate();

  if (!coins)
    return (
      <Box sx={{ mt: 4, width: "120px", height: "120px", margin: "auto" }}>
        <Lottie animationData={animationData} loop={true} />
      </Box>
    );

  if (coins)
    return (
      <div className="market-update-table mb">
        <table>
          <thead>
            <tr>
              <th>Coin</th>
              <th>Price</th>
              <th>24h Change</th>
              <th>Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {coins.map((item, index) => (
              <tr key={index} onClick={() => navigate(`/detail/${item?.uuid}`)}>
                <td>
                  <img src={item?.iconUrl} height={80} />
                  <span style={{ marginLeft: "5px" }}>{item?.name}</span>
                </td>
                <td>${parseInt(item?.price).toFixed(2)}</td>
                <td>{item?.change}%</td>
                <td>${item?.marketCap}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default MarketUpdateTable;
