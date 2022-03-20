import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import LoginIcon from "@mui/icons-material/Login";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import TryIcon from "@mui/icons-material/Try";
import Typography from "@mui/material/Typography";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Hero from "../../Images/transfer-money.svg";
import Wave from "../../Images/wave-bg.svg";
import Footer from "./Footer";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../Images/logoCircle.png";
import HomeIcon from "@mui/icons-material/Home";
import GlowingText from "../../Components/GlowingText";

const About = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  let navigate = useNavigate();
  const moreIconOpen = Boolean(anchorEl);

  const moreIconHandleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const moreIconHandleClose = (url) => {
    setAnchorEl(null);
    navigate(url);
  };
  return (
    <Box>
      <AppBar
        position="sticky"
        enableColorOnDark
        sx={{
          mb: { xs: -8, md: -12 },
          py: 2,
          boxShadow: "none",
          backdropFilter: "blur(8px)",
          borderStyle: "solid",
          borderColor: "#E7EBF0",
          borderWidth: "0",
          background: "rgba(255,255,255,0.7)",
          color: "#2D384",
        }}
        elevation={0}
      >
        <Toolbar disableGutters>
          <Box
            sx={{
              mx: { xs: 4, md: 8 },
              animation: "rotate 8s linear infinite alternate",
              "@keyframes rotate": {
                "0%": {
                  transform: "rotate(0deg)",
                },
                "100%": {
                  transform: "rotate(360deg)",
                },
              },
            }}
          >
            <img src={logo} alt="logo" width={48} height={48} />
          </Box>
          <Typography
            variant="h6"
            color="primary"
            noWrap
            sx={{ display: { xs: "none", md: "block" }, ml: -4 }}
          >
            Loyalty Point Management System
          </Typography>
          <Typography
            variant="h6"
            color="primary"
            noWrap
            sx={{ display: { xs: "block", md: "none" }, mr: 2 }}
          >
            Loyalty Point System
          </Typography>
          <IconButton
            aria-label="settings"
            onClick={moreIconHandleClick}
            sx={{ display: { xs: "inline", md: "none" } }}
          >
            <MoreVertIcon color="primary" />
          </IconButton>
          <Menu
            id="more icon for nav links"
            anchorEl={anchorEl}
            open={moreIconOpen}
            onClose={moreIconHandleClose}
            MenuListProps={{
              "aria-labelledby": "more icon for nav links ",
            }}
          >
            <MenuItem onClick={(e) => moreIconHandleClose("/")}>
              <ListItemIcon>
                <HomeIcon fontSize="small" color="secondary" />
              </ListItemIcon>
              <ListItemText sx={{ color: "#1976d2" }}>Home</ListItemText>
            </MenuItem>
            <MenuItem onClick={(e) => moreIconHandleClose("/feautures")}>
              <ListItemIcon>
                <TryIcon fontSize="small" color="secondary" />
              </ListItemIcon>
              <ListItemText sx={{ color: "#1976d2" }}>Feautures</ListItemText>
            </MenuItem>
            <MenuItem onClick={(e) => moreIconHandleClose("/contact")}>
              <ListItemIcon>
                <SupportAgentIcon fontSize="small" color="secondary" />
              </ListItemIcon>
              <ListItemText sx={{ color: "#1976d2" }}>Contact</ListItemText>
            </MenuItem>
            <MenuItem onClick={(e) => moreIconHandleClose("/login")}>
              <ListItemIcon>
                <LoginIcon fontSize="small" color="secondary" />
              </ListItemIcon>
              <ListItemText sx={{ color: "#1976d2" }}>Login</ListItemText>
            </MenuItem>
          </Menu>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              variant="outlined"
              sx={{ mx: 2, color: "primary" }}
              startIcon={<HomeIcon />}
              href="/"
            >
              Home
            </Button>
            <Button
              variant="outlined"
              sx={{ mx: 2, color: "primary" }}
              startIcon={<TryIcon />}
              href="/feautures"
            >
              Features
            </Button>
            <Button
              variant="outlined"
              sx={{ mx: 2, color: "primary" }}
              startIcon={<SupportAgentIcon />}
              href="/contact"
            >
              Contact
            </Button>
            <Button
              variant="contained"
              sx={{ mx: 2 }}
              onClick={(e) => navigate("/login")}
              startIcon={<LoginIcon />}
            >
              Login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="main"
        sx={{
          position: "relative",
          overflowY: "hidden",
        }}
      >
        {/* Hero unit */}
        <Box sx={{ flexGrow: 1, mb: { xs: 2, md: 6 }, mt: { xs: 2, md: 0 } }}>
          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
          >
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  bgcolor: "background.paper",
                  pt: { xs: 5, md: 8 },
                  pb: { xs: 0, md: 8 },
                }}
              >
                <Container maxWidth="sm">
                  <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                    sx={{ display: { xs: "none", md: "block" } }}
                  >
                    So, What are <GlowingText text="Loyalty Points" />
                  </Typography>
                  <Typography
                    component="h1"
                    variant="h3"
                    align="center"
                    color="text.primary"
                    gutterBottom
                    sx={{ display: { xs: "inline-block", md: "none" } }}
                  >
                    So, What are <GlowingText text="Loyalty Points" />
                  </Typography>
                  <Typography
                    variant="h5"
                    align="center"
                    color="text.secondary"
                    paragraph
                  >
                    Rewards to the customers for their purchases. Redeem their
                    points on their next purchase.
                  </Typography>
                  <Stack
                    sx={{ pt: 4 }}
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                  >
                    <Button
                      variant="contained"
                      href="/consumer/signup"
                      endIcon={<KeyboardArrowRightIcon />}
                      sx={{
                        zIndex: 10,
                      }}
                    >
                      Get Started
                    </Button>
                  </Stack>
                </Container>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                animation: "float 3s linear infinite alternate",
                "@keyframes float": {
                  "0%": {
                    transform: "translatey(-6px)",
                  },
                  "50%": {
                    transform: "translatey(6px)",
                  },
                  "100%": {
                    transform: "translatey(0px)",
                  },
                },
              }}
            >
              {/* desktop img */}
              <Box sx={{ display: { xs: "none", md: "block" } }}>
                <img
                  src={Hero}
                  alt="hero img"
                  height={"700px"}
                  width={"700px"}
                />
              </Box>
              {/* mobile img */}
              <Box sx={{ display: { xs: "inline-block", md: "none" } }}>
                <img
                  src={Hero}
                  alt="hero img"
                  height={"380px"}
                  width={"380px"}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
        {/* wave */}
        <Box
          sx={{
            position: "absolute",
            bottom: "0",
            width: "100%",
            animation: "pulse 3s linear infinite alternate",
            "@keyframes pulse": {
              "0%": {
                opacity: 0.6,
                transform: "translatey(-3px)",
              },
              "50%": {
                opacity: 0.8,
                transform: "translatey(3px)",
              },
              "100%": {
                opacity: 1,
                transform: "translatey(0px)",
              },
            },
          }}
        >
          <img src={Wave} alt="wave" />
        </Box>
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default About;
