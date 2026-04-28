// MUI
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const menu = [
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
    <>
      <AppBar position="sticky" sx={parentBox}>
        <Toolbar sx={toolbarStyle}>
          
          {/* MOBILE MENU BUTTON */}
          <IconButton
            sx={{ display: { xs: "block", md: "none" }, color: "#fff" }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>

          {/* DESKTOP MENU */}
          <Box sx={menuBox}>
            {menu.map((item, index) => (
              <Button key={index} sx={textStyle}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 250 }}>
          <List>
            {menu.map((item, index) => (
              <ListItem
                button
                key={index}
                onClick={() => setOpen(false)}
              >
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;

const parentBox = {
  backgroundColor: "#1e73be",
};

const toolbarStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
};

const menuBox = {
  display: {
    xs: "none", // hide on mobile
    md: "flex", // show on desktop
  },
  gap: 2,
};

const textStyle = {
  color: "#fff",
  fontWeight: 600,
  fontSize: "14px",
  textTransform: "none",

  "&:hover": {
    backgroundColor: "#155a96",
  },
};