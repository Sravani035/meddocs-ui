import React from "react";

//mui
import { Box, Typography, Button } from "@mui/material";

//Components
import aboutImg from "../assets/abouUs.jpg";

const About = () => {
  return (
    <Box sx={parentBox}>
      <Box sx={containerBox}>
        
        <Box sx={leftBox}>
          <Typography sx={subHeading}>WELCOME TO MEDDOCS</Typography>

          <Typography sx={mainHeading}>ABOUT US</Typography>

          <Box sx={underline} />

          <Typography sx={descriptionText}>
            MedDocs Publishers is a very well-dedicated in publishing various
            informative medical journals which acts as a powerhouse to bring the
            physicians and the entire medical fraternity the best research with
            latest discovered key information in a completely understandable and
            clinically useful format. This is certainly a career companion for
            all physicians and medical researchers. The practicing physicians can
            be well informed about the various new developments in the field
            which is very necessary to treat patients in the best possible way.
          </Typography>

          <Button sx={buttonStyle}>READ MORE</Button>
        </Box>

        {/* RIGHT IMAGE */}
        <Box sx={rightBox}>
          <Box component="img" src={aboutImg} sx={imageStyle} />
        </Box>

      </Box>
    </Box>
  );
};

export default About;

const parentBox = {
  background: "#f5f5f5",
  py: 8,
};

const containerBox = {
  maxWidth: "1200px",
  margin: "0 auto",
  px: 2,
  display: "flex",
  gap: 6,
  alignItems: "center",
  flexDirection: { xs: "column", md: "row" },
};

const leftBox = {
  flex: 1,
};

const rightBox = {
  flex: 1,
};

const imageStyle = {
  width: "100%",       // 🔥 important fix
  height: 350,
  objectFit: "cover",
  borderRadius: "4px",
};

const subHeading = {
  color: "#0688de",
  fontWeight: 700,
  fontSize: "14px",
  mb: 1,
};

const mainHeading = {
  fontWeight: 700,
  fontSize: "2.6em",
  color: "#060606",
  mb: 2,
};

const underline = {
  width: 60,
  height: 3,
  background: "#0688de",
  mb: 3,
};

const descriptionText = {
  color: "#000",
  fontSize: "14px",
  lineHeight: 1.7,
  mb: 3,
};

const buttonStyle = {
  background: "#1e73be",
  px: 3,
  py: 1.5,
  borderRadius: "2px",
  fontWeight: "bold",
  boxShadow: "none",
  color:'#fff',
  "&:hover": {
    background: "#155a96",
      color:'#fff',

  },
};