import { Box, Typography } from "@mui/material";

import GithubIcon from "../assets/github.png";
import InstagramIcon from "../assets/instagram.png";
import LinkedInIcon from "../assets/linkedin.png";

const socialIcons = [
  {
    iconPath: GithubIcon,
    url: "https://github.com/shubhammore1251",
    id: "#101",
  },
  {
    iconPath: InstagramIcon,
    url: "https://www.instagram.com/the.shubham.more/",
    id: "#102",
  },
  {
    iconPath: LinkedInIcon,
    url: "https://www.linkedin.com/in/shubham-more1251/",
    id: "#103",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <Box
        className="gradient-background"
        sx={{
          display: "flex",
          justifyContent: { xs: "center", sm: "space-between" },
          alignItems: "center",
          padding: "1rem 0",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "1rem 0.5rem",
            // border: "1px solid red",
          }}
        >
          {socialIcons.map((icon) => (
            <Box
              component="a"
              href={icon.url}
              target="_blank"
              rel="noreferrer"
              key={icon.id}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: { xs: "25%", sm: "30%", md: "50%" },
              }}
            >
              <Box
                component="img"
                sx={{
                  width: { xs: "25%", sm: "15%", md: "18%", lg: "20%" },
                  padding: "0.5rem 0",
                }}
                src={icon.iconPath}
                alt={icon.id}
              />
            </Box>
          ))}
        </Box>

        <Typography
          component="p"
          sx={{
            fontSize: { xs: "0.8rem", sm: "0.8rem", md: "1rem" },
            color: "#fff",
            wordSpacing: "2px",
            fontWeight: "700",
            textAlign: { xs: "center", sm: ",justify" },
            padding: "0.5rem 0",
            margin: "0 0.5rem",
          }}
        >
          © Shubham More
          <Typography
            className="gradient-text"
            component="span"
            sx={{ mx: 1, fontWeight: "700", fontSize: "inherit" }}
          >
            {year} 
          </Typography>
          All rights reserved
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
