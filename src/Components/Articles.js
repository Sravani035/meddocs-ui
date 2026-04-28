import React from "react";
//mui
import { Box, Typography, Divider } from "@mui/material";

//components
import ImageCarousel from "../Components/ImageCarousel.js";

const articles = [
  {
    title:
      "Effects of SGLT2 Inhibitor on Neurohormonal Activity and Electrolyte Management in an Elderly Patient with Type 2 Diabetes Mellitus and Acute Heart Failure: A Case Report",
    author: "Hajime Kataoka",
    journal:
      "ANNALS OF CARDIOLOGY AND VASCULAR MEDICINE (ISSN: 2639-4383)",
  },
  {
    title:
      "A Review of the Gastrointestinal Effects Associated with COVID-19 Infections",
    author: "Bailey Reid; Allyson L Spence; Cassandra Stroup",
    journal:
      "ANNALS OF GASTROENTEROLOGY AND THE DIGESTIVE SYSTEM (ISSN: 2637-4501)",
  },
  {
    title:
      "Nanoparticles Mitigate Retinal Pigment Epithelium (RPE) Death-Using APRE19 Cell Model",
    author: "Eric Dahl; Nikolaos E Efstathiou; Amit K Roy",
    journal: "JOURNAL OF NANOMEDICINE (ISSN: 2578-8760)",
  },
];

const Articles = () => {
  return (
    <Box sx={parentBox}>
      <Box sx={containerBox}>
        
        <Box sx={leftBox}>
          <ImageCarousel />
        </Box>

        <Box sx={rightBox}>
          <Typography sx={headingText}>ARTICLES</Typography>

          {articles.map((item, index) => (
            <Box key={index} sx={articleItem}>
              <Typography sx={titleText}>{item.title}</Typography>

              <Typography sx={authorText}>{item.author}</Typography>

              <Box sx={journalTag}>{item.journal}</Box>

              {index !== articles.length - 1 && (
                <Divider sx={dividerStyle} />
              )}
            </Box>
          ))}
        </Box>

      </Box>
    </Box>
  );
};

export default Articles;

const parentBox = {
  background: "#0d3b66",
  py: 6,
};

const containerBox = {
  maxWidth: "1200px",
  margin: "0 auto",
  px: 2,
  display: "flex",
  gap: 4,
  flexDirection: { xs: "column", md: "row" },
};

const leftBox = {
  flex: 1,
  maxWidth: { md: "35%" },
};

const rightBox = {
  flex: 2,
};

const headingText = {
  color: "#fff",
  fontWeight: 600,
  fontSize: "25px",
  mb: 3,
};

const articleItem = {
  mb: 3,
};

const titleText = {
  color: "#d2edff",
  fontSize: "18px",
  fontWeight: 600,
};

const authorText = {
  color: "#9ec9ff",
  fontSize: "13px",
  fontWeight: 400,
  fontStyle: "italic",
  mt: 1,
};

const journalTag = {
  display: "inline-block",
  mt: 1.5,
  px: 2,
  py: "4px",
  borderRadius: "5px",
  background: "#003",
  color: "#CCC",
  fontSize: "13px",
};

const dividerStyle = {
  mt: 2,
  borderColor: "#2a5a85",
};