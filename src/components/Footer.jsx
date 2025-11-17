import { Box, Typography } from "@mui/material";

import GithubIcon from "../assets/github-icon.png";
import InstagramIcon from "../assets/instagram-icon.png";
import LinkedInIcon from "../assets/linkedin-icon.png";
import XLogo from "../assets/x-logo.png";

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
  {
    iconPath: XLogo,
    url: "https://x.com/shubham_1251",
    id: "#104",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Box
      className="gradient-background"
      sx={{
        width: "100%",
        py: 3,
        px: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
      }}
    >
      {/* social icons row with blur */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 3, sm: 4, md: 5 },
          px: 3,
          py: 1.5,
          borderRadius: "20px",
          background: "rgba(255, 255, 255, 0.08)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
          border: "1px solid rgba(255, 255, 255, 0.27)",
        }}
      >
        {socialIcons.map((icon) => (
          <Box
            key={icon.id}
            component="a"
            href={icon.url}
            target="_blank"
            rel="noreferrer"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src={icon.iconPath}
              alt={icon.id}
              sx={{
                width: { xs: "28px", sm: "32px", md: "36px" },
                height: "auto",
                opacity: 0.9,
                transition: "0.3s",
                "&:hover": { opacity: 1, transform: "scale(1.1)" },
              }}
            />
          </Box>
        ))}
      </Box>

      {/* footer text */}
      <Typography
        sx={{
          fontSize: { xs: "0.85rem", sm: "0.9rem", md: "1rem" },
          color: "#fff",
          fontWeight: 700,
          textAlign: "center",
        }}
      >
        © Shubham More{" "}
        <Box
          component="span"
          sx={{ fontWeight: 700, color: "#eb275fff", fontSize: { xs: "0.85rem", sm: "0.9rem", md: "1rem" } }}
        >
          {year}
        </Box>{" "}
        All rights reserved
      </Typography>
    </Box>
  );
};

export default Footer;
