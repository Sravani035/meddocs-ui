// Mui
import { Box, Typography } from "@mui/material";

// Images
import logo from "../assets/logo.png";
import email from "../assets/email.png";
import wtsup from "../assets/whatsapp.png";

const Header = () => {
  return (
    <Box sx={parentBox}>
      <Box sx={containerBox}>
        
        {/* LOGO */}
        <Box
          component="img"
          src={logo}
          sx={logoStyle}
        />

        {/* RIGHT SECTION */}
        <Box sx={rightSection}>
          
          {/* WHATSAPP */}
          <Box sx={itemWrapper}>
            <Box component="img" src={wtsup} sx={iconStyle} />
            <Box>
              <Typography sx={labelText}>
                Whatsapp Number
              </Typography>
              <Typography sx={valueText}>
                +1 (608) 718-6264
              </Typography>
            </Box>
          </Box>

          {/* EMAIL */}
          <Box sx={itemWrapper}>
            <Box component="img" src={email} sx={iconStyle} />
            <Box>
              <Typography sx={labelText}>EMAIL</Typography>
              <Typography sx={valueText}>
                support@meddocsonline.org
              </Typography>
            </Box>
          </Box>

        </Box>
      </Box>
    </Box>
  );
};

export default Header;

const parentBox = {
  borderBottom: "1px solid #eee",
};

const containerBox = {
  maxWidth: "1200px",
  margin: "0 auto",
  px: 2,
  py: 2,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  // 🔥 RESPONSIVE FIX
  flexDirection: {
    xs: "column",
    sm: "column",
    md: "row",
  },

  gap: {
    xs: 2,
    sm: 2,
    md: 0,
  },

  textAlign: {
    xs: "center",
    md: "left",
  },
};

const logoStyle = {
  height: {
    xs: 50,
    sm: 55,
    md: 60,
  },
};

const rightSection = {
  display: "flex",
  alignItems: "center",

  // 🔥 RESPONSIVE
  flexDirection: {
    xs: "column",
    sm: "row",
  },

  gap: {
    xs: 2,
    sm: 4,
    md: 5,
  },

  justifyContent: {
    xs: "center",
    md: "flex-end",
  },
};

const itemWrapper = {
  display: "flex",
  alignItems: "center",
  gap: 2,

  // 🔥 MOBILE CENTER
  justifyContent: {
    xs: "center",
    md: "flex-start",
  },
};

const iconStyle = {
  width: {
    xs: 24,
    md: 30,
  },
};

const labelText = {
  fontSize: {
    xs: "13px",
    md: "15px",
  },
  color: "#000",
  fontWeight: 500,
};

const valueText = {
  fontSize: {
    xs: "12px",
    md: "14px",
  },
  color: "#333",

  // 🔥 Prevent overflow
  wordBreak: "break-word",
};