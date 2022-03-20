import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InfoIcon from "@mui/icons-material/Info";
import LoginIcon from "@mui/icons-material/Login";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import TryIcon from "@mui/icons-material/Try";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../../Images/healthy.svg";
import secondHero from "../../Images/money.svg";
import CokkieConsentBar from "../../Components/CokkieConsentBar";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import logo from "../../Images/logoCircle.png";
import happyCustomer from "../../Images/dancing.svg";

import customerSupport from "../../Images/startup.svg";
import businessDeal from "../../Images/businessDeal.svg";
import Footer from "./Footer";
import GlowingText from "../../Components/GlowingText";

const Landing = () => {
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

  const Feautured = ({ image, title, subtitle1, subtitle2, content }) => {
    return (
      <Box
        sx={{
          "& :hover": {
            transform: "translatey(-10px)",
            transform: "scale(1.1)",
          },
        }}
      >
        <Card
          sx={{
            width: { xs: 250, md: 280 },
            height: { xs: 320, md: 350 },
            m: "15px 0px",
            background:
              "linear-gradient(45deg, rgba(0, 89, 255, 0.66), rgba(143, 199, 255, 0.69))",
            borderRadius: "5%",
            boxShadow: "17px 16px 48px -11px rgba(0,0,0,0.75)",
            color: "#fff",
          }}
        >
          <CardMedia
            component="img"
            height="150px"
            width="150px"
            image={image}
            alt={title}
          />
          <CardContent>
            <Typography gutterBottom align="center">
              {title}
            </Typography>
            <Typography variant="h5" component="div" align="center">
              {subtitle1}
            </Typography>
            <Typography sx={{ mb: 1.5 }} align="center">
              {subtitle2}
            </Typography>
            <Typography variant="body2" align="center">
              {content}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    );
  };

  return (
    <Box>
      <AppBar
        position="sticky"
        enableColorOnDark
        sx={{
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
            <MenuItem onClick={(e) => moreIconHandleClose("/about")}>
              <ListItemIcon>
                <InfoIcon fontSize="small" color="secondary" />
              </ListItemIcon>
              <ListItemText sx={{ color: "#1976d2" }}>About</ListItemText>
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
              startIcon={<InfoIcon />}
              href="/about"
            >
              About
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
      <Box component="main">
        {/* Hero unit */}
        <Box sx={{ flexGrow: 1, mt: { xs: 1, md: "-30px" } }}>
          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
          >
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  py: { xs: 0, md: 8 },
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
                    <GlowingText text="Loyalty" /> Points System
                  </Typography>
                  <Typography
                    component="h1"
                    variant="h3"
                    align="center"
                    color="text.primary"
                    gutterBottom
                    sx={{ display: { xs: "inline-block", md: "none" } }}
                  >
                    <GlowingText text="Loyalty  Points" /> System
                  </Typography>
                  <Typography
                    variant="h5"
                    align="center"
                    color="text.secondary"
                    paragraph
                  >
                    Create a points-based loyalty program with various earning
                    rules. Reward customers for their purchases, behavior, or
                    specific interactions.
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
                zIndex: -1,
              }}
            >
              {/* desktop img */}
              <Box sx={{ display: { xs: "none", md: "block" } }}>
                <img
                  src={Hero}
                  alt="hero img"
                  height={"600px"}
                  width={"600px"}
                />
              </Box>
              {/* mobile img */}
              <Box sx={{ display: { xs: "inline-block", md: "none" } }}>
                <img
                  src={Hero}
                  alt="hero img"
                  height={"300px"}
                  width={"300px"}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
        {/* section 2 */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-evenly",
            alignItems: "center",
            gap: "10px",
            m: "50px 20px",
            mt: { xs: 0, md: "-3px" },
            p: "50px 20px",
            background: "linear-gradient(45deg, #fc466b 0%, #1976d2fc 100%)",
            borderRadius: "20px",
          }}
        >
          <Feautured
            image={happyCustomer}
            title="Happy Customer"
            subtitle1="Earn Money"
            subtitle2="Happy Shopping"
            content="Offers points for your purchases"
          />
          <Feautured
            image={customerSupport}
            title="Customer Support"
            subtitle1="Clear Queries"
            subtitle2="24 X 7 available"
            content="Quick support to your queries"
          />
          <Feautured
            image={businessDeal}
            title="Improve Business"
            subtitle1="Customer Reach"
            subtitle2="Increase the sales"
            content="offer a great service to improve business"
          />
        </Box>

        {/* section 3  */}
        <Box
          sx={{
            flexGrow: 1,
            mt: 1,
            background: "linear-gradient(90deg, #eeaeca 0%, #94bbe9 100%)",
          }}
        >
          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
          >
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
                  src={secondHero}
                  alt="Money Bag"
                  height={"600px"}
                  width={"600px"}
                />
              </Box>
              {/* mobile img */}
              <Box sx={{ display: { xs: "inline-block", md: "none" } }}>
                <img
                  src={secondHero}
                  alt="Money Bag"
                  height={"300px"}
                  width={"300px"}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  py: 8,
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
                    <GlowingText text="Save Money" /> Through Points
                  </Typography>
                  <Typography
                    component="h1"
                    variant="h3"
                    align="center"
                    color="text.primary"
                    gutterBottom
                    sx={{ display: { xs: "inline-block", md: "none" } }}
                  >
                    <GlowingText text="Save Money" /> Through Points
                  </Typography>
                  <Typography
                    variant="h5"
                    align="center"
                    color="text.primary"
                    paragraph
                  >
                    Create a points-based loyalty program with various earning
                    rules. Reward customers for their purchases, behavior, or
                    specific interactions.
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
                      color="primary"
                    >
                      Read More
                    </Button>
                  </Stack>
                </Container>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <CokkieConsentBar />
      <Footer />
    </Box>
  );
};

export default Landing;
