import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = "60%";
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
  }
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.url}>
            <ListItemButton
              sx={{ textAlign: "center", color: "#fff", margin: "1rem 0"}}
              component="a"
              href={item.url}
            >
              <ListItemText primary={item.name}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box>
      <AppBar
        component="nav"
        className="gradient-background"
        sx={{ color: "black", boxShadow: "none" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon sx={{color: "#fff"}}/>
          </IconButton>
          <Typography
            component="a"
            href="/"
            sx={{
              flexGrow: 1,
              fontWeight: "800",
              fontSize: { lg: "1.5rem", sm: "1.2rem", xs: "1rem" },
              letterSpacing: "5px",
              textDecoration: "none",
              color: "#fff",
              textAlign: { lg: "left", sm: "left", xs: "center" },
            }}
          >
            PORTFOLIO.
          </Typography>
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
              marginRight: { lg: "1rem", sm: 0 },
            }}
          >
            {navItems.map((item) => (
              <Button
                component="a"
                href={item.url}
                key={item.url}
                disableRipple  
                sx={{
                  fontSize: { xl: "0.8rem",lg: "0.7rem", sm: "0.6rem" },
                  fontWeight: "800",
                  color: "#fff",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  margin: "0 0.5rem",
                  "&:hover": {
                    backgroundColor: "transparent !important",
                  },
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background:
                "linear-gradient(to right, #24243e, #302b63, #0f0c29) !important",
              borderRight: "1px solid black",
            },
            
            width: drawerWidth,
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Navbar;
