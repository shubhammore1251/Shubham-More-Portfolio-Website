// AboutSectionFixed.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Box, Grid, Card, CardContent, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CountUp from "react-countup";
import TheatersIcon from "@mui/icons-material/Theaters";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import ComputerIcon from "@mui/icons-material/Computer";
import CoffeeIcon from "@mui/icons-material/Coffee";

const QUOTES = [
  "Consistency beats motivation. Push one good line every day.",
  "Build even when you don’t feel ready — momentum creates clarity.",
  "Every bug fixed is one level up. Keep grinding.",
  "Great devs aren’t born — they iterate.",
  "Ship it imperfect. Improve it live.",
  "The best way to learn is by breaking stuff and fixing it.",
  "Small progress daily becomes insane progress yearly.",
  "Don’t wait for perfect. Start, fail, adjust, repeat.",
  "A real developer keeps going when others stop.",
  "Write code your future self won’t punch you for.",
];

function getCupsOfCoffee() {
  const startDate = new Date("2024-01-01");
  const today = new Date();

  const diffMs = today - startDate;
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  return diffDays; // 1 cup per day
}

const calculateYearsOfExperience = () => {
  const startDate = new Date("2023-11-06"); // Replace with your actual start date
  const currentDate = new Date();

  const diffInMs = currentDate - startDate;
  const diffInYears = diffInMs / (1000 * 60 * 60 * 24 * 365.25); // Account for leap years

  return parseFloat(diffInYears.toFixed(1)); // One decimal place
};

