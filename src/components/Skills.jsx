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
          padding: {xs: "3rem 0", md: "5rem 0"},
        }}
        id="tech-stack"
      >
        <Typography
          sx={{
            color: "#fff",
            fontSize:  {xs: "1.2rem" , sm: "1.5rem", md: "2rem",  lg: "2.5rem"},
            letterSpacing: "5px",
            wordSpacing: "10px",
            fontWeight: "800",
          }}
        >
          Tech Stack
        </Typography>

        {/* FrontEnd part */}
        <Box
          sx={{
            display: "flex",
            justifyContent: {xs: "center", sm: "space-between"},
            alignItems: "center",
            flexDirection: {xs: "column", sm: "row"},
            width: "90%",
            margin: "2rem 0",
          }}
        >
          <Box>
            <Typography
              className="gradient-text"
              sx={{
                fontSize: {xs: "1.1rem", sm: "2rem"},
                color: "#fff",
                letterSpacing: "8px",
                fontWeight: "800",
                writingMode: {xs: "", sm: "vertical-lr"},
                transform: {xs: "", sm: "scale(-1)"},
                borderLeft: {xs: "none", sm: "3px dashed #fff"},
              }}
            >
              Frontend
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: {xs: "center", sm: "flex-end"},
              alignItems: "center",
              width: {xs: "100%", sm: "80%", md: "60%"},
              flexWrap: "wrap",
              gap: {xs: "1rem", sm:"1rem 0"},
            }}
          >
            {FrontEndSkills.map((item) => (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  width: {xs: "40%", sm: "30%"},
                  height: "8rem",
                  gap: {xs: "0.8rem", sm: "1rem"},
                }}
                key={item.id}
              >
                <Box
                  component="img"
                  sx={{ width: {xs: "35%", sm: "30%"} }}
                  src={item.src}
                  alt={item.name}
                />

                <Typography
                  component="span"
                  sx={{
                    color: "#fff",
                    fontWeight: "800",
                    fontSize: {xs: "0.6rem", sm: "0.8rem"},
                    letterSpacing: "3px",
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
            justifyContent: {xs: "center", sm: "space-between"},
            alignItems: "center",
            flexDirection: {xs: "column", sm: "row"},
            width: "90%",
            margin: "2rem 0",
          }}
        >
          <Box>
            <Typography
              className="gradient-text"
              sx={{
                fontSize: {xs: "1.1rem", sm: "2rem"},
                color: "#fff",
                letterSpacing: "8px",
                fontWeight: "800",
                writingMode: {xs: "", sm: "vertical-lr"},
                transform: {xs: "", sm: "scale(-1)"},
                borderLeft: {xs: "none", sm: "3px dashed #fff"},
              }}
            >
              Backend
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: {xs: "center", sm: "flex-end"},
              alignItems: "center",
              width: {xs: "100%", sm: "60%"},
              flexWrap: "wrap",
              gap: {xs: "1rem", sm:"1rem 0"},
            }}
          >
            {BackEndSkills.map((item) => (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  width: {xs: "40%", sm: "30%"},
                  height: "8rem",
                  gap: {xs: "0.8rem", sm: "1rem"},
                }}
                key={item.id}
              >
                <Box
                  component="img"
                  sx={{ width: {xs: "35%", sm: "30%"} }}
                  src={item.src}
                  alt={item.name}
                />
                <Typography
                  component="span"
                  sx={{
                    color: "#fff",
                    fontWeight: "800",
                    fontSize: {xs: "0.6rem", sm: "0.8rem"},
                    letterSpacing: "3px",
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
            justifyContent: {xs: "center", sm: "space-between"},
            alignItems: "center",
            flexDirection: {xs: "column", sm: "row"},
            width: "90%",
            margin: "2rem 0",
          }}
        >
          <Box>
            <Typography
              className="gradient-text"
              sx={{
                fontSize: {xs: "1.1rem", sm: "2rem"},
                color: "#fff",
                letterSpacing: "8px",
                fontWeight: "800",
                writingMode: {xs: "", sm: "vertical-lr"},
                transform: {xs: "", sm: "scale(-1)"},
                borderLeft: {xs: "none", sm: "3px dashed #fff"},
              }}
            >
              Tools
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: {xs: "center", sm: "flex-end"},
              alignItems: "center",
              width: {xs: "100%", sm: "60%"},
              flexWrap: "wrap",
              gap: {xs: "1rem", sm:"1rem 0"},
            }}
          >
            {ToolsData.map((item) => (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  width: {xs: "40%", sm: "30%"},
                  height: "8rem",
                  gap: {xs: "0.8rem", sm: "1rem"},
                }}
                key={item.id}
              >
                <Box
                  component="img"
                  sx={{ width: {xs: "35%", sm: "30%"} }}
                  src={item.src}
                  alt={item.name}
                />
                <Typography
                  component="span"
                  sx={{
                    color: "#fff",
                    fontWeight: "800",
                    fontSize: {xs: "0.6rem", sm: "0.8rem"},
                    letterSpacing: "3px",
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
