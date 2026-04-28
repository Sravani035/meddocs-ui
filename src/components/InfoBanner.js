import React from "react";
import { Box, Typography, Button } from "@mui/material";

const InfoBanner = () => {
  return (
    <Box sx={parentBox}>
      <Box sx={containerBox}>
        
        {/* TEXT */}
        <Box sx={textWrapper}>
          <Typography sx={headingText}>
            MEDDOCS PUBLISHERS
          </Typography>

          <Typography sx={descriptionText}>
            The journals, e-books and conferences are being published and
            organized in order to spread the information on the latest
            technological and scientific researches among the core group with
            the aim of disseminating information for the betterment of mankind.
          </Typography>
        </Box>

        {/* BUTTON */}
        <Button sx={buttonStyle}>
          MORE INFO
        </Button>

      </Box>
    </Box>
  );
};

export default InfoBanner;

const parentBox = {
  background: "#1e88c8",
  py: { xs: 3, md: 4 },
};

const containerBox = {
  maxWidth: "1200px",
  margin: "0 auto",
  px: 2,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  // 🔥 RESPONSIVE
  flexDirection: { xs: "column", md: "row" },
  gap: { xs: 2, md: 3 },

  textAlign: { xs: "center", md: "left" },
};

const textWrapper = {
  maxWidth: "800px",
};

const headingText = {
  color: "#fff",
  fontSize: { xs: "20px", md: "28px" },
  fontWeight: 700,
  letterSpacing: 1,
  mb: 1,
};

const descriptionText = {
  color: "#e6f3ff",
  fontSize: { xs: "13px", md: "14px" },
  lineHeight: 1.6,
};

const buttonStyle = {
  background: "#ffffff",
  color: "#000",
  fontWeight: 600,

  // 🔥 RESPONSIVE BUTTON
  fontSize: { xs: "14px", md: "16px" },
  px: { xs: 3, md: 4 },
  py: { xs: 1, md: 1.5 },

  borderRadius: "2px",
  whiteSpace: "nowrap",

  mt: { xs: 1, md: 0 },

  "&:hover": {
    background: "#cfcfcf",
  },
};