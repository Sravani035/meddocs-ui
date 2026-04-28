import React from "react";

//Mui
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
      <Typography
        sx={textStyleone}
      >
        Partnered Content Networks
      </Typography>

      <Box
        sx={scrollContainer}
      >
        {[...items, ...items].map((item, index) => (
          <Box
            key={index}
            sx={scrollItem}
          >
            {item}
          </Box>
        ))}
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

const parentBox = { py: 6, background: "#f5f5f5", overflow: "hidden" }
const textStyleone={
          textAlign: "center",
          fontWeight: 700,
          fontSize: '18px',
          color:'#000',
          mb: 4,
}
const scrollContainer={
          display: "flex",
          width: "max-content",
          animation: "scroll 20s linear infinite",
}

const scrollItem={
              minWidth: 220,
              height: 60,
              border: "1px solid #ddd",
              borderRadius: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mx: 2,
              background: "#fff",
              fontSize: "18px",
              color: "#555",
            }