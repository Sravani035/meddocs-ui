
//mui
import { Divider } from "@mui/material";

//components used
import TopBar from "../Components/TopBar";
import Header from "../Components/Header";
import Navbar from "../Components/NavBar";
import About from "../Components/About";
import Ebooks from "../Components/Ebooks";
import Footer from "../Components/Footer";
import Journals from "../Components/Journals";
import Articles from "../Components/Articles";
import InfoBanner from "../Components/InfoBanner";
import Conferences from "../Components/Conferences";
import ContactBanner from "../Components/ContactBanner";
import PartnerCarousel from "../Components/PartnerCarousel "


const Home = () => {
  return (
    <>
      <TopBar />
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