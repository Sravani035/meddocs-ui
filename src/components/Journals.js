import React from "react";
import { Box, Typography, Button } from "@mui/material";

import addiction from "../assets/addiction.png";
import community from "../assets/community.png";
import neurology from "../assets/neurology.png";
import gastroenterology from "../assets/gastroenterology.png";
import clinicalNutrition from "../assets/clinicalNutrition.png";
import biotechnology from "../assets/biotechnology-hover.png";

const data = [
  { title: "Biotechnology", desc: "The term biotechnology is said as a technological application that modifies the products or...", icon: biotechnology },
  { title: "Clinical Nutrition", desc: "Clinical nutrition simply aims to maintain healthy energy balance in the patients and provide ..", icon: clinicalNutrition },
  { title: "Addiction and Recovery", desc: "Addiction is one of the major issues across the globe. There are several factors which leads to ..", icon: addiction },
  { title: "Community Medicine", desc: "Community medicine is a discipline of medicine which deals with the health issues of a community ..", icon: community },
  { title: "Gastroenterology and Digestive System", desc: "Gastroenterology majorly focuses on the digestive system of the humans..", icon: gastroenterology },
  { title: "Neurology and Neurological Sciences", desc: "Neurology is a medical discipline which teaches about the investigations ..", icon: neurology },
];

const Journals = () => {
  return (
    <Box sx={wrapper}>
      
      {/* LEFT PANEL */}
      <Box sx={leftPanel}>
        <Typography sx={leftHeading}>
          Open Access Peer <br /> Reviewed Journals
        </Typography>

        <Box sx={underline} />

        <Typography sx={leftText}>
          We are dedicated to publish informative journals covering various
          areas of science, medicine and latest technology. We follow open access
          policies...
        </Typography>

        <Button sx={leftButton}>
          View All Journals
        </Button>
      </Box>

      {/* RIGHT GRID */}
      <Box sx={gridContainer}>
        {data.map((item, index) => (
          <Box key={index} sx={cardBox}>
            
            <Box component="img" src={item.icon} sx={iconStyle} />

            <Typography sx={cardTitle}>
              {item.title}
            </Typography>

            <Typography sx={cardDesc}>
              {item.desc}
            </Typography>

            <Button sx={cardButton}>
              Read More
            </Button>

          </Box>
        ))}
      </Box>

    </Box>
  );
};

export default Journals;

const wrapper = {
  display: "flex",
  flexDirection: { xs: "column", md: "row" },
};

const leftPanel = {
  flex: 1,
  background: "linear-gradient(135deg, #1e73be, #3aa0d8)",
  color: "#fff",
  p: { xs: 3, md: 5 },

  // 🔥 FIX HEIGHT
  minHeight: { xs: "auto", md: 500 },

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: { xs: "center", md: "left" },
};

const leftHeading = {
  fontWeight: 700,
  fontSize: { xs: "22px", md: "30px" },
  color: "#dff2ff",
  mb: 2,
};

const underline = {
  width: 80,
  height: 2,
  background: "#fff",
  mb: 3,
  mx: { xs: "auto", md: 0 },
};

const leftText = {
  mb: 4,
  fontWeight: 500,
  lineHeight: 1.6,
  fontSize: { xs: "13px", md: "14px" },
};

const leftButton = {
  color: "#fff",
  border: "1px solid #fff",
  width: "fit-content",
  px: 3,
  py: 1,
  textTransform: "none",
  alignSelf: { xs: "center", md: "flex-start" },
};

const gridContainer = {
  flex: 2,
  display: "grid",
  gridTemplateColumns: {
    xs: "1fr",
    sm: "repeat(2, 1fr)",
    md: "repeat(3, 1fr)",
  },
};

const cardBox = {
  p: { xs: 3, md: 4 },
  textAlign: "center",
  border: "1px solid #cfe2f3",

  // 🔥 CLEAN GRID (no broken borders)
  borderRight: "none",
  borderBottom: "none",

  transition: "0.3s",

  "&:hover": {
    background: "#f7fbff",
    transform: "translateY(-3px)",
  },
};

const iconStyle = {
  width: { xs: 40, md: 50 },
  height: { xs: 40, md: 50 },
  mb: 2,
};

const cardTitle = {
  color: "#3a7ca5",
  fontWeight: 700,
  fontSize: { xs: "16px", md: "18px" },
  mb: 1,
};

const cardDesc = {
  fontSize: { xs: "13px", md: "14px" },
  color: "#666",
  mb: 2,
  lineHeight: 1.5,
};

const cardButton = {
  border: "1px solid #3a7ca5",
  color: "#6496b9",
  textTransform: "none",
  fontWeight: 600,
  fontSize: "13px",
  px: 2,
};