const About = () => {
  const QUOTES = [
    "Write code like you're leaving it for the next dev.",
    "Ship early. Iterate often.",
    "Simplicity is the best kind of clever.",
    "Refactor when it hurts — before it breaks.",
  ];

  // derived
  // const yearsExperience = useMemo(() => {
  //   const now = new Date();
  //   const y = now.getFullYear() - Number(startYear);
  //   return y > 0 ? y : 0;
  // }, [startYear]);

  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        px: { xs: 3, md: 6 },
        py: { xs: 6, md: 10 },
        bgcolor: "transparent",
        boxSizing: "border-box",
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
      }}
      id="about"
    >
      {/* ---------- SECTION HEADING ---------- */}
      <Typography
        sx={{
          fontSize: { xs: 28, md: 36 },
          fontWeight: 900,
          color: "#fff",
          mb: 1,
          textAlign: "center",
        }}
      >
        About Me
      </Typography>

      <Typography
        sx={{
          maxWidth: 700,
          color: "rgba(255,255,255,0.7)",
          mb: 5,
          fontSize: 18,
          lineHeight: 1.6,
          textAlign: "center",
        }}
      >
        A passionate developer who loves building modern web and mobile apps,
        exploring new technologies and crafting smooth user experiences.
      </Typography>

      {/* ---------- TWO COLUMN GRID ---------- */}
      <Grid container spacing={4}>
        {/* LEFT COLUMN */}
        <Grid item xs={12} md={6}>
          {/* ABOUT CARD */}
          <Card
            elevation={0}
            sx={{
              bgcolor: "transparent",
              border: "1px solid #ffffff",
              borderRadius: 2,
            }}
          >
            <CardContent sx={{ p: { xs: 2, md: 3 } }}>
              <Typography
                sx={{
                  fontWeight: 900,
                  color: "#fff",
                  fontSize: { xs: 20, md: 24 },
                }}
              >
                Shubham More
              </Typography>

              <Typography
                sx={{
                  color: "#ff1053",
                  fontWeight: 800,
                  mb: 2,
                  fontSize: 16,
                }}
              >
                Software Developer
              </Typography>

              <Typography sx={{ color: "#fff", lineHeight: 1.6, fontSize: 14 }}>
                I specialize in React, React Native, Next.js and Node. I enjoy
                solving complex problems and building things that look great and
                work even better.
              </Typography>
            </CardContent>
          </Card>

          {/* HOBBIES CARD */}
          <Box sx={{ height: 18 }} />
          <Card
            elevation={0}
            sx={{
              bgcolor: "transparent",
              border: "1px solid #ffffff",
              borderRadius: 2,
            }}
          >
            <CardContent sx={{ p: { xs: 2, md: 3 } }}>
              <Typography sx={{ fontWeight: 900, color: "#ff1053", mb: 2 }}>
                Hobbies
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 2,
                }}
              >
                {/* --- Hobby Tile 1 --- */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    border: "1px solid #ffffff55",
                    borderRadius: 2,
                    px: 2,
                    py: 1.2,
                    minWidth: 160,
                    flex: "1 1 auto",
                  }}
                >
                  {/* ICON placeholder */}
                  <TheatersIcon sx={{ color: "#ff1053", fontSize: 16 }} />
                  <Typography
                    sx={{ color: "#fff", fontWeight: 600, fontSize: 14 }}
                  >
                    Horror & Thriller Movies
                  </Typography>
                </Box>

                {/* --- Hobby Tile 2 --- */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    border: "1px solid #ffffff55",
                    borderRadius: 2,
                    px: 2,
                    py: 1.2,
                    minWidth: 160,
                    flex: "1 1 auto",
                  }}
                >
                  <TipsAndUpdatesIcon sx={{ color: "#ff1053", fontSize: 16 }} />
                  <Typography
                    sx={{ color: "#fff", fontWeight: 600, fontSize: 14 }}
                  >
                    Exploring New Tech
                  </Typography>
                </Box>

                {/* --- Hobby Tile 3 --- */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    border: "1px solid #ffffff55",
                    borderRadius: 2,
                    px: 2,
                    py: 1.2,
                    minWidth: 160,
                    flex: "1 1 auto",
                  }}
                >
                  <MusicNoteIcon sx={{ color: "#ff1053", fontSize: 16 }} />
                  <Typography
                    sx={{ color: "#fff", fontWeight: 600, fontSize: 14 }}
                  >
                    Listining Music
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* RIGHT COLUMN */}
        <Grid item xs={12} md={6}>
          {/* ---- ROW OF THREE SMALL CARDS ---- */}
          <Grid container spacing={2}>
            {/* EXPERIENCE */}
            <Grid item xs={12} sm={4}>
              <Card
                elevation={0}
                sx={{
                  border: "1px solid #ffffff",
                  bgcolor: "transparent",
                  borderRadius: 2,
                  height: "100%",
                }}
              >
                <CardContent sx={{ p: 2 }}>
                  <Typography sx={{ color: "#ff1053", fontWeight: 900 }}>
                    Experience in coding
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyItems: "center",
                      gap: 2,
                      mt: 2,
                    }}
                  >
                    <Typography
                      sx={{ color: "#fff", fontSize: 22, fontWeight: 900 }}
                    >
                      <CountUp
                        end={calculateYearsOfExperience()}
                        duration={2.5}
                        decimals={1}
                        decimal="."
                        preserveValue={true}
                      />
                      + yrs
                    </Typography>
                    <ComputerIcon sx={{ color: "#ff1053", fontSize: 28 }} />
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* COFFEE */}
            <Grid item xs={12} sm={4}>
              <Card
                elevation={0}
                sx={{
                  border: "1px solid #ffffff",
                  bgcolor: "transparent",
                  borderRadius: 2,
                  height: "100%",
                }}
              >
                <CardContent sx={{ p: 2 }}>
                  <Typography sx={{ color: "#ff1053", fontWeight: 900 }}>
                    No. of cups of coffee
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyItems: "center",
                      gap: 2,
                      mt: 2,
                    }}
                  >
                    <Typography
                      sx={{ color: "#fff", fontSize: 22, fontWeight: 900 }}
                    >
                      <CountUp end={getCupsOfCoffee()} duration={2.5} />+
                    </Typography>
                    <CoffeeIcon sx={{ color: "#ff1053", fontSize: 28 }} />
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* LOCATION */}
            <Grid item xs={12} sm={4}>
              <Card
                elevation={0}
                sx={{
                  border: "1px solid #ffffff",
                  bgcolor: "transparent",
                  borderRadius: 2,
                  height: "100%",
                }}
              >
                <CardContent sx={{ p: 2 }}>
                  <Typography sx={{ color: "#ff1053", fontWeight: 900 }}>
                    Location
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyItems: "center",
                      gap: 2,
                      mt: 2,
                    }}
                  >
                    <Typography
                      sx={{ color: "#fff", fontSize: 15, fontWeight: 700 }}
                    >
                      Mumbai, India
                    </Typography>
                    <LocationOnIcon sx={{ color: "#ff1053" }} />
                  </Box>
                  {/* <Typography sx={{ color: "#fff", fontSize: 13 }}>
                    India
                  </Typography> */}
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* QUOTES CARD */}
          <Box sx={{ height: 20 }} />
          <Card
            elevation={0}
            sx={{
              border: "1px solid #ffffff",
              bgcolor: "transparent",
              borderRadius: 2,
            }}
          >
            <CardContent sx={{ p: { xs: 2, md: 3 } }}>
              <Typography sx={{ fontWeight: 900, color: "#ff1053", mb: 1 }}>
                Quote of the Day
              </Typography>

              <Typography sx={{ color: "#fff", fontStyle: "italic" }}>
                “{QUOTES[Math.floor(Math.random() * QUOTES.length)]}”
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
