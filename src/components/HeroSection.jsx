import { Box, Button, Typography } from "@mui/material";
import HeaderImg from "../assets/shubham-more-img.png";

const HeroSection = () => {
  const badges = [
    { label: "Full Stack Development", y: 50, x: 85 },
    { label: "Web Development", y: 100, x: 120 },
    { label: "App Development", y: 200, x: 80 },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        overflowX: "hidden", // prevent horizontal scroll
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: { xs: 3, sm: 4, md: 6 },
        bgcolor: "transparent",
        mt: { xs: 4, md: 0 },
      }}
    >
      <Box
        sx={{
          width: "100%",
          borderRadius: 3,
          position: "relative",
          overflow: "visible",
          display: "flex",
          gap: 4,
          alignItems: "center",

          // mobile -> column, desktop -> row
          flexDirection: { xs: "column", md: "row" },
          px: { xs: 1, md: 4 },
          py: { xs: 4, md: 6 },
        }}
      >
        {/* LEFT */}
        <Box
          sx={{
            flex: "1 1 55%",
            zIndex: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
            textAlign: { xs: "center", md: "left" },
            gap: 2,
            width: { xs: "100%", md: "55%" },
          }}
        >
          <Typography
            variant="overline"
            sx={{
              color: "rgba(255,255,255,0.65)",
              letterSpacing: 2.5,
              fontWeight: 700,
            }}
          >
            hello there, welcome to my site
          </Typography>

          <Typography
            component="h1"
            sx={{
              fontSize: { xs: "1.8rem", sm: "2.4rem", md: "3.2rem" },
              fontWeight: 900,
              lineHeight: 1.02,
              color: "#ffffff",
            }}
          >
            <Box component="span" sx={{ display: "block" }}>
              I&apos;m Shubham More
            </Box>

            <Box
              component="span"
              sx={{
                display: "block",
                color: "#ff1053",
                mt: 0.5,
                mb: 0.5,
              }}
            >
              A Software Developer
            </Box>

            <Box component="span" sx={{ display: "block", color: "#fff" }}>
              &amp; Tech Enthusiast
            </Box>
          </Typography>

          <Typography sx={{ color: "rgba(255,255,255,0.7)", maxWidth: 800 }}>
            Passionate about building innovative solutions and exploring
            cutting-edge technologies. Turning complex problems into elegant,
            user-friendly applications.
          </Typography>

          <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
            <Button
              component="a"
              href="https://drive.google.com/drive/folders/1TwfYL1Ydyg4zCiiTSEKKfASLb54f8T8a?usp=sharing"
              target="_blank"
              sx={{
                px: { xs: 1, md: 4 },
                py: 1.25,
                borderRadius: 50,
                fontWeight: 800,
                background: "linear-gradient(90deg,#ff2a6d,#ff1053)",
                color: "#fff",
                fontSize: { xs: "0.8rem", md: "1rem" },
              }}
            >
              SEE RESUME
            </Button>

            <Button
              component="a"
              href="mailto:shubhamp1251@gmail.com" // <-- put your email here
              variant="outlined"
              sx={{
                px: { xs: 1, md: 4 },
                py: 1.25,
                borderRadius: 50,
                fontWeight: 700,
                color: "#ff1053",
                borderColor: "rgba(255,16,83,0.28)",
                background: "transparent",
                textDecoration: "none",
                fontSize: { xs: "0.8rem", md: "1rem" },
              }}
            >
              CONTACT ME
            </Button>
          </Box>
        </Box>

        {/* RIGHT */}
        <Box
          sx={{
            flex: "1 1 45%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            width: { xs: "100%", md: "45%" },
            mt: { xs: 4, md: 0 },
          }}
        >
          {/* decorative/back shapes (kept transparent so you can style) */}


          {/* image wrapper */}
          <Box
            sx={{
              position: "relative",
              width: { xs: 380, sm: 300, md: 360, lg: 520 },
              height: { xs: 380, sm: 380, md: 460, lg: 620 },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 5,
              overflow: "visible",
              transition: "width .3s ease, height .3s ease",
            }}
          >
            <Box
              component="img"
              src={HeaderImg}
              alt="hero"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "contain", // use cover so image fills container nicely
                borderRadius: 2,
                display: "block",
              }}
            />

            {/* badges - hidden on xs to avoid crowding */}
            {/* <Box
              sx={{
                position: "absolute",
                top: { xs: 14, md: 60 },
                right: { xs: "6%", md: -24 },
                display: { xs: "none", sm: "block" },
                zIndex: 6,
              }}
            >
              {badges.map((b, i) => (
                <Box
                  key={i}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.25,
                    bgcolor: "#f8fffd",
                    px: { xs: 2, sm: 2.5 },
                    py: { xs: 0.8, sm: 1.2 },
                    borderRadius: 3,
                    minWidth: 140,
                    mb: 2,
                    transform: {
                      xs: `translate(0px, ${b.y}px)`,
                      sm: `translate(${Math.round(b.x * 0.45)}px, ${b.y}px)`,
                      lg: `translate(${b.x}px, ${b.y}px)`,
                    },
                    transition: "transform .35s ease",
                  }}
                >
                  <Box
                    sx={{
                      width: 30,
                      height: 30,
                      borderRadius: "50%",
                      bgcolor: "#0A16A4",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 14,
                      fontWeight: 800,
                      color: "#fff",
                    }}
                  >
                    ✦
                  </Box>

                  <Typography sx={{ fontSize: 13, fontWeight: 700 }}>
                    {b.label}
                  </Typography>
                </Box>
              ))}
            </Box> */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
