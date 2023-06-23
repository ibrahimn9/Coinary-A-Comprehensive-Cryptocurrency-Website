import React, { useState, useRef } from "react";

import images from "../constants/images";
import { Box, Stack } from "@mui/material";

import { useNavigate } from "react-router-dom";

import { BiSearch } from "react-icons/bi";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

import { Link, animateScroll as scroll } from "react-scroll";

const NavBar = () => {
  const navigate = useNavigate();
  const [sideBarToggle, setSideBarToggle] = useState("-100%");

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          display: { xs: "flex", md: "none" },
          background: "#030b15",
          justifyContent: "center",
          width: "100%",
          height: "100vh",
          left: sideBarToggle,
          top: "0",
          transition: "left 0.3s ease-in-out",
          p: 2,
          zIndex: "1000",
        }}
      >
        <IoMdClose
          className="icon"
          style={{
            position: "absolute",
            right: "25px",
            top: "25px",
            fontSize: "36px",
          }}
          onClick={() => setSideBarToggle("-100%")}
        />
        <Stack direction="column" sx={{ mt: 10 }}>
          {["Home", "Market", "Choose Us", "Features", "Join"].map(
            (nav, index) => (
              <span
                key={nav}
                className="nav-item"
                onClick={() => {
                  if (nav === "Home") navigate("/");
                  if (nav === "Market") navigate("/market");
                  setSideBarToggle("-100%")
                }}
                style={{
                  margin: "0",
                  marginBottom: "65px",
                  fontSize: "28px",
                }}
              >
                <Link
                  activeClass="active"
                  to={`#${index}`}
                  spy={true}
                  smooth={true}
                  offset={-160}
                  duration={0}
                >
                  {nav}
                </Link>
              </span>
            )
          )}
        </Stack>
      </Box>
      <Stack
        direction="row"
        sx={{
          top: 0,
          py: 3,
          px: { xs: 2, md: 6, lg: 12 },
          alignItems: "center",
          zIndex: "100",
          justifyContent: "space-between",
          borderBottom: "2px solid #676767",
          background: "#030b15",
          boxShadow: "0 2px 5px #121212",
          position: "sticky",
        }}
        className="nav-bar"
      >
        <Box
          sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          <img
            src={images.logo}
            alt="logo"
            height={28}
            style={{ marginRight: "10px" }}
          />
          <h3 className="title" style={{ fontSize: "26px" }}>
            Coinary
          </h3>
        </Box>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            flexGrow: 1,
            justifyContent: "center",
          }}
        >
          {["Home", "Market", "Choose Us", "Features", "Join"].map(
            (nav, index) => (
              <span
                key={index}
                className="nav-item"
                onClick={() => {
                  if (nav === "Home") navigate("/");
                  if (nav === "Market") navigate("/market");
                }}
              >
                <Link
                  activeClass="active"
                  to={`#${index}`}
                  spy={true}
                  smooth={true}
                  offset={-160}
                  duration={0}
                >
                  {nav}
                </Link>
              </span>
            )
          )}
        </Box>
        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
          <button className="primary-btn btn">Download App</button>
        </Box>
        <Box sx={{ display: { md: "none" } }}>
          <HiMenuAlt3 className="icon" onClick={() => setSideBarToggle("0")} />
        </Box>
      </Stack>
    </>
  );
};

export default NavBar;
