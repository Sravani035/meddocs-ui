//mui 
import { Box, Typography, IconButton } from "@mui/material";
//Images/Icons
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";



const TopBar = () => {
  const menu = ["HOME", "JOURNALS", "eBOOKS", "CONFERENCES"];

  return (
    <Box
      sx={parentBox}
    >
      <Box
        sx={childBox}
      >
        <Typography sx={textStyle1}>
          Welcome to MedDocs Publishers
        </Typography>

        <Box sx={rightSection}>
          
          <Box sx={{ display: "flex" }}>
            {menu.map((item, index) => (
              <Typography
                key={index}
                sx={ {px: 2,
                  fontSize: "13px",
                  fontWeight:600,
                  color: "#333",
                  cursor: "pointer",
                  borderRight:
                    index !== menu.length - 1
                      ? "1px solid #ddd"
                      : "none",
                  "&:hover": {
                    color: "#1e73be",
                  }}}
              >
                {item}
              </Typography>
            ))}
          </Box>

          <Box sx={{ display: "flex", ml: 2 }}>
            {[FacebookIcon, TwitterIcon, GoogleIcon, LinkedInIcon].map(
              (Icon, i) => (
                <IconButton
                  key={i}
                  size="small"
                  sx={{
                    borderLeft: "1px solid #ddd",
                    borderRight: "1px solid #ddd",
                    borderRadius: 0,
                    px: 1,
                  }}
                >
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

const parentBox={
        background: "#f5f5f5",
        borderBottom: "1px solid #ddd",
}

const childBox={
          maxWidth: "1200px",
          margin: "0 auto",
          px: 2,
          py: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }

const textStyle1 = {
  fontSize: '14px',
  color:'#666'
}

const rightSection = { display: "flex", alignItems: "center" }

const tabStyle={
                  
                }