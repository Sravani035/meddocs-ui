import React, { useRef, useEffect } from "react";
import { Box, Typography, IconButton } from "@mui/material";

import book1 from "../assets/ebook1.jpg";
import book2 from "../assets/ebook2.jpg";
import book3 from "../assets/ebook3.jpg";
import book4 from "../assets/ebook4.jpg";
import book5 from "../assets/ebook5.jpg";
import book6 from "../assets/ebook6.jpg";
import book7 from "../assets/ebook7.jpg";
import book8 from "../assets/ebook8.jpg";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ebooks = [book1, book2, book3, book4, book5, book6, book7, book8];

const Ebooks = () => {
  const scrollRef = useRef();

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const amount =
      window.innerWidth < 600 ? 180 : 300; // 🔥 responsive scroll

    container.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  // 🔥 AUTO SCROLL
  useEffect(() => {
    const interval = setInterval(() => {
      const container = scrollRef.current;
      if (!container) return;

      const amount =
        window.innerWidth < 600 ? 180 : 250;

      container.scrollBy({
        left: amount,
        behavior: "smooth",
      });

      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollTo({ left: 0 });
      }
    }, 4000); // smoother timing

    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={parentBox}>
      
      {/* HEADER */}
      <Box sx={headerBox}>
        <Box>
          <Typography sx={subHeading}>MEDDOCS</Typography>

          <Typography sx={mainHeading}>
            E-BOOKS{" "}
            <span style={{ fontSize: "14px" }}>
              / VIEW ALL E-BOOKS
            </span>
          </Typography>

          <Box sx={underline} />
        </Box>

        {/* ARROWS */}
        <Box sx={arrowWrapper}>
          <IconButton sx={arrowBtn} onClick={() => scroll("left")}>
            <ArrowBackIosNewIcon fontSize="small" />
          </IconButton>

          <IconButton sx={arrowBtn} onClick={() => scroll("right")}>
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>

      {/* CAROUSEL */}
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
  py: { xs: 4, md: 6 },
};

const headerBox = {
  maxWidth: "1200px",
  margin: "0 auto",
  px: 2,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  flexDirection: { xs: "column", sm: "row" },
  gap: { xs: 2, sm: 0 },

  mb: 4,
};

const subHeading = {
  color: "#0688de",
  fontWeight: 700,
  fontSize: { xs: "12px", md: "14px" },
};

const mainHeading = {
  fontWeight: 700,
  fontSize: { xs: "22px", md: "2.6em" },
  color: "#060606",
};

const underline = {
  width: 60,
  height: 3,
  background: "#1e73be",
  mt: 1,
};

const arrowWrapper = {
  display: "flex",
  justifyContent: { xs: "center", sm: "flex-end" },
};

const arrowBtn = {
  background: "#000",
  color: "#fff",
  mr: 1,

  // 🔥 smaller on mobile
  width: { xs: 30, md: 40 },
  height: { xs: 30, md: 40 },

  "&:hover": { background: "#333" },
};

const carouselBox = {
  maxWidth: "1200px",
  margin: "0 auto",
  px: 2,
  display: "flex",
  gap: { xs: 2, md: 3 },
  overflow: "hidden",
};

const cardBox = {
  minWidth: { xs: 140, sm: 180, md: 200 },
  height: { xs: 200, sm: 240, md: 260 },
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