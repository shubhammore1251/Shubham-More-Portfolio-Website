import { Box, Typography } from "@mui/material";

import { BackEndSkills, FrontEndSkills, ToolsData } from "../data/skills";

const Skills = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: { xs: "3rem 0", md: "5rem 0" },
        }}
        id="tech-stack"
      >
        <Typography
          sx={{
            color: "#fff",
            fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem", lg: "2.5rem" },
            letterSpacing: "5px",
            wordSpacing: "10px",
            fontWeight: "800",
            textAlign: "left",
          }}
        >
          Tech Stack
        </Typography>

        {/* FrontEnd part */}
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", sm: "space-between" },
            alignItems: "center",
            flexDirection: { xs: "column", sm: "row" },
            width: "90%",
            margin: "2rem 0",
            gap: { xs: 2, sm: 0 },
          }}
        >
          <Box sx={{ mr: { sm: 2 }, mb: { xs: 2, sm: 0 } }}>
            <Typography
              sx={{
                fontSize: { xs: "1.1rem", sm: "1.6rem", md: "2rem" },
                color: "#ff2b67ff",
                letterSpacing: "8px",
                fontWeight: 800,
                writingMode: { xs: "horizontal-tb", sm: "vertical-lr" },
                transform: { xs: "none", sm: "scale(-1)" },
                borderLeft: { xs: "none", sm: "3px dashed #fff" },
                px: { xs: 0, sm: 1 },
              }}
            >
              Frontend
            </Typography>
          </Box>

          {/* grid of tiles */}
          <Box
            sx={{
              width: { xs: "70%", sm: "60%", lg: "50%" },
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(2, 1fr)",
                sm: "repeat(3, 1fr)",
                md: "repeat(4, 1fr)",
                lg: "repeat(6, 1fr)",
              },
              gap: 2,
              alignItems: "center",
              justifyItems: "center",
            }}
          >
            {FrontEndSkills.map((item) => (
              <Box
                key={item.id}
                sx={{
                  width: "100%",
                  aspectRatio: "1 / 1",
                  bgcolor: "#ffffff",
                  borderRadius: "12px",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  p: 1,
                }}
              >
                <Box
                  component="img"
                  src={item.src}
                  alt={item.name}
                  sx={{
                    width: { xs: "56%", sm: "60%", md: "70%" },
                    height: "auto",
                    objectFit: "contain",
                    mb: 0.5,
                  }}
                />

                <Typography
                  sx={{
                    color: "#000",
                    fontWeight: 800,
                    fontSize: { xs: "0.62rem", sm: "0.75rem", md: "0.85rem" },
                    letterSpacing: "1px",
                    textAlign: "center",
                  }}
                >
                  {item.skill}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* BackEnd part */}
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", sm: "space-between" },
            alignItems: "center",
            flexDirection: { xs: "column", sm: "row" },
            width: "90%",
            margin: "2rem 0",
            gap: { xs: 2, sm: 0 },
          }}
        >
          {/* LEFT LABEL */}
          <Box sx={{ mr: { sm: 2 }, mb: { xs: 2, sm: 0 } }}>
            <Typography
              sx={{
                fontSize: { xs: "1.1rem", sm: "1.6rem", md: "2rem" },
                color: "#ff2b67ff",
                letterSpacing: "8px",
                fontWeight: 800,
                writingMode: { xs: "horizontal-tb", sm: "vertical-lr" },
                transform: { xs: "none", sm: "scale(-1)" },
                borderLeft: { xs: "none", sm: "3px dashed #fff" },
                px: { xs: 0, sm: 1 },
              }}
            >
              Backend
            </Typography>
          </Box>

          {/* GRID OF TILES */}
          <Box
            sx={{
              width: { xs: "70%", sm: "60%", lg: "50%" },
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(2, 1fr)", // mobile → 2 per row
                sm: "repeat(3, 1fr)", // small screens → 3 per row
                md: "repeat(4, 1fr)", // tablets → 4 per row
                lg: "repeat(6, 1fr)", // large desktop → 6 per row
              },
              gap: 2,
              alignItems: "center",
              justifyItems: "center",
            }}
          >
            {BackEndSkills.map((item) => (
              <Box
                key={item.id}
                sx={{
                  width: "100%",
                  aspectRatio: "1 / 1",
                  bgcolor: "#ffffff",
                  borderRadius: "12px",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  p: 1,
                }}
              >
                <Box
                  component="img"
                  src={item.src}
                  alt={item.name}
                  sx={{
                    width: { xs: "56%", sm: "60%", md: "70%" },
                    height: "auto",
                    objectFit: "contain",
                    mb: 0.5,
                  }}
                />

                <Typography
                  sx={{
                    color: "#000",
                    fontWeight: 800,
                    fontSize: { xs: "0.62rem", sm: "0.75rem", md: "0.85rem" },
                    letterSpacing: "1px",
                    textAlign: "center",
                  }}
                >
                  {item.skill}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Tools part */}
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", sm: "space-between" },
            alignItems: "center",
            flexDirection: { xs: "column", sm: "row" },
            width: "90%",
            margin: "2rem 0",
            gap: { xs: 2, sm: 0 },
          }}
        >
          {/* LEFT LABEL */}
          <Box sx={{ mr: { sm: 2 }, mb: { xs: 2, sm: 0 } }}>
            <Typography
              sx={{
                fontSize: { xs: "1.1rem", sm: "1.6rem", md: "2rem" },
                color: "#ff2b67ff",
                letterSpacing: "8px",
                fontWeight: 800,
                writingMode: { xs: "horizontal-tb", sm: "vertical-lr" },
                transform: { xs: "none", sm: "scale(-1)" },
                borderLeft: { xs: "none", sm: "3px dashed #fff" },
                px: { xs: 0, sm: 1 },
              }}
            >
              Tools
            </Typography>
          </Box>

          {/* GRID OF TILES */}
          <Box
            sx={{
              width: { xs: "70%", sm: "60%", lg: "50%" },
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(2, 1fr)", // mobile → 2 per row
                sm: "repeat(3, 1fr)", // small screens → 3 per row
                md: "repeat(4, 1fr)", // tablets → 4 per row
                lg: "repeat(6, 1fr)", // large desktop → 6 per row
              },
              gap: 2,
              alignItems: "center",
              justifyItems: "center",
            }}
          >
            {ToolsData.map((item) => (
              <Box
                key={item.id}
                sx={{
                  width: "100%",
                  aspectRatio: "1 / 1",
                  bgcolor: "#ffffff",
                  borderRadius: "12px",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  p: 1,
                }}
              >
                <Box
                  component="img"
                  src={item.src}
                  alt={item.name}
                  sx={{
                    width: { xs: "56%", sm: "60%", md: "70%" },
                    height: "auto",
                    objectFit: "contain",
                    mb: 0.5,
                  }}
                />

                <Typography
                  sx={{
                    color: "#000",
                    fontWeight: 800,
                    fontSize: { xs: "0.62rem", sm: "0.75rem", md: "0.85rem" },
                    letterSpacing: "1px",
                    textAlign: "center",
                  }}
                >
                  {item.skill}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Skills;
