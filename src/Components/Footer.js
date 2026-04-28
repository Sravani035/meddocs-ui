import React from "react";

//Mui
import { Box, Typography } from "@mui/material";

//Images/Icon
import logo from "../assests/logo.png";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";
import LocationOnIcon from "@mui/icons-material/LocationOn";


const Footer = () => {
  const quickLinks = [
  "Home", "About", "Journals", "eBooks", "Conferences", "FAQ's",
  "Membership", "Contact Us", "Submit Manuscript", "Author Guidelines",
  "Join As A Reviewer", "Open Access", "Peer Review", "Plagiarism", "Publication Fee"
];

const mainLinks = ["Journals", "Conferences", "eBooks"];

const socialLinks = ["Facebook", "Twitter", "Google +"];
  return (
    <Box sx={parentBox}>
      <Box sx={containerBox}>

        <Box sx={logoSection}>
          <Box component="img" src={logo} sx={logoStyle} />
          <Typography sx={copyrightText}>
            Copyright © 2018-2019 Meddocs All Rights Reserved.
          </Typography>
        </Box>

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

        <Box sx={columnBox}>
          <Typography sx={heading}>QUICK LINKS</Typography>

          {quickLinks.map((item, i) => (
            <Typography key={i} sx={linkText}>
              {item}
            </Typography>
          ))}
        </Box>

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
  pt: 6,
  pb: 4,
};

const containerBox = {
  maxWidth: "1200px",
  margin: "0 auto",
  px: 2,
  display: "flex",
  justifyContent: "space-between",
  gap: 4,
  flexWrap: "wrap",
};

const logoSection = {
  flex: "1 1 250px",
  textAlign: "center",
};

const logoStyle = {
  width: 180,
  mb: 2,
};

const copyrightText = {
  color: "#666",
  fontSize: "14px",
};

const columnBox = {
  flex: "1 1 200px",
};

const heading = {
  fontWeight: 800,
  color: "#000",
  fontSize: "18px",
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
};

const iconStyle = {
  fontSize: "18px",
  mt: "2px",
};

const addressText = {
  fontSize: "14px",
  color: "#666",
  lineHeight: 1.6,
};

const text = {
  fontSize: "14px",
  color: "#555",
};

const linkText = {
  fontSize: "14px",
  color: "#636162",
  mb: 1,
  cursor: "pointer",
  transition: "0.3s",
  "&:hover": {
    color: "#1e73be",
    transform: "translateX(3px)", 
  },
};