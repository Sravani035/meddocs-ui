import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Box,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const menuItems = [
  "HOME",
  "ABOUT US",
  "JOURNALS",
  "eBOOKS",
  "CONFERENCES",
  "FAQ's",
  "MEMBERSHIP",
  "INDEXING",
  "CONTACT US",
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box>
      {/* TOP NAVBAR */}
      <AppBar position="sticky" sx={parentBox}>
        <Toolbar sx={toolbarStyle}>
          
          {/* MOBILE ICON */}
          <IconButton
            sx={{ display: { xs: "block", md: "none" }, color: "#fff",ml: "auto"  }}
            onClick={() => setOpen(!open)}
          >
            <MenuIcon />
          </IconButton>

          {/* DESKTOP MENU */}
          <Box sx={desktopMenu}>
            {menuItems.map((item, index) => (
              <Button key={index} sx={textStyle}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* 🔥 DROPDOWN MENU (OPENS DOWN) */}
      {open && (
        <Box sx={mobileMenu}>
          {menuItems.map((item, index) => (
            <Typography key={index} sx={mobileItem}>
              {item}
            </Typography>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Navbar;

const parentBox = {
  backgroundColor: "#1e73be",
  //  top: 0,
  // zIndex: 999,   // 🔥 IMPORTANT

};

const toolbarStyle = {
  maxWidth: "1200px",
  // width: "100%",
  margin: { xs: "0", md: "0 auto" },
  display: "flex",
  justifyContent: "space-between",
};

const desktopMenu = {
  display: { xs: "none", md: "flex" },
  gap: 2,
};

const textStyle = {
  color: "#fff",
  fontWeight: 600,
  fontSize: "14px",
};

/* 🔥 MOBILE DROPDOWN */
const mobileMenu = {
  display: { xs: "block", md: "none" },
  background: "#1e73be",
}
;

const mobileItem = {
  color: "#fff",
  fontSize: "16px",
  fontWeight: 600,
  px: 3,
  py: 2,
  borderBottom: "1px solid rgba(255,255,255,0.2)",
  cursor: "pointer",

  "&:hover": {
    background: "#155a96",
  },
};