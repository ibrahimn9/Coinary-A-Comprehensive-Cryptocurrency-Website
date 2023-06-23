import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box, Stack } from "@mui/material";

import { Home, Market, CurrencyDetail } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/market" element={<Market />} />
        <Route path="/detail/:id" element={<CurrencyDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
