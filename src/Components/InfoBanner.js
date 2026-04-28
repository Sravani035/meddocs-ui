import React from "react";

//mui
import { Box, Typography, Button } from "@mui/material";

const InfoBanner = () => {
  return (
    <Box sx={parentBox}>
      <Box sx={containerBox}>
        
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
  py: 4,
};

const containerBox = {
  maxWidth: "1200px",
  margin: "0 auto",
  px: 2,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: { xs: "column", md: "row" },
  gap: 2,
};

const textWrapper = {
  maxWidth: "800px",
};

const headingText = {
  color: "#fff",
  fontSize: "1.8em",
  fontWeight: 700,
  letterSpacing: 1,
  mb: 1,
};

const descriptionText = {
  color: "#e6f3ff",
  fontSize: "14px",
  lineHeight: 1.6,
};

const buttonStyle = {
  background: "#ffffff",
  color: "#000",
  fontWeight: 600,
  fontSize: "16px",
  px: 4,
  py: 1.5,
  whiteSpace: "nowrap",
  borderRadius: "2px",
  "&:hover": {
    background: "#cfcfcf",
  },
};