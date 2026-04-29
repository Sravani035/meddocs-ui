
//mui
import { Divider } from "@mui/material";

//components used
import TopBar from "../components/Topbar";
import Header from "../components/Header";
import Navbar from "../components/NavBar";
import About from "../components/About";
import Ebooks from "../components/Ebooks";
import Footer from "../components/Footer";
import Journals from "../components/Journals";
import Articles from "../components/Articles";
import InfoBanner from "../components/InfoBanner";
import Conferences from "../components/Conferences";
import ContactBanner from "../components/ContactBanner";
import PartnerCarousel from "../components/PartnerCarousel "
import { Box } from "@mui/material";


const Home = () => {
  return (
    <>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <TopBar />
      </Box>
      <Header />
      <Navbar />   
      <Articles />
      <InfoBanner />
      <About />
      <Journals />
      <Ebooks />
      <Conferences />
      <ContactBanner />
      <Footer />
      <Divider/>
      <PartnerCarousel/>
    </>
  );
};

export default Home;