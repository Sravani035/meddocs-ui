import React from "react";

//Mui
import { Box, Typography, Button } from "@mui/material";

//Images/Icons
import conferenceimg from "../assets/conferenceimg.png";

const Conferences = () => {
  return (
    <Box sx={parentBox}>
      <Box sx={containerBox}>

        <Box sx={leftBox}>
          <Box component="img" src={conferenceimg} sx={imageStyle} />
        </Box>

        <Box sx={rightBox}>
          <Typography sx={subHeading}>MEDDOCS</Typography>

          <Typography sx={mainHeading}>CONFERENCES</Typography>

          <Box sx={underline} />

          <Typography sx={paraOne}>
            We have a wing which is dedicated to organize international
            conferences in various parts of the world. It provides a great
            platform for face to face discussions on various latest advancements.
            The organizing committee leads the conference in the most fruitful
            manner. Proper scientific agenda is being fixed for each conference
            while organizing.
          </Typography>

          <Typography sx={paraTwo}>
            These conferences are being organized with the necessary cooperation
            of the learned societies, the industry leading companies and various
            scholarly associations which also provides an active forum to the
            various scientific communities in order to share the newly discovered
            ideas and knowledge that ultimately works for the betterment of the
            society and humanity as a whole.
          </Typography>

          <Button sx={buttonStyle}>READ MORE</Button>
        </Box>

      </Box>
    </Box>
  );
};

export default Conferences;

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
  width: "100%",
  height: { xs: 250, md: 400 },
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
  background: "#1e73be",
  mb: 3,
};

const paraOne = {
  color: "#333",
  fontSize: "14px",
  mb: 2,
};

const paraTwo = {
  color: "#333",
  fontSize: "14px",
  mb: 3,
};

const buttonStyle = {
  background: "#005596",
  px: 3,
  py: 1.5,
  borderRadius: "2px",
  fontWeight: "bold",
  fontSize: "14px",
  boxShadow: "none",
  color:'#fff',
  "&:hover": {
    background: "#00457a",
      color:'#fff'

  },
};