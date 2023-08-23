import { Box, Typography } from "@mui/material";
import AboutCompImg from "../assets/coder.png";

const About = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "4rem 0",
          flexDirection: "column",
        }}
        id="about"
      >
        <Typography
          sx={{
            color: "#fff",
            fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem", lg: "2.5rem" },
            letterSpacing: "5px",
            wordSpacing: "10px",
            fontWeight: "800",
          }}
        >
          About Me
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "space-evenly" },
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            width: "100%",
            margin: {xs: "2rem 0" , lg: "1rem 0", xl: "0"},
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              width: { xs: "90%" ,md: "50%", xl: "40%"},
              padding: { xs: "1rem" , md: "3rem", xl: "5rem 1rem"},
            }}
          >
            <Typography
              component="p"
              sx={{
                color: "#fff",
                fontSize: {
                  xs: "0.8rem",
                  md: "0.9rem",
                  xl: "1rem"
                },
                textAlign: "justify",
                fontWeight: "500",
                letterSpacing: "1px",
                lineHeight: "1.5",
                marginBottom: "3vh"
              }}
            >
              Passionate Front End Developer with a strong foundation in HTML,
              CSS, and JavaScript . Currently immersed in the dynamic world of
              MERN Stack, eagerly honing my skills in MongoDB, Express.js,
              React, and Node.js.
            </Typography>

            <Typography
              component="p"
              sx={{
                color: "#fff",
                fontSize: {
                  xs: "0.8rem",
                  md: "0.9rem",
                  xl: "1rem",
                },
                textAlign: "justify",
                fontWeight: "500",
                letterSpacing: "1px",
                lineHeight: "1.5",
                mt: 3,
              }}
            >
              Aspiring to carve a successful career in software development, I
              bring a deep enthusiasm for crafting responsive and visually
              engaging user interfaces. Committed to continuous learning, I am
              eager to contribute my knowledge and creativity to innovative
              projects while leveraging my fresh perspective as a newcomer in
              the industry.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: {xs: "90%" , md: "35%"},
            }}
          >
            <Box
              component="img"
              sx={{
                width: { xs: "60%", sm: "50%", md: "90%", xl: "80%"},
                filter: "drop-shadow(5px 12px 20px grey)",
              }}
              src={AboutCompImg}
              alt="boyimg"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default About;
