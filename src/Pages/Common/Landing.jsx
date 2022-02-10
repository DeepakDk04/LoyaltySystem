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
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import TryIcon from "@mui/icons-material/Try";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CopyRight from "../../Components/CopyRight";
import Hero from "../../Images/hero.svg";

const Landing = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  let navigate = useNavigate();
  const moreIconOpen = Boolean(anchorEl);

  const moreIconHandleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const moreIconHandleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box>
      <AppBar
        position="relative"
        enableColorOnDark
        color="transparent"
        sx={{ py: 2 }}
        elevation={0}
      >
        <Toolbar disableGutters>
          <LoyaltyIcon color="primary" sx={{ mx: { xs: 1, md: 2 } }} />
          <Typography
            variant="h6"
            color="primary"
            noWrap
            sx={{ display: { xs: "none", md: "block" }, mx: 15 }}
          >
            Loyalty Point Management System
          </Typography>
          <Typography
            variant="h6"
            color="primary"
            noWrap
            sx={{ display: { xs: "block", md: "none" }, mx: 3 }}
          >
            Loyalty Point System
          </Typography>
          <IconButton
            aria-label="settings"
            onClick={moreIconHandleClick}
            sx={{ display: { xs: "inline", md: "none" } }}
          >
            <MoreVertIcon />
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
            <MenuItem onClick={moreIconHandleClose}>
              <ListItemIcon>
                <InfoIcon fontSize="small" color="secondary" />
              </ListItemIcon>
              <ListItemText sx={{ color: "#1976d2" }}>About</ListItemText>
            </MenuItem>
            <MenuItem onClick={moreIconHandleClose}>
              <ListItemIcon>
                <TryIcon fontSize="small" color="secondary" />
              </ListItemIcon>
              <ListItemText sx={{ color: "#1976d2" }}>Feautures</ListItemText>
            </MenuItem>
            <MenuItem onClick={moreIconHandleClose}>
              <ListItemIcon>
                <SupportAgentIcon fontSize="small" color="secondary" />
              </ListItemIcon>
              <ListItemText sx={{ color: "#1976d2" }}>Contact</ListItemText>
            </MenuItem>
            <MenuItem onClick={(e) => navigate("/login")}>
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
            >
              About
            </Button>
            <Button
              variant="outlined"
              sx={{ mx: 2, color: "primary" }}
              startIcon={<TryIcon />}
            >
              Features
            </Button>
            <Button
              variant="outlined"
              sx={{ mx: 2, color: "primary" }}
              startIcon={<SupportAgentIcon />}
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
        <Box sx={{ flexGrow: 1, mt: 1 }}>
          <Grid
            container
            direction="row-reverse"
            justifyContent="space-evenly"
            alignItems="center"
          >
            <Grid
              item
              xs={12}
              md={6}
              sx={{ display: "flex", justifyContent: "center" }}
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
                  height={"260px"}
                  width={"260px"}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  bgcolor: "background.paper",
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
                  >
                    Loyalty Points System
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
                    <Button variant="contained" href="/consumer/signup">
                      Get Started
                    </Button>
                  </Stack>
                </Container>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <CopyRight />
      </Box>
      {/* End footer */}
    </Box>
  );
};

export default Landing;
