import React from "react";
import { Box, Typography, Button } from "@mui/material";

const ContactBanner = () => {
  return (
    <Box sx={parentBox}>
      <Box sx={containerBox}>
        
        {/* TEXT */}
        <Box sx={textWrapper}>
          <Typography sx={headingText}>
            MEDDOCS PUBLISHERS
          </Typography>

          <Typography sx={descriptionText}>
            We always work towards offering the best to you. For any queries,
            please feel free to get in touch with us. Also you may post your
            valuable feedback after reading our journals, ebooks and after
            visiting our conferences.
          </Typography>
        </Box>

        {/* BUTTON */}
        <Button sx={buttonStyle}>
          CONTACT US
        </Button>

      </Box>
    </Box>
  );
};

export default ContactBanner;

const parentBox = {
  background: "#1e88c8",
  py: { xs: 3, md: 4 },
  borderBottom: "8px solid #e6e6e6",
};

const containerBox = {
  maxWidth: "1200px",
  margin: "0 auto",
  px: 2,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  // 🔥 responsive layout
  flexDirection: { xs: "column", md: "row" },
  gap: { xs: 2, md: 3 },

  textAlign: { xs: "center", md: "left" },
};

const textWrapper = {
  maxWidth: "850px",
};

const headingText = {
  color: "#fff",
  fontWeight: 700,
  fontSize: { xs: "20px", md: "28px" }, // 🔥 responsive
  mb: 1,
};

const descriptionText = {
  color: "#ffffff",
  fontSize: { xs: "13px", md: "14px" },
  lineHeight: 1.6,
};

const buttonStyle = {
  background: "#e0e0e0",
  color: "#000",
  fontWeight: 600,

  // 🔥 responsive button
  fontSize: { xs: "14px", md: "16px" },
  px: { xs: 3, md: 4 },
  py: { xs: 1, md: 1.5 },

  borderRadius: "2px",
  whiteSpace: "nowrap",
  boxShadow: "none",

  mt: { xs: 1, md: 0 },

  "&:hover": {
    background: "#cfcfcf",
  },
};