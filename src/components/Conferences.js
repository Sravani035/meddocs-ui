import React from "react";
import { Box, Typography, Button } from "@mui/material";
import conferenceimg from "../assets/conferenceimg.png";

const Conferences = () => {
  return (
    <Box sx={parentBox}>
      <Box sx={containerBox}>

        {/* IMAGE */}
        <Box sx={leftBox}>
          <Box component="img" src={conferenceimg} sx={imageStyle} />
        </Box>

        {/* CONTENT */}
        <Box sx={rightBox}>
          <Typography sx={subHeading}>MEDDOCS</Typography>

          <Typography sx={mainHeading}>
            CONFERENCES
          </Typography>

          <Box sx={underline} />

          <Typography sx={paraOne}>
            We have a wing which is dedicated to organize international
            conferences in various parts of the world...
          </Typography>

          <Typography sx={paraTwo}>
            These conferences are being organized with the necessary cooperation
            of the learned societies...
          </Typography>

          <Button sx={buttonStyle}>
            READ MORE
          </Button>
        </Box>

      </Box>
    </Box>
  );
};

export default Conferences;

const parentBox = {
  background: "#f5f5f5",
  py: { xs: 5, md: 8 },
};

const containerBox = {
  maxWidth: "1200px",
  margin: "0 auto",
  px: 2,
  display: "flex",
  gap: { xs: 4, md: 6 },
  alignItems: "center",

  // 🔥 responsive layout
  flexDirection: { xs: "column", md: "row" },

  textAlign: { xs: "center", md: "left" },
};

const leftBox = {
  flex: 1,
  width: "100%",
};

const rightBox = {
  flex: 1,
};

const imageStyle = {
  width: "100%",
  height: {
    xs: 220,
    sm: 280,
    md: 400,
  },
  objectFit: "cover",
  borderRadius: "4px",

  // 🔥 better UI
  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
};

const subHeading = {
  color: "#0688de",
  fontWeight: 700,
  fontSize: { xs: "12px", md: "14px" },
  mb: 1,
};

const mainHeading = {
  fontWeight: 700,
  fontSize: { xs: "24px", md: "2.6em" },
  color: "#060606",
  mb: 2,
};

const underline = {
  width: 60,
  height: 3,
  background: "#1e73be",
  mb: 3,
  mx: { xs: "auto", md: 0 },
};

const paraOne = {
  color: "#333",
  fontSize: { xs: "13px", md: "14px" },
  mb: 2,
  lineHeight: 1.6,
};

const paraTwo = {
  color: "#333",
  fontSize: { xs: "13px", md: "14px" },
  mb: 3,
  lineHeight: 1.6,
};

const buttonStyle = {
  background: "#005596",
  px: { xs: 2.5, md: 3 },
  py: { xs: 1, md: 1.5 },
  borderRadius: "2px",
  fontWeight: "bold",
  fontSize: { xs: "13px", md: "14px" },
  boxShadow: "none",
  color: "#fff",

  "&:hover": {
    background: "#00457a",
  },
};