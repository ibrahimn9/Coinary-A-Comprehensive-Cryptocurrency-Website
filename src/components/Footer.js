import React from "react";
import { Stack, Box } from "@mui/material";
import { FiFacebook, FiGithub, FiTwitter } from "react-icons/fi";

import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        mt: 22,
        background: "#024258",
        pt: 8,
        px: { xs: 2, md: 4, lg: 6 },
      }}
    >
      <Stack
        sx={{
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ flexBasis: "30%" }}>
          <h3 className="title">
            We are your trusted partner in unlocking new opportunities and
            achieving financial success.
          </h3>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            mt: { xs: 4, md: 0 },
          }}
        >
          <Box>
            {["Home", "Market", "Choose Us", "Features", "Join"].map((nav) => (
              <span
                key={nav}
                className="nav-item"
                onClick={() => {
                  if (nav === "Home") navigate("/");
                  if (nav === "Market") navigate("/market");
                }}
              >
                {nav}
              </span>
            ))}
          </Box>
          <Box sx={{ display: "flex", mt: 6 }}>
            <FiFacebook className="icon mr" />
            <FiGithub className="icon mr" />
            <FiTwitter className="icon mr" />
          </Box>
        </Box>
      </Stack>
      <Stack
        sx={{
          mt: 4,
          justifyContent: "space-between",
          py: 4,
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box>
          {["Privacy policy", "Term of service", "Langague"].map((nav) => (
            <span key={nav} className="detail-item mr" style={{ color: "rgba(255, 255, 255, 0.7)"}}>
              {nav}
            </span>
          ))}
        </Box>
        <span className="detail-item" style={{ color: "rgba(255, 255, 255, 0.7)"}}>
          2023 All Rights Reserved © Coinary
        </span>
      </Stack>
    </Box>
  );
};

export default Footer;
