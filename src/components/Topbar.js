// MUI
import { Box, Typography, IconButton } from "@mui/material";

// Icons
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";

const TopBar = () => {
  const menu = ["HOME", "JOURNALS", "eBOOKS", "CONFERENCES"];

  return (
    <Box sx={parentBox}>
      <Box sx={childBox}>
        
        {/* LEFT TEXT */}
        <Typography sx={textStyle}>
          Welcome to MedDocs Publishers
        </Typography>

        {/* RIGHT SECTION */}
        <Box sx={rightSection}>
          
          {/* MENU (hidden on mobile) */}
          <Box sx={menuBox}>
            {menu.map((item, index) => (
              <Typography key={index} sx={menuItem(index, menu.length)}>
                {item}
              </Typography>
            ))}
          </Box>

          {/* ICONS */}
          <Box sx={iconBox}>
            {[FacebookIcon, TwitterIcon, GoogleIcon, LinkedInIcon].map(
              (Icon, i) => (
                <IconButton key={i} size="small" sx={iconBtn}>
                  <Icon sx={{ fontSize: 16 }} />
                </IconButton>
              )
            )}
          </Box>

        </Box>
      </Box>
    </Box>
  );
};

export default TopBar;
const parentBox = {
  background: "#f5f5f5",
  borderBottom: "1px solid #ddd",
};

const childBox = {
  maxWidth: "1200px",
  margin: "0 auto",
  px: 2,
  py: 1,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  // 🔥 MOBILE FIX
  flexDirection: { xs: "column", sm: "row" },
  gap: { xs: 1, sm: 0 },
};

const textStyle = {
  fontSize: { xs: "12px", sm: "14px" },
  color: "#666",
  textAlign: { xs: "center", sm: "left" },
};

const rightSection = {
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  justifyContent: { xs: "center", sm: "flex-end" },
  gap: 1,
};

const menuBox = {
  display: {
    xs: "none",   // 🔥 hide on mobile
    md: "flex",   // show from md
  },
};

const menuItem = (index, length) => ({
  px: 2,
  fontSize: "13px",
  fontWeight: 600,
  color: "#333",
  cursor: "pointer",
  borderRight: index !== length - 1 ? "1px solid #ddd" : "none",

  "&:hover": {
    color: "#1e73be",
  },
});

const iconBox = {
  display: "flex",
  ml: { xs: 0, md: 2 },
};

const iconBtn = {
  borderLeft: "1px solid #ddd",
  borderRight: "1px solid #ddd",
  borderRadius: 0,
  px: 1,
};