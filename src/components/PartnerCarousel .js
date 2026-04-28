import React from "react";
import { Box, Typography } from "@mui/material";

const items = [
  "Dark Biotechnology",
  "Pollution Toxicology",
  "Cell Biology",
  "Bioanalytical Research",
  "Renal Disorders",
  "The Astrophysics",
];

const PartnerCarousel = () => {
  return (
    <Box sx={parentBox}>
      
      <Typography sx={heading}>
        Partnered Content Networks
      </Typography>

      <Box sx={scrollWrapper}>
        <Box sx={scrollContainer}>
          {[...items, ...items].map((item, index) => (
            <Box key={index} sx={scrollItem}>
              {item}
            </Box>
          ))}
        </Box>
      </Box>

      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </Box>
  );
};

export default PartnerCarousel;

const parentBox = {
  py: { xs: 4, md: 6 },
  background: "#f5f5f5",
  overflow: "hidden",
};

const heading = {
  textAlign: "center",
  fontWeight: 700,
  fontSize: { xs: "16px", md: "18px" },
  color: "#000",
  mb: { xs: 3, md: 4 },
};

const scrollWrapper = {
  overflow: "hidden",
};

const scrollContainer = {
  display: "flex",
  width: "max-content",
  animation: "scroll 20s linear infinite",

  // 🔥 pause on hover (important UX)
  "&:hover": {
    animationPlayState: "paused",
  },
};

const scrollItem = {
  minWidth: { xs: 140, sm: 180, md: 220 },
  height: { xs: 50, md: 60 },

  border: "1px solid #ddd",
  borderRadius: "6px",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  mx: { xs: 1, md: 2 },

  background: "#fff",

  fontSize: { xs: "12px", md: "14px" },
  color: "#555",

  whiteSpace: "nowrap",

  transition: "0.3s",

  "&:hover": {
    background: "#eaf4ff",
    transform: "translateY(-2px)",
  },
};