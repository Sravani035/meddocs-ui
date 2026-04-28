//Mui
import { Box, Typography } from "@mui/material";

//Image/Icons
import logo from "../assets/logo.png";
import email from "../assets/email.png";
import wtsup from "../assets/whatsapp.png";


const Header = () => {
  return (
    <Box sx={parentBox}>
      <Box sx={containerBox}>
        <Box component="img" src={logo} sx={logoStyle} />

        <Box sx={rightSection}>
          <Box sx={itemWrapper}>
            <Box component="img" src={wtsup} sx={iconStyle} />
            <Box>
              <Typography sx={labelText}>Whatsapp Number</Typography>
              <Typography sx={valueText}>+1 (608) 718-6264</Typography>
            </Box>
          </Box>

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
};

const logoStyle = {
  height: 60,
};

const rightSection = {
  display: "flex",
  gap: 5,
  alignItems: "center",
};

const itemWrapper = {
  display: "flex",
  alignItems: "center",
  gap: 2,
};

const iconStyle = {
  width: 30,
};

const labelText = {
  fontSize: "15px",
  color: "#000",
};

const valueText = {
  fontSize: "14px",
  color:'#333'
};