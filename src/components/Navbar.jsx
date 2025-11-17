// import {
//   AppBar,
//   Box,
//   Button,
//   Drawer,
//   IconButton,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemText,
//   Toolbar,
//   Typography,
// } from "@mui/material";
// import { useState } from "react";
// import MenuIcon from "@mui/icons-material/Menu";

// const drawerWidth = "60%";
// const navItems = [
//   {
//     name: "About",
//     url: "#about",
//   },
//   {
//     name: "Tech",
//     url: "#tech-stack",
//   },
//   {
//     name: "Projects",
//     url: "#projects",
//   }
// ];

// const Navbar = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen((prevState) => !prevState);
//   };

//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
//       <List>
//         {navItems.map((item) => (
//           <ListItem key={item.url}>
//             <ListItemButton
//               sx={{ textAlign: "center", color: "#fff", margin: "1rem 0"}}
//               component="a"
//               href={item.url}
//             >
//               <ListItemText primary={item.name}/>
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   return (
//     <Box>
//       <AppBar
//         component="nav"
//         className="gradient-background"
//         sx={{ color: "black", boxShadow: "none" }}
//       >
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: "none" } }}
//           >
//             <MenuIcon sx={{color: "#fff"}}/>
//           </IconButton>
//           <Typography
//             component="a"
//             href="/"
//             sx={{
//               flexGrow: 1,
//               fontWeight: "800",
//               fontSize: { lg: "1.5rem", sm: "1.2rem", xs: "1rem" },
//               letterSpacing: "5px",
//               textDecoration: "none",
//               color: "#fff",
//               textAlign: { lg: "left", sm: "left", xs: "center" },
//             }}
//           >
//             PORTFOLIO.
//           </Typography>
//           <Box
//             sx={{
//               display: { xs: "none", sm: "block" },
//               marginRight: { lg: "1rem", sm: 0 },
//             }}
//           >
//             {navItems.map((item) => (
//               <Button
//                 component="a"
//                 href={item.url}
//                 key={item.url}
//                 disableRipple
//                 sx={{
//                   fontSize: { xl: "0.8rem",lg: "0.7rem", sm: "0.6rem" },
//                   fontWeight: "800",
//                   color: "#fff",
//                   textTransform: "uppercase",
//                   letterSpacing: "1px",
//                   margin: "0 0.5rem",
//                   "&:hover": {
//                     backgroundColor: "transparent !important",
//                   },
//                 }}
//               >
//                 {item.name}
//               </Button>
//             ))}
//           </Box>
//         </Toolbar>
//       </AppBar>
//       <Box component="nav">
//         <Drawer
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
//             display: { xs: "block", sm: "none" },
//             "& .MuiDrawer-paper": {
//               boxSizing: "border-box",
//               width: drawerWidth,
//               background:
//                 "linear-gradient(to right, #24243e, #302b63, #0f0c29) !important",
//               borderRight: "1px solid black",
//             },

//             width: drawerWidth,
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </Box>
//     </Box>
//   );
// };

// NavbarFloating.jsx
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 260;
const navItems = [
  {
    name: "About",
    url: "#about",
  },
  {
    name: "Tech",
    url: "#tech-stack",
  },
  {
    name: "Projects",
    url: "#projects",
  },{
    name: "Work",
    url: "#work",
  }
];

const Navbar = () => {
   const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <>
      <AppBar position="fixed" elevation={0} sx={{ top: 16, left: 0, right: 0, bgcolor: "transparent", pointerEvents: "none" }}>
        <Toolbar sx={{ justifyContent: "center", pointerEvents: "auto" }}>
          {/* pill container */}
          <Box
            sx={{
              width: "100%",
              maxWidth: 980,
              display: "flex",
              alignItems: "center",
              gap: 1,
              px: { xs: 1.5, sm: 2 },
              py: { xs: 0.5, sm: 1 },
              background: "linear-gradient(90deg, rgba(255, 255, 255, 0.1), rgba(179, 153, 153, 0.02))",
              backdropFilter: "blur(8px)",
              borderRadius: 999,
              boxShadow: "0 8px 30px rgba(2,6,23,0.28)",
              border: "1px solid rgba(255, 255, 255, 0.27)",
            }}
          >
            {/* left logo */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, pl: 1, }}>
              <Typography sx={{ color: "#ff1053", fontWeight: 800, fontSize: { xs: 12, sm: 14, md: 18, letterSpacing: "4px" } }}>
                PORTFOLIO
              </Typography>
            </Box>

            {/* spacer */}
            <Box sx={{ flex: 1 }} />

            {/* desktop nav pills */}
            <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 1, alignItems: "center" }}>
              {navItems.map((n) => (
                <Button
                  key={n.url}
                  component="a"
                  href={n.url}
                  disableRipple
                  sx={{
                    textTransform: "none",
                    minWidth: 96,
                    px: 2,
                    py: 0.6,
                    borderRadius: 999,
                    color: "#fff",
                    fontWeight: 700,
                    background: "transparent",
                    "&:hover": {
                      background: "rgba(255,255,255,0.06)",
                    },
                  }}
                >
                  {n.name}
                </Button>
              ))}
            </Box>

            {/* mobile menu icon */}
            <IconButton
              sx={{ display: { xs: "inline-flex", sm: "none" }, color: "#fff" }}
              onClick={() => setOpen(true)}
              aria-label="open menu"
              size="small"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* mobile drawer */}
      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            background: "linear-gradient(180deg, rgba(10, 15, 164, 0.23), rgba(111, 8, 53, 0.8))",
            color: "#fff",
            px: 2,
            py: 1,
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background:
                "linear-gradient(to right, #24243e, #302b63, #0f0c29) !important",
              borderRight: "1px solid black",
            },

            width: drawerWidth,
          },
        }}
      >
        <List>
          {navItems.map((item) => (
            <ListItem key={item.url} disablePadding>
              <ListItemButton component="a" href={item.url} onClick={() => setOpen(false)}>
                <ListItemText primary={item.name} sx={{ ".MuiListItemText-primary": { fontWeight: 800 } }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
