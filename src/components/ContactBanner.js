import React from "react";

//mui
import { Box, Typography, Button } from "@mui/material";

const ContactBanner = () => {
  return (
    <Box sx={parentBox}>
      <Box sx={containerBox}>
        
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
  py: 3,
  borderBottom: "8px solid #e6e6e6",
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
  maxWidth: "850px",
  textAlign: { xs: "center", md: "left" },
};

const headingText = {
  color: "#fff",
  fontWeight: 700,
  fontSize: "1.8em",
  mb: 1,
};

const descriptionText = {
  color: "#ffffff",
  fontSize: "14px",
  lineHeight: 1.6,
};

const buttonStyle = {
  background: "#e0e0e0",
  color: "#000",
  fontWeight: 600,
  fontSize: "16px",
  px: 4,
  py: 1.5,
  borderRadius: "2px",
  whiteSpace: "nowrap",
  boxShadow: "none",
  "&:hover": {
    background: "#cfcfcf",
    color: "#000",
  },
};