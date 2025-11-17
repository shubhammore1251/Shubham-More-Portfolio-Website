// WorkExperienceTimeline.jsx
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Box, Typography, Chip } from "@mui/material";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import CodeIcon from "@mui/icons-material/Code";
import StarIcon from "@mui/icons-material/Star";

/**
 * Hardcoded experience data — replace with yours
 */
const experience = [
  {
    id: 1,
    company: "Metricoid Technology Solutions",
    role: "Associate Software Engineer",
    date: "Nov 2023 - Nov 2025",
    location: "Mumbai, India",
    tech: [
      "React",
      "Next.js",
      "React Native",
      "MUI",
      "Tailwind CSS",
      "Socket.IO",
      "WebRTC",
      "Node.js",
      "MySQL",
      "PostgreSQL",
      "Docker",
    ],
    bullets: [
      "Built and maintained mobile & web apps using React Native, React.js, Next.js, and Express.js.",
      "Integrated AI agents and LLM-powered Python APIs into React and Next.js applications.",
      "Converted UX designs into pixel-perfect, responsive UIs for better cross-platform experience.",
      "Integrated REST APIs, authentication, payments, and push notifications.",
      "Developed real-time features using Socket.io and WebRTC (PeerJS) for chat, proctoring, and collaboration tools.",
      "Enhanced live proctoring and screen recording systems with AWS S3 and cloud storage integrations.",
      "Revamped company website using Next.js (SSR/ISR/SSG) achieving ~95% performance and SEO scores.",
      "Built prototypes and MVPs using React, Next.js, Express, and Node.js for rapid client validation.",
      "Collaborated with cross-functional and international teams to ship production-ready features.",
      "Mentored interns and improved team code quality, reviews, and development practices.",
    ],
    icon: "work",
  }
]

export default function WorkExperienceTimeline() {
  return (
    <Box
      component="section"
      sx={{
        px: { xs: 2, md: 6 },
        py: { xs: 4, md: 8 },
        bgcolor: "transparent",
        color: "#fff",
      }}
      id="work"
    >
      <Typography
        sx={{ color: "#ffffffff", fontWeight: 900, fontSize: 28, mb: 4, textAlign: "center" }}
      >
        Work Experience
      </Typography>

      <VerticalTimeline>
        {experience.map((exp) => {
          const iconBg = exp.icon === "work" ? "#ff1053" : "#0a16a4";
          const IconComponent =
            exp.icon === "work" ? WorkOutlineIcon : CodeIcon;

          return (
            <VerticalTimelineElement
              key={exp.id}
              date={exp.date}
              iconStyle={{
                background: iconBg,
                color: "#fff",
                boxShadow: "0 6px 18px rgba(255,16,83,0.18)",
              }}
              contentStyle={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.02), transparent)",
                border: "1px solid rgba(255, 255, 255, 0.37)",
                color: "#fff",
                borderRadius: 12,
                padding: "18px 20px",
                boxShadow: "none",
              }}
              contentArrowStyle={{
                borderRight: "7px solid rgba(255,255,255,0.06)",
              }}
              icon={<IconComponent />}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: 1,
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 900,
                    fontSize: "14px !important",
                    lineHeight: "1.2 !important",
                  }}
                >
                  {exp.role}
                </Typography>
                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.6)",
                    ml: 1,
                    fontSize: "14px !important",
                    lineHeight: "1.2 !important",
                  }}
                >
                  · {exp.company}
                </Typography>
              </Box>

              <Typography
                sx={{ color: "rgba(255,255,255,0.7)", fontSize: 13, mb: 1 }}
              >
                {exp.location}
              </Typography>

              <Box component="ul" sx={{ pl: 2, mt: 1, mb: 1 }}>
                {exp.bullets.map((b, i) => (
                  <li
                    key={i}
                    style={{
                      marginBottom: 6,
                      color: "rgba(255,255,255,0.9)",
                      fontSize: 13,
                    }}
                  >
                    {b}
                  </li>
                ))}
              </Box>

              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mt: 1 }}>
                {exp.tech.map((t) => (
                  <Chip
                    key={t}
                    label={t}
                    size="small"
                    sx={{
                      bgcolor: "rgba(255,255,255,0.06)",
                      color: "#fff",
                      border: "1px solid rgba(255,255,255,0.03)",
                      fontWeight: 700,
                      height: 28,
                    }}
                  />
                ))}
              </Box>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </Box>
  );
}
