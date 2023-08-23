import { Box, Button, Typography } from "@mui/material";
import HeaderImg from "../assets/shubham.png";

const HeroSection = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", md: "center", lg: "space-between" },
          alignItems: "center",
          flexDirection: { xs: "column", lg: "row" },
          margin: { xs: "3rem 0", lg: "0 5rem" },
          height: {xs: "100%", md: "100vh"},
        }}
      >
        <Box
          sx={{ 
            display: "flex",
            justifyContent: "center",
            alignItems: {xs: "center", lg: "flex-start" },
            flexDirection: "column",
            width: "100%"
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "1rem",
                sm: "1.2rem",
                lg: "1.5rem",
                xl: "1.8rem",
              },
              textAlign: {xs: "center", lg: "left"},
              color: "#fff",
              fontWeight: "800",
              letterSpacing: "5px",
              mb: 2,
              padding: "1rem 0",
              width: "100%",
            }}
          >
            Hi 👋🏻, I am Shubham
          </Typography>

          <Typography
            sx={{
              fontSize: {xs: "1.5rem", sm: "2.5rem", md: "2.8rem", lg: "2.8rem", xl:"3.2rem"},
              width: "100%",
              textAlign: {xs: "center", lg: "left"},
              borderRadius: "8px",
              fontWeight: "800",
              textShadow: "8px 9px 8px rgba(0,0,0,0.55)",
              wordSpacing: "0.5rem",
              margin: "1rem 0"
            }}
            className="gradient-text"
          >
            Front End Developer
          </Typography>

          <Button
            component="a"
            href="https://drive.google.com/drive/folders/1TwfYL1Ydyg4zCiiTSEKKfASLb54f8T8a?usp=sharing"
            target="_blank"
            className="btn"
            sx={{ mt: 4, padding: { xs: "0 0.5rem", lg: "0 1rem" } }}
          >
            Resume
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src={HeaderImg}
            sx={{
              margin: {xs: "3rem 0", lg: "2rem"},
              width: { xs: "80%",  sm: "70%" , lg: "100%"},
              filter: "drop-shadow(8px 8px 15px grey)",
              animation: "imagemove 4s 0.2s infinite",
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default HeroSection;
