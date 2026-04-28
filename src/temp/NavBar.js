//mui
import { AppBar, Toolbar, Button } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar
      position="sticky"   
      sx={parentBox}
    >
      <Toolbar sx={{ display: "flex", gap: 3 }}>
        <Button color="inherit" sx={textStyle}>HOME</Button>
        <Button color="inherit" sx={textStyle}>ABOUT US</Button>
        <Button color="inherit" sx={textStyle}>JOURNALS</Button>
        <Button color="inherit" sx={textStyle}>eBOOKS</Button>
        <Button color="inherit" sx={textStyle}>CONFERENCES</Button>
        <Button color="inherit" sx={textStyle}>FAQ's</Button>
        <Button color="inherit" sx={textStyle}>MEMBERSHIP</Button>
        <Button color="inherit" sx={textStyle}>INDEXING</Button>
        <Button color="inherit" sx={textStyle}>CONTACT US</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

const parentBox = {
  backgroundColor: "#1e73be",
  maxWidth: "1200px",
  margin: "0 auto",
}

const textStyle = {
  fontWeight: 600,
  fontSize:'16px'
}