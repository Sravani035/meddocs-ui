import React from "react";

//Mui
import { Box, Typography, Button } from "@mui/material";

//Images/Icons
import addiction from "../assests/addiction.png";
import community from "../assests/community.png";
import neurology from "../assests/neurology.png";
import gastroenterology from "../assests/gastroenterology.png";
import clinicalNutrition from "../assests/clinicalNutrition.png";
import biotechnology from "../assests/biotechnology-hover.png";



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
      
      <Box sx={leftPanel}>
        <Typography sx={leftHeading}>
          Open Access Peer <br /> Reviewed Journals
        </Typography>

        <Box sx={underline} />

        <Typography sx={leftText}>
          We are dedicated to publish informative journals covering various
          areas of science, medicine and latest technology. We follow open access
          policies. All our published journals are peer-reviewed academic and
          scholarly articles...
        </Typography>

        <Button sx={leftButton}>View All Journals</Button>
      </Box>

      <Box sx={gridContainer}>
        {data.map((item, index) => (
          <Box key={index} sx={cardBox(index)}>
            
            <Box component="img" src={item.icon} sx={iconStyle} />

            <Typography sx={cardTitle}>{item.title}</Typography>

            <Typography sx={cardDesc}>{item.desc}</Typography>

            <Button sx={cardButton}>Read More</Button>

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
  p: 5,
  minHeight: 500,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

const leftHeading = {
  fontWeight: 700,
  fontSize: "30px",
  color: "#dff2ff",
  mb: 2,
};

const underline = {
  width: 80,
  height: 2,
  background: "#fff",
  mb: 3,
};

const leftText = {
  mb: 4,
  fontWeight: 500,
  color: "#fff",
  lineHeight: 1.6,
};

const leftButton = {
  color: "#fff",
  border: "1px solid #fff",
  width: "fit-content",
  px: 3,
  py: 1,
  textTransform: "none",
};

const gridContainer = {
  flex: 2,
  display: "grid",
  gridTemplateColumns: { xs: "1fr", sm: "repeat(2,1fr)", md: "repeat(3,1fr)" },
  borderLeft: "1px solid #cfe2f3",
};

const cardBox = (index) => ({
  p: 4,
  textAlign: "center",
  borderBottom: "1px solid #cfe2f3",
  borderRight: (index + 1) % 3 !== 0 ? "1px solid #cfe2f3" : "none",
  transition: "0.3s",
  "&:hover": {
    background: "#f7fbff",
  },
});

const iconStyle = {
  width: 50,
  height: 50,
  mb: 2,
};

const cardTitle = {
  color: "#3a7ca5",
  fontWeight: 700,
  fontSize: "18px",
  mb: 1,
};

const cardDesc = {
  fontSize: "14px",
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