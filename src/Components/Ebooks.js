import React, { useRef, useEffect } from "react";

//Mui
import { Box, Typography, IconButton } from "@mui/material";


//Images/Icons
import book1 from '../assests/ebook1.jpg'
import book2 from '../assests/ebook2.jpg'
import book3 from '../assests/ebook3.jpg'
import book4 from '../assests/ebook4.jpg'
import book5 from '../assests/ebook5.jpg'
import book6 from '../assests/ebook6.jpg'
import book7 from '../assests/ebook7.jpg'
import book8 from '../assests/ebook8.jpg'
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";


const ebooks = [book1,book2,book3,book4,book5,book6,book7,book8];

const Ebooks = () => {
  const scrollRef = useRef();

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const amount = 300;

    container.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  // 🔥 AUTO SCROLL (SMOOTH LOOP)
  useEffect(() => {
    const interval = setInterval(() => {
      const container = scrollRef.current;
      if (!container) return;

      container.scrollBy({
        left: 250,
        behavior: "smooth",
      });

      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollTo({ left: 0 });
      }

    }, 10000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={parentBox}>
      
      <Box sx={headerBox}>
        <Box>
          <Typography sx={subHeading}>MEDDOCS</Typography>

          <Typography sx={mainHeading}>
            E-BOOKS{" "}
            <span style={{ fontSize: "15px", color: "#000" }}>
              / VIEW ALL E-BOOKS
            </span>
          </Typography>

          <Box sx={underline} />
        </Box>

        <Box>
          <IconButton sx={arrowBtn} onClick={() => scroll("left")}>
            <ArrowBackIosNewIcon fontSize="small" />
          </IconButton>

          <IconButton sx={arrowBtn} onClick={() => scroll("right")}>
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>

      <Box ref={scrollRef} sx={carouselBox}>
        {[...ebooks, ...ebooks].map((img, index) => (
          <Box key={index} sx={cardBox}>
            <Box component="img" src={img} sx={imageStyle} />
          </Box>
        ))}
      </Box>

    </Box>
  );
};

export default Ebooks;

const parentBox = {
  background: "#f5f5f5",
  py: 6,
};

const headerBox = {
  maxWidth: "1200px",
  margin: "0 auto",
  px: 2,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  mb: 4,
};

const subHeading = {
  color: "#0688de",
  fontWeight: 700,
  fontSize: "14px",
};

const mainHeading = {
  fontWeight: 700,
  fontSize: "2.6em",
  color: "#060606",
};

const underline = {
  width: 60,
  height: 3,
  background: "#1e73be",
  mt: 1,
};

const arrowBtn = {
  background: "#000",
  color: "#fff",
  mr: 1,
  "&:hover": { background: "#333" },
};

const carouselBox = {
  maxWidth: "1200px",
  margin: "0 auto",
  px: 2,
  display: "flex",
  gap: 3,
  overflowX: "hidden",
};

const cardBox = {
  minWidth: 200,
  height: 260,
  borderRadius: "4px",
  overflow: "hidden",
  flexShrink: 0,
  transition: "0.3s",
  "&:hover": {
    transform: "scale(1.05)",
  },
};

const imageStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};