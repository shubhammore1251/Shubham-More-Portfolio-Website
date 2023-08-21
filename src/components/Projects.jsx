import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { projectDetails } from "../data/project";

const Projects = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: { xs: "3rem 0", md: "4rem 0" },
          flexDirection: "column",
        }}
        id="projects"
      >
        <Typography
          sx={{
            color: "#fff",
            fontSize: "2rem",
            letterSpacing: "8px",
            fontWeight: "800",
          }}
        >
          Projects
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "2rem",
            width: "100%",
          }}
        >
          {projectDetails.map((project) => (
            <Card
              sx={{
                display: "flex",
                width: { xs: "80%", sm: "70%", md: "100%", lg: "90%" },
                height: "fit-content",
                mt: 2,
                background: "transparent",
                border: "1px solid #fff",
                boxShadow: "12px 15px 5px 2px rgba(0,0,0,0.75)",
                borderRadius: { xs: "8px", sm: "20px" },
                justifyContent: "center",
                alignItems: "center",
                flexDirection: { xs: "column", sm: "column", md: "row" },
              }}
              key={project.id}
            >
              <CardMedia
                component="img"
                sx={{
                  width: {
                    xs: "500px",
                    sm: "600px",
                    md: "400px",
                    lg: "600px",
                  },
                  height: {
                    xs: "150px",
                    sm: "300px",
                    md: "200px",
                    lg: "300px",
                  },
                  objectFit: "contain",
                  padding: { xs: "1rem", sm: "0.5rem 1.5rem" },
                  borderRadius: { xs: "8px", sm: "20px" },
                  mt: 2,
                }}
                image={project.img}
                alt={project.title}
                loading="lazy"
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    className="gradient-text"
                    sx={{
                      fontSize: { xs: "0.8rem", sm: "1rem" },
                      color: "#fff",
                      fontWeight: "800",
                      letterSpacing: "1px",
                      padding: { xs: 1, sm: 2 },
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                    sx={{
                      fontSize: { xs: "0.7rem", sm: "0.9rem" },
                      color: "#fff",
                      fontWeight: "500",
                      letterSpacing: "0.5px",
                      padding: { xs: 1, sm: 2 },
                    }}
                  >
                    {project.description}
                  </Typography>
                </CardContent>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    margin: { xs: "0 1rem", sm: "0rem 2rem" },
                    gap: { xs: "0.8rem", sm: "1rem" },
                    flexWrap: "wrap",
                  }}
                >
                  {project.techs.map((tech, i) => (
                    <Typography
                      key={i * 1201}
                      sx={{
                        border: "1px inset #fff",
                        padding: { xs: "0.3rem", sm: "0.5rem" },
                        fontSize: { xs: "0.6rem", sm: "0.7rem" },
                        color: "#fff",
                        borderRadius: "2px",
                        letterSpacing: "1px",
                        fontWeight: "800",
                      }}
                    >
                      {tech}
                    </Typography>
                  ))}
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    margin: { xs: "1rem", sm: "1rem 2rem" },
                  }}
                >
                  <Button
                    component="a"
                    href={project.demo_url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    sx={{
                      border: "1px solid #fff",
                      fontSize: "0.8rem !important",
                      textTransform: "capitalize",
                      letterSpacing: "0.2rem",
                      fontWeight: "700",
                      color: "#fff",
                      padding: { xs: "0.2rem", sm: "0.2rem 1rem" },
                      mt: { xs: 1, sm: 2 },
                    }}
                  >
                    Demo
                  </Button>
                </Box>
              </Box>
            </Card>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Projects;
