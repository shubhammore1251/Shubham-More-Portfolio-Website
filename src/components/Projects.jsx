import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { projectDetails } from "../data/project";
import { useEffect, useRef } from "react";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    }, observerOptions);

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

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
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            },
            gap: { xs: "2rem", md: "2.5rem" },
            width: "100%",
            padding: { xs: "1rem", md: "2rem" },
          }}
        >
          {projectDetails.map((project, index) => (
            <Card
              ref={(el) => (cardsRef.current[index] = el)}
              className="project-card"
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                background: "transparent",
                border: "1px solid rgba(255, 255, 255, 0.37)",
                boxShadow: "12px 15px 5px 2px rgba(0,0,0,0.75)",
                borderRadius: "20px",
                overflow: "hidden",
                opacity: 0,
                transform: "translateY(50px) rotateX(10deg)",
                transition: "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
                "&.in-view": {
                  opacity: 1,
                  transform: "translateY(0) rotateX(0deg)",
                  transitionDelay: `${index * 0.15}s`,
                },
                "&:hover": {
                  transform: "translateY(-12px) scale(1.02)",
                  boxShadow: "16px 20px 8px 4px rgba(0,0,0,0.85)",
                  border: "1px solid rgba(255, 255, 255, 0.6)",
                  "& .project-image": {
                    transform: "scale(1.1)",
                  },
                  "& .demo-btn": {
                    backgroundColor: "#fff",
                    color: "#000",
                    transform: "translateX(5px)",
                  },
                  "& .tech-badge": {
                    borderColor: "rgba(255, 255, 255, 0.8)",
                  },
                },
              }}
              key={project.id}
            >
              <Box
                sx={{
                  width: "100%",
                  height: { xs: "220px", sm: "260px", md: "300px" },
                  overflow: "hidden",
                  position: "relative",
                  backgroundColor: "rgba(0, 0, 0, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CardMedia
                  component="img"
                  className="project-image"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    padding: "1rem",
                    transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                  image={project.img}
                  alt={project.title}
                  loading="lazy"
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
                  justifyContent: "space-between",
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    flexDirection: "column",
                    flexGrow: 1,
                    padding: { xs: "1rem", sm: "1.5rem" },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "1rem", sm: "1.2rem" },
                      color: "#fff",
                      fontWeight: "800",
                      letterSpacing: "1px",
                      marginBottom: "0.8rem",
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    component="div"
                    sx={{
                      fontSize: { xs: "0.8rem", sm: "0.9rem" },
                      color: "rgba(255, 255, 255, 0.85)",
                      fontWeight: "500",
                      letterSpacing: "0.5px",
                      lineHeight: 1.6,
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
                    padding: { xs: "0 1rem", sm: "0 1.5rem" },
                    gap: "0.8rem",
                    flexWrap: "wrap",
                    marginBottom: "1rem",
                  }}
                >
                  {project.techs.map((tech, i) => (
                    <Typography
                      key={i * 1201}
                      className="tech-badge"
                      sx={{
                        border: "1px solid rgba(255, 255, 255, 0.5)",
                        padding: "0.4rem 0.8rem",
                        fontSize: { xs: "0.65rem", sm: "0.7rem" },
                        color: "#fff",
                        borderRadius: "4px",
                        letterSpacing: "0.5px",
                        fontWeight: "700",
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          backgroundColor: "rgba(255, 255, 255, 0.15)",
                          transform: "translateY(-2px)",
                        },
                      }}
                    >
                      {tech}
                    </Typography>
                  ))}
                </Box>

                {/* <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: { xs: "1rem", sm: "1.5rem" },
                    paddingTop: 0,
                  }}
                >
                  <Button
                    component="a"
                    href={project.demo_url}
                    target="_blank"
                    rel="noreferrer"
                    className="demo-btn"
                    sx={{
                      border: "1px solid #fff",
                      fontSize: "0.85rem !important",
                      textTransform: "capitalize",
                      letterSpacing: "0.15rem",
                      fontWeight: "700",
                      color: "#fff",
                      padding: "0.6rem 2rem",
                      width: "100%",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      "&:hover": {
                        backgroundColor: "#fff",
                        color: "#000",
                      },
                    }}
                  >
                    View Demo →
                  </Button>
                </Box> */}

                <Box
                  sx={{
                    display: "flex",
                    gap: "1rem",
                    padding: { xs: "1rem", sm: "1.5rem" },
                    paddingTop: 0,
                  }}
                >
                  {/* Live Demo */}
                  <Button
                    component="a"
                    href={project.demo_url}
                    target="_blank"
                    rel="noreferrer"
                    startIcon={<ExternalLink size={18} />}
                    sx={{
                      flex: 1,
                      border: "1px solid #fff",
                      color: "#fff",
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      letterSpacing: "0.15rem",
                      textTransform: "capitalize",
                      padding: "0.6rem 1.5rem",
                      transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
                      "&:hover": {
                        backgroundColor: "#fff",
                        color: "#000",
                      },
                    }}
                  >
                    Live
                  </Button>

                  {/* GitHub */}
                  <Button
                    component="a"
                    href={project.github_url}
                    target="_blank"
                    rel="noreferrer"
                    startIcon={<Github size={18} />}
                    sx={{
                      flex: 1,
                      border: "1px solid rgba(255,255,255,0.6)",
                      color: "#fff",
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      letterSpacing: "0.15rem",
                      textTransform: "capitalize",
                      padding: "0.6rem 1.5rem",
                      transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
                      "&:hover": {
                        backgroundColor: "#fff",
                        color: "#000",
                        borderColor: "#fff",
                      },
                    }}
                  >
                    Code
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
