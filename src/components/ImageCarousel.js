import React, { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import articale1 from '../assets/articale1.jpg'
import articale2 from '../assets/articale2.jpg'
import articale3 from '../assets/articale3.jpg'

const images = [
  { img: articale1, button: "MEDDOCS PUBLISHERS - EBOOKS" },
  { img: articale2, button: "MEDDOCS PUBLISHERS - JOURNALS" },
  { img: articale3, button: "MEDDOCS PUBLISHERS - CONFERENCES" },
];

const ImageCarousel = () => {
  const [index, setIndex] = useState(0);

  // 🔥 AUTO SCROLL
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000); // 10 seconds

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        borderRadius: "6px",
        overflow: "hidden",
      }}
    >
      {/* SLIDER */}
      <SwipeableViews index={index} onChangeIndex={setIndex}>
        {images.map((item, i) => (
          <Box key={i} sx={{ position: "relative" }}>
            <Box
              component="img"
              src={item.img}
              alt="carousel"
              sx={{
                width: "100%",
                height: "100%", // ✅ fix height consistency
                objectFit: "cover",
              }}
            />

            <Button
              variant="contained"
              sx={{
                position: "absolute",
                bottom: 20,
                left: 20,
                background: "#1e73be",
                textTransform: "none",
                fontWeight: "bold",
                px: 2,
                py: 1,
              }}
            >
              {item.button}
            </Button>
          </Box>
        ))}
      </SwipeableViews>

      {/* DOTS */}
      <Box
        sx={{
          position: "absolute",
          top: 15,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 1,
        }}
      >
        {images.map((_, i) => (
          <Box
            key={i}
            onClick={() => setIndex(i)}
            sx={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: index === i ? "#fff" : "#bbb",
              cursor: "pointer",
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ImageCarousel;