import React from "react";
import { Box, Typography } from "@mui/material";

import logo from "../assets/logo.png";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Footer = () => {
  const quickLinks = [
    "Home","About","Journals","eBooks","Conferences","FAQ's",
    "Membership","Contact Us","Submit Manuscript","Author Guidelines",
    "Join As A Reviewer","Open Access","Peer Review","Plagiarism","Publication Fee"
  ];

  const mainLinks = ["Journals","Conferences","eBooks"];
  const socialLinks = ["Facebook","Twitter","Google +"];

  return (
    <Box sx={parentBox}>
      <Box sx={containerBox}>

        {/* LOGO */}
        <Box sx={logoSection}>
          <Box component="img" src={logo} sx={logoStyle} />
          <Typography sx={copyrightText}>
            Copyright © 2018-2019 Meddocs All Rights Reserved.
          </Typography>
        </Box>

        {/* CONTACT */}
        <Box sx={columnBox}>
          <Typography sx={heading}>CONTACT US</Typography>

          <Box sx={row}>
            <LocationOnIcon sx={iconStyle} />
            <Typography sx={addressText}>
              MedDocs Publishers LLC <br />
              Suite 200-A, 401 Ryland St, Reno, NV 89502 <br />
              United States
            </Typography>
          </Box>

          <Box sx={row}>
            <EmailIcon sx={iconStyle} />
            <Typography sx={text}>support@meddocsonline.org</Typography>
          </Box>

          <Box sx={row}>
            <LanguageIcon sx={iconStyle} />
            <Typography sx={text}>www.meddocsonline.org</Typography>
          </Box>
        </Box>

        {/* QUICK LINKS */}
        <Box sx={columnBox}>
          <Typography sx={heading}>QUICK LINKS</Typography>

          {quickLinks.map((item, i) => (
            <Typography key={i} sx={linkText}>
              {item}
            </Typography>
          ))}
        </Box>

        {/* MAIN LINKS */}
        <Box sx={columnBox}>
          <Typography sx={heading}>MAIN LINKS</Typography>

          {mainLinks.map((item, i) => (
            <Typography key={i} sx={linkText}>
              {item}
            </Typography>
          ))}

          <Typography sx={headingWithMargin}>FOLLOW US</Typography>

          {socialLinks.map((item, i) => (
            <Typography key={i} sx={linkText}>
              {item}
            </Typography>
          ))}
        </Box>

      </Box>
    </Box>
  );
};

export default Footer;

const parentBox = {
  background: "#f5f5f5",
  pt: { xs: 4, md: 6 },
  pb: { xs: 3, md: 4 },
};

const containerBox = {
  maxWidth: "1200px",
  margin: "0 auto",
  px: 2,
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  gap: { xs: 3, md: 4 },
};

const logoSection = {
  flex: "1 1 250px",
  textAlign: { xs: "center", md: "left" },
};

const logoStyle = {
  width: { xs: 140, md: 180 },
  mb: 2,
};

const copyrightText = {
  color: "#666",
  fontSize: { xs: "12px", md: "14px" },
};

const columnBox = {
  flex: "1 1 200px",
  textAlign: { xs: "center", md: "left" },
};

const heading = {
  fontWeight: 800,
  color: "#000",
  fontSize: { xs: "16px", md: "18px" },
  mb: 2,
};

const headingWithMargin = {
  ...heading,
  mt: 3,
};

const row = {
  display: "flex",
  gap: 1,
  mb: 1,
  alignItems: "flex-start",
  justifyContent: { xs: "center", md: "flex-start" },
};

const iconStyle = {
  fontSize: { xs: 16, md: 18 },
  mt: "2px",
};

const addressText = {
  fontSize: { xs: "12px", md: "14px" },
  color: "#666",
  lineHeight: 1.6,
};

const text = {
  fontSize: { xs: "12px", md: "14px" },
  color: "#555",
};

const linkText = {
  fontSize: { xs: "12px", md: "14px" },
  color: "#636162",
  mb: 1,
  cursor: "pointer",
  transition: "0.3s",

  "&:hover": {
    color: "#1e73be",
    transform: "translateX(3px)",
  },
